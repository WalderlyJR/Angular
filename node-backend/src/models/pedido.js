const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Cliente = require('./cliente');
const Prato = require('./prato');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    allowNull: false
  }
}, {
  timestamps: false
});

Cliente.hasMany(Pedido);
Pedido.belongsTo(Cliente);

Prato.hasMany(Pedido);
Pedido.belongsTo(Prato);

module.exports = Pedido;