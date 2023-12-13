Run tests: 
npm run playwright

Report:
npm run allure:report
npm run allure:open

npx playwright test --ui

JSON Parsing:
const responseBody = JSON.parse(await response.text())
    console.log(responseBody)

notes:
Add // @ts-check at the start of each test file when using JavaScript in VS Code to get automatic type checking.

/*
Playwright - позволяет использовать популярные «хуки» в своих тестовых спеках. Вот список самых популярных:
test.beforeEach - запускается перед каждым тестом
test.afterEach - запускается после каждого теста

test.beforeAll - запускается 1 раз перед всеми тестами в спеке
test.AfterAll - запускается 1 раз после всех тестов в спеке
test.describe - логическое объединение в группу
test.describe.parallel
test.describe.only - запуск логической группы
test.only - запуск только этого теста из спеки
test.skip - пропуск теста из спеки
test.fixme - метка о необходимости фиксации
*/