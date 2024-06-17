// Create web server
// 1. Load express module
// 2. Create express app
// 3. Define route to handle HTTP GET request
// 4. Start the server

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// node comments.js
// Open the browser and type http://localhost:3000
// You should see "Hello World" on the screen

// To view the comments
// Open the browser and type http://localhost:3000/comments
// You should see the comments in JSON format

// To stop the server
// Press Ctrl + C in the terminal