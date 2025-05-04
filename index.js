require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const cookieParser = require('cookie-parser'); // Added for cookie handling

const app = express();

// Middleware setup
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:"]
        }
    }
}));

app.use(cors({
    origin: [
        'https://noldy22.com',
        'http://localhost:3000' // For local development
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow cookies to be sent with requests
}));

app.use(express.json());
app.use(cookieParser()); // Enable cookie parsing

// Temporary in-memory database (replace with real DB later)
let users = [];

// Login route with cookie-based JWT
app.post('/api/login', [
    check('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email);

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Set JWT in an HTTP-only cookie
        res.cookie('auth_token', token, {
            httpOnly: true, // Prevents JavaScript access to the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'strict', // Prevents CSRF
            maxAge: 3600000 // 1 hour in milliseconds
        });

        res.json({
            success: true,
            userId: user.id,
            email: user.email
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Signup route (unchanged, no token issued)
app.post('/api/signup', [
    check('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { email, password } = req.body;

        if (users.some(u => u.email === email)) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: users.length + 1,
            email,
            password: hashedPassword,
            created: new Date().toISOString()
        };

        users.push(newUser);
        res.status(201).json({
            message: 'Registration successful',
            userId: newUser.id
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Authentication check route
app.get('/api/check-auth', (req, res) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).json({ authenticated: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({
            authenticated: true,
            user: { id: decoded.userId, email: decoded.email }
        });
    } catch (error) {
        console.error('Auth check error:', error);
        res.status(401).json({ authenticated: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`CORS allowed origins: https://noldy22.com, http://localhost:3000`);
});