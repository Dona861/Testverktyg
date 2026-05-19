class FavoriteBooks:
    def __init__(self):
        self.favorites = []

    def add(self, book):
        if book not in self.favorites:
            self.favorites.append(book)

    def remove(self, book):
        if book in self.favorites:
            self.favorites.remove(book)
