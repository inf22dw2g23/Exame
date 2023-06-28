const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadorController');

// Rotas para jogadores
router.get('/jogadores', jogadorController.listarJogadores);
router.get('/jogadores/:id', jogadorController.obterJogador);
router.post('/jogadores', jogadorController.criarJogador);
router.put('/jogadores/:id', jogadorController.atualizarJogador);
router.delete('/jogadores/:id', jogadorController.excluirJogador);