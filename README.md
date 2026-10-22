# Lakshyam Enterprises website

Static website — no server code or database. Pages use clean URLs such as `/products/placement/` and `/product/yrm20/`.

## Preview

Open the folder in VS Code and start **Live Server**, then go to `http://127.0.0.1:5500/` (the site root, not a file).

## Edit content

| What | Where |
|---|---|
| Phone, WhatsApp, email, address, proprietor | `assets/js/config.js` |
| Products, categories, spare parts | `assets/js/data.js` (field guide at the top of the file) |
| Product photos | `assets/img/products/` — machine and family photos |
| Nozzle / feeder model photos | `assets/img/parts/` |
| Page layouts and text (home, about, contact…) | `templates/*.html` |
| Styles | `assets/css/style.css` |

## Rebuild pages after changes

The page folders (`products/`, `product/`, `spare-parts/`, `about/`, `contact/`) and `index.html` are generated. After editing `templates/` or adding, removing or renaming a product, category or brand in `data.js`, run:

```
node tools/build-pages.js
```

Edits to `config.js`, product text in `data.js`, images or CSS show up immediately — no rebuild needed.

## Publish

**Live site:** https://atish-k.github.io/lakshyam-enterprises/ (GitHub Pages, published from the `main` branch).

To update it, commit and push your changes; GitHub republishes within a minute or two:

```
git add -A
git commit -m "Describe the change"
git push
```

The site also works on any other host or a custom domain: upload everything to the web root (for example `public_html`). `templates/` and `tools/` are only needed for editing.

The enquiry form opens the visitor's email app or WhatsApp with the enquiry filled in; nothing is stored on a server.
