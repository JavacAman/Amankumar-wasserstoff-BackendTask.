/**
 * Mock REST API endpoint with simulated response times.
 */

const express = require('express');
const app = express();

// Handle GET requests to /api with simulated response time
app.get('/api', (req, res) => {
    setTimeout(() => {
        res.json({ message: 'REST API response' });
    }, Math.random() * 2000);
});

// Start the REST API server
const PORT = 3001;
app.listen(PORT, () => console.log(`REST API running on port ${PORT}`));
