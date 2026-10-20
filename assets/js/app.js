/* ==========================================================================
   Lakshyam Enterprises — shared layout, enquiry list and page logic
   ========================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  const S = window.SITE;
  const C = window.CATALOG;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const params = new URLSearchParams(location.search);
  const telHref = "tel:" + S.phone.replace(/[^\d+]/g, "");
  const tel2Href = "tel:" + String(S.phone2 || "").replace(/[^\d+]/g, "");
  const waHref = (text) => `https://wa.me/${S.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;

  const partImg = (name) => `assets/img/parts/${name}.jpg`;

  // Every model in a product's gallery is also listed on the spare parts page under spare.brand.
  // Spare rows: [part, part no., fits, image, product id]
  C.spares.forEach((b) => {
    const rows = [];
    C.products.filter((p) => p.spare && p.spare.brand === b.id).forEach((p) => {
      (p.gallery || [[p.model, null]]).forEach(([code, img]) => rows.push([p.spare.label, code, p.spare.fits, img ? partImg(img) : p.image, p.id]));
    });
    b.parts = rows.concat(b.parts);
  });

  const catById = Object.fromEntries(C.categories.map((c) => [c.id, c]));
  const divById = Object.fromEntries(C.divisions.map((d) => [d.id, d]));
  const productById = Object.fromEntries(C.products.map((p) => [p.id, p]));
  const countInCat = (id) => C.products.filter((p) => p.cat === id).length;
  const catsInDiv = (id) => C.categories.filter((c) => c.div === id);
  const totalParts = C.spares.reduce((n, b) => n + b.parts.length, 0);
  const oemBrands = C.spares;

  /* ---------------- Icons ---------------- */
  const ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkc: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 12h6M9 16h6"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    star: '<path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>'
  };
  const ic = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  // Lakshyam Enterprises logo: climbing figure, tricolour star, rising bars (currentColor) and green globe swoosh
  const logo = `<svg class="brand-mark" viewBox="0 0 100 100" aria-hidden="true">
      <defs><linearGradient id="lk-tricolor" x1="0" y1="1" x2="0" y2="19.1" gradientUnits="userSpaceOnUse">
        <stop offset="0.38" stop-color="#F7931E"/><stop offset="0.38" stop-color="#FFFFFF"/>
        <stop offset="0.64" stop-color="#FFFFFF"/><stop offset="0.64" stop-color="#1E9A4A"/></linearGradient></defs>
      <path d="M26.5 97 C27 86 37 79.5 52 79 C67 78.5 78 85 79.5 97 Z" fill="#1E9A4A"/>
      <path d="M41 80 C37 86 36.5 91 37.5 97 M52.5 79 V97 M64 79.5 C68 85 68.5 91 67.5 97" fill="none" stroke="#FFFFFF" stroke-width="2.6"/>
      <path d="M2 80.5 C20 77.5 40 74 55 69 C72 63 88 51 97.6 27.5 C96.5 45 90 58 80 66.5 C68 76.5 45 83 2 80.5 Z" fill="#1E9A4A"/>
      <g fill="currentColor">
        <path d="M20.5 62.5 H31.5 V75.6 C27.8 76.2 24.2 76.7 20.5 77.1 Z"/><path d="M35.5 54 H46.5 V72.2 C42.8 73.1 39.2 73.9 35.5 74.6 Z"/>
        <path d="M51 45.5 H61.5 V66.8 C58 68 54.5 69.1 51 70.1 Z"/><path d="M66 40 H77 V59.4 C73.4 61.6 69.7 63.4 66 64.9 Z"/>
      </g>
      <g fill="none" stroke="#F7931E" stroke-linecap="round" stroke-linejoin="round">
        <path d="M47.5 18.5 L38.5 35.5" stroke-width="9.5"/><path d="M50 20 L72.5 16.2" stroke-width="5.2"/>
        <path d="M45 21.5 L30.5 25 L28.5 28.5" stroke-width="5"/><path d="M41 35 L51 35.5 L52.5 43.5" stroke-width="6.2"/>
        <path d="M37.5 36.5 L31.5 44.5 L28 56" stroke-width="6.2"/>
      </g>
      <circle cx="51" cy="10" r="5.3" fill="#F7931E"/>
      <path d="M82 1 L84.47 7.6 L91.51 7.91 L85.99 12.3 L87.88 19.09 L82 15.2 L76.12 19.09 L78.01 12.3 L72.49 7.91 L79.53 7.6 Z" fill="url(#lk-tricolor)" stroke="#C9CFD8" stroke-width="0.5" stroke-linejoin="round"/>
      <circle cx="82" cy="10.2" r="2.1" fill="none" stroke="#1B3A8A" stroke-width="0.7"/><circle cx="82" cy="10.2" r="0.6" fill="#1B3A8A"/>
    </svg>`;
  const brand = `<a class="brand" href="./" aria-label="${esc(S.name)} home">${logo}
      <span class="brand-text"><span class="brand-name">Lakshyam Enterprises</span><span class="brand-sub">${esc(S.tagline)}</span></span></a>`;

  /* ---------------- Enquiry list (stored per browser) ---------------- */
  const KEY = "lakshyam-enquiry";
  let memory = [];
  function readList() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) { return memory; }
  }
  function writeList(list) {
    memory = list;
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* storage unavailable: keep in memory */ }
    syncEnquiryUI();
  }
  const inList = (key) => readList().some((i) => i.key === key);
  function toggleItem(item) {
    const list = readList();
    const idx = list.findIndex((i) => i.key === item.key);
    if (idx >= 0) { list.splice(idx, 1); writeList(list); toast(`Removed from enquiry list`); }
    else { list.push(item); writeList(list); toast(`Added to enquiry list`, true); }
  }
  function removeItem(key) { writeList(readList().filter((i) => i.key !== key)); }

  function enqAttrs(item) {
    return `data-enq-key="${esc(item.key)}" data-enq-name="${esc(item.name)}" data-enq-ref="${esc(item.ref)}" data-enq-type="${esc(item.type)}"`;
  }
  const productItem = (p) => ({ key: "p:" + p.id, name: p.name, ref: p.model, type: "Product", id: p.id });
  const partItem = (brandName, row) => ({ key: `s:${brandName}:${row[1]}:${row[0]}`, name: `${row[0]} (${brandName})`, ref: row[1], type: "Spare part" });

  function iconEnqButton(item) {
    return `<button class="icon-btn" type="button" ${enqAttrs(item)} aria-pressed="false" aria-label="Add ${esc(item.name)} to enquiry list">${ic("plus")}</button>`;
  }

  function syncEnquiryUI() {
    const list = readList();
    $$("[data-enq-count]").forEach((el) => { el.textContent = list.length; el.dataset.empty = list.length ? "false" : "true"; });
    const keys = new Set(list.map((i) => i.key));
    $$("[data-enq-key]").forEach((btn) => {
      const on = keys.has(btn.dataset.enqKey);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      if (btn.classList.contains("icon-btn")) {
        btn.innerHTML = ic(on ? "check" : "plus");
        btn.setAttribute("aria-label", `${on ? "Remove" : "Add"} ${btn.dataset.enqName} ${on ? "from" : "to"} enquiry list`);
      } else if (btn.dataset.labelOn) {
        btn.innerHTML = on ? `${ic("check")}${btn.dataset.labelOn}` : `${ic("plus")}${btn.dataset.labelOff}`;
      }
    });
    if (typeof window.__renderBasket === "function") window.__renderBasket();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-enq-key]");
    if (!btn) return;
    e.preventDefault();
    toggleItem({ key: btn.dataset.enqKey, name: btn.dataset.enqName, ref: btn.dataset.enqRef, type: btn.dataset.enqType });
  });

  /* ---------------- Toast ---------------- */
  let toastTimer;
  function toast(msg, withLink) {
    let el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.innerHTML = `<span>${esc(msg)}</span>${withLink && !document.body.dataset.page.includes("contact") ? '<a href="contact/#enquiry">View list →</a>' : ""}`;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  /* ---------------- Header & footer ---------------- */
  function renderHeader(active) {
    const cur = (k) => (k === active ? 'aria-current="page"' : "");
    const mega = C.divisions.map((d) => `
      <div class="mega-col">
        <h3>${esc(d.name)}</h3>
        ${catsInDiv(d.id).map((c) => `<a href="products/${c.id}/">${esc(c.name)}<span>${countInCat(c.id)}</span></a>`).join("")}
        ${d.id === "supplies" ? `<a href="spare-parts/">Spare Parts<span>${totalParts}</span></a>` : ""}
      </div>`).join("");

    const drawerCats = C.divisions.map((d) => `
      <h4>${esc(d.name)}</h4>
      ${catsInDiv(d.id).map((c) => `<a href="products/${c.id}/">${esc(c.name)}</a>`).join("")}`).join("");

    const html = `
      <a class="skip-link" href="${esc(location.pathname + location.search)}#main">Skip to content</a>
      <div class="topbar"><div class="wrap">
        <span class="tagline">${esc(S.tagline)} · Machines, spares &amp; consumables</span>
        <div class="topbar-links">
          <a href="${telHref}">${ic("phone")}${esc(S.phone)}</a>
          <a class="tb-mail" href="mailto:${esc(S.email)}">${ic("mail")}${esc(S.email)}</a>
        </div>
      </div></div>
      <header class="header"><div class="wrap header-in">
        ${brand}
        <nav class="nav" aria-label="Main">
          <a href="./" ${cur("home")}>Home</a>
          <div class="nav-item">
            <a href="products/" ${cur("products")}>Products ${ic("chev")}</a>
            <div class="mega">
              ${mega}
              <div class="mega-foot"><span>${C.products.length} products across ${C.categories.length} categories</span>
                <a class="link-arrow" href="products/">Browse full catalogue ${ic("arrow")}</a></div>
            </div>
          </div>
          <a href="spare-parts/" ${cur("spares")}>Spare Parts</a>
          <a href="about/" ${cur("about")}>About</a>
          <a href="contact/" ${cur("contact")}>Contact</a>
        </nav>
        <div class="header-actions">
          <a class="btn btn-dark btn-sm enq-btn" href="contact/#enquiry" aria-label="Enquiry list">${ic("clip")}<span class="label">Enquiry list</span><span class="enq-count" data-enq-count data-empty="true">0</span></a>
          <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">${ic("menu")}</button>
        </div>
      </div></header>
      <div class="drawer" id="drawer" aria-hidden="true">
        <div class="drawer-scrim" data-close></div>
        <div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div class="drawer-head">${brand}<button class="burger" style="display:grid" type="button" aria-label="Close menu" data-close>${ic("x")}</button></div>
          <a href="./">Home</a>
          <details><summary>Products ${ic("chev")}</summary><div class="drawer-cats"><a href="products/"><b>All products</b></a>${drawerCats}</div></details>
          <a href="spare-parts/">Spare Parts</a>
          <a href="about/">About</a>
          <a href="contact/">Contact</a>
          <div class="drawer-contact">
            <a class="btn btn-primary" href="contact/#enquiry">${ic("clip")}Enquiry list (<span data-enq-count>0</span>)</a>
            <a class="btn btn-ghost" href="${telHref}">${ic("phone")}${esc(S.phone)}</a>
          </div>
        </div>
      </div>`;
    const mount = $("#site-header");
    if (mount) mount.outerHTML = html;

    const drawer = $("#drawer");
    const openBtn = $(".header .burger");
    const setOpen = (open) => {
      drawer.classList.toggle("open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      openBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      if (open) $(".drawer-panel [data-close]").focus();
      else openBtn.focus();
    };
    openBtn.addEventListener("click", () => setOpen(true));
    $$("[data-close]", drawer).forEach((el) => el.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer.classList.contains("open")) setOpen(false); });
  }

  function renderFooter() {
    const html = `
      <footer class="footer pcb-bg">
        <div class="wrap">
          <div class="footer-grid">
            <div>
              ${brand}
              <p class="footer-about">Machines, spare parts and consumables for SMT and electronics assembly — chosen for your process and supported after delivery.</p>
            </div>
            <div>
              <h4>Products</h4>
              <ul>
                ${C.divisions.map((d) => `<li><a href="products/${d.id}/">${esc(d.name)}</a></li>`).join("")}
                <li><a href="spare-parts/">Spare Parts</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="about/">About us</a></li>
                <li><a href="products/">Product catalogue</a></li>
                <li><a href="contact/">Contact</a></li>
                <li><a href="contact/#enquiry">Request a quote</a></li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <ul class="footer-contact">
                <li>${ic("phone")}<span><a href="${telHref}">${esc(S.phone)}</a>${S.phone2 ? `<br><a href="${tel2Href}">${esc(S.phone2)}</a>` : ""}</span></li>
                <li>${ic("mail")}<a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
                <li>${ic("pin")}<span>${S.address.map(esc).join("<br>")}</span></li>
                <li>${ic("clock")}<span>${esc(S.hours)}</span></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} ${esc(S.name)}. All rights reserved.${S.gstin ? ` · GSTIN ${esc(S.gstin)}` : ""}</span>
            <p>FUJI, Panasonic, Samsung, Hanwha, Yamaha, JUKI, MPM, DEK, HELLER, KIC, DATAPAQ, ECD, NSK, THK, Heraeus and other brand names are trademarks of their respective owners and are used only to identify compatible equipment.</p>
          </div>
        </div>
      </footer>`;
    const mount = $("#site-footer");
    if (mount) mount.outerHTML = html;
  }

  /* ---------------- Shared fragments ---------------- */
  // Image paths in data.js are written from the site root ("assets/..."); pages live in sub-folders
  // Every page has <base href> pointing at the site root, so links and images are written root-relative (no leading "/").
  // That keeps the site working at a domain root, on Live Server, and under a GitHub Pages sub-folder.
  const url = (path) => (/^(https?:)?\/\//.test(path) ? path : String(path).replace(/^\/+/, ""));

  // Product photo, with the line illustration as a fallback if the image file is missing
  function media(p, eager) {
    const c = catById[p.cat];
    const art = `<div class="art${p.image ? " art-fallback" : ""}">${window.artSVG(p.art || c.art)}</div>`;
    if (!p.image) return art;
    return `<img src="${esc(url(p.image))}" alt="${esc(p.name)} ${esc(p.model)}"${eager ? "" : ' loading="lazy"'} onerror="this.parentNode.classList.add('img-missing')">${art}`;
  }
  const thumb = (src, alt) => `<img src="${esc(url(src))}" alt="${esc(alt || "")}" loading="lazy" onerror="this.style.visibility='hidden'">`;
  const coverOf = (catId) => {
    const c = catById[catId];
    return (c.cover && productById[c.cover]) || C.products.find((p) => p.cat === catId && p.image);
  };

  function partRow(b, row) {
    const label = row[4] ? `<a href="product/${esc(row[4])}/">${esc(row[0])}</a>` : esc(row[0]);
    return `<tr>
      <td><span class="part-name">${row[3] ? `<span class="part-thumb">${thumb(row[3], row[1])}</span>` : ""}<span>${label}</span></span></td>
      <td>${esc(row[1])}</td><td>${esc(row[2])}</td><td>${iconEnqButton(partItem(b.name, row))}</td></tr>`;
  }

  function productCard(p) {
    const c = catById[p.cat];
    return `
      <article class="p-card reveal">
        <div class="p-media${p.image ? " has-img" : ""}">${media(p)}<span class="p-model">${esc(p.model)}</span></div>
        <div class="p-body">
          <span class="p-cat">${esc(c.name)}</span>
          <h3><a href="product/${p.id}/">${esc(p.name)}</a></h3>
          <p>${esc(p.summary)}</p>
          <div class="p-actions">
            <a class="btn btn-ghost btn-sm" href="product/${p.id}/">View details</a>
            ${iconEnqButton(productItem(p))}
          </div>
        </div>
      </article>`;
  }

  function observeReveal(root = document) {
    const els = $$(".reveal:not(.in)", root);
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  function haystack(p) {
    const c = catById[p.cat];
    return [p.name, p.model, (p.variants || []).join(" "), p.summary, c.name, (p.features || []).join(" "), (p.apps || []).join(" ")].join(" ").toLowerCase();
  }
  const tokens = (q) => q.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = (text, q) => tokens(q).every((t) => text.includes(t));

  /* ---------------- Page: home ---------------- */
  function pageHome() {
    const tiles = ["ysm20", "s8030", "v300d", "nozzle-fuji-h24"].map((id) => productById[id]).filter(Boolean);
    $("#hero-tiles").innerHTML = tiles.map((p) => `
      <a class="hero-tile" href="product/${p.id}/">
        <div class="tile-img${p.image ? " has-img" : ""}">${media(p, true)}</div>
        <div><b>${esc(p.name)}</b><small>${esc(p.model)}</small></div>
      </a>`).join("");

    $("#stats").innerHTML = [
      [C.products.length, "+", "Machines, tools & consumables"],
      [C.categories.length, "", "Product categories"],
      [oemBrands.length, "", "OEM platforms for spare parts"],
      [totalParts, "+", "Spare part numbers listed"]
    ].map(([n, sup, label]) => `<div class="stat"><b>${n}${sup ? `<sup>${sup}</sup>` : ""}</b><span>${label}</span></div>`).join("");

    const flow = [
      { n: "Load", d: "Magazine loaders & buffers", href: "products/handling/", p: "zl-3" },
      { n: "Print", d: "Stencil printers & paste prep", href: "products/printing/", p: "sp-series" },
      { n: "Inspect paste", d: "3D solder paste inspection", href: "product/s8030/", p: "s8030" },
      { n: "Place", d: "Pick & place, feeders & nozzles", href: "products/placement/", p: "ysm20" },
      { n: "Reflow", d: "Reflow ovens & profilers", href: "products/soldering/", p: "n10" },
      { n: "Inspect joints", d: "AOI, microscopes & FAI", href: "products/inspection/", p: "lx520il" },
      { n: "Depanel", d: "Routers, V-cut & cutters", href: "products/depaneling/", p: "v300d" },
      { n: "THT & wave", d: "Press-fit & wave soldering", href: "products/insertion/", p: "ht450" }
    ];
    $("#flow").innerHTML = flow.map((s, i) => `
      <a class="flow-step reveal" href="${s.href}">
        <span class="flow-node has-img">${media(productById[s.p])}<span class="flow-num">${String(i + 1).padStart(2, "0")}</span></span>
        <b>${s.n}</b><span>${s.d}</span>
      </a>`).join("");

    $("#divisions").innerHTML = C.divisions.map((d) => `
      <div class="div-block">
        <div class="div-head"><h3>${esc(d.name)}</h3><p>${esc(d.blurb)}</p></div>
        <div class="cat-grid">
          ${catsInDiv(d.id).map((c) => `
            <a class="cat-card reveal" href="products/${c.id}/">
              <span class="cat-thumb has-img">${coverOf(c.id) ? media(coverOf(c.id)) : `<span class="art">${window.artSVG(c.art)}</span>`}</span>
              <span><b>${esc(c.name)}</b><p>${esc(c.blurb)}</p><small>${countInCat(c.id)} products →</small></span>
            </a>`).join("")}
          ${d.id === "supplies" ? `
            <a class="cat-card reveal" href="spare-parts/">
              <span class="cat-thumb has-img">${thumb("assets/img/products/fam-juki-rx.jpg", "Spare parts")}</span>
              <span><b>Spare Parts</b><p>Feeder, head, board and printer parts for ${oemBrands.length} OEM platforms.</p><small>${totalParts} part numbers →</small></span>
            </a>` : ""}
        </div>
      </div>`).join("");

    const featured = ["ysm20", "npm-w2", "n10", "s8030", "nozzle-fuji-h24", "feeder-yamaha-zs", "v300d", "smart-shelf"].map((id) => productById[id]).filter(Boolean);
    $("#featured").innerHTML = featured.map(productCard).join("");

    $("#brands").innerHTML = oemBrands.map((b) => `
      <a class="brand-chip" href="spare-parts/${b.id}/"><b>${esc(b.name)}</b><span>${b.parts.length} parts listed</span></a>`).join("");

    const form = $("#hero-search");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = $("input", form).value.trim();
      location.href = "products/" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }

  /* ---------------- Page: products ---------------- */
  function pageProducts() {
    // The route (/products/<category or division>/) is written into <body data-cat / data-div> by the page builder
    const route = document.body.dataset;
    const catParam = route.cat || params.get("cat");
    const divParam = route.div || params.get("div");
    const state = {
      cat: catById[catParam] ? catParam : "",
      div: divById[divParam] ? divParam : "",
      q: params.get("q") || "",
      sort: "default"
    };
    if (state.cat) state.div = "";

    const side = $("#side-groups");
    side.innerHTML = `
      <div class="side-group"><button class="side-link" data-cat="" data-div="">All products<span>${C.products.length}</span></button></div>
      ${C.divisions.map((d) => `
        <div class="side-group">
          <h4>${esc(d.name)}</h4>
          ${catsInDiv(d.id).map((c) => `<button class="side-link" data-cat="${c.id}">${esc(c.name)}<span>${countInCat(c.id)}</span></button>`).join("")}
          ${d.id === "supplies" ? `<a class="side-link" href="spare-parts/">Spare Parts<span>${totalParts}</span></a>` : ""}
        </div>`).join("")}`;

    $("#chip-row").innerHTML = `<button class="tab" role="tab" data-cat="">All</button>` +
      C.categories.map((c) => `<button class="tab" role="tab" data-cat="${c.id}">${esc(c.name)}</button>`).join("") +
      `<a class="tab" href="spare-parts/">Spare Parts</a>`;

    const searchInput = $("#cat-search");
    searchInput.value = state.q;

    function apply() {
      let list = C.products.slice();
      if (state.cat) list = list.filter((p) => p.cat === state.cat);
      else if (state.div) list = list.filter((p) => catById[p.cat].div === state.div);
      if (state.q) list = list.filter((p) => matches(haystack(p), state.q));
      if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
      if (state.sort === "model") list.sort((a, b) => a.model.localeCompare(b.model, undefined, { numeric: true }));

      const scope = state.cat ? catById[state.cat] : state.div ? divById[state.div] : null;
      const title = state.q ? `Results for “${state.q}”` : scope ? scope.name : "All products";
      $("#tb-title").textContent = title;
      $("#tb-sub").textContent = `${list.length} product${list.length === 1 ? "" : "s"}${state.q && scope ? ` in ${scope.name}` : ""}${!state.q && scope && scope.blurb ? ` · ${scope.blurb}` : ""}`;

      $("#grid").innerHTML = list.length ? list.map(productCard).join("") : `
        <div class="empty" style="grid-column:1/-1">
          <h3>No products match your search</h3>
          <p>Try a model number, a machine type such as “reflow” or “splicer”, or send us your requirement and we will find it for you.</p>
          <a class="btn btn-primary" href="contact/?msg=${encodeURIComponent("Looking for: " + state.q)}#enquiry">Ask us to source it</a>
        </div>`;

      // Matching spare parts when searching
      const partsBox = $("#parts-results");
      if (state.q) {
        const hits = [];
        C.spares.forEach((b) => b.parts.forEach((row) => {
          if (matches([row[0], row[1], row[2], b.name].join(" ").toLowerCase(), state.q)) hits.push([b, row]);
        }));
        partsBox.hidden = !hits.length;
        if (hits.length) {
          partsBox.innerHTML = `
            <div class="parts-card" style="margin-top:28px">
              <div class="parts-head"><div><h2>Matching spare parts</h2><p>${hits.length} part${hits.length === 1 ? "" : "s"} found for “${esc(state.q)}”</p></div>
              <a class="link-arrow" href="spare-parts/?q=${encodeURIComponent(state.q)}">Open in spare parts ${ic("arrow")}</a></div>
              <table class="parts-table"><thead><tr><th>Part</th><th>Part no.</th><th>Fits</th><th><span class="sr-only">Add</span></th></tr></thead>
              <tbody>${hits.slice(0, 25).map(([b, row]) => partRow(b, row)).join("")}</tbody></table>
            </div>`;
        }
      } else {
        partsBox.hidden = true;
        partsBox.innerHTML = "";
      }

      $$("[data-cat]").forEach((el) => {
        const on = el.dataset.cat === state.cat && (el.dataset.cat !== "" || !state.div);
        if (el.classList.contains("tab")) el.setAttribute("aria-selected", on ? "true" : "false");
        else el.setAttribute("aria-current", on ? "true" : "false");
      });

      const slug = state.cat || state.div;
      const qs = state.q ? "?q=" + encodeURIComponent(state.q) : "";
      history.replaceState(null, "", "products/" + (slug ? slug + "/" : "") + qs);
      document.title = `${title} | ${S.name}`;
      syncEnquiryUI();
      observeReveal($("#grid"));
    }

    document.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-cat]");
      if (!b) return;
      state.cat = b.dataset.cat;
      state.div = "";
      apply();
      if (window.innerWidth < 960) $("#tb-title").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    let t;
    searchInput.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { state.q = searchInput.value.trim(); apply(); }, 160); });
    $("#cat-search-form").addEventListener("submit", (e) => { e.preventDefault(); state.q = searchInput.value.trim(); apply(); });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; apply(); });
    apply();
  }

  /* ---------------- Page: product detail ---------------- */
  function pageProduct() {
    const p = productById[document.body.dataset.id || params.get("id")];
    const main = $("#product");
    if (!p) {
      main.innerHTML = `<div class="wrap section"><div class="empty"><h3>Product not found</h3><p>The product you are looking for may have moved. Browse the catalogue or ask us directly.</p><a class="btn btn-primary" href="products/">Browse products</a></div></div>`;
      return;
    }
    const c = catById[p.cat];
    const d = divById[c.div];
    const item = productItem(p);
    document.title = `${p.name} ${p.model} | ${S.name}`;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", p.summary);

    const waText = `Hello ${S.name}, I would like a quotation for: ${p.name} (${p.model}).`;
    const highlights = (p.features || []).slice(0, 4);
    const specs = p.specs || [];
    const related = C.products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
    const moreFromDiv = related.length < 4 ? C.products.filter((x) => catById[x.cat].div === c.div && x.cat !== p.cat).slice(0, 4 - related.length) : [];

    // "Available models" grid: each model has its own photo and enquiry button
    const spareBrand = p.spare && C.spares.find((s) => s.id === p.spare.brand);
    const gallery = p.gallery && spareBrand ? `
      <div class="panel panel-wide">
        <h2>${ic("sliders")}${p.gallery.length > 1 ? "Available models" : "Product photo"}${p.gallery.length > 1 ? `<span class="count">${p.gallery.length}</span>` : ""}</h2>
        <div class="gallery${p.gallery.length === 1 ? " gallery-single" : ""}">
          ${p.gallery.map(([code, img]) => `
            <div class="g-item">
              <div class="g-img">${thumb(partImg(img), `${p.name} ${code}`)}</div>
              <div class="g-foot"><b>${esc(code)}</b>${iconEnqButton(partItem(spareBrand.name, [p.spare.label, code, p.spare.fits]))}</div>
            </div>`).join("")}
        </div>
      </div>` : "";

    main.innerHTML = `
      <section class="page-head pcb-bg" style="padding:22px 0">
        <div class="wrap">
          <nav class="crumbs" aria-label="Breadcrumb">
            <a href="./">Home</a>${ic("right")}
            <a href="products/${d.id}/">${esc(d.name)}</a>${ic("right")}
            <a href="products/${c.id}/">${esc(c.name)}</a>${ic("right")}
            <span aria-current="page">${esc(p.model)}</span>
          </nav>
        </div>
      </section>
      <div class="wrap">
        <section class="pd">
          <div class="pd-media${p.image ? " has-img" : ""}">${media(p, true)}<span class="p-model">${esc(p.model)}</span></div>
          <div class="pd-info">
            <a class="eyebrow" href="products/${c.id}/">${esc(c.name)}</a>
            <h1>${esc(p.name)}</h1>
            ${p.variants ? `<div class="variants" aria-label="Available models">${p.variants.map((v) => `<span>${esc(v)}</span>`).join("")}</div>` : ""}
            <p class="pd-summary">${esc(p.summary)}</p>
            ${highlights.length ? `<ul class="pd-highlights">${highlights.map((f) => `<li>${ic("checkc")}<span>${esc(f)}</span></li>`).join("")}</ul>` : ""}
            <div class="pd-cta">
              <button class="btn btn-primary" type="button" ${enqAttrs(item)} data-label-on="Added to enquiry list" data-label-off="Add to enquiry list">${ic("plus")}Add to enquiry list</button>
              <a class="btn btn-ghost" href="${waHref(waText)}" target="_blank" rel="noopener">${ic("chat")}WhatsApp</a>
              <a class="btn btn-ghost" href="${telHref}">${ic("phone")}Call</a>
            </div>
            <p class="pd-note">${ic("info")}<span>Price, lead time and configuration on request. Specifications are as published by the manufacturer and may change without notice.</span></p>
          </div>
        </section>

        <section class="pd-sections">
          ${gallery}
          <div class="panel">
            <h2>${ic("star")}Key features</h2>
            <ul class="feat-list">${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          </div>
          <div class="panel">
            <h2>${ic("sliders")}Technical specifications</h2>
            ${specs.length ? `<table class="spec-table"><tbody>${specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>` : ""}
            <div class="datasheet">${ic("file")}<p>${specs.length ? "Need the full datasheet, dimensions drawing or a configuration for your line?" : "Detailed datasheet available on request."} <a class="link-arrow" href="contact/?product=${p.id}#enquiry">Request it</a></p></div>
          </div>
          ${p.apps && p.apps.length ? `
          <div class="panel panel-wide">
            <h2>${ic("target")}Typical applications</h2>
            <div class="tags">${p.apps.map((a) => `<span>${esc(a)}</span>`).join("")}</div>
          </div>` : ""}
        </section>
      </div>

      ${related.length + moreFromDiv.length ? `
      <section class="section bg-white" style="padding-top:64px">
        <div class="wrap">
          <div class="section-head"><div><span class="eyebrow">Related</span><h2 class="h2">More in ${esc(c.name)}</h2></div>
          <a class="link-arrow" href="products/${c.id}/">View category ${ic("arrow")}</a></div>
          <div class="p-grid">${related.concat(moreFromDiv).map(productCard).join("")}</div>
        </div>
      </section>` : ""}`;
    syncEnquiryUI();
    observeReveal(main);
  }

  /* ---------------- Page: spare parts ---------------- */
  function pageSpares() {
    const brandParam = document.body.dataset.brand || params.get("brand");
    const state = { brand: C.spares.some((b) => b.id === brandParam) ? brandParam : "all", q: params.get("q") || "" };
    const tabs = $("#brand-tabs");
    tabs.innerHTML = `<button class="tab" role="tab" data-brand="all">All brands<span>${totalParts}</span></button>` +
      C.spares.map((b) => `<button class="tab" role="tab" data-brand="${b.id}">${esc(b.name)}<span>${b.parts.length}</span></button>`).join("");
    const input = $("#parts-search");
    input.value = state.q;

    function apply() {
      const brands = state.brand === "all" ? C.spares : C.spares.filter((b) => b.id === state.brand);
      const rows = [];
      brands.forEach((b) => b.parts.forEach((row) => {
        if (!state.q || matches([row[0], row[1], row[2], b.name].join(" ").toLowerCase(), state.q)) rows.push([b, row]);
      }));
      const b0 = state.brand === "all" ? null : brands[0];
      $("#parts-title").textContent = b0 ? `${b0.name} spare parts` : "All spare parts";
      $("#parts-sub").textContent = state.q ? `${rows.length} result${rows.length === 1 ? "" : "s"} for “${state.q}”` : b0 ? b0.note : `${rows.length} frequently requested parts across ${C.spares.length} groups.`;
      $("#parts-body").innerHTML = rows.length
        ? rows.map(([b, row]) => partRow(b, row)).join("")
        : `<tr><td colspan="4" style="padding:28px 22px;color:var(--muted)">No listed part matches “${esc(state.q)}”. Send us the part number using the form — we will check availability.</td></tr>`;
      $$(".tab", tabs).forEach((t) => t.setAttribute("aria-selected", t.dataset.brand === state.brand ? "true" : "false"));
      const qs = state.q ? "?q=" + encodeURIComponent(state.q) : "";
      history.replaceState(null, "", "spare-parts/" + (state.brand !== "all" ? state.brand + "/" : "") + qs);
      syncEnquiryUI();
    }

    tabs.addEventListener("click", (e) => { const t = e.target.closest(".tab"); if (!t) return; state.brand = t.dataset.brand; apply(); });
    let tm;
    input.addEventListener("input", () => { clearTimeout(tm); tm = setTimeout(() => { state.q = input.value.trim(); apply(); }, 160); });
    $("#parts-search-form").addEventListener("submit", (e) => { e.preventDefault(); state.q = input.value.trim(); apply(); });

    $("#part-request").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      const part = f.part.value.trim();
      if (!part) { f.part.focus(); return; }
      const item = { key: `r:${part}:${Date.now()}`, name: `Part request: ${part}${f.machine.value.trim() ? ` (${f.machine.value.trim()})` : ""}`, ref: f.qty.value.trim() ? `Qty ${f.qty.value.trim()}` : "Qty —", type: "Part request" };
      writeList(readList().concat(item));
      location.href = "contact/#enquiry";
    });
    apply();
  }

  /* ---------------- Page: contact ---------------- */
  function pageContact() {
    $("#c-phone").innerHTML = `<a href="${telHref}">${esc(S.phone)}</a>${S.phone2 ? `<a href="${tel2Href}">${esc(S.phone2)}</a>` : ""}`;
    $("#c-person").innerHTML = `<p>${esc(S.proprietor)}</p><span class="c-sub">${esc(S.proprietorTitle)}</span>`;
    $("#c-wa").innerHTML = `<a href="${waHref(`Hello ${S.name}, `)}" target="_blank" rel="noopener">Chat on WhatsApp</a>`;
    $("#c-email").innerHTML = `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`;
    $("#c-address").innerHTML = S.address.map(esc).join("<br>");
    $("#c-hours").textContent = S.hours;

    const form = $("#enquiry");
    const prefill = [];
    const prod = productById[params.get("product")];
    if (prod) prefill.push(`Please share the datasheet and quotation for ${prod.name} (${prod.model}).`);
    if (params.get("msg")) prefill.push(params.get("msg"));
    if (prefill.length) form.message.value = prefill.join("\n");
    if (prod && !inList("p:" + prod.id)) writeList(readList().concat(productItem(prod)));

    window.__renderBasket = function () {
      const list = readList();
      const box = $("#basket");
      box.innerHTML = `
        <div class="basket-head"><span>Items in your enquiry (${list.length})</span>${list.length ? '<button type="button" data-clear>Clear all</button>' : ""}</div>
        ${list.length ? `<ul>${list.map((i) => `<li><span>${esc(i.name)}<small>${esc(i.type)} · ${esc(i.ref)}</small></span><button type="button" data-remove="${esc(i.key)}" aria-label="Remove ${esc(i.name)}">${ic("trash")}</button></li>`).join("")}</ul>`
          : `<p class="basket-empty">No items yet. <a href="products/">Browse products</a> or <a href="spare-parts/">spare parts</a> and tap <b>+</b> to add them — or just describe your requirement below.</p>`}`;
    };
    $("#basket").addEventListener("click", (e) => {
      const r = e.target.closest("[data-remove]");
      if (r) removeItem(r.dataset.remove);
      if (e.target.closest("[data-clear]")) writeList([]);
    });
    window.__renderBasket();

    function compose() {
      const f = form;
      const list = readList();
      const lines = [
        `Website enquiry – ${S.name}`, "",
        `Name: ${f.name.value.trim()}`,
        f.company.value.trim() && `Company: ${f.company.value.trim()}`,
        `Phone: ${f.phone.value.trim()}`,
        f.email.value.trim() && `Email: ${f.email.value.trim()}`,
        f.city.value.trim() && `City: ${f.city.value.trim()}`,
        `Enquiry type: ${f.type.value}`, ""
      ].filter((l) => typeof l === "string");
      if (list.length) {
        lines.push("Items:");
        list.forEach((i, n) => lines.push(`${n + 1}. ${i.name} — ${i.ref}`));
        lines.push("");
      }
      if (f.message.value.trim()) lines.push("Message:", f.message.value.trim());
      return lines.join("\n");
    }

    function validate() {
      let ok = true;
      [["name", "Please enter your name"], ["phone", "Please enter a phone number"]].forEach(([n, msg]) => {
        const el = form[n];
        const err = $(`#err-${n}`);
        const bad = !el.value.trim();
        el.setAttribute("aria-invalid", bad ? "true" : "false");
        err.textContent = bad ? msg : "";
        if (bad && ok) { el.focus(); ok = false; }
      });
      if (ok && !readList().length && !form.message.value.trim()) {
        form.message.focus();
        $("#err-message").textContent = "Add items to your list or describe what you need";
        ok = false;
      } else { $("#err-message").textContent = ""; }
      return ok;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) return;
      const subject = `Enquiry from ${form.name.value.trim()}${form.company.value.trim() ? " – " + form.company.value.trim() : ""}`;
      location.href = `mailto:${S.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose())}`;
      $("#form-status").textContent = "Your email app should now open with the enquiry ready to send. If it does not, use WhatsApp or call us.";
    });
    $("#send-wa").addEventListener("click", () => {
      if (!validate()) return;
      window.open(waHref(compose()), "_blank", "noopener");
    });
  }

  /* ---------------- Page: about ---------------- */
  function pageAbout() {
    const box = $("#glance");
    if (!box) return;
    box.innerHTML = [
      [C.products.length + "+", "Machines, tools & consumables"],
      [C.categories.length, "Product categories"],
      [oemBrands.length, "OEM platforms for spare parts"],
      [totalParts + "+", "Spare part numbers listed"],
      [C.divisions.length, "Divisions: line, quality, support, supplies"]
    ].map(([n, l]) => `<li><span>${l}</span><b>${n}</b></li>`).join("");
  }

  /* Fill contact links written in static HTML: <a data-wa>, <a data-tel> */
  function fillContactLinks() {
    $$("[data-wa]").forEach((a) => { a.href = waHref(`Hello ${S.name}, `); a.target = "_blank"; a.rel = "noopener"; });
    $$("[data-tel]").forEach((a) => { a.href = telHref; });
    $$("[data-phone-text]").forEach((el) => { el.textContent = S.phone; });
    $$("[data-proprietor]").forEach((el) => { el.textContent = S.proprietor; });
  }

  /* ---------------- Boot ---------------- */
  const page = document.body.dataset.page || "";
  renderHeader(page);
  renderFooter();
  fillContactLinks();
  ({ home: pageHome, products: pageProducts, product: pageProduct, spares: pageSpares, contact: pageContact, about: pageAbout }[page] || function () {})();
  syncEnquiryUI();
  observeReveal();
})();
