/**
 * Module for managing request queues.
 * Implements different queuing strategies and processes requests accordingly.
 */

const { Queue, Worker } = require('bullmq');

// Create different types of queues
const queues = {
    fifo: new Queue('fifoQueue'),
    priority: new Queue('priorityQueue'),
    roundRobin: new Queue('roundRobinQueue')
};

// Middleware to add requests to the appropriate queue based on headers
const queueManager = (req, res, next) => {
    const queueType = req.headers['x-queue-type'] || 'fifo';

    if (queues[queueType]) {
        queues[queueType].add('request', { req, res });
    } else {
        queues.fifo.add('request', { req, res });
    }

    next();
};

// Function to process requests from queues
const processQueues = () => {
    Object.values(queues).forEach(queue => {
        new Worker(queue.name, async job => {
            const { req, res } = job.data;
            // Simulate request processing
            res.json({ message: `${queue.name} processed request` });
        });
    });
};

// Start processing queues
processQueues();

module.exports = { queueManager };
