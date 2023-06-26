const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Jogador = sequelize.define('jogadores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_registo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Jogador;
