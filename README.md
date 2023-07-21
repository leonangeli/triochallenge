#Trio QA Challenge Cypress Automation Repository

This repository contains automated tests for Microapp using Cypress.
How to Run Tests
* 		Prerequisites
    * Ensure you have Node.js installed on your system.
    * Clone this repository to your local machine.
* 		Install Dependencies  Copy codenpm install   
* 		Configure Test Environment
    * Open cypress.env.json and set the required environment variables.
* 		Run Tests
    * To run all tests in headless mode: bash  Copy codenpm test   
    * To run tests in interactive mode: arduino  Copy codenpm run test:interactive
      
Folder Structure
* cypress/integration: Contains test files organized by feature or functionality.
* cypress/support: Contains custom commands and utility functions.
* cypress/fixtures: Contains test data in JSON format.
* cypress/plugins: Contains custom plugins for Cypress.

Configuration
* cypress.json: Cypress configuration file.
* cypress.env.json: Environment-specific variables.
  
Reporting
Test results and reports will be automatically generated and stored in the cypress/reports directory.
CI/CD Integration
This repository is integrated with [CI/CD tool name] for automated test execution on every push and pull request.
Feedback and Contributions
We welcome feedback and contributions from the team. If you find any issues or have suggestions for improvement, please create a new issue or pull request.
Happy testing! 🚀
[Author Name]
