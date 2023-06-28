const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Importe o modelo do usuário

const GITHUB_CLIENT_ID = "seuClientId";
const GITHUB_CLIENT_SECRET = "seuClientSecret";
const GITHUB_CALLBACK_URL = "http://localhost:3000/callback";

const passportOptions = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
};

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GitHubStrategy(passportOptions, async (accessToken, refreshToken, profile, done) => {
    try {
      // Verifique se o usuário já existe no banco de dados pelo ID do GitHub
      let user = await User.findOne({ where: { githubId: profile.id } });

      if (!user) {
        // Crie um novo usuário se ele não existir
        user = await User.create({
          githubId: profile.id,
          name: profile.displayName,
          // Outras informações do perfil do usuário do GitHub que você deseja salvar
        });
      }

      // Gere um token JWT
      const token = jwt.sign({ id: user.id }, 'seuSegredo', { expiresIn: '1h' });

      // Adicione o token ao perfil do usuário
      profile.token = token;

      return done(null, profile);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;