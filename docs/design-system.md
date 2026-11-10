# Disainisüsteem

Tunniplaani põhivaate kujundusväärtused ja komponendid. Lähtepunkt on kujundussuund A ([directions/A.md](directions/A.md), [image-1.png](directions/image-1.png)).
Kõik väärtused on CSS-muutujatena failis `src/styles/main.css` (`:root`). Uue väärtuse asemel kasuta olemasolevat. Kui uut väärtust on päriselt vaja, lisa see siia ja `:root`-i.

## Värvid

| Muutuja | Väärtus | Kasutus | Kontrast |
|---|---|---|---|
| `--color-primary` | `#b71234` | Järgmise tunni kaardi taust, aktiivse tunni raam, olekusilt („Järgmine") | Valgel u 6,6:1 |
| `--color-on-primary` | `#ffffff` | Tekst ja ikoonid punasel taustal | Punasel u 6,6:1 |
| `--color-accent-green` | `#a4d65e` | HK roheline, ainult rühmatähise ring | Valgel u 1,6:1, seega ainult kaunistus, mitte tekst ega juhtelemendi piir |
| `--color-bg` | `#f3f2f0` | Lehe taust (põhiala) | – |
| `--color-surface` | `#ffffff` | Päis, tunni read | – |
| `--color-text` | `#1a1a1a` | Põhitekst | Valgel u 17:1 |
| `--color-text-muted` | `#595959` | Lisainfo: lõpuaeg, ruum ja õppejõud loendis, nädal, jalus | Valgel u 7:1, taustal u 6,3:1 |
| `--color-border` | `#dcdad6` | Päise alumine joon, vahe rea jooned | Kaunistus |
| `--color-divider-on-primary` | `rgba(255,255,255,0.35)` | Eraldusjoon kaardi sees | Kaunistus |

Kontrastid on arvutatud värvikoodide põhjal. Kontrolli neid ka tööriistaga: https://webaim.org/resources/contrastchecker/

## Kiri

Kirjatüüp: `--font-sans` (süsteemne sans-serif: system-ui, Segoe UI, Roboto, Arial). TLÜ fondifaile projektis pole.

| Roll | Suurus | Paksus | Kus |
|---|---|---|---|
| Kaardi algusaeg | 3rem (≥800 px: 3.5rem) | 700 | „10:00" järgmise tunni kaardil |
| Kaardi aine nimi | 1.5rem (≥800 px: 1.75rem) | 700 | Järgmise tunni kaart |
| Lehe pealkiri (`h1`) | 1.375rem | 700 | „Tunniplaan" |
| Jaotise pealkiri (`h2`) | 1.125rem | 700 | „Päeva tunnid" |
| Tunni algusaeg loendis | 1.125rem | 700 | Tunni rida |
| Põhitekst, aine nimi loendis (`h3`) | 1rem | 400 / 700 | – |
| Lisainfo | 0.875rem | 400 | Lõpuaeg, ruum · õppejõud |
| Väike tekst | 0.8125rem | 400 | Nädal, vahe rida, jalus |
| Ülakirjas silt | 0.75–0.8125rem, suurtähed, tähevahe 0.06–0.08em | 600–700 | „Järgmine tund", „Järgmine", „TLÜ Haapsalu kolledž" |

Reavahe: 1.4 (suurtel numbritel 1, pealkirjadel 1.2).

## Vahed

| Muutuja | Väärtus |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |

## Raadiused ja mõõdud

| Muutuja | Väärtus | Kasutus |
|---|---|---|
| `--radius-s` | 8px | Tunni rida |
| `--radius-m` | 12px | Järgmise tunni kaart |
| `--radius-pill` | 999px | Rühmatähis |
| `--content-width` | 1040px | Sisu maksimumlaius |

## Paigutus

- Mobiil on esimene vaade: päises on bränd ja rühmatähis ühel real, kuupäev keskel nende all. Kaart ja loend on üksteise all.
- **Murdepunkt 800px:** päis on ühel real (bränd | kuupäev | rühm), kaart vasakul ja loend paremal (veerud 5fr / 6fr).

## Komponendid

### Järgmise tunni kaart (`.next-lesson`)
Punane kaart lehe kõige olulisema info jaoks: silt („Järgmine tund" / „Käimasolev tund"), suur algusaeg, „kuni" lõpuaeg, aine nimi, eraldusjoon, ruum ja õppejõud ikoonidega (`dl`).
Kui päeva tunnid on läbi, näitab kaart teksti „Selle päeva tunnid on läbi."

### Tunni rida (`.lesson`)
Valge rida loendis `ol.lesson-list`: vasakul algus- ja lõpuaeg (4rem veerg), paremal olekusilt, aine nimi (`h3`) ja „Ruum · õppejõud".
Olekud: `--next` ja `--current` saavad 2px punase raami ning sildi „Järgmine" / „Käimas". `--past` ja `--upcoming` on ilma raamita.

### Vahe rida (`.lesson-break`)
Väike hall tekst „Vahe 13:15–14:15" joonte vahel. Kuvatakse tundide vahel ainult siis, kui eelmise tunni lõpp ja järgmise algus erinevad. Asub järgmise tunni `li` sees, et loendi elementide arv oleks õige.

### Rühmatähis (`.group-badge`)
Tekst „RIF 2" pillikujulises 2px rohelises ringis. Praegu ei ole see juhtelement. Kui sellest saab rippmenüü, on vaja piirjoont kontrastiga vähemalt 3:1 (WCAG 1.4.11).

### Ikoonid (`.icon`)
Joonikoonid (inline SVG, joone laius 2, värv `currentColor`, 1.125em), alati `aria-hidden="true"`. Praegu on kasutusel asukoht (ruum) ja inimene (õppejõud).

### Abiklassid
- `.visually-hidden`: tekst ainult ekraanilugejale („Rühm:", „Õppejõud:", „kuni").
- `[hidden]` peidab alati, ka siis, kui elemendil on oma `display`.
- `:focus-visible`: 3px punane fookusjoon, 2px vahega.
