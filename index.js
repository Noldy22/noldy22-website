const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // TODO: Save user to DB (this is just a placeholder)
  res.json({ message: `User ${username} signed up successfully.` });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // TODO: Authenticate user (this is just a placeholder)
  res.json({ message: `User ${username} logged in successfully.` });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
