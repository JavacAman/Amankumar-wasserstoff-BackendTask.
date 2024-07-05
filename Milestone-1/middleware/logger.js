// Middleware function to log request duration and other details
const logger = (req, res, next) => {
    // Record the start time of the request
    const start = Date.now();

    // Set up an event listener on the response object to log details when the response is finished
    res.on('finish', () => {
        // Calculate the duration of the request
        const duration = Date.now() - start;

        // Log the request URL and the time it took to process
        console.log(`Request to ${req.url} took ${duration}ms`);
    });

    // Call the next middleware function in the stack
    next();
};

// Export the logger middleware for use in other parts of the application
module.exports = logger;
