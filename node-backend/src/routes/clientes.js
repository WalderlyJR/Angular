const express = require('express');
const router = express.Router();
const { clienteSchema } = require('../services/validacao');
const validar = require('../middlewares/validaSolicitacao');
const clienteController = require('../controllers/clienteController');

router.post('/', validar(clienteSchema), clienteController.criarCliente);
router.get('/', clienteController.listaClientes);
router.put('/:id', validar(clienteSchema), clienteController.atualizaCliente);
router.delete('/:id', clienteController.deletaCliente);

module.exports = router;