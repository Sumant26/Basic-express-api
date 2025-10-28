// // Import Express (ES6 syntax)
// import express from "express";

// // Create Express app
// const app  = express();

// // Middleware for parsing JSON
// app.use(express.json());

// // Sample in-memory "database"
// let users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// // Root route
// app.get("/", (req, res)=>{
//     res.send("Welcome to my ES6 Express API!");
// });

// // Get all users
// app.get("/users",(req, res)=>{
//     res.json(users);
// });

// // Get user by ID
// app.get("/users/:id", (req, res)=>{
//     const id = req.params.id;
//     const user = users.find(u => u.id === id);
//     if(!user) return res.status(404).json({message:"User not found"});
//     res.json(user);
// });

// // Create new user
// app.post("users", (req, res)=>{
//     const newUser = {
//         id : users.length + 1,
//         name : req.params.name,
//     };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });

// // Update user
// app.put("users/:id", (req, res)=>{
//     const id = req.params.id;
//     const user = users.find(u => u.id === id);
//     if(!user) return res.status(404).json({message: "User not found"});

//     user.name = req.body.name || user.name;
//     res.json(user);
// });

// // Delete user
// app.delete("users/:id",(req, res)=>{
//     const id = Number(req.params.id);
//     users = users.filter(u => u.id === id);
//     res.json({message: "User deleted successfully"});
// });

// const PORT = 3000;
// app.listen(PORT, ()=> console.log(`🚀 Server running on port ${PORT}`));



import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`🚀 Server running on port ${PORT}`);
});


















