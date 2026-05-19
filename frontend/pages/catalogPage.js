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
    // Hittar bok-korten på sidan
    return this.page.locator(
      '[data-testid="book"], article, .book-card, .book-item, div.book',
    );
  }

  async clickFavorite(index = 0) {
    // 1. Hitta först rätt bok baserat på index (t.ex. första boken = index 0)
    const book = this.books().nth(index);

    // 2. Leta efter favoritknappen ENBART inuti det specifika bok-kortet
    // Den kollar efter test-id, hjärtan, stjärnor eller vanliga knappar inuti boken
    const btn = book
      .locator('[data-testid="favorite"], button, [role="button"]')
      .first();

    // 3. Vänta på att knappen syns och klicka
    await btn.waitFor({ state: "visible", timeout: 5000 });
    await btn.click();
  }

  favoriteButtons() {
    // Används av Then-steget för att kontrollera status på första boken
    return this.books()
      .first()
      .locator('[data-testid="favorite"], button, [role="button"]')
      .first();
  }
}

module.exports = { CatalogPage };
