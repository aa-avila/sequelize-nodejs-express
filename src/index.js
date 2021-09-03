const app = require('./app');
const sequelize = require('./database/db');


// Obtener puerto
const PORT = app.get('port');

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);

  try {
    // Probar coneccion con BD (authenticate)
    await sequelize.authenticate();
    console.log('Conecenxion exitosa a la base de datos!');

    // Sincronizar modelos con tablas
    await sequelize.sync({ alter: true }); // {alter: true} => modifica las tablas para emparejar con los campos
    // NOTA: si la tabla no existe la crea, si existe per faltan campos los crea, si sobran campos los destruye => NO se recomineda usar en Produccion!
    // para no hacer nada => { force: false }

    console.log("All models were synchronized successfully.");

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

});