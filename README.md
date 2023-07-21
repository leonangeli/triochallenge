#Trio QA Challenge Cypress Automation Repository
This repository contains automated tests for Microapp using Cypress, addressing the Trio QA challenge.
How to Run Tests
*   Prerequisites
*   
    * Ensure you have Node.js, Cypress, and your IDE/Text editor of preference installed on your system.
    * Clone this repository to your local machine.
*   Run Tests
*   
    * To run all tests in headless mode and generate a report: npx cypress run
    * To run a specified spec in headless mode an generate a report: npx cypress run --spec cypress/e2e/specs/login.spec.cy.js (change login for the name of the desired file)
    * To run tests in interactive mode:  npx cypress open
Folder Structure
* cypress/e2e/pages: Contains the page object files for the Microapp platform
* cypress/e2e/specs: Contains the spec files with the automated scripts of the requested tests.
* cypress/support: Contains custom commands and utility functions.
* cypress/fixtures: Contains test data in JSON format.
* cypress/reports/html: Contains the report files including index.html.
Configuration
* cypress.json: Cypress configuration file.
* cypress.env.json: Environment-specific variables.
Reporting Test results and reports will be automatically generated and stored in the cypress/reports directory.
We welcome feedback and contributions from the team. If you find any issues or have suggestions for improvement, please create a new issue or pull request. Happy testing! 🚀
Agustin Leonangeli
