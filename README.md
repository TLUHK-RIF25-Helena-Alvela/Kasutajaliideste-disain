# Kasutajaliideste-disain

Repository for subject Kasutajaliideste-disain

TLÜ Haapsalu kolledži tunniplaani uus kasutajaliides (kujundussuund B): RIF 2 päevavaade 12.11.2026.

[Figma link lähteinfo jms](https://www.figma.com/design/NyhcnRRWZcO9afyvJfg2Wk/HK-tunniplaan?node-id=1-2&t=VpyIZifrB1K7Gf7c-1)

[Figma kujundus: Tunniplaan – Süsteem](https://www.figma.com/design/fvD0NG5egR90XVHLFoBEui/Tunniplaan---S%C3%BCsteem?node-id=30-85)

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

- `index.html` – lehe semantiline struktuur ja staatiline sisu
- `src/styles/tokens.css` – disainitokenid (CSS-muutujad)
- `src/styles/main.css` – põhivaate stiilid, kasutab ainult tokeneid
- `docs/` – lähteülesanne, otsused, disainisüsteem ja kujundussuunad
