import {users} from "../data/users.js";

export const getAllUsers = (req, res) => { 
    res.json(users);
};

export const getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === id);
    if(!user) return res.status(404).json({message : "User not found"});
     res.json(user);
};

export const createUser = (req, res) => {
    const { name } = req.body;
    if(!name) return res.status(400).json({message : "Name is required"});

    const newUser = {id : users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
    const id = Number(req.params.id);
    const index = users.find((u) => u.id === id);
    if(!user) return res.status(404).json({message :"User not found"});

    user.name = req.body.name || user.name;
    res.json(user);
};

export const deleteUser = (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if(index === -1) return res.status(404).json({message : "User not found"});

    users.splice(index, 1);
    res.json({message : "User deleted successfully"});
};

