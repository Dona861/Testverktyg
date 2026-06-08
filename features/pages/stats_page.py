class StatsPage:
    def __init__(self, page):
        self.page = page

    def navigate_to(self):
        self.page.get_by_role("button", name="Statistik").click()

    def favorite_count(self):

        text_content = self.page.locator("main").inner_text()
        return text_content
