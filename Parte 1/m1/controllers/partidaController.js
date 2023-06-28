const Partida = require('../models/Partida');

const countPartidas = (req, res) => {
  Partida.count()
    .then((count) => {
      res.json({ count });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const retrievePartidas = (req, res) => {
  Partida.findAll()
    .then((partidas) => {
      res.json(partidas);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const createPartida = (req, res) => {
  const { jogador1_id, jogador2_id, tabuleiro, vencedor_id } = req.body;

  Partida.create({
    jogador1_id,
    jogador2_id,
    tabuleiro,
    vencedor_id,
  })
    .then((partida) => {
      res.json(partida);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const retrievePartida = (req, res) => {
  const partidaId = req.params.id;

  Partida.findByPk(partidaId)
    .then((partida) => {
      if (!partida) {
        res.status(404).json({ error: 'Partida não encontrada' });
      } else {
        res.json(partida);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const updatePartida = (req, res) => {
  const partidaId = req.params.id;
  const { jogador1_id, jogador2_id, tabuleiro, vencedor_id } = req.body;

  Partida.update(
    { jogador1_id, jogador2_id, tabuleiro, vencedor_id },
    { where: { id: partidaId }, returning: true }
  )
    .then(([rowsUpdated, [updatedPartida]]) => {
      if (rowsUpdated === 0) {
        res.status(404).json({ error: 'Partida não encontrada' });
      } else {
        res.json(updatedPartida);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const deletePartida = (req, res) => {
  const partidaId = req.params.id;

  Partida.destroy({ where: { id: partidaId } })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ error: 'Partida não encontrada' });
      } else {
        res.json({ message: 'Partida excluída com sucesso' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

module.exports = {
  countPartidas,
  retrievePartidas,
  createPartida,
  retrievePartida,
  updatePartida,
  deletePartida,
};