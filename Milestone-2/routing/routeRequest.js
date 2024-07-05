/**
 * Module for routing requests to different API endpoints based on specified criteria.
 */

const axios = require('axios');

const apiEndpoints = {
    rest: 'http://localhost:3001/api',
    graphql: 'http://localhost:3002/api',
    grpc: 'http://localhost:3003/api'
};

// Function to get a random API endpoint for load balancing
const getRandomEndpoint = () => {
    const endpoints = Object.values(apiEndpoints);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
};

// Function to route the request to the appropriate API based on headers
const routeRequest = async (req, res) => {
    let url;

    // Determine API type and route accordingly
    if (req.headers['x-api-type'] === 'rest') {
        url = apiEndpoints.rest;
    } else if (req.headers['x-api-type'] === 'graphql') {
        url = apiEndpoints.graphql;
    } else if (req.headers['x-api-type'] === 'grpc') {
        url = apiEndpoints.grpc;
    } else {
        url = getRandomEndpoint();
    }

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error routing request' });
    }
};

module.exports = { routeRequest };
