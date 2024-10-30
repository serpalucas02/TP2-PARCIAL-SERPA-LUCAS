import NotasServicio from "../servicio/notasServicio.js";

class NotasControlador {
    constructor() {
        this.service = new NotasServicio();
    }

    ingresarNota = async (req, res) => {
        const { nota } = req.body;
        if (nota < 0 || nota > 10) return res.status(400).json({ error: 'La nota debe estar entre 0 y 10' });
        const nuevaNota = await this.service.agregarNota(nota);
        res.json(nuevaNota);
    };

    obtenerListado = async (req, res) => {
        const notas = await this.service.obtenerListado();
        res.json({ notas });
    };

    calcularPromedio = async (req, res) => {
        const promedio = await this.service.calcularPromedio();
        res.json({ promedio });
    };

    obtenerMinMax = async (req, res) => {
        const minmax = await this.service.obtenerMinMax();
        res.json(minmax);
    };

    obtenerCantidad = async (req, res) => {
        const cantidad = await this.service.obtenerCantidad();
        res.json({ cantidad });
    };
}

export default NotasControlador;
