const express = require('express');
const app = express();

const users = [
    { username: "mukesh", email: "mukesh@gmail.com", password: "mukesh1234" },
    { username: "sai", email: "sai@gmail.com", password: "sai1234" }
];

const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send("Hello! this is mukesh");
});

// Find user route
app.get('/find', (req, res) => {
    const username = req.query.username?.trim()?.toLowerCase();

    if (!username) {
        return res.status(400).json({ message: "Username cannot be empty!" });
    }

    const user = users.find(u => u.username.toLowerCase() === username);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User found", data: user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
