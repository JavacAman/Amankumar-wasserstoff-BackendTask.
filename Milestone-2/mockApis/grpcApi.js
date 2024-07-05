/**
 * Mock gRPC API endpoint with simulated response times.
 */

const express = require('express');
const app = express();

// Handle GET requests to /api with simulated response time
app.get('/api', (req, res) => {
    setTimeout(() => {
        res.json({ message: 'gRPC API response' });
    }, Math.random() * 2000);
});

// Start the gRPC API server
const PORT = 3003;
app.listen(PORT, () => console.log(`gRPC API running on port ${PORT}`));
