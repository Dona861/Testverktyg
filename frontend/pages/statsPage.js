class StatsPage {
  constructor(page) {
    this.page = page;
  }

  getFavoriteCount() {
    // Letar efter en sifferindikator i headern, menyraden eller i ett span-element
    return this.page.locator(
      '.favorite-count, .badge, [class*="count"], nav span, #fav-count',
    );
  }
}

module.exports = { StatsPage };
