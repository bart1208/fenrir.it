# fenrir.it

Personal site and manifesto, live at **[fenrir.it](https://fenrir.it)**.

Hand-written HTML, CSS and one file of vanilla JavaScript. No framework, no build step, no
dependencies — the whole site is what you get when you clone it. Served from GitHub Pages on the
apex domain; every `*.fenrir.it` subdomain is a different stack entirely, running on a self-hosted
VPS.

## Structure

| Path | |
|---|---|
| `index.html` | the site |
| `blog/` | long-form writing |
| `locales/{en,es,it}` | translations, loaded client-side — the site is trilingual with no server involved |
| `style.css`, `script.js` | all of the styling and behaviour |
| `wolf.svg` | the mark |
| `STRATEGY.md` | why the site exists, and what it is organised around |
| `CNAME` | apex domain for GitHub Pages |

## The three pillars

`STRATEGY.md` calls the site a *Digital Declaration of Independence* and organises it around three:

- **The Forge** — technical work. Things built rather than assembled.
- **The Observatory** — essays on artificial intelligence, its trajectory, and what it asks of the
  people building it.
- **The Nomad** — geography as a coordinate, not an identity. Sevilla is where the workspace
  happens to be.

## Development

```sh
git clone https://github.com/bart1208/fenrir.it.git
cd fenrir.it
python3 -m http.server 8000   # or any static server
```

Open `http://localhost:8000`. There is nothing to install and nothing to compile.
