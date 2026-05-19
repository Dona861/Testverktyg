const { test, expect } = require("@playwright/test");

test("öppnar Läslistan", async ({ page }) => {
  await page.goto("https://tap-ht25-testverktyg.github.io/exam/");

  await expect(page.locator("body")).toBeVisible();
});
