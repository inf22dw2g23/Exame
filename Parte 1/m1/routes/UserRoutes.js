const express = require('express');
const router = express.Router();
const utilizadorController = require('../controllers/utilizadorController');

// Rota para registro de usuário
router.post('/registo', utilizadorController.registo);

// Rota para login de usuário
router.post('/login', utilizadorController.login);

// Rota para logout de usuário
router.get('/logout', utilizadorController.logout);

router.put('/perfil',utilizadorController.perfil);

// Rota protegida (exemplo)
router.get('/protected', utilizadorController.protected);

// Rota para exibição do dashboard (exemplo)
router.get('/dashboard', utilizadorController.dashboard);

// Rota para autenticação com GitHub (exemplo)
router.get('/auth/github', utilizadorController.authGitHub);

// Rota de callback para autenticação com GitHub (exemplo)
router.get('/auth/github/callback', utilizadorController.authCallback);

// Rota para obter detalhes do usuário autenticado (exemplo)
router.get('/me', utilizadorController.me);

// Rota para obter informações do usuário do GitHub (exemplo)
router.get('/github/me', utilizadorController.gitHubMe);

// Rota de callback para troca de código de autorização por token de acesso (exemplo)
router.get('/callback', utilizadorController.callbackController);

module.exports = router;