const express = require('express');
const cors = require('cors');

const server = express();  // Ensure you define 'server'
server.use(cors());        // Use CORS middleware
server.use(express.json()); // For parsing application/json

server.get('/api/users', (req, res) => {
    res.json(users);
});

server.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    res.status(201).json(newUser);
});

server.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: `Welcome back, ${username}!` });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});



let users = [];