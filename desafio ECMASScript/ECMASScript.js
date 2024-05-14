class ProductsManager {
    static #products = [];
    #productIdCounter = 1;

    create(data) {
        try {
            const product = {
                id: this.#productIdCounter,
                title: data.title,
                photo: data.photo,
                category: data.category,
                price: data.price,
                stock: data.stock,
            };
            if (!data.title || !data.photo || !data.category || !data.price || !data.stock) {
                throw new Error("Todos los campos son obligatorios");
            } else {
                ProductsManager.#products.push(product);
                this.#productIdCounter++;
                console.log("Producto creado");
            }
        } catch (error) {
            console.log(error);
        }
    }

    read() {
        try {
            if (ProductsManager.#products.length === 0) {
                throw new Error("No hay productos");
            } else {
                return ProductsManager.#products;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

class UsersManager {
    static #users = [];
    #userIdCounter = 1;

    create(data) {
        try {
            const user = {
                id: this.#userIdCounter,
                photo: data.photo,
                email: data.email,
                password: data.password,
                role: data.role,
            };
            if (!data.photo || !data.email || !data.password || !data.role) {
                throw new Error("Todos los campos son obligatorios");
            } else {
                UsersManager.#users.push(user);
                this.#userIdCounter++;
                console.log("Usuario creado");
            }
        } catch (error) {
            console.log(error);
        }
    }

    read() {
        try {
            if (UsersManager.#users.length === 0) {
                throw new Error("No hay usuarios");
            } else {
                return UsersManager.#users;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// Definir dos usuarios
const userManager = new UsersManager();
userManager.create({
    photo: "ruta1.jpg",
    email: "usuario1@example.com",
    password: "contraseña1",
    role: "admin",
});

userManager.create({
    photo: "ruta2.jpg",
    email: "usuario2@example.com",
    password: "contraseña2",
    role: "user",
});

// Definir cinco productos
const productManager = new ProductsManager();
productManager.create({
    title: "Producto 1",
    photo: "ruta_producto1.jpg",
    category: "Categoría 1",
    price: 10,
    stock: 100,
});

productManager.create({
    title: "Producto 2",
    photo: "ruta_producto2.jpg",
    category: "Categoría 2",
    price: 20,
    stock: 50,
});

productManager.create({
    title: "Producto 3",
    photo: "ruta_producto3.jpg",
    category: "Categoría 1",
    price: 15,
    stock: 80,
});

productManager.create({
    title: "Producto 4",
    photo: "ruta_producto4.jpg",
    category: "Categoría 3",
    price: 30,
    stock: 20,
});

productManager.create({
    title: "Producto 5",
    photo: "ruta_producto5.jpg",
    category: "Categoría 2",
    price: 25,
    stock: 40,
});

// Mostrar los usuarios y productos definidos
console.log("Usuarios:", userManager.read());
console.log("Productos:", productManager.read());
