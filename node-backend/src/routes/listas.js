const express = require('express');
const router = express.Router();
const listaController = require('../controllers/listaController');

router.get('/pratos-mais-pedidos', listaController.pratosMaisPedidos);
router.get('/clientes-com-mais-pedidos', listaController.clientesComMaisPedidos);
router.get('/clientes-que-mais-gastaram', listaController.clientesQueMaisGastaram);

module.exports = router;