const Joi = require('joi');
const validarCPF = require('./validaCPF');

const clienteSchema = Joi.object({
  nome: Joi.string().min(3).max(50).pattern(/^[A-Za-zÀ-ÿ\s]+$/).required(),
  cpf: Joi.string().length(11).pattern(/^\d+$/).custom((value, helpers) => {
    if (!validarCPF(value)) return helpers.message('CPF inválido');
    return value;
  }).required()
});

const pratoSchema = Joi.object({
  nome: Joi.string().min(3).max(50).pattern(/^[A-Za-zÀ-ÿ\s]+$/).required(),
  preco: Joi.number().positive().required()
});

module.exports = { clienteSchema, pratoSchema };