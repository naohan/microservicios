const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
    res.json([{ id: 1, nombre: 'Producto 1' }, { id: 2, nombre: 'Producto 2' }]);
});

// Agregar un nuevo producto
router.post('/', (req, res) => {
    // Lógica para agregar producto
    res.status(201).send('Producto creado');
});

module.exports = router;
