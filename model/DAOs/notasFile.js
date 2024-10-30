import fs from 'fs';

class NotasFile {
    #archivo = null;

    constructor(archivo) {
        this.#archivo = archivo;
    }

    async #leerArchivo() {
        try {
            return JSON.parse(await fs.promises.readFile(this.#archivo, 'utf-8'));
        } catch {
            return [];
        }
    }

    async #escribirArchivo(notas) {
        await fs.promises.writeFile(this.#archivo, JSON.stringify(notas, null, '\t'));
    }

    async agregarNota(nota) {
        const notas = await this.#leerArchivo();
        notas.push(nota);
        await this.#escribirArchivo(notas);
        return nota;
    }

    async obtenerNotas() {
        return await this.#leerArchivo();
    }
}

export default NotasFile;
