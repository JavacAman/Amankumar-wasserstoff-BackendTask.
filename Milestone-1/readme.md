# Load Balancer Documentation

## Overview

This project implements a simple load balancer in Node.js that dynamically routes incoming requests to different API endpoints based on specified criteria. The load balancer supports routing to REST, GraphQL, and gRPC API types, with an option for randomized routing to simulate load balancing.

### Project Structure

- **index.js**: Main entry point of the application where the Express server is configured.
- **middleware/logger.js**: Middleware function to log incoming requests and their durations.
- **routing/routeRequest.js**: Module containing the logic to route requests to different API endpoints based on headers or random selection.
- **apis/**:
  - **rest.js**: Mock REST API with simulated response times.
  - **graphql.js**: Mock GraphQL API with simulated response times.
  - **grpc.js**: Mock gRPC API with simulated response times.

### Dependencies

- `express`: Web framework for Node.js.
- `axios`: HTTP client for making requests to API endpoints.

## Setup Instructions

1. **Clone the Repository:**
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Run the Load Balancer:**
   ```
   npm start
   ```
   This will start the Express server on port 3000 by default. You can specify a different port using the `PORT` environment variable.

## Code Documentation

### Middleware: logger.js
Middleware function to log incoming requests and their durations.


### Routing: routeRequest.js
Module to route requests to different API endpoints based on headers or random selection.


### Mock APIs
Each mock API simulates different API types (REST, GraphQL, gRPC) with varying response times.

#### REST API (rest.js)

#### GraphQL API (graphql.js)

## Additional Notes

- The load balancer dynamically routes requests based on headers (`x-api-type`) or randomly if no header is provided.
- Logging middleware (`logger.js`) logs each incoming request and its duration for analysis.
- Error handling is implemented to return a 500 status code if there is an error routing the request.
- Mock APIs (`rest.js`, `graphql.js`, `grpc.js`) simulate different API behaviors with random response times.
