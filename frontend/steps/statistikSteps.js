const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { CatalogPage } = require("../pages/catalogPage");

Given("jag har 2 favoriter", async function () {
  this.catalog = new CatalogPage(this.page);
  await this.catalog.goto();

  await this.catalog.clickFavorite(0);
  await this.page.waitForTimeout(500);

  await this.catalog.clickFavorite(1);
  await this.page.waitForTimeout(500);
});

Then("ska statistiken visa 2 favoriter", async function () {
  const bodyText = this.page.locator("body");
  await expect(bodyText).toContainText("2", { timeout: 5000 });
});
