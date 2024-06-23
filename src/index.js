// index.js

import 'dotenv/config';
import app from './app.js';
import './database.js';

// Esta lógica es para ejecutar el servidor
async function main() {
  try {
    await app.listen(app.get('port'));
    console.log(`Servidor corriendo en la dirección: http://localhost:${app.get('port')}`);
  } catch (error) {
    console.error('Error al iniciar el servidor:', error.message);
  }
}

main();
