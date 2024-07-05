// Import the axios library for making HTTP requests
const axios = require('axios');

// Define the URLs for different API endpoints
const apiEndpoints = {
    rest: 'http://localhost:3001/api',
    graphql: 'http://localhost:3002/api',
    grpc: 'http://localhost:3003/api'
};

// Function to randomly select an API endpoint
const getRandomEndpoint = () => {
    const endpoints = Object.values(apiEndpoints);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
};

// Route incoming requests based on 'x-api-type' header or random selection
const routeRequest = async (req, res) => {
    let url;

    // Determine API type and set the corresponding URL
    if (req.headers['x-api-type'] === 'rest') {
        url = apiEndpoints.rest;
    } else if (req.headers['x-api-type'] === 'graphql') {
        url = apiEndpoints.graphql;
    } else if (req.headers['x-api-type'] === 'grpc') {
        url = apiEndpoints.grpc;
    } else {
        // If no specific 'x-api-type' header, choose a random endpoint
        url = getRandomEndpoint();
    }

    try {
        // Make a GET request to the determined URL
        const response = await axios.get(url);
        // Send back the response data received from the API
        res.json(response.data);
    } catch (error) {
        // Handle errors if the request fails
        res.status(500).json({ message: 'Error routing request' });
    }
};

// Export the routeRequest function for use in other modules
module.exports = { routeRequest };
