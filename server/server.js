const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
const allowedOrigins = [
  'https://jobhuntly-fb6d9c77ebdd.herokuapp.com',
  // Add other allowed origins here as needed
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/build')));



// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome To The Backend Server For my Jobhuntly Site.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
