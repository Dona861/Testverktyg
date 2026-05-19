class FavoritesPage {
  constructor(page) {
    this.page = page;
  }

  favorites() {
    // Hittar favoritmarkerade böcker via klassnamn, listelement eller test-id om det finns
    return this.page.locator(
      '.favorite-book, .favorited-item, [data-testid="favorite-book"], #favorites-list li, article.favorited',
    );
  }
}

module.exports = { FavoritesPage };
