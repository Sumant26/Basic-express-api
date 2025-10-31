import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import morganMiddleware from "./utils/morganMiddleware.js";
import { errorHandler, notFound} from "./middleware/errorMiddleware.js";
import { securityMiddleware } from "./config/security.js";

const app = express();

// Middleware
app.use(express.json());

// Security Middlewares
securityMiddleware(app);

// Logger
app.use(morganMiddleware);

// Root route
app.get("/", (req, res)=>{
    res.send("Welcome to my ES6 Express API!");
});

// User routes
app.use("/users", userRoutes);

// Auth routes
app.use("/api/auth", authRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;

