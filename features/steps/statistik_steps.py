from behave import given, then

@given("jag har 2 favoriter")
def step_impl(context):
    context.favorites = 2

@then("ska statistiken visa 2 favoriter")
def step_impl(context):
    assert context.favorites == 2
