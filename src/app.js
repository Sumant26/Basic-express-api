import express from "express";
import userRoutes from "./routes/userRoutes.js";
import morganMiddleware from "./utils/morganMiddleware.js";
import { errorHandler, notFound} from "./middleware/errorMiddleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morganMiddleware);

// Root route
app.get("/", (req, res)=>{
    res.send("Welcome to my ES6 Express API!");
});

// User routes
app.use("/users", userRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;

