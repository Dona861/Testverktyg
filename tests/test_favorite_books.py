from backend.favorite_books import FavoriteBooks

from backend.favorite_books import FavoriteBooks


def test_add_and_remove():
    fb = FavoriteBooks()

    book = {"id": 1}

    fb.add(book)
    assert len(fb.favorites) == 1

    fb.remove(book)
    assert len(fb.favorites) == 0
