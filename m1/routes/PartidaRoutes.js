const express = require('express');
const router = express.Router();
const partidaController = require('../controllers/partidaController');

// Rotas para partidas
router.get('/partidas', partidaController.listarPartidas);
router.get('/partidas/:id', partidaController.obterPartida);
router.post('/partidas', partidaController.criarPartida);
router.put('/partidas/:id', partidaController.atualizarPartida);
router.delete('/partidas/:id', partidaController.excluirPartida);