const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
      autoIncrement: true, 
      allowNull: false
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = Cliente;