const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { CatalogPage } = require("../pages/catalogPage");

Given("jag är på startsidan", async function () {
  this.catalog = new CatalogPage(this.page);
  await this.catalog.goto();
});

Then("ska jag se en lista med böcker", async function () {
  const firstBook = this.catalog.books().first();
  await expect(firstBook).toBeVisible({ timeout: 15000 });
});
