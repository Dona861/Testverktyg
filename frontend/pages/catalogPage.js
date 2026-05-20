class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://tap-ht25-testverktyg.github.io/exam/");
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForLoadState("networkidle");
  }

  books() {
    return this.page.locator(
      '[data-testid="book"], article, .book-card, .book-item, div.book',
    );
  }

  async clickFavorite(index = 0) {
    const book = this.books().nth(index);

    const btn = book
      .locator('[data-testid="favorite"], button, [role="button"]')
      .first();

    await btn.waitFor({ state: "visible", timeout: 5000 });
    await btn.click();
  }

  favoriteButtons() {
    return this.books()
      .first()
      .locator('[data-testid="favorite"], button, [role="button"]')
      .first();
  }
}

module.exports = { CatalogPage };
