const app = require('./app');
const sequelize = require('./database/db');


// Obtener puerto
const PORT = app.get('port');

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

});