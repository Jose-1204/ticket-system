const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") }); // Ruta absoluta al .env

const mongoose = require("mongoose"); // Biblioteca

const uri = process.env.MONGO_URI; // Leer la URI desde el archivo .env

const connectDB = async () => {
    try {
        // Conectar a MongoDB con las opciones recomendadas
        await mongoose.connect(uri, {
            useNewUrlParser: true, // Usa el nuevo parser de URLs
            useUnifiedTopology: true, // Nueva gestión de conexiones
        });
        console.log("✅ Conexión a MongoDB Atlas exitosa");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB Atlas:", error);
        process.exit(1); // Detiene el proceso si falla la conexión
    }
};

module.exports = connectDB;
