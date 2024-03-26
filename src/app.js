const express = require('express');
const ProductManager = require('./ProductManager'); // Suponiendo que ProductManager está en el mismo directorio que app.js
const fs = require('fs');
const app = express();
const PORT = 8080;

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para obtener los productos con un límite opcional
app.get('/products', (req, res) => {
    let limit = req.query.limit; // Obtener el valor del parámetro de consulta "limit"
    let productos;

    if (limit) {
    limit = parseInt(limit); // Convertir el valor del límite a un número entero
    productos = productManager.getAllProducts().slice(0, limit); // Obtener los primeros 'limit' productos
    } else {
    productos = productManager.getAllProducts(); // Obtener todos los productos
    }

    res.json(productos);
});

// Ruta para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const producto = productManager.getProductById(productId);
    if (!producto) {
        res.status(404).json({ error: 'Producto no encontrado' });
        return;
    }
    res.json(producto);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
