// data/mongo/managers/cartManager.js
const Cart = require('../models/cartModel');

class CartManager {
    async create(data) {
        try {
            const cart = await Cart.create(data);
            return cart;
        } catch (error) {
            throw error;
        }
    }

    async read(userId) {
        try {
            const carts = await Cart.find({ user_id: userId }).populate('product_id');
            return carts;
        } catch (error) {
            throw error;
        }
    }

    async readOne(id) {
        try {
            const cart = await Cart.findById(id).populate('product_id');
            return cart;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const cart = await Cart.findByIdAndUpdate(id, data, { new: true });
            return cart;
        } catch (error) {
            throw error;
        }
    }

    async destroy(id) {
        try {
            await Cart.findByIdAndDelete(id);
            return { message: 'Cart deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartManager;
