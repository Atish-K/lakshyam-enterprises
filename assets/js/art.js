/*
 * Line-art illustrations for product categories.
 * Each entry is the inner markup of a 160 × 120 SVG.
 * Classes: f = tinted fill, s = solid surface fill, a = accent stroke,
 *          af = accent fill, t = thin / faint stroke, w = white stroke.
 */
(function () {
  const ground = (x1 = 10, x2 = 150) => `<path class="t" d="M${x1} 108H${x2}"/>`;
  const range = (from, to, step) => { const out = []; for (let v = from; v <= to; v += step) out.push(v); return out; };

  const shelfReels = [26, 52, 78].map((y) =>
    `<path class="t" d="${range(20, 140, 8).map(x => `M${x} ${y}v16`).join("")}"/>`
  ).join("");

  const ART = {
    printer: `
      <rect class="f" x="22" y="46" width="116" height="54" rx="5"/>
      <path d="M30 46l10-20h80l10 20"/>
      <rect x="46" y="54" width="68" height="20" rx="3"/>
      <path class="a" d="M54 64h52" stroke-width="4"/>
      <rect x="30" y="82" width="36" height="10" rx="2"/>
      <circle class="af" cx="110" cy="87" r="3.5"/><circle cx="124" cy="87" r="3.5"/>
      <path d="M32 100v8M128 100v8"/>${ground()}`,

    spi: `
      <rect class="f" x="18" y="30" width="124" height="70" rx="5"/>
      <rect x="30" y="40" width="100" height="44" rx="3"/>
      <rect class="s" x="68" y="44" width="24" height="12" rx="2"/>
      <path class="a" d="M72 56l-10 18M88 56l10 18"/>
      <path d="M46 76h68" stroke-width="4"/>
      <circle class="af" cx="130" cy="92" r="3"/>
      <path d="M30 100v8M130 100v8"/>${ground()}`,

    oven: `
      <rect class="f" x="10" y="42" width="140" height="44" rx="5"/>
      <path d="M10 72h140"/>
      <path class="t" d="M44 42v30M78 42v30M112 42v30"/>
      <path class="a" d="M27 50c3 4-3 6 0 10M61 50c3 4-3 6 0 10M95 50c3 4-3 6 0 10M129 50c3 4-3 6 0 10"/>
      <rect class="af" x="18" y="66" width="20" height="5" rx="1"/>
      <rect class="s" x="114" y="22" width="28" height="18" rx="2"/>
      <path d="M128 40v2M20 86v20M140 86v20"/>${ground(6, 154)}`,

    wave: `
      <rect class="f" x="12" y="34" width="136" height="54" rx="5"/>
      <path d="M12 54l136-12"/>
      <rect class="af" x="58" y="43" width="22" height="5" rx="1" transform="rotate(-5 69 45)"/>
      <path d="M44 88V70h72v18"/>
      <path class="a" d="M50 70c6-10 14-10 20 0s14 10 20 0 14-10 20 0"/>
      <path d="M22 88v18M138 88v18"/>${ground(8, 152)}`,

    rework: `
      <rect class="f" x="18" y="88" width="124" height="14" rx="3"/>
      <path d="M34 88V22h40"/>
      <rect class="s" x="72" y="16" width="30" height="22" rx="3"/>
      <path d="M80 38l3 10h8l3-10"/>
      <path class="a" d="M84 54c2 3-2 5 0 8M90 54c2 3-2 5 0 8"/>
      <path d="M48 78h84" stroke-width="3.5"/>
      <rect class="af" x="78" y="70" width="18" height="6" rx="1"/>
      <rect x="110" y="44" width="24" height="18" rx="2"/><circle cx="122" cy="53" r="4"/>${ground()}`,

    press: `
      <rect class="f" x="22" y="90" width="116" height="12" rx="2"/>
      <path d="M42 90V20h62v16"/>
      <rect class="s" x="90" y="36" width="28" height="20" rx="3"/>
      <path d="M104 56v14"/>
      <rect class="af" x="95" y="70" width="18" height="6" rx="1"/>
      <path d="M68 86h70" stroke-width="3.5"/>
      <path class="a" d="M98 79v4M104 79v4M110 79v4"/>${ground(12, 148)}`,

    router: `
      <rect class="f" x="14" y="60" width="132" height="40" rx="5"/>
      <path d="M24 60V28h112v32M24 36h112"/>
      <rect class="s" x="68" y="30" width="24" height="16" rx="2"/>
      <path d="M80 46v10"/>
      <path class="a" d="M80 56v7" stroke-width="3"/>
      <rect class="s" x="36" y="65" width="88" height="10" rx="1"/>
      <path class="a" d="M58 65v10M102 65v10" stroke-dasharray="2 3"/>
      <path d="M24 100v8M136 100v8"/>${ground()}`,

    vcut: `
      <rect class="f" x="18" y="62" width="124" height="36" rx="5"/>
      <circle class="s" cx="80" cy="38" r="18"/>
      <path class="t" d="M80 20v36M62 38h36"/>
      <circle class="af" cx="80" cy="38" r="4"/>
      <rect class="s" x="30" y="55" width="100" height="7" rx="1"/>
      <path class="a" d="M30 58.5h100" stroke-dasharray="4 4"/>
      <path d="M28 98v10M132 98v10"/>${ground()}`,

    conveyor: `
      <rect class="f" x="8" y="58" width="144" height="14" rx="7"/>
      <circle cx="15" cy="65" r="3"/><circle cx="145" cy="65" r="3"/>
      <path class="t" d="M40 65h0M60 65h0M80 65h0M100 65h0M120 65h0" stroke-width="5"/>
      <rect class="af" x="28" y="50" width="34" height="7" rx="1"/>
      <rect class="af" x="96" y="50" width="34" height="7" rx="1" opacity=".5"/>
      <path class="a" d="M70 40h14M80 36l4 4-4 4"/>
      <path d="M30 72v34M130 72v34M30 92h100"/>${ground(6, 154)}`,

    magazine: `
      <rect class="f" x="42" y="18" width="76" height="82" rx="4"/>
      <path class="t" d="M52 30h56M52 40h56M52 50h56M52 70h56M52 80h56M52 90h56"/>
      <path class="a" d="M52 60h56" stroke-width="3.5"/>
      <path d="M118 60h28"/>
      <path class="a" d="M136 55l6 5-6 5"/>
      <path d="M50 100v8M110 100v8"/>${ground(30, 150)}`,

    table: `
      <rect class="f" x="14" y="56" width="132" height="8" rx="2"/>
      <path d="M24 64v42M136 64v42M24 94h112"/>
      <path d="M28 56V22M132 56V22M28 26h104"/>
      <path class="a" d="M44 30h72" stroke-width="3"/>
      <rect class="s" x="40" y="38" width="80" height="6" rx="1"/>${ground(8, 152)}`,

    laser: `
      <rect class="f" x="18" y="44" width="124" height="56" rx="5"/>
      <rect class="s" x="64" y="20" width="32" height="22" rx="3"/>
      <path d="M76 42v6M84 42v6"/>
      <path class="a" d="M80 48v24" stroke-width="2.5"/>
      <path d="M40 80h80" stroke-width="4"/>
      <circle class="af" cx="80" cy="75" r="3.5"/>
      <path d="M28 100v8M132 100v8"/>${ground()}`,

    screw: `
      <rect class="f" x="26" y="92" width="108" height="10" rx="2"/>
      <path d="M46 92V22h40"/>
      <rect class="s" x="82" y="18" width="16" height="36" rx="4"/>
      <path d="M90 54v12"/>
      <path class="a" d="M86 68h8M87 72h6M88 76h4"/>
      <rect class="s" x="62" y="82" width="60" height="10" rx="1"/>
      <rect x="108" y="58" width="20" height="16" rx="2"/>${ground(14, 146)}`,

    nozzle: `
      <rect class="f" x="20" y="72" width="120" height="28" rx="5"/>
      <path class="s" d="M68 16h24v14l-6 8v16h-12V38l-6-8z"/>
      <path d="M77 54v8h6v-8"/>
      <rect class="s" x="70" y="76" width="20" height="10" rx="2"/>
      <path class="a" d="M74 76l4-10M86 76l-4-10"/>
      <circle class="af" cx="124" cy="86" r="3"/>
      <path d="M30 100v8M130 100v8"/>${ground()}`,

    fai: `
      <rect class="f" x="18" y="20" width="84" height="58" rx="4"/>
      <path d="M52 78v12M40 90h36"/>
      <path class="a" d="M28 64l14-12 12 6 14-18 12 8 12-8"/>
      <path class="t" d="M28 32h22"/>
      <rect class="s" x="110" y="40" width="34" height="20" rx="2"/>
      <path d="M118 60c0 14-6 22-4 36M136 60c0 14 6 22 4 36"/>
      <circle class="af" cx="114" cy="98" r="3"/><circle class="af" cx="140" cy="98" r="3"/>`,

    scope: `
      <rect class="f" x="26" y="94" width="96" height="10" rx="2"/>
      <path d="M44 94V24"/>
      <rect class="s" x="40" y="30" width="54" height="18" rx="4"/>
      <rect class="s" x="76" y="48" width="16" height="14" rx="2"/>
      <path class="a" d="M80 62l-6 18M88 62l6 18"/>
      <path d="M62 84h44" stroke-width="3.5"/>
      <rect x="108" y="16" width="40" height="28" rx="3"/>
      <path d="M128 44v8"/>${ground()}`,

    tester: `
      <rect class="f" x="18" y="78" width="124" height="22" rx="4"/>
      <path d="M32 78V22h12v56"/>
      <rect class="s" x="40" y="30" width="28" height="18" rx="2"/>
      <path d="M54 48v14"/>
      <path class="a" d="M54 62l22 10h56"/>
      <rect class="af" x="104" y="84" width="28" height="10" rx="1"/>
      <path d="M26 100v6M134 100v6"/>${ground()}`,

    scanner: `
      <rect class="s" x="22" y="34" width="46" height="46" rx="3"/>
      <rect class="af" x="28" y="40" width="11" height="11" rx="1"/>
      <rect class="af" x="51" y="40" width="11" height="11" rx="1"/>
      <rect class="af" x="28" y="63" width="11" height="11" rx="1"/>
      <path d="M51 63h4M58 63h4M51 69h8M56 74h6M44 44v4M44 56h4"/>
      <rect class="f" x="92" y="30" width="46" height="30" rx="6"/>
      <path d="M108 60l-4 36h14l2-36"/>
      <path class="a" d="M92 40L70 36M92 50L70 76" stroke-dasharray="3 3"/>${ground()}`,

    profiler: `
      <rect class="f" x="18" y="36" width="98" height="52" rx="6"/>
      <rect class="s" x="26" y="44" width="82" height="36" rx="2"/>
      <path class="a" d="M30 74c8 0 12-8 18-10s10 0 14-12 8-6 12 2 8 12 30 16"/>
      <path d="M116 48h8c8 0 12 6 12 14v40M116 58h4c6 0 8 4 8 10v34M116 68c4 0 4 3 4 8v26"/>
      <circle class="af" cx="136" cy="104" r="2.5"/><circle class="af" cx="128" cy="104" r="2.5"/><circle class="af" cx="120" cy="104" r="2.5"/>`,

    probe: `
      <rect class="f" x="18" y="46" width="30" height="28" rx="3"/>
      <path d="M18 54h-6M18 66h-6"/>
      <path class="t" d="M26 54h14M26 60h14M26 66h14"/>
      <path d="M48 60c28 0 26-34 52-34s26 46 34 58"/>
      <circle class="af" cx="134" cy="86" r="4"/>`,

    cleaner: `
      <rect class="f" x="22" y="28" width="116" height="72" rx="5"/>
      <rect class="s" x="34" y="38" width="92" height="46" rx="3"/>
      <path d="M42 46h76M42 76h76"/>
      <path class="a" d="M52 50v4M66 50v4M80 50v4M94 50v4M108 50v4M52 68v4M66 68v4M80 68v4M94 68v4M108 68v4"/>
      <rect class="af" x="46" y="58" width="68" height="6" rx="1" opacity=".4"/>
      <circle cx="124" cy="92" r="3"/>
      <path d="M32 100v8M128 100v8"/>${ground()}`,

    drum: `
      <path class="f" d="M52 30h56v70a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4z"/>
      <rect class="s" x="70" y="20" width="20" height="10" rx="2"/>
      <path d="M52 42h56"/>
      <rect class="af" x="62" y="56" width="36" height="28" rx="2"/>
      <path class="w" d="M68 64h24M68 72h16"/>${ground(30, 130)}`,

    packer: `
      <path d="M26 40l8-12h92l8 12"/>
      <rect class="f" x="22" y="40" width="116" height="40" rx="5"/>
      <path d="M22 54h116"/>
      <path class="a" d="M36 54h88" stroke-width="4"/>
      <rect class="s" x="30" y="62" width="40" height="10" rx="2"/>
      <circle class="af" cx="118" cy="67" r="3"/>
      <path d="M40 80v26M120 80v26M40 96h80"/>${ground(14, 146)}`,

    shelf: `
      <rect class="f" x="12" y="20" width="136" height="80" rx="4"/>
      <path d="M12 46h136M12 72h136"/>
      ${shelfReels}
      <path class="a" d="M68 52v16" stroke-width="3"/>
      <circle class="af" cx="68" cy="49" r="2.2"/>
      <path d="M20 100v8M140 100v8"/>${ground(6, 154)}`,

    reel: `
      <circle class="f" cx="58" cy="58" r="38"/>
      <circle class="t" cx="58" cy="58" r="26"/>
      <circle class="s" cx="58" cy="58" r="11"/>
      <path class="t" d="M58 20v12M58 84v12M20 58h12M84 58h12"/>
      <path d="M90 52h58M90 64h58"/>
      <path class="a" d="M100 58h5M112 58h5M124 58h5M136 58h5"/>`,

    counter: `
      <circle class="f" cx="62" cy="42" r="30"/>
      <circle class="s" cx="62" cy="42" r="8"/>
      <rect class="s" x="20" y="68" width="120" height="32" rx="4"/>
      <path d="M92 56h44"/>
      <rect class="af" x="98" y="78" width="32" height="12" rx="2"/>
      <circle cx="34" cy="84" r="3"/><circle cx="46" cy="84" r="3"/>
      <path d="M28 100v6M132 100v6"/>${ground()}`,

    chip: `
      <rect class="f" x="18" y="40" width="124" height="54" rx="5"/>
      ${[28, 56, 84, 112].map(x => `<rect class="s" x="${x}" y="50" width="20" height="20" rx="2"/><rect class="af" x="${x + 6}" y="56" width="8" height="8" rx="1"/>`).join("")}
      ${[38, 66, 94, 122].map(x => `<circle cx="${x}" cy="82" r="2.5"/>`).join("")}
      <path d="M28 94v8M132 94v8"/>${ground()}`,

    splicer: `
      <path class="t" d="M6 58h148M6 70h148"/>
      <path class="t" d="M10 64h140" stroke-dasharray="1 7"/>
      <path d="M62 36V26h36v10"/>
      <rect class="s" x="40" y="36" width="80" height="58" rx="8"/>
      <rect class="f" x="52" y="44" width="56" height="14" rx="2"/>
      <rect class="af" x="70" y="64" width="20" height="10" rx="1"/>
      <circle cx="58" cy="82" r="3"/><circle cx="102" cy="82" r="3"/>`,

    splice: `
      <rect class="f" x="10" y="46" width="140" height="28" rx="2"/>
      <path class="t" d="M14 52h132" stroke-dasharray="2 8"/>
      ${range(20, 136, 16).map(x => `<rect class="t" x="${x}" y="58" width="9" height="10" rx="1"/>`).join("")}
      <rect class="af" x="64" y="40" width="32" height="40" rx="2" opacity=".85"/>
      <path class="w" d="M80 44v32" stroke-dasharray="3 3"/>`,

    roll: `
      <path class="f" d="M48 26h64c8 0 14 15 14 34s-6 34-14 34H48"/>
      <ellipse class="s" cx="48" cy="60" rx="14" ry="34"/>
      <ellipse class="af" cx="48" cy="60" rx="5" ry="12"/>
      <path class="t" d="M126 60h24M132 70h18"/>`,

    jar: `
      <rect class="f" x="46" y="42" width="68" height="58" rx="6"/>
      <rect class="s" x="42" y="28" width="76" height="16" rx="4"/>
      <rect class="af" x="56" y="58" width="48" height="26" rx="2"/>
      <path class="w" d="M62 66h30M62 74h20"/>${ground(30, 130)}`,

    syringe: `
      <rect class="f" x="28" y="48" width="84" height="24" rx="4"/>
      <rect class="af" x="62" y="52" width="46" height="16" rx="2" opacity=".85"/>
      <path d="M112 54h14l16 6-16 6h-14"/>
      <path d="M28 60H14M14 50v20"/>
      <path class="t" d="M40 48v24"/>`,

    wipe: `
      <path class="t" d="M24 70l56 20 56-20M24 78l56 20 56-20"/>
      <path class="s" d="M24 62l56-20 56 20-56 20z"/>
      <path class="f" d="M24 62l56-20 56 20-56 20z"/>
      <path class="a" d="M52 52l56 20"/>`,

    swab: `
      <path d="M26 98L104 30"/>
      <ellipse class="af" cx="110" cy="25" rx="7" ry="11" transform="rotate(49 110 25)"/>
      <path d="M50 102L128 34"/>
      <ellipse class="f" cx="134" cy="29" rx="7" ry="11" transform="rotate(49 134 29)"/>`,

    glove: `
      <path class="f" d="M56 104V72L42 56a6 6 0 0 1 9-8L64 60V30a6 6 0 0 1 12 0v20V24a6 6 0 0 1 12 0v26V28a6 6 0 0 1 12 0v24V38a5 5 0 0 1 10 0v42c0 12-6 18-6 24z"/>
      <path class="a" d="M56 94h50" stroke-width="3"/>`,

    mixer: `
      <path d="M36 58c0-24 88-24 88 0"/>
      <rect class="f" x="28" y="58" width="104" height="42" rx="6"/>
      <path class="a" d="M66 49a14 4.5 0 1 0 28 0"/>
      <path class="a" d="M94 49l-4-3.5M94 49l1.5-4.5"/>
      <rect class="s" x="42" y="70" width="38" height="14" rx="2"/>
      <circle class="af" cx="108" cy="77" r="5"/>
      <path d="M38 100v6M122 100v6"/>${ground(14, 146)}`,

    cabinet: `
      <rect class="f" x="42" y="12" width="76" height="92" rx="4"/>
      <path d="M42 28h76M80 28v76"/>
      <path class="t" d="M48 50h26M86 50h26M48 72h26M86 72h26M48 94h26M86 94h26"/>
      <rect class="af" x="66" y="16" width="28" height="8" rx="1.5"/>
      <path d="M76 60v8M84 60v8M48 104v4M112 104v4"/>${ground(30, 130)}`,

    gear: `
      <circle class="t-gear" cx="62" cy="58" r="30" stroke-width="9" stroke-dasharray="7 6.46"/>
      <circle class="f" cx="62" cy="58" r="24"/>
      <circle class="s" cx="62" cy="58" r="8"/>
      <circle class="a" cx="114" cy="82" r="16" stroke-width="7" stroke-dasharray="5 5.05"/>
      <circle class="s" cx="114" cy="82" r="12"/>
      <circle cx="114" cy="82" r="4"/>`
  };

  window.ART = ART;
  window.artSVG = function (key, label) {
    const body = ART[key] || ART.gear;
    const aria = label ? `role="img" aria-label="${String(label).replace(/"/g, "&quot;")}"` : `aria-hidden="true"`;
    return `<svg class="art-svg" viewBox="0 0 160 120" ${aria}>${body}</svg>`;
  };
})();
