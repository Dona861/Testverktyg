Feature: Favoriter

Scenario Outline: Toggle favorit
  Given jag är på startsidan
  When jag klickar favorit "<clicks>" gånger
  Then favorit är "<status>"

Examples:
  | clicks | status |
  | 1      | true   |
  | 2      | false  |
