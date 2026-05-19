const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

// Höj tidsgränsen till 15 sekunder för att ge sidan tid att ladda ordentligt
setDefaultTimeout(15000);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.page = await this.browser.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
