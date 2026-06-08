# User Stories – Läslistan

## Katalog

Som användare vill jag kunna se en lista med böcker så att jag kan välja vad jag vill läsa.

### Scenario

- Givet att jag är på startsidan
- När sidan har laddats
- Då ska jag se en lista med böcker

---

## Favoriter

Som användare vill jag kunna markera och avmarkera böcker som favoriter så att jag kan spara böcker jag gillar.

### Scenario 1 – markera favorit

- Givet att jag är på startsidan
- När jag klickar på favoritknappen för en bok
- Då ska boken markeras som favorit

---

### Scenario 2 – ta bort favorit

- Givet att en bok redan är markerad som favorit
- När jag klickar på favoritknappen igen
- Då ska boken tas bort från favoriter

---

### Scenario Outline – toggle flera gånger

Som användare vill jag kunna klicka flera gånger på favoritknappen för att växla status.

| Klick | Förväntat resultat |
| ----- | ------------------ |
| 1     | true               |
| 2     | false              |
| 3     | true               |
| 4     | false              |

---

## Statistik

Som användare vill jag se hur många favoriter jag har så att jag kan hålla koll på mina val.

### Scenario

- Givet att jag har markerat böcker som favoriter
- När jag går till statistikvyn
- Då ska antalet favoriter visas korrekt

---

## Mina böcker

Som användare vill jag kunna se mina sparade favoritböcker så att jag snabbt hittar dem.

### Scenario

- Givet att jag har markerat böcker som favoriter
- När jag går till vyn "Mina böcker"
- Då ska endast mina favoritböcker visas
