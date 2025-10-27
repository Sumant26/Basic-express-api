# 🚀 Basic Express API (ES6 + Node.js)

A simple REST API built using **Node.js** and **Express (ES6 modules)**.  
This project demonstrates how to create, read, update, and delete (CRUD) data using modern JavaScript syntax.

---

## 📁 Project Structure
```
basic-express-api/
│
├── server.js # Main Express server file
├── package.json # Project metadata & dependencies
└── README.md # Project documentation
```

---

## ⚙️ Setup Instructions
    Follow these steps to set up and run the project on your local machine:
### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sumant26/Basic-express-api.git
cd Basic-express-api
npm install
npm start
http://localhost:3000
```
---

## 💡 Features
```bash
✅ Built with Node.js + Express
✅ Uses ES6 import/export syntax ("type": "module")
✅ In-memory "database" for simplicity
✅ RESTful API design
✅ CRUD operations (GET, POST, PUT, DELETE)
✅ JSON request/response handling
 ```
---
 ## EndPoints
 ```bash

| Method | Endpoint     | Description             | Example Body (JSON)          |
| ------ | ------------ | ----------------------- | ---------------------------- |
| GET    | `/`          | Welcome message         | —                            |
| GET    | `/users`     | Get all users           | —                            |
| GET    | `/users/:id` | Get a user by ID        | —                            |
| POST   | `/users`     | Create a new user       | `{ "name": "Alice" }`        |
| PUT    | `/users/:id` | Update an existing user | `{ "name": "Updated Name" }` |
| DELETE | `/users/:id` | Delete a user           | —                            |
```
---
## 🧰 Technologies Used
```bash
Node.js – JavaScript runtime
Express.js – Web framework for Node.js
ES6 Modules – Modern JS import/export syntax
```

## 🧑‍💻 Author
```bash
Sumant Tulshibagwale
🌐 https://github.com/Sumant26
```

---

