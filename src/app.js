// app.js

import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route.js';

const app = express();

// Configuración
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API REST full');
});

// Ruta para la API de usuarios
app.use('/api/users', userRoutes);

export default app;
