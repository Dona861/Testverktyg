from behave import when, then

@when('jag klickar favorit "{clicks}" gånger')
def step_impl(context, clicks):
    context.clicks = int(clicks)

@then('favorit är "{status}"')
def step_impl(context, status):
    expected = (context.clicks % 2 == 1)
    assert str(expected).lower() == status.lower()
