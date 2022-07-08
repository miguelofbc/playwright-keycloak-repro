import { chromium, expect } from "@playwright/test";
export default async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:9090/');  
    await page.locator('text=Administration Console').click();
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('admin');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('admin');  
    await page.locator('input:has-text("Sign In")').click();
    // check we're actually signed in
    await expect(page.locator('text=Tokens')).toBeVisible();
    await context.storageState({ path: './storage.json' });
    await context.close();
    await browser.close();
}