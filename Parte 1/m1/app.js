const express = require('express');
const session = require('express-session');
const app = express();
const sequelize = require('./db'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./middleware/passport');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/UserRoutes');
const seed = require('./seeds/seed');
const utilizadorController = require('./controllers/utilizadorController');
const jogadorController = require('./controllers/jogadorController');
const partidaController = require('./controllers/partidaController');
const GitHubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = '8149bd792fa6e752b682';
const GITHUB_CLIENT_SECRET = '4272e8874ae0bccbc3d1d637b71eb1a85e6d6834';
const GITHUB_CALLBACK_URL = 'http://localhost:3000/callback';


const passportOptions = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
};

// Serialization and Deserialization functions (required for persistent sessions)
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GitHubStrategy(passportOptions, function (accessToken, refreshToken, profile, done) {
  profile.token = accessToken;
  return done(null, profile);
}));

const corsOptions = {
  origin: true,
  methods: 'GET, POST, PATCH, DELETE, PUT',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize passport middleware
app.use(passport.initialize());

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'OAuth2 API',
    version: '1.0.0',
    description: 'API de Desenvolvimento Web II',
    contact: { name: 'inf-23-dw2-Grupo 23' },
  },
  servers: [
    { 
      url: 'http://localhost:3000',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: { type: 'http', scheme: 'bearer' },
    },
  },
  security: [{ BearerAuth: [] }],
};

const options = {
  swaggerDefinition,
  apis: ['./docs/**.yaml'],
};

seed()
  .then(() => {
    // Start the application here
  })
  .catch((error) => {
    console.error('Error during seed:', error);
  });

const swaggerSpec = swaggerJSDoc(options);

// Configure the Passport.js strategy with GitHub
passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback',
}, (accessToken, refreshToken, profile, done) => {
  // ...
}));

// Configure sessions
app.use(session({
  secret: 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware de autenticação
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // O utilizador está autenticado, continue para a próxima função de middleware
    return next();
  } else {
    // O utilizador não está autenticado, redirecione para a página de login
    res.redirect('/login');
  }
};


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.static(__dirname + '/public'));
app.use('/user', userRoutes);
app.post('/login', utilizadorController.login);
app.post('/registo', utilizadorController.registo);
app.get('/me', utilizadorController.me);
app.get('/callback', utilizadorController.callback);
app.get('/perfil',ensureAuthenticated, utilizadorController.perfil);
app.put('/perfil', utilizadorController.editarPerfil);

app.post('/perfil/editar', ensureAuthenticated, utilizadorController.editarPerfil);

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function (req, res) {
  // Authentication successful, redirect or respond with a message
  res.redirect('/perfil');
});


// Rotas para jogadores
app.get('/jogadores', jogadorController.retrieveJogadores);
app.get('/jogadores/:id', jogadorController.retrieveJogador);
app.post('/jogadores', jogadorController.createJogador);
app.put('/jogadores/:id', jogadorController.updateJogador);
app.delete('/jogadores/:id', jogadorController.deleteJogador);

// Rotas para partidas
app.get('/partidas', partidaController.retrievePartidas);
app.get('/partidas/:id', partidaController.retrievePartida);
app.post('/partidas', partidaController.createPartida);
app.put('/partidas/:id', partidaController.updatePartida);
app.delete('/partidas/:id', partidaController.deletePartida);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/registo', function (req, res) {
  res.sendFile(__dirname + '/public/registo.html');
});

app.get('/protected', function (req, res) {
  res.sendFile(__dirname + '/public/protected.html');
});

app.get('/dashboard', function (req, res) {
  res.sendFile(__dirname + '/public/dashboard.html');
});

app.get('/perfil', function (req, res) {
  res.sendFile(__dirname + '/public/perfil.html');
});

app.get('/auth/github', passport.authenticate('github'));


app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  // Authentication successful, redirect or respond with a message
  res.redirect('/perfil');
});

// Route for /partidas
app.get('/partidas', (req, res) => {
  // Fetch data from the database
  pool.query('SELECT * FROM partidas', (error, results) => {
    if (error) {
      console.error('Error retrieving data from the database:', error);
      res.status(500).send('Error retrieving data from the database');
      return;
    }

    // Render the partidas.html template with the data
    res.render('partidas', { partidas: results });
  });
});

// Route for /jogadores
app.get('/jogadores', (req, res) => {
  // Fetch data from the database
  pool.query('SELECT id, name, email FROM jogadores', (error, results) => {
    if (error) {
      console.error('Error retrieving data from the database:', error);
      res.status(500).send('Error retrieving data from the database');
      return;
    }

    // Render the jogadores.html template with the data
    res.render('jogadores', { jogadores: results });
  });
});

// Rota de callback
app.get('/callback', async (req, res) => {
  try {
    const authorizationCode = req.query.code;

    // Executa a lógica para trocar o código de autorização pelo token de acesso
    const accessToken = await exchangeAuthorizationCode(authorizationCode);

    // Verifica se o token de acesso foi obtido com sucesso
    if (accessToken) {
      // Armazena o token de acesso na sessão do utilizador
      req.session.accessToken = accessToken;

      // Redireciona para a página principal ou para outra rota protegida
      res.redirect('/tictactoe');
    } else {
      // Tratamento de erro caso a troca do código de autorização falhe
      res.status(500).send('Failed to exchange authorization code for access token');
    }
  } catch (error) {
    // Tratamento de erro caso ocorra uma exceção durante a troca do código de autorização
    console.error('Error during token exchange:', error);
    res.status(500).send('Error during token exchange');
  }
});

sequelize
  .sync()
  .then(() => {
    seed();
  })
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch((err) => console.error(err));
