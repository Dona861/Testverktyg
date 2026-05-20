# User Stories – Läslistan

## Katalog

Som användare vill jag kunna se en lista med böcker så att jag kan välja vad jag vill läsa.

### Scenario

- Givet att jag öppnar startsidan
- När sidan laddas
- Då ska jag se en lista med böcker

---

## Favoriter

Som användare vill jag kunna markera en bok som favorit så att jag kan spara böcker jag gillar.

### Scenario 1 – markera favorit

- Givet att jag har en bok i listan
- När jag klickar på favoritknappen
- Då ska boken bli markerad som favorit

### Scenario 2 – ta bort favorit

- Givet att en bok redan är markerad som favorit
- När jag klickar igen på favoritknappen
- Då ska boken inte längre vara favorit

### Scenario Outline – flera klick

| antal klick | förväntat resultat |
| ----------- | ------------------ |
| 1           | favorit = true     |
| 2           | favorit = false    |
| 3           | favorit = true     |

---

## Statistik

Som användare vill jag se hur många favoriter jag har så att jag kan hålla koll på mina val.

### Scenario

- Givet att jag har markerat 2 böcker som favoriter
- Då ska statistiken visa 2 favoriter

---

## Mina böcker

Som användare vill jag kunna se mina favoritböcker i en lista.

### Scenario

- Givet att jag har markerat böcker som favoriter
- Då ska de visas i favoritlistan
