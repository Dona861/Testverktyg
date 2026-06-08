from behave import given, then
from playwright.sync_api import expect
from features.pages.catalog_page import CatalogPage

@given("jag är på startsidan")
def step_impl(context):
    context.catalog = CatalogPage(context.page)
    context.catalog.open()

@then("ska jag se en lista med böcker")
def step_impl(context):
    expect(context.catalog.first_book()).to_be_visible()
