const app = require("./src/app"); //importar app
const connectDB = require("./src/database/mongoose"); // Importar la funcion de conexion

const PORT = 4000;

connectDB(); // Conectar a la base de datos antes de iniciar el servidor

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀Servidor funcionando en http://localhost:${PORT}`);
});

