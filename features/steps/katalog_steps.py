from behave import given, then
from playwright.sync_api import expect  # <-- Lägg till denna import!

@given("jag är på startsidan")
def step_impl(context):
    context.page.goto("https://tap-ht25-testverktyg.github.io/exam/")

@then("ska jag se en lista med böcker")
def step_impl(context):
    # Skapa locatorn för böckerna
    books = context.page.locator("[data-testid='book-item']")

    # expect väntar automatiskt tills det finns minst en bok synlig
    expect(books.first).to_be_visible()
