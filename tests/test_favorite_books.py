from backend.favorite_books import FavoriteBooks

def test_add_and_remove():
    fb = FavoriteBooks()

    book = {"id": 1}

    fb.add(book)
    assert book in fb.favorites

    fb.remove(book)
    assert book not in fb.favorites
