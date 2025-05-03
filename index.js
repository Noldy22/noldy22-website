require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
    origin: 'https://noldy22.com', // Your domain
    methods: ['GET', 'POST']
}));

// Body parsing middleware
app.use(express.json());

// Mock database (replace with real database)
const users = [];

// Authentication Routes
// ----------------------

// Login Route
app.post('/api/login', [
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    
    try {
        const user = users.find(u => u.email === email);
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Signup Route
app.post('/api/signup', [
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    
    try {
        if (users.some(u => u.email === email)) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: users.length + 1,
            email,
            password: hashedPassword
        };
        users.push(newUser);

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Security headers enabled`);
    console.log(`CORS configured for: https://noldy22.com`);
});