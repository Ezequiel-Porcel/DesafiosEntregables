class ProductManager {
    constructor() {
        this.products = [
            { id: 1, name: 'Producto 1', price: 10 },
            { id: 2, name: 'Producto 2', price: 20 },
            { id: 3, name: 'Producto 3', price: 302 },
            { id: 4, name: 'Producto 4', price: 104 },
            { id: 5, name: 'Producto 5', price: 202 },
            { id: 6, name: 'Producto 6', price: 1011 },
            { id: 7, name: 'Producto 7', price: 20222 },
            { id: 8, name: 'Producto 8', price: 30233 },
            { id: 9, name: 'Producto 9', price: 1114 },
            { id: 10, name: 'Producto 10', price: 24402 },
        ];
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}

module.exports = ProductManager;
