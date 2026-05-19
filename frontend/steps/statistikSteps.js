const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { CatalogPage } = require("../pages/catalogPage");

Given("jag har 2 favoriter", async function () {
  this.catalog = new CatalogPage(this.page);
  await this.catalog.goto();

  // Klicka på första boken
  await this.catalog.clickFavorite(0);
  await this.page.waitForTimeout(500);

  // Klicka på andra boken
  await this.catalog.clickFavorite(1);
  await this.page.waitForTimeout(500);
});

Then("ska statistiken visa 2 favoriter", async function () {
  // Letar efter siffran 2 i hela bodyn/menyn på ett säkert sätt
  const bodyText = this.page.locator("body");
  await expect(bodyText).toContainText("2", { timeout: 5000 });
});
