// Import required modules
const express = require('express');
const axios = require('axios');
const logger = require('./middleware/logger'); // Import logger middleware
const { routeRequest } = require('./routing/routeRequest'); // Import routeRequest function

const app = express(); // Create an Express application

// Use the logger middleware for logging requests
app.use(logger);

// Use the routeRequest function for routing incoming requests
app.use(routeRequest);

const PORT = process.env.PORT || 3000; // Define the port number from environment variable or default to 3000
app.listen(PORT, () => console.log(`Load Balancer running on port ${PORT}`)); // Start the server and log the port number
