const express = require('express');
const router = express.Router();

// Obtener todos los clientes
router.get('/', (req, res) => {
    res.json([{ id: 1, nombre: 'Juan Pérez' }, { id: 2, nombre: 'Ana Gómez' }]);
});

// Agregar un nuevo cliente
router.post('/', (req, res) => {
    // Lógica para agregar cliente
    res.status(201).send('Cliente creado');
});

module.exports = router;
