from behave import when, then
from features.pages.favorites_page import FavoritesPage

@when('jag klickar favorit "{clicks}" gånger')
def step_impl(context, clicks):
    context.fav = FavoritesPage(context.page)

    for _ in range(int(clicks)):
        context.fav.click_favorite(1)

@then('favorit är "{status}"')
def step_impl(context, status):
    is_active = context.fav.is_favorite_active(1)
    expected = status.lower() == "true"
    assert is_active == expected
