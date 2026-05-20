class FavoritesPage {
  constructor(page) {
    this.page = page;
  }

  favorites() {
    return this.page.locator(
      '.favorite-book, .favorited-item, [data-testid="favorite-book"], #favorites-list li, article.favorited',
    );
  }
}

module.exports = { FavoritesPage };
