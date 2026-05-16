const { test, expect } = require('@playwright/test');

test('Verify Login Functionality', async ({ page }) => {

    await page.goto('http://localhost:3000');

    await page.fill('#username', 'admin');

    await page.fill('#password', '1234');

    await page.click('button');

    await expect(page.locator('#message'))
        .toHaveText('Welcome Admin');

});