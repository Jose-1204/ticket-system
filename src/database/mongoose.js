const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") }); // Ruta absoluta al .env

const mongoose = require("mongoose"); // Biblioteca

const uri = process.env.MONGO_URI; // Leer la URI desde el archivo .env

const connectDB = async () => {
    try {
        await mongoose.connect(uri); // Conectar a MongoDB
        console.log("✅ Conexión a MongoDB Atlas exitosa");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB Atlas:", error);
        process.exit(1);
    }
};

module.exports = connectDB;

