# Disainisüsteem

Tunniplaani põhivaate kujundusväärtused ja komponendid. Lähtepunkt on kujundussuund B ([directions/B.md](directions/B.md), [image.png](directions/image.png)).
Kõik väärtused on CSS-muutujatena failis [src/styles/tokens.css](../src/styles/tokens.css) ja vastavad Figma faili [Tunniplaan – Süsteem](https://www.figma.com/design/fvD0NG5egR90XVHLFoBEui/Tunniplaan---S%C3%BCsteem?node-id=30-85) muutujatele.

**Reeglid**

- Komponendid (`src/styles/main.css`) kasutavad ainult semantilisi tokeneid. Primitiive kasutavad ainult tokenid ise.
- Nimi Figmas ja koodis on sama: kaldkriips → sidekriips, värvidel eesliide `color-` (`text/primary` → `--color-text-primary`).
- Uue väärtuse asemel kasuta olemasolevat. Kui uut on päriselt vaja, lisa see Figmasse, faili `tokens.css` ja siia.

## Värvid

### Primitiivid

| Muutuja | Väärtus |
|---|---|
| `--color-red-600` | `#d0043c` |
| `--color-red-800` | `#b20e10` |
| `--color-green-400` | `#a4d65e` |
| `--color-gray-50` | `#f3f6f9` |
| `--color-gray-100` | `#e4eaf0` |
| `--color-gray-400` | `#9aa4a6` |
| `--color-gray-600` | `#5b6566` |
| `--color-gray-800` | `#3c4445` |
| `--color-white` | `#ffffff` |

### Semantilised tokenid

| Muutuja | Viitab | Kasutus |
|---|---|---|
| `--color-surface-page` | gray-100 | Lehe taust |
| `--color-surface-card` | white | Päis, kaardid, tunni rida (mobiilis kõik, desktopis järgmine tund), noolenupud desktopis, hover |
| `--color-surface-card-muted` | gray-50 | Tunni rida desktopis; hover valgel taustal olevatel nuppudel |
| `--color-text-primary` | gray-800 | Põhitekst, pealkirjad, ikoonid |
| `--color-text-secondary` | gray-600 | Lisainfo: lõpuaeg, ainekood, ruum ja õppejõud loendis, nädal, kooli nimi |
| `--color-text-accent` | red-600 | Järgmise tunni kellaaeg |
| `--color-text-on-action` | white | Tekst aktiivsel vaatenupul |
| `--color-action-primary` | red-600 | Aktiivse vaatenupu taust |
| `--color-action-primary-hover` | red-800 | Aktiivse vaatenupu hover |
| `--color-action-secondary` | gray-100 | Vaateriba taust, noolenupud mobiilis |
| `--color-border-accent` | red-600 | Päise ülaserv, järgmise tunni raam, fookusääris |
| `--color-border-default` | gray-800 | Rühmanupu piirjoon |
| `--color-border-subtle` | gray-400 | Kaardi eraldusjoon, puuduva ruumi katkendjoon |
| `--color-status-today` | green-400 | Sildi „Täna" taust |

### Kontrast

Arvutatud värvikoodide põhjal (WCAG 2.2 AA: tekst 4,5:1, juhtelemendi piir ja fookus 3:1).

| Värv | Valgel | gray-50 taustal | gray-100 taustal |
|---|---|---|---|
| `--color-text-primary` | 9,98:1 | 9,20:1 | 8,23:1 |
| `--color-text-secondary` | 6,00:1 | 5,53:1 | 4,95:1 |
| `--color-text-accent` | 5,58:1 | 5,14:1 | 4,60:1 |
| `--color-border-subtle` | 2,55:1 | 2,35:1 | 2,10:1 |

- Valge tekst punasel: 5,58:1, hover'il 7,09:1.
- `--color-text-primary` rohelisel sildil: 5,87:1. `--color-text-secondary` rohelisele ei sobi (3,53:1).
- Roheline valgel on 1,70:1, seega ainult taustaks, mitte tekstiks ega juhtelemendi piiriks.
- `--color-border-subtle` on ainult kaunistuseks: puuduvat ruumi ütleb ka tekst.

## Kiri

Üks font: Inter (Google Fonts, kaalud 400, 600, 700), varuks system-ui ja sans-serif. Primitiiv `--font-family-base`, tokenid `--heading-font-family` ja `--body-font-family`.

Suuruste skaala: `--font-size-xs` 12, `-sm` 14, `-base` 16, `-lg` 20, `-xl` 24, `-2xl` 32, `-3xl` 48 (koodis rem).
Kaalud: `--font-weight-regular` 400, `-semibold` 600, `-bold` 700.

| Stiil Figmas | Suuruse token | Mobiil | Desktop | Kaalu token | Reavahe | Kus |
|---|---|---|---|---|---|---|
| Display/md | `--display-size` | 32 | 48 | `--heading-weight` (700) | 1.2 | Järgmise tunni kellaaeg |
| Headline/md | `--headline-size` | 20 | 32 | `--heading-weight` (700) | 1.2 | Järgmise tunni aine nimi |
| Title/md | `--title-size` | 20 | 24 | `--heading-weight` (700) | 1.2 | „Minu tunniplaan" (`h1`), „Tänased tunnid" (`h2`) |
| Body/md | `--body-size-md` | 16 | 16 | `--body-weight` (400) | 1.4 | Õppejõud kaardil |
| Body/md-strong | `--body-size-md` | 16 | 16 | `--body-weight-strong` (600) | 1.4 | Kuupäev, „Ruum", aine nimi ja algusaeg loendis |
| Body/sm | `--body-size-sm` | 14 | 14 | `--body-weight` (400) | 1.4 | Lõpuaeg, lisainfo, nädal, ruumisilt |
| Label/md | `--label-size` | 12 | 14 | `--label-weight` (600) | 1.2 | Vaatenupud, rühm, silt, „Järgmine tund" (suurtähtedega) |

Reavahe tokenid: `--line-height-heading` 1.2 ja `--line-height-body` 1.4.
Mobiilis muutuvad ainult viited (`@media (width < 40em)` failis `tokens.css`), komponendid fondisuurusi ise üle ei kirjuta.
`tokens.css` sisaldab tekstistiile ka klassidena (`.text-display-md` jne). Põhivaade neid praegu ei kasuta.

## Vahed

Vahe `--space-N` on N × 4 px (koodis rem).

| Muutuja | Väärtus |
|---|---|
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-5` | 20 px |
| `--space-6` | 24 px |
| `--space-8` | 32 px |

Ikoonide mõõduks kasutatakse samuti vahesid: 20 px (`--space-5`) ja 16 px (`--space-4`, rühmanupu nool).

## Raadiused

| Muutuja | Väärtus | Kasutus |
|---|---|---|
| `--radius-sm` | 8 px | Vaateriba ja -nupud, ikoonnupud, ruumisilt |
| `--radius-md` | 16 px | Tunni rida |
| `--radius-lg` | 24 px | Järgmise tunni kaart, päevaloendi kaart desktopis |
| `--radius-full` | 999 px | Silt „Täna", rühmanupp |

## Mõõdud ilma tokenita

Nende jaoks tokenit pole, väärtused on otse failis `main.css`.

| Väärtus | Kus |
|---|---|
| 1 px | Kaardi eraldusjoon |
| 1.5 px | Rühmanupu piir, puuduva ruumi katkendjoon |
| 2 px | Järgmise tunni raam, fookusääris ja selle nihe |
| 4 px | Päise ülaserv |
| 2.75rem (44) | Ikoonnupud, rühmanupu miinimumkõrgus |
| 3rem (48) | Vaateriba miinimumkõrgus |
| 4rem (64) | Tunni rea ajaveerg |
| 23.75rem (380) | Vaateriba laius desktopis |
| 27.5rem (440) | Kuupäevariba laius, kaartide algne laius desktopis |

## Paigutus

Mobiil on esimene. Üks murdepunkt: **40em (640 px)**, komponentides `min-width: 40em`, tokenites `width < 40em`.

- **Mobiil:** päises on pealkiri ja rühm ühel real, nende all kuupäevariba ja vaated. Kaart ja päevaloend on üksteise all. Ainekoodi ja kooli nime ei kuvata.
- **Desktop:** päises on kooli nimi ja pealkiri, vaated ja rühm (kitsamal laiusel murduvad kahele reale). Kuupäevariba on põhialal. Kaart ja päevaloend on kõrvuti, kui mõlemale mahub 440 px, muidu üksteise all.
- 320 px laiusel ei tohi midagi üle joosta.

## Komponendid

### Päis (`header`)
Osad: `header__brand`, `header__school` (ainult desktop), `header__title` (`h1`). Valge taust, ülaservas 4 px punane joon. Kõrgus kasvab sisu järgi.

### Vaated (`view-tabs`, `view-tab`)
`<nav aria-label="Vaade">` nelja võrdse laiusega nupuga: Täna, Homme, Nädal, Kuu. `view-tab--active` on punane ja saab `aria-current="page"`. Hover: aktiivsel `--color-action-primary-hover`, teistel `--color-surface-card`. Nupu külgpolster on väiksem kui Figmas (mobiilis `--space-1`, desktopis `--space-2`), et „HOMME" ära mahuks.

### Rühma valik (`group-select`)
`<button>` noolega. Desktopis „Rühm: RIF 2", mobiilis „RIF 2"; `aria-label` on mõlemal „Rühm: RIF 2". Praegu staatiline.

### Kuupäevariba (`date-nav`)
Osad: `date-nav__prev`, `date-nav__date`, `date-nav__day`, `date-nav__week`, `date-nav__next`. Lehel on kaks koopiat (`header__date-nav` mobiilis, `main__date-nav` desktopis), korraga on nähtav üks. Nupud praegu staatilised.

### Ikoonnupp (`icon-button`)
Ruut 44 × 44 px, alati `aria-label` („Eelmine päev", „Järgmine päev"). Taust mobiilis `--color-action-secondary`, desktopis `--color-surface-card`.

### Järgmise tunni kaart (`next-lesson-card`)
Valge kaart: silt „Järgmine tund" (`h2`) ja `badge`, kellaaeg (`__time`), aine nimi (`__name`, `h3`), ainekood (`__code`, ainult desktop), eraldusjoon, ruum ja õppejõud ikoonidega. Punane on ainult kellaaeg. Sisu on staatiline.

### Silt (`badge`)
Rohelise taustaga olekusilt „Täna", suurtähtedega.

### Ruumisilt (`room-tag`)
`room-tag--missing`: katkendjoon ja tekst „tunniplaanis märkimata". Määratud ruumiga variant on Figmas, kuid koodis pole seda veel vaja olnud: tunniplaanis on 12.11 ruumid märkimata.

### Päevaloend (`day-list`)
Pealkiri „Tänased tunnid" (`h2`), tundide arv ja loend `ol.day-list__items`. Desktopis valge kaart, mobiilis ilma taustata.

### Tunni rida (`lesson-row`)
`li` kahe osaga: `lesson-row__time` (`__start`, `__end`) ja `lesson-row__content` (`__name` ehk `h3`, `__meta`). Lisainfo: „ainekood · ruum · õppejõud", mobiilis ilma ainekoodita. `lesson-row--next` saab 2 px punase raami ja punase algusaja.

### Ikoonid
Joonikoonid Figmast, inline SVG, `stroke="currentColor"`, `aria-hidden="true"`. Kasutusel: nool vasakule, paremale ja alla, asukoht, inimene.

## Üldised reeglid

- **Fookus:** `:focus-visible` on 2 px ääris `--color-border-accent`, 2 px nihkega.
- **Pikk tekst:** aine nimi murdub (`overflow-wrap: anywhere`, `hyphens: auto`, `lang="et"`).
- **Tume teema:** puudub.
