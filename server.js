import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config(); // Loads .env variables

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.listen(PORT, ()=> {
    console.log(`🚀 Server running on port ${PORT}`);
});


















