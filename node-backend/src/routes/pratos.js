const express = require('express');
const router = express.Router();
const { pratoSchema } = require('../services/validacao');
const validar = require('../middlewares/validaSolicitacao');
const pratoController = require('../controllers/pratoController');

router.post('/', validar(pratoSchema), pratoController.criarPrato);
router.get('/', pratoController.listarPratos);
router.put('/:id', validar(pratoSchema), pratoController.atualizarPrato);
router.delete('/:id', pratoController.deletarPrato);


module.exports = router;