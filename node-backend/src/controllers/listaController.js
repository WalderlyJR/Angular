const Pedido = require('../models/pedido');
const Cliente = require('../models/cliente');
const Prato = require('../models/prato');
const { Sequelize } = require('sequelize');

exports.pratosMaisPedidos = async (req, res) => {
  try {
    const pratos = await Prato.findAll({
      order: [['quantidadePedidos', 'DESC']]
    });
    res.json(pratos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar pratos', detalhes: err.message });
  }
};

exports.clientesComMaisPedidos = async (req, res) => {
  try {
    const pedidosPorCliente = await Pedido.findAll({
      attributes: [
        'ClienteId',
        [Sequelize.fn('COUNT', Sequelize.col('ClienteId')), 'quantidadePedidos']
      ],
      group: ['ClienteId'],
      order: [[Sequelize.literal('quantidadePedidos'), 'DESC']],
      limit: 5,
      include: [{ model: Cliente, attributes: ['nome'] }]
    });
    res.json(pedidosPorCliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: err.message });
  }
};

exports.clientesQueMaisGastaram = async (req, res) => {
  try {
    const gastosPorCliente = await Pedido.findAll({
      attributes: [
        'ClienteId',
        [Sequelize.fn('SUM', Sequelize.col('Prato.preco')), 'totalGasto']
      ],
      include: [
        { model: Cliente, attributes: ['nome'] },
        { model: Prato, attributes: [] }
      ],
      group: ['ClienteId'],
      order: [[Sequelize.literal('totalGasto'), 'DESC']],
      limit: 5
    });
    res.json(gastosPorCliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: err.message });
  }
};