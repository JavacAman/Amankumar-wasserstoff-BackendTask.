# Intelligent Load Balancer for Multi-API Management

## Overview
This project demonstrates an intelligent load balancer that dynamically routes incoming requests to different API endpoints based on various criteria. It also includes different queuing strategies for handling incoming requests and provides detailed logging and metrics for analysis.

## Milestones

### Milestone 1: Design and Functionality
- **Dynamic Routing**: Routes requests based on API type, randomized routing, and custom criteria.
- **Function Simulation**: Includes mock API endpoints with varied response times and behaviors.
- **Logging and Metrics**: Captures and logs request times, endpoint selection, and response times.
- **Port Management**: Runs the load balancer and mock APIs on different ports.

### Milestone 2: Queue Management and Analysis
- **Queue Management**: Implements FIFO, priority-based, and round-robin queues.
- **Request Handling**: Develops mechanisms to handle and process requests from queues.
- **Logging and Analysis**: Provides detailed metrics and analysis for each queuing strategy.

## Setup and Usage

### Prerequisites
- Node.js installed
- npm (Node Package Manager) installed

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/{CandidateName}/wasserstoff/BackendTask.git
    cd wasserstoff/BackendTask
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the REST API:
    ```bash
    npm run start-rest
    ```

2. Start the GraphQL API:
    ```bash
    npm run start-graphql
    ```

3. Start the gRPC API:
    ```bash
    npm run start-grpc
    ```

4. Start the Load Balancer:
    ```bash
    npm start
    ```

### Testing the Load Balancer

Send requests to the load balancer at `http://localhost:3000` with different headers to test the routing and queuing strategies.

For example:
```bash
curl -H "x-api-type: rest" http://localhost:3000
curl -H "x-api-type: graphql" http://localhost:3000
curl -H "x-api-type: grpc" http://localhost:3000
