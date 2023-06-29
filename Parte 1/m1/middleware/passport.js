const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

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
      // Verifica se o utilizador já existe no Base de Dados pelo ID do GitHub
      let user = await User.findOne({ where: { githubId: profile.id } });

      if (!user) {
        // Crie um novo utilizador se ele não existir
        user = await User.create({
          githubId: profile.id,
          name: profile.displayName,
        });
      }

      // Gere um token JWT
      const token = jwt.sign({ id: user.id }, 'ebe8ae0d893965ee8b099e9baf9f9c7a0a51feb7612ecf85da125788ddf86865', { expiresIn: '1h' });

      // Adicione o token ao perfil do utilizador
      profile.token = token;

      return done(null, profile);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;