from behave import given, then
from features.pages.favorites_page import FavoritesPage
from features.pages.stats_page import StatsPage
from features.pages.catalog_page import CatalogPage

@given("jag har 2 favoriter")
def step_impl(context):
    catalog = CatalogPage(context.page)
    catalog.open()

    fav_page = FavoritesPage(context.page)
    fav_page.click_favorite(1)
    fav_page.click_favorite(2)

@then("ska statistiken visa 2 favoriter")
def step_impl(context):
    stats_page = StatsPage(context.page)

    stats_page.navigate_to()

    page_text = stats_page.favorite_count()
    assert "2" in page_text, f"Förväntade mig att hitta siffran 2 i texten: '{page_text}'"
