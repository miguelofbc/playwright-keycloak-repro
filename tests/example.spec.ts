import { test, expect, type Page } from '@playwright/test';

test('should already be logged in and can click on tokens', async ({ page }) => {
  // naviagte directly to the admin page since we're signed in
  await page.goto('http://localhost:9090/admin/');

  // Click text=Tokens
  await page.locator('text=Tokens').click();

  await expect(page).toHaveURL('http://localhost:9090/admin/master/console/#/realms/master/token-settings');
  
  // make this test take awhile just to see overlapping tests are OK
  await page.waitForTimeout(10_000);
});