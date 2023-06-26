const Jogador = require('../models/Jogador');

const countJogadores = (req, res) => {
  Jogador.count()
    .then((count) => {
      res.json({ count });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const retrieveJogadores = (req, res) => {
  Jogador.findAll()
    .then((jogadores) => {
      res.json(jogadores);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const createJogador = (req, res) => {
  const { nome, email, senha, data_registo } = req.body;

  Jogador.create({
    nome,
    email,
    senha,
    data_registo,
  })
    .then((jogador) => {
      res.json(jogador);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const retrieveJogador = (req, res) => {
  const jogadorId = req.params.id;

  Jogador.findByPk(jogadorId)
    .then((jogador) => {
      if (!jogador) {
        res.status(404).json({ error: 'Jogador não encontrado' });
      } else {
        res.json(jogador);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const updateJogador = (req, res) => {
  const jogadorId = req.params.id;
  const { nome, email, senha, data_registo } = req.body;

  Jogador.update(
    { nome, email, senha, data_registo },
    { where: { id: jogadorId }, returning: true }
  )
    .then(([rowsUpdated, [updatedJogador]]) => {
      if (rowsUpdated === 0) {
        res.status(404).json({ error: 'Jogador não encontrado' });
      } else {
        res.json(updatedJogador);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

const deleteJogador = (req, res) => {
  const jogadorId = req.params.id;

  Jogador.destroy({ where: { id: jogadorId } })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ error: 'Jogador não encontrado' });
      } else {
        res.json({ message: 'Jogador excluído com sucesso' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Erro no servidor' });
    });
};

module.exports = {
  countJogadores,
  retrieveJogadores,
  createJogador,
  retrieveJogador,
  updateJogador,
  deleteJogador,
};