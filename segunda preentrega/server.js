// server.js - Archivo principal del servidor Express
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const pathHandler = require('./middlewares/pathHandler');
const cartRouter = require('./routers/cartRouter');

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.use('/api/carts', cartRouter);

// Middlewares
app.use(errorHandler);
app.use(pathHandler);

// Manejador de rutas para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});

// Start server
const PORT = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
