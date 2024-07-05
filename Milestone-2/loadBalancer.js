/**
 * Main entry point for the load balancer application.
 * This file sets up the Express server, applies middleware, and routes requests.
 */

const express = require('express');
const logger = require('./middleware/logger');
const { routeRequest } = require('./routing/routeRequest');
const { queueManager } = require('./routing/queueManager');

const app = express();

// Apply logging middleware
app.use(logger);

// Apply queue management middleware
app.use(queueManager);

// Route incoming requests
app.use(routeRequest);

// Start the server on the specified port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Load Balancer running on port ${PORT}`));
