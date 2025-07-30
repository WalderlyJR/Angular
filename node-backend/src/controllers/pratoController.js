const Prato = require('../models/prato');

exports.criarPrato = async (req, res) => {
  try {
    const prato = await Prato.create(req.body);
    res.status(201).json(prato);
  } catch (err) {
    res.status(500).json({ erro: 'Erro para criar prato', detalhes: err.message });
  }
};

exports.listarPratos = async (req, res) => {
  const pratos = await Prato.findAll();
  res.json(pratos);
};

exports.atualizarPrato = async (req, res) => {
  const prato = await Prato.findByPk(req.params.id);
  if (!prato) return res.status(404).json({ erro: 'Prato não encontrado' });

  await prato.update(req.body);
  res.json(prato);
};

exports.deletarPrato = async (req, res) => {
  const prato = await Prato.findByPk(req.params.id);
  if (!prato) return res.status(404).json({ erro: 'Prato não encontrado' });

  await prato.destroy();
  res.json({ mensagem: 'Prato deletado com sucesso' });
};