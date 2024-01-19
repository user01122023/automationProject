# 🎭 Playwright


# OpenCart API Automation Project

This project automates API testing for OpenCart using the Playwright framework and JavaScript. The main focus is on testing various functionalities like cart, currency, customers, orders, and vouchers. Additionally, the project incorporates Continuous Integration/Continuous Deployment (CI/CD) practices using GitHub and Jenkins, with dedicated pipelines for test case execution. Playwright-reports and Allure reports are integrated for comprehensive project reporting.

## Project Structure

### Tests
- The `tests` directory contains test files written in Playwright, each corresponding to a specific area of functionality or feature.

### Data
- The `data` directory holds files related to test data and data generation.
  - `login.js`: Contains login_payload with TEST_USERNAME and TEST_KEY from .env, configurations related to user login.
  - `payloadGenerator.js`: Modules for generating fake test payloads using Faker.js.
  - `.env`: Configuration file with environment-specific variables: TEST_ENV, TEST_USERNAME, TEST_KEY.

### Schemas
- The `schemas` directory holds schema files defining the expected structure of data, used for validating API responses.
  - `order_info_schema.js`: Schema definition for order information structure.
  - `shoppingcart_schema.js`: Schema definition for shopping cart data structure.

### Utils
- The `utils` directory contains utility files/modules providing common functionality across tests.
  - `APIutils.js`: Utility functions related to API interactions, with methods for different API requests.
  - `DataBase.js`: Functions related to retrieving data from the database for verifying responses.

### Configuration Files
- `.gitignore`: Specifies files and directories ignored by Git.
- `.prettierrc`: Configuration file for Prettier, a code formatter, defining code formatting rules.
- `README.md`: Documentation file providing information about the project.
- `package-lock.json`: Auto-generated file locking down specific package versions for consistent builds.
- `package.json`: Configuration file with metadata, dependencies, and scripts for tasks like running tests, building the project, etc.

### Dependencies
- `devDependencies`:
  - `@faker-js/faker`: Generates massive amounts of fake (but realistic) data for testing.
  - `allure-playwright`: Generates reports.
  - `chai-json-schema-ajv`: Chai plugin for validating JSON schema.

- `Dependencies`:
  - `ajv`: Used for complex data validation logic via declarative schemas for JSON data.
  - `chai`: BDD/TDD assertion library for Node.js and the browser.
  - `dotenv`: Loads environment variables from a .env file into process.env.
  - `Mysql2`: Node.js client for integrating with the database.

- `playwright.config.js`: Configurations of the project, including the test directory, reporter, baseURL, and supported browsers.

## Running the Tests
- Optionally, create a log file with all logs from test results using the following command:DEBUG=* DEBUG_FILE=logs.txt npx playwright test 

### Assertions:
In Playwright, you can use the expect function to perform assertions. Here's how you can transform the above Chai assertions to Playwright:
const { expect } = require('playwright')

await expect(page).toEqual(expected)  
await expect(page).toStrictEqual(expected)  
await expect(page).toDeepEqual(expected)  
await expect(page).toBeTrue(val)  
await expect(page).toBeFalse(val)  
await expect(page).toBeNull(val)  
await expect(page).toNotBeNull(val)  
await expect(page).toBeUndefined(val)  
await expect(page).toBeDefined(val)  
await expect(page).toBeFunction(val)  
await expect(page).toBeObject(val)  
await expect(page).toBeArray(val)  
await expect(page).toBeString(val)  
await expect(page).toBeNumber(val)  
await expect(page).toBeBoolean(val)  
await expect(page).toBeInstanceOf(val, RegExp)  
await expect(page).toContain(val, a)  
await expect(page).toMatch(val, /regexp/)  
await expect(page).toHaveProperty(obj, 'tea')  
await expect(page).toHaveDeepProperty(obj, 'tea.green')  
await expect(page).toHaveProperty(person, 'name', 'John')  
await expect(page).toHaveDeepProperty(post, 'author.name', 'John')  
await expect(page).toHaveLength(object, 3)  
await expect(page).toThrow(function() { ... })  
await expect(page).toThrow(function() { ... }, /reference error/)  
await expect(page).toNotThrow()  
await expect(page).toBeLessThan(1, 2)  
await expect(page).toBeCloseTo(actual, expected)  



### Powerful Tooling

**[Codegen](https://playwright.dev/docs/codegen)**. Generate tests by recording your actions. Save them into any language.

**[Playwright inspector](https://playwright.dev/docs/inspector)**. Inspect page, generate selectors, step through the test execution, see click points and explore execution logs.

**[Trace Viewer](https://playwright.dev/docs/trace-viewer)**. Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source and many more.


## Resources

* [Documentation](https://playwright.dev/docs/intro)
* [API reference](https://playwright.dev/docs/api/class-playwright/)
* [Contribution guide](CONTRIBUTING.md)
* [Changelog](https://github.com/microsoft/playwright/releases)
