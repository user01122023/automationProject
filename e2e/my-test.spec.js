import { test, expect } from '@playwright/test';

test.describe('my first describe', async () => {
  test.use({ viewport: { width: 1280, height: 1024 } }); //установка разрешение браузера. Объявляется перед тестом

  test('test valid', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    //await page.pause(); //Пауза (Playwright Inspector) теста при которой можно вызвать DevTools
    await expect(title).toHaveText('Playwright');
  });

  test('test invalid', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playw_right');
  });
});

/*
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test.only('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test.skip('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
*/

/*
Playwright - позволяет использовать популярные «хуки» в своих тестовых спеках. Вот список самых популярных:
test.beforeEach - запускается перед каждым тестом
test.afterEach - запускается после каждого теста

test.beforeAll - запускается 1 раз перед всеми тестами в спеке
test.AfterAll - запускается 1 раз после всех тестов в спеке
test.describe - логическое объединение в группу
test.describe.only - запуск логической группы
test.only - запуск только этого теста из спеки
test.skip - пропуск теста из спеки
test.fixme - метка о необходимости фиксации
*/
