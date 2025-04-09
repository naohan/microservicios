const express = require('express');
const app = express();
const path = require('path');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar las rutas
const clientesRouter = require('./routes/clientes');
const productosRouter = require('./routes/productos');

// Usar las rutas
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
