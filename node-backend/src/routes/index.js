const express = require('express');
const router = express.Router();

router.use('/clientes', require('./clientes'));
router.use('/pratos', require('./pratos'));
router.use('/pedidos', require('./pedidos'));
router.use('/listas', require('./listas'));


module.exports = router;