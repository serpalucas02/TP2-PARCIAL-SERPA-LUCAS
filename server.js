import express from 'express';
import NotasRouter from './router/notasRouter.js';
import config from './config.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

const notasRouter = new NotasRouter();

app.use('/notas', notasRouter.start());

app.listen(config.PORT, () => console.log(`Servidor express escuchando en http://localhost:${config.PORT}`));
