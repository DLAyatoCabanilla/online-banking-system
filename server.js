const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change as needed

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory storage for registered users (replace with a real database)
const users = [];

// Define a route to serve the dashboard.html file
app.get('/dashboard.html', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

// Define a route for serving the login page (e.g., login.html)
app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  // Simulate user registration (add validation logic)
  const newUser = { username, password, email };
  users.push(newUser);

  // Redirect to the login page after successful registration

  res.redirect('/login.html');
});

// Login endpoint
app.post('/login', (req, res) => {
  // Handle form data and validation
  const { username, password } = req.body;

  // Example validation (replace with your actual logic)
  if (username === 'user' && password === 'password') {
      // Successful login, redirect to dashboard.html
      res.redirect('/dashboard.html');
  } else {
      // Invalid login, redirect back to the login page with an error message
      res.redirect('/login.html?error=1');
  }
});

// Serve static files (including HTML files)
app.use(express.static(__dirname));


// Define a route to serve the dashboard.html file
app.get('dashboard.html', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/login.html`);
});