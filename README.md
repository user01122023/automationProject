# 🎭 Playwright


## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox, WebKitwith a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

## Installation

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

### Using init command

The easiest way to get started with Playwright Test is to run the init command.

```Shell
# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
```

This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

### What's Installed

Playwright will download the browsers needed as well as create the following files.

playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts

The playwright.config is where you can add configuration for Playwright including modifying which browsers you would like to run Playwright on. If you are running tests inside an already existing project then dependencies will be added directly to your package.json.

The tests folder contains a basic example test to help you get started with testing. For a more detailed example check out the tests-examples folder which contains tests written to test a todo app.


## Running the Test
Run all the tests:   npx playwright test

Run a single test file: npx playwright test tests/account.spec.ts

Run tests in interactive UI mode, with a built-in watch mode (Preview): npx playwright test --ui

### Framework consists from next directories:
#/data - login payload(env,key)  
#/schemas - order_info_schema, shoppingcart_schema - json schemas  
#/tests - contain tests for each endpoint  
#/tests/utils - reusable code for tests  
#.env - dev and prod enviroments  
#/allure-results, playwright-report - - reports  
#playwright.config.js - configuration for Playwright  
#/tests/DataBase.js - connection with MySQL Database  
#/tests/account.spec.js - Endpoints for OpenCart Store (eurosmeta.com) connected to database.  

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
