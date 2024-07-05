/**
 * Mock GraphQL API endpoint with simulated response times.
 */

const express = require('express');
const app = express();

// Handle GET requests to /api with simulated response time
app.get('/api', (req, res) => {
    setTimeout(() => {
        res.json({ message: 'GraphQL API response' });
    }, Math.random() * 2000);
});

// Start the GraphQL API server
const PORT = 3002;
app.listen(PORT, () => console.log(`GraphQL API running on port ${PORT}`));
