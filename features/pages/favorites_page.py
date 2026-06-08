class FavoritesPage:
    def __init__(self, page):
        self.page = page

    def click_favorite(self, index):

        self.page.locator("main").get_by_role("button", name="❤️").nth(index - 1).click()

    def is_favorite_active(self, index):

        self.page.get_by_role("button", name="Mina böcker").click()


        has_books = self.page.locator("main p, main li, main div").get_by_text("by").count() > 0 or \
                    self.page.locator("main").get_by_text("Ormar").count() > 0

        self.page.get_by_role("button", name="Katalog").click()

        return has_books
