const path = require('path');
const bcrypt = require('bcrypt');
const axios = require("axios");
const User = require('../models/User');

const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Find the user in the database based on the provided name
    const user = await User.findOne({ where: { name } });

    // Check if the user exists and if the password is correct
    if (!user || !(await user.validPassword(password))) {
      res.status(401).json({ error: 'Credenciais inválidas' });
    } else {
      // Successful authentication
      res.redirect('/dashboard'); // Redireciona para a página de login
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};


const registo = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Este e-mail já está registrado' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object with the registration data
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Redirect to the login page
    res.json({ message: 'Registro bem-sucedido' });
    res.redirect('/login'); // Redireciona para a página de login
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro durante o registro' });
  }
};


const me = (req, res) => {
  // Aqui você pode implementar a lógica para recuperar os detalhes do usuário atualmente autenticado

  // Exemplo:
  const user = req.user; // Obtenha o objeto de usuário autenticado da requisição

  if (user) {
    // Se o usuário estiver autenticado, retorne os detalhes do usuário
    res.json({ user });
  } else {
    // Se o usuário não estiver autenticado, retorne um erro ou uma mensagem adequada
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

const getPerfil = (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const user = req.user;
      if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return;
      }

      // Envia o arquivo "perfil.html" para o cliente
      res.sendFile(path.join(__dirname, '..', 'public', 'perfil.html'));
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

const editarPerfil = async (req, res) => {
  const { name, email, current_password, new_password } = req.body;
  const userId = req.session.userId; // Obtém o ID do usuário da sessão

  try {
    // Busca o usuário pelo ID
    const user = await User.findByPk(userId);

    // Verifica se o usuário existe
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
      return;
    }

    // Verifica se a senha atual é válida
    if (!(await user.validPassword(current_password))) {
      res.status(401).json({ error: 'Senha atual inválida' });
      return;
    }

    // Atualiza os dados do usuário
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

const authGitHub = (req, res) => {};

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
          res.redirect('/dashboard');
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

module.exports = { login, logout, registo, protected, dashboard, authGitHub, authCallback, callback, me, gitHubMe,callbackController,editarPerfil,getPerfil };
