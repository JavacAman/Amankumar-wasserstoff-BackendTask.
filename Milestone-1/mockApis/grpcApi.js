// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for GET requests to /api
app.get('/api', (req, res) => {
    // Simulate a random delay to mimic variable response times
    setTimeout(() => {
        // Send a JSON response after the delay
        res.json({ message: 'gRPC API response' });
    }, Math.random() * 2000); // Delay time is a random value between 0 and 2000 milliseconds
});

// Define the port number for the server to listen on
const PORT = 3003;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`gRPC API running on port ${PORT}`));
