import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import logger from "./src/config/logger.js"

dotenv.config(); // Loads .env variables

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.listen(PORT, ()=> {
logger.info(`🚀 Server running on port ${PORT}`)});


















