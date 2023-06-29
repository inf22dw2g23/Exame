const express = require('express');
const router = express.Router();
const utilizadorController = require('../controllers/utilizadorController');

// Rota para registo de Utilizador
router.post('/registo', utilizadorController.registo);

// Rota para login de Utilizador
router.post('/login', utilizadorController.login);

// Rota para logout de Utilizador
router.get('/logout', utilizadorController.logout);

router.put('/perfil',utilizadorController.perfil);

// Rota protegida
router.get('/protected', utilizadorController.protected);

// Rota para exibição do dashboard
router.get('/dashboard', utilizadorController.dashboard);

// Rota para autenticação com GitHub
router.get('/auth/github', utilizadorController.authGitHub);

// Rota de callback para autenticação com GitHub
router.get('/auth/github/callback', utilizadorController.authCallback);

// Rota para obter detalhes do Utilizador autenticado
router.get('/me', utilizadorController.me);

// Rota para obter informações do Utilizador do GitHub
router.get('/github/me', utilizadorController.gitHubMe);

// Rota de callback para troca de código de autorização por token de acesso
router.get('/callback', utilizadorController.callbackController);

module.exports = router;