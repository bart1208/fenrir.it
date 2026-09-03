# fenrir.it

Personal site of **Bartolomeo Pasquale** — software engineer, Seville.
Live at **<https://fenrir.it>**.

Hand-written static HTML and CSS. No framework, no build step, no package manager,
no dependencies beyond Google Fonts. Served from GitHub Pages via `CNAME`.

```
index.html                  home — work, writing, about, contact
writing/intent-givers.html  essay
blog/index.html             redirect, keeps the old post URL alive
style.css                   the whole design system
script.js                   footer year + reveal-on-scroll, and nothing else
wolf.svg / favicon.svg      the mark
og.png                      1200×630 social card
```

## Working on it

Open `index.html` in a browser. That is the whole toolchain.

To regenerate the social card after changing the wording, author it as HTML and screenshot it
with headless Chrome — there is no image editor on the server:

```sh
google-chrome --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --virtual-time-budget=9000 \
  --window-size=1200,630 --screenshot=og.png "file://$PWD/card.html"
```

## Conventions

- **English only.** It was trilingual (en/es/it) via i18next loaded from unpkg; that meant three
  unpinned CDN scripts and every sentence written three times. Removed 2026-09-03.
- **Every project link goes to something that actually responds.** No decorative project lists.
- Prose is written, not generated. If a paragraph cannot say what it means, it is cut.
