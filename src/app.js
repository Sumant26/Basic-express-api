import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Root route
app.get("/", (req, res)=>{
    res.send("Welcome to my ES6 Express API!");
});

// User routes
app.use("/users", userRoutes);

export default app;

