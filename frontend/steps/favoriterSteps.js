const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { CatalogPage } = require("../pages/catalogPage");

let initialButtonState = "";

When("jag klickar favorit {string} gånger", async function (count) {
  if (!this.catalog) {
    this.catalog = new CatalogPage(this.page);
  }

  const btn = this.catalog.favoriteButtons();

  initialButtonState = await btn.evaluate(
    (el) => el.textContent + el.className,
  );

  const clicks = Number(count);
  for (let i = 0; i < clicks; i++) {
    await this.catalog.clickFavorite(0);
    await this.page.waitForTimeout(500);
  }
});

Then("favorit är {string}", async function (status) {
  const btn = this.catalog.favoriteButtons();

  const currentButtonState = await btn.evaluate(
    (el) => el.textContent + el.className,
  );

  if (status === "true") {
    expect(currentButtonState).not.toBe(initialButtonState);
  } else {
    expect(currentButtonState).toBe(initialButtonState);
  }
});
