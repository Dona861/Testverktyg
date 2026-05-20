class FavoriteBooks:
    def __init__(self):
        self.favorites = []

    def add(self, book):
        if not any(b["id"] == book["id"] for b in self.favorites):
            self.favorites.append(book)

    def remove(self, book):
        self.favorites = [
            b for b in self.favorites
            if b["id"] != book["id"]
        ]
