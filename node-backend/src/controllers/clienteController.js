const Cliente = require('../models/cliente');

exports.criarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro para criar cliente', detalhes: err.message });
  }
};

exports.listaClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

exports.atualizaCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  await cliente.update(req.body);
  res.json(cliente);
};

exports.deletaCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  await cliente.destroy();
  res.json({ mensagem: 'Cliente deletado com sucesso' });
};