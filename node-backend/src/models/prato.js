const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Prato = sequelize.define('Prato', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidadePedidos: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: false
});

module.exports = Prato;