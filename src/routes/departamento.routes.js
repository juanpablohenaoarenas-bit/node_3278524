const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamento.controller');

router.post('/', departamentoController.crear);
router.get('/', departamentoController.listar);
router.get('/:id', departamentoController.obtenerUno);
router.put('/:id', departamentoController.actualizar);
router.delete('/:id', departamentoController.eliminar);

module.exports = router;