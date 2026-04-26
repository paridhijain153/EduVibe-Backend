require('dotenv').config();

const express = require('express');
const app = express();

// Middleware to read JSON
app.use(express.json());

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

// Home route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is running'
  });
});

// API base route
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'API is running'
  });
});

// 404 - route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});

module.exports = app;