from backend.bookstore import BookStore
from backend.favorite_books import FavoriteBooks

def test_integration():
    store = BookStore()
    fav = FavoriteBooks()

    book = store.addBook("A", "B")

    store.toggleFavorite(book["id"])
    fav.add(book)

    assert book in fav.favorites
    assert book["favorite"] is True
