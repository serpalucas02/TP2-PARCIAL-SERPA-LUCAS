import NotasFactory from "../model/DAOs/notasFactory.js";

class NotasServicio {
    constructor() {
        this.model = NotasFactory.get();
    }

    async agregarNota(nota) {
        return await this.model.agregarNota(nota);
    }

    async obtenerListado() {
        return await this.model.obtenerNotas();
    }

    async calcularPromedio() {
        const notas = await this.model.obtenerNotas();
        if (notas.length === 0) return 0;

        let suma = 0;
        for (const nota of notas) {
            suma += nota;
        }

        return parseFloat((suma / notas.length).toFixed(2));
    }

    async obtenerMinMax() {
        const notas = await this.model.obtenerNotas();
        return {
            min: Math.min(...notas),
            max: Math.max(...notas),
        };
    }

    async obtenerCantidad() {
        const notas = await this.model.obtenerNotas();
        return notas.length;
    }
}

export default NotasServicio;
