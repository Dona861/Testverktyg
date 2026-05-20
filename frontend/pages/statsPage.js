class StatsPage {
  constructor(page) {
    this.page = page;
  }

  getFavoriteCount() {
    return this.page.locator(
      '.favorite-count, .badge, [class*="count"], nav span, #fav-count',
    );
  }
}

module.exports = { StatsPage };
