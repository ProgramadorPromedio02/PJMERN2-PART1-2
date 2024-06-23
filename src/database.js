// database.js

import mongoose from 'mongoose';

// Cadena de conexión
const URL = process.env.MONGODB_URL || 'mongodb://localhost/dbtest';

mongoose.connect(URL);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('La base de datos ha sido conectada:', URL);
});

connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err);
});
