const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { CatalogPage } = require("../pages/catalogPage");

let initialButtonState = "";

When("jag klickar favorit {string} gånger", async function (count) {
  if (!this.catalog) {
    this.catalog = new CatalogPage(this.page);
  }

  const btn = this.catalog.favoriteButtons();

  // Spara hur knappen ser ut i text/klasser INNAN vi gör något alls
  initialButtonState = await btn.evaluate(
    (el) => el.textContent + el.className,
  );

  const clicks = Number(count);
  for (let i = 0; i < clicks; i++) {
    await this.catalog.clickFavorite(0);
    await this.page.waitForTimeout(500); // Vänta på animation/uppdatering
  }
});

Then("favorit är {string}", async function (status) {
  const btn = this.catalog.favoriteButtons();

  // Hämta hur knappen ser ut nu efter alla klick
  const currentButtonState = await btn.evaluate(
    (el) => el.textContent + el.className,
  );

  if (status === "true") {
    // Om den ska vara sann (efter 1 klick), måste den ha ändrats från ursprungsläget
    expect(currentButtonState).not.toBe(initialButtonState);
  } else {
    // Om den ska vara falsk (efter 2 klick), bör den ha gått tillbaka till sitt ursprungliga läge
    expect(currentButtonState).toBe(initialButtonState);
  }
});
