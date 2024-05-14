// routers/cartRouter.js
const express = require('express');
const router = express.Router();
const CartManager = require('../data/mongo/managers/cartManager');

const cartManager = new CartManager();

// Create cart
router.post('/', async (req, res, next) => {
    try {
        const cart = await cartManager.create(req.body);
        res.status(201).json(cart);
    } catch (error) {
        next(error);
    }
});

// Read carts for a specific user
router.get('/', async (req, res, next) => {
    try {
        const userId = req.query.user_id; // Assuming user_id is passed as query parameter
        const carts = await cartManager.read(userId);
        res.json(carts);
    } catch (error) {
        next(error);
    }
});

// Read one cart
router.get('/:id', async (req, res, next) => {
    try {
        const cart = await cartManager.readOne(req.params.id);
        res.json(cart);
    } catch (error) {
        next(error);
    }
});

// Update cart
router.put('/:id', async (req, res, next) => {
    try {
        const cart = await cartManager.update(req.params.id, req.body);
        res.json(cart);
    } catch (error) {
        next(error);
    }
});

// Delete cart
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await cartManager.destroy(req.params.id);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
