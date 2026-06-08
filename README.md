# Exam Project – Läslistan (TAP HT25D)

## Beskrivning

Detta projekt innehåller automatiserade tester för webbapplikationen "Läslistan".

Testerna är skrivna med:

- Python
- Behave (BDD)
- Playwright (E2E tester)
- Pytest (backend tester)
- Page Object Model (POM)

---

## Testade funktioner

### Frontend (BDD / Playwright)

Följande funktionalitet testas:

- 📚 Katalog
  - Kontroll att boklista visas korrekt vid sidladdning

- ❤️ Favoriter
  - Markera bok som favorit
  - Avmarkera favorit
  - Toggle-funktion (flera klick)
  - Scenario Outline används för flera testfall

- 📊 Statistik
  - Kontroll att antal favoriter visas korrekt

- 📖 Mina böcker
  - Kontroll att endast sparade favoriter visas

---

### Backend (Pytest)

- BookStore:
  - addBook()
  - toggleFavorite()

- FavoriteBooks:
  - add()
  - remove()

- Integrationstest mellan klasserna

---

## Design / Struktur

Projektet använder Page Object Model:

- `CatalogPage`
- `FavoritesPage`

Det gör testerna mer återanvändbara och lättare att underhålla.

---

## Kör tester

### Installera beroenden

```bash
pip install -r requirements.txt
```
