# Svar på teorifrågor – Testverktyg

---

## 1. Skillnad mellan enhetstest, integrationstest, regressionstest och prestandatest

**Enhetstest (unit test):**
Testar en liten del av koden, t.ex. en funktion eller metod isolerat.
Exempel: testa `addBook()` i BookStore.

**Integrationstest:**
Testar att flera delar fungerar tillsammans.
Exempel: BookStore och FavoriteBooks som samverkar.

**Regressionstest:**
Testar att gamla funktioner fortfarande fungerar efter ändringar i koden.

**Prestandatest:**
Testar hur snabbt eller effektivt systemet fungerar under belastning.

---

## 2. Hur TDD fungerar

TDD (Test Driven Development) innebär att man:

1. Skriver ett test först (som initialt misslyckas)
2. Skriver kod som gör att testet passerar
3. Förbättrar koden (refaktorering)

Det gör att man bygger koden utifrån krav och säkerställer att den fungerar steg för steg.

---

## 3. Skillnad mellan BDD och TDD

**TDD:**

- Fokuserar på kod och funktioner
- Skriver tester på utvecklarnivå

**BDD:**

- Fokuserar på användarbeteende
- Skriver tester som user stories (Given/When/Then)
- Är mer förståeligt för icke-tekniska personer

---

## 4. Vilka tester jag skulle använda i en liknande webbsida och varför

Jag skulle använda flera typer av tester:

- **Enhetstester:** för backend-logik (t.ex. bokhantering)
- **Integrationstester:** för att se att favoritlistan och boklistan fungerar tillsammans
- **End-to-end tester (E2E):** för att testa hela flödet i webbläsaren
- **Regressionstester:** för att säkerställa att nya ändringar inte förstör tidigare funktioner

Jag skulle också använda BDD för frontend eftersom det gör testerna lättare att förstå och kopplar dem till användarens beteende.

Detta gör systemet stabilt och lätt att vidareutveckla.
