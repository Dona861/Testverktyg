# Svar på teorifrågor – Testverktyg

## 1. Skillnad mellan testtyper

**Enhetstester:**
Testar en liten del av systemet isolerat, t.ex. en metod i backend utan beroenden.
I mitt projekt testas t.ex. BookStore.addBook() och toggleFavorite().

**Integrationstester:**
Testar hur olika delar av systemet fungerar tillsammans, t.ex. BookStore och FavoriteBooks.

**Regressionstester:**
Säkerställer att ny kod inte förstör befintlig funktionalitet. I mitt projekt sker detta via att alla Behave- och Pytest-tester körs varje gång.

**Prestandatester:**
Mäter hur systemet fungerar under belastning, t.ex. många böcker eller många klick.

---

## 2. TDD (Test Driven Development)

TDD följer cykeln Red → Green → Refactor:

- Red: skriva ett test som misslyckas
- Green: skriva minsta kod för att testet ska passera
- Refactor: förbättra koden utan att ändra funktion

I mitt backendarbete använde jag detta för BookStore och FavoriteBooks för att säkerställa korrekt logik från början.

---

## 3. Skillnad mellan TDD och BDD

**TDD:**
Fokuserar på kodens funktion och används av utvecklare på kodnivå.

**BDD:**
Fokuserar på användarbeteende och skrivs i Gherkin (Given/When/Then).
I mitt projekt används BDD för frontendtester med Playwright + Behave.

---

## 4. Teststrategi för en liknande webbapp

Jag skulle använda:

**Enhetstester**
För affärslogik i backend (snabb feedback och hög kontroll).

**Integrationstester**
För att säkerställa att klasser och API:er fungerar tillsammans.

**E2E-tester (Playwright + BDD)**
För att testa hela användarflöden i webbläsaren, t.ex. favoriter och navigation.

**Regressionstester via CI**
För att automatiskt upptäcka fel vid nya commits.

Denna kombination ger hög stabilitet och gör systemet lätt att vidareutveckla.
