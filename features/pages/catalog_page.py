class CatalogPage:
    def __init__(self, page):
        self.page = page

    def open(self):
        self.page.goto("https://tap-ht25-testverktyg.github.io/exam/")

    def first_book(self):
        return self.page.get_by_text("Ormar på ett plan: En Python-berättelse")
