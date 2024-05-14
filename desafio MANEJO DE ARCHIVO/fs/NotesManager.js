const fs = require('fs').promises;
const crypto = require('crypto');

class NotesManager {
    constructor() {
        this.path = "./fs/files/notes.json";
        this.init();
    }

    async init() {
        try {
            const exists = await fs.access(this.path);
            console.log("archivo ya existe");
        } catch (error) {
            const stringData = JSON.stringify([], null, 2);
            await fs.writeFile(this.path, stringData);
            console.log("archivo creado");
        }
    }

    async create(data) {
        try {
            if (!data.text) {
                throw new Error("ingrese un texto");
            }
            
            const note = {
                id: crypto.randomBytes(12).toString("hex"),
                text: data.text,
                date: data.date || new Date(),
            };

            let all = await fs.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            all.push(note);
            await fs.writeFile(this.path, JSON.stringify(all, null, 2));
            console.log("creado");
        } catch (error) {
            throw error;
        }
    }

    async read() {
        try {
            const all = await fs.readFile(this.path, "utf-8");
            console.log(JSON.parse(all));
            return JSON.parse(all);
        } catch (error) {
            throw error;
        }
    }

    async readOne(id) {
        try {
            const all = await fs.readFile(this.path, "utf-8");
            const one = JSON.parse(all).find((each) => each.id === id);
            if (!one) {
                throw new Error("no encontrado");
            }
            console.log(one);
            return one;
        } catch (error) {
            throw error;
        }
    }

    async destroy(id) {
        try {
            let all = await fs.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            const one = all.find((each) => each.id === id);
            if (!one) {
                throw new Error("no encontrado");
            }
            const filtered = all.filter((each) => each.id !== id);
            await fs.writeFile(this.path, JSON.stringify(filtered, null, 2));
            console.log(filtered);
            return filtered;
        } catch (error) {
            throw error;
        }
    }
}

async function test1() {
    try {
        const notes = new NotesManager();
        await notes.create({ text: "mi primera nota" });
        await notes.read();
        await notes.readOne("e25a69a1f5b08c30ea7421c9");
        await notes.destroy("e25a69a1f5b08c30ea7421c9");
    } catch (error) {
        console.log(error);
    }
}

test1();
