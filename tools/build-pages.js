#!/usr/bin/env node
/*
 * Builds the clean-URL pages of the site from templates/*.html and assets/js/data.js:
 *
 *   /                         home                 (index.html)
 *   /products/                all products
 *   /products/<category>/     one category or division
 *   /product/<id>/            product details
 *   /spare-parts/             all spare parts
 *   /spare-parts/<brand>/     one brand
 *   /about/  /contact/        company pages
 *   /404.html                 not-found page
 *
 * Run it again after adding, removing or renaming products, categories or spare-part brands:
 *
 *   node tools/build-pages.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const ctx = { window: {} };
vm.createContext(ctx);
for (const file of ["config.js", "data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "assets/js", file), "utf8"), ctx, { filename: file });
}
const S = ctx.window.SITE;
const C = ctx.window.CATALOG;

const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const templates = {};
for (const name of ["home", "products", "product", "spare-parts", "about", "contact", "404"]) {
  templates[name] = fs.readFileSync(path.join(root, "templates", name + ".html"), "utf8");
}

// Only the folders this script creates are cleared before rebuilding
for (const dir of ["products", "product", "spare-parts", "about", "contact"]) {
  fs.rmSync(path.join(root, dir), { recursive: true, force: true });
}

let count = 0;
function page(file, template, { title, description, attrs = {} }) {
  const dataAttrs = Object.entries(attrs).map(([k, v]) => ` data-${k}="${esc(v)}"`).join("");
  // <base href> points from the page's folder back to the site root, e.g. "../../" for product/<id>/index.html
  const depth = file.split("/").length - 1;
  const base = depth ? "../".repeat(depth) : "./";
  const html = templates[template]
    .replace("{{base}}", () => base)
    .replace("{{title}}", () => esc(title))
    .replace("{{description}}", () => esc(description))
    .replace("{{attrs}}", () => dataAttrs);
  const out = path.join(root, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  count++;
}

const site = S.name;
page("index.html", "home", {
  title: `${site} | Pick & Place Machines, SMT Equipment, Nozzles & Feeders`,
  description: `${site}, Bangalore — ${S.tagline.toLowerCase()}: pick-and-place machines, SMT production and inspection equipment, nozzles, feeders, spare parts and consumables.`
});

page("products/index.html", "products", {
  title: `Products | ${site}`,
  description: "SMT and electronics assembly equipment, pick-and-place machines, inspection systems, nozzles, feeders, process tools and consumables."
});
for (const c of C.categories) {
  page(`products/${c.id}/index.html`, "products", { title: `${c.name} | ${site}`, description: c.blurb, attrs: { cat: c.id } });
}
for (const d of C.divisions) {
  page(`products/${d.id}/index.html`, "products", { title: `${d.name} | ${site}`, description: d.blurb, attrs: { div: d.id } });
}

for (const p of C.products) {
  page(`product/${p.id}/index.html`, "product", { title: `${p.name} (${p.model}) | ${site}`, description: p.summary, attrs: { id: p.id } });
}

const brandNames = C.spares.map((b) => b.name).join(", ");
page("spare-parts/index.html", "spare-parts", {
  title: `Spare Parts | ${site}`,
  description: `Nozzles, feeders and spare parts for ${brandNames} SMT machines.`
});
for (const b of C.spares) {
  page(`spare-parts/${b.id}/index.html`, "spare-parts", { title: `${b.name} Spare Parts | ${site}`, description: b.note, attrs: { brand: b.id } });
}

page("about/index.html", "about", {
  title: `About Us | ${site}`,
  description: `${site}, Bangalore — ${S.tagline}. SMT equipment, spare parts and consumables with consulting, installation and after-sales support.`
});
page("contact/index.html", "contact", {
  title: `Contact & Enquiry | ${site}`,
  description: `Contact ${site} in Bangalore for SMT machines, nozzles, feeders, spare parts and consumables. Call ${S.phone} or send an enquiry.`
});
page("404.html", "404", { title: `Page not found | ${site}`, description: "The page you are looking for could not be found." });

console.log(`Built ${count} pages.`);
