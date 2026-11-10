# Kasutajaliideste-disain

Repository for subject Kasutajaliideste-disain

TLÜ Haapsalu kolledži tunniplaani uus kasutajaliides (kujundussuund A): RIF 2 päevavaade 12.11.2026.

[Figma link lähteinfo jms](https://www.figma.com/design/NyhcnRRWZcO9afyvJfg2Wk/HK-tunniplaan?node-id=1-2&t=VpyIZifrB1K7Gf7c-1)

## Käivitamine

Vaja on [Node.js](https://nodejs.org/)-i (koos npm-iga).

```bash
npm install     # paigaldab sõltuvused (Vite)
npm run dev     # käivitab arendusserveri: http://localhost:5173/
```

Muud käsud:

```bash
npm run build   # loob tootmisversiooni kausta dist/
npm run preview # näitab tootmisversiooni kohalikult
```

## Failistruktuur

- `index.html` – lehe semantiline struktuur ja tunni rea mall (`<template>`)
- `src/main.js` – loeb andmed ja täidab lehe
- `src/data/timetable.js` – kontrollitud tunniplaani andmed
- `src/styles/main.css` – stiilid ja kujundusväärtused (CSS-muutujad)
- `docs/` – lähteülesanne, otsused, disainisüsteem ja kujundussuunad
