const Pedido = require('../models/pedido');
const Cliente = require('../models/cliente');
const Prato = require('../models/prato');

exports.criaPedido = async (req, res) => {
  try {
    const { cpf, pratoId } = req.body;

    const cliente = await Cliente.findOne({ where: { cpf } });
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado com esse CPF' });

    const prato = await Prato.findByPk(pratoId);
    if (!prato) return res.status(404).json({ erro: 'Prato não encontrado com esse ID' });

    const pedido = await Pedido.create({
      ClienteId: cliente.id,
      PratoId: prato.id
    });

    await prato.increment('quantidadePedidos');

    res.status(201).json(pedido);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar pedido', detalhes: err.message });
  }
};


exports.listaPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll({ include: [Cliente, Prato] });
  res.json(pedidos);
};