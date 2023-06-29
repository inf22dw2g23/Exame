const path = require('path');
const bcrypt = require('bcryptjs');
const axios = require("axios");
const User = require('../models/User');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ where: { email } });

    // Check if the user exists and if the password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: 'Credenciais inválidas' });
    } else {
      // Successful authentication
      res.redirect('/dashboard'); // Redireciona para a página de dashboard
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

const registo = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      res.status(409).json({ error: 'O utilizador já está registado' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.redirect('/login'); // Redireciona para a página de login
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

const me = (req, res) => {
  // Aqui você pode implementar a lógica para recuperar os detalhes do Utilizador atualmente autenticado

  // Exemplo:
  const user = req.user; // Obtenha o objeto de Utilizador autenticado da requisição

  if (user) {
    // Se o Utilizador estiver autenticado, retorne os detalhes do Utilizador
    res.json({ user });
  } else {
    // Se o Utilizador não estiver autenticado, retorne um erro ou uma mensagem adequada
    res.status(401).json({ error: "Utilizador não autenticado" });
  }
};



const logout = (req, res) => {
  req.logout();
  res.sendFile(path.join(__dirname, '..', '/public/login.html'));
};

const protected = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/protected.html"));
};

const dashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/dashboard.html"));
};

const perfil = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/perfil.html"));
};

const getPerfil = (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const user = req.user;
      if (!user) {
        res.status(404).json({ error: 'Utilizador não encontrado' });
        return;
      }

      // Send the "perfil.html" file to the client
      res.sendFile(path.join(__dirname, '..', 'public', 'perfil.html'));
    } else {
      // User is not authenticated, redirect to the login page
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};


const editarPerfil = async (req, res) => {
  const { name, email, current_password, new_password } = req.body;
  const userId = req.session.userId; // Obtém o ID do Utilizador da sessão

  try {
    // Busca o Utilizador pelo ID
    const user = await User.findByPk(userId);

    // Verifica se o Utilizador existe
    if (!user) {
      res.status(404).json({ error: 'Utilizador não encontrado' });
      return;
    }

    // Verifica se a senha atual é válida
    if (!(await user.validPassword(current_password))) {
      res.status(401).json({ error: 'Senha atual inválida' });
      return;
    }

    // Atualiza os dados do Utilizador
    user.name = name;
    user.email = email;

    // Verifica se foi fornecida uma nova senha
    if (new_password) {
      user.password = new_password;
    }

    // Salva as alterações no banco de dados
    await user.save();

    res.json({ message: 'Perfil atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};


const callback = (req, res) => {

  
  res.sendFile(path.join(__dirname, "..", "/public/dashboard.html"));
};

const authGitHub = (req, res) => {
  res.redirect("/auth/github");
};

const authCallback = (req, res) => {
    res.redirect("/");
};


const gitHubMe = (req, res) => {
    const token = req.user.token;
    axios
      .get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (err) {
        res.json(err);
      });
};

const callbackController = async (req, res) => {
    try {
      // Verifique se o código de autorização está presente na consulta da URL
      const authorizationCode = req.query.code;
  
      // Verifique se o código de autorização foi recebido corretamente
      if (authorizationCode) {
        const axios = require('axios');
        

        const tokenEndpoint = 'http://localhost:3000/github/token'; 


        // Define as configurações para a solicitação HTTP POST
        const clientId = '8149bd792fa6e752b682'; 
        const clientSecret = '4272e8874ae0bccbc3d1d637b71eb1a85e6d6834'; 
        const redirectUri = 'http://localhost:3000/callback'; 
        const grantType = 'authorization_code';
 
        const response = await axios.post(tokenEndpoint, {
          grant_type: grantType,
          code: authorizationCode,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri
        });

        // Verifica se a solicitação foi bem-sucedida e retem o token de acesso
        if (response.status === 200) {
          const accessToken = response.data.access_token;
 
          const session = require('express-session');

            // Middleware de sessão
            app.use(session({
            secret: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
            resave: false,
            saveUninitialized: false
            }));
              // Exemplo de uso da variável tokenEndpoint
            axios.post(tokenEndpoint, data)
            .then(response => {
              // Manipule a resposta do token endpoint
              res.send(response.data);
            })
            .catch(error => {
              // Manipule erros ao fazer a solicitação para o token endpoint
              console.error(error);
              res.status(500).send('Erro durante a troca de token');
            });

          req.session.accessToken = accessToken;
  
          // Redirecione para a página principal ou para outra rota protegida
          res.redirect('/tictactoe');
        } else {
          // Tratamento de erro caso a solicitação não seja bem-sucedida
          console.error('Failed to exchange authorization code for access token:', response.data);
          res.status(500).send('Failed to exchange authorization code for access token');
        }
      } else {
        // Tratamento de erro caso o código de autorização não esteja presente na consulta da URL
        res.status(400).json({ error: 'Authorization code not found' });
      }
    } catch (error) {
      // Tratamento de erro caso ocorra uma exceção durante a solicitação
      console.error('Error during token exchange:', error);
      res.status(500).send('Error during token exchange');
    }
  };

module.exports = { 
  login, 
  logout, 
  registo, 
  protected, 
  dashboard, 
  authGitHub, 
  authCallback, 
  callback, 
  me, 
  gitHubMe,
  callbackController,
  editarPerfil,
  getPerfil,
  perfil 
};
