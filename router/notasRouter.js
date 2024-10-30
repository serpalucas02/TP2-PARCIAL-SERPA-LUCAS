import express from 'express';
import NotasControlador from '../controlador/notasControlador.js';

const router = express.Router();
const controlador = new NotasControlador();

class NotasRouter {
    start() {
        router.post('/ingreso', controlador.ingresarNota);
        router.get('/listado', controlador.obtenerListado);
        router.get('/promedio', controlador.calcularPromedio);
        router.get('/minmax', controlador.obtenerMinMax);
        router.get('/cantidad', controlador.obtenerCantidad);

        return router;
    }
}

export default NotasRouter;
