const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/', pedidoController.criaPedido);
router.get('/', pedidoController.listaPedidos);

module.exports = router;