const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Partida = sequelize.define('partidas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  jogador1_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  jogador2_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tabuleiro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  vencedor_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  data_criacao: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Partida;