/*
 * Product catalogue for Lakshyam Enterprises.
 *
 * To add a product, copy any entry in `products` and change it:
 *   id       unique, lowercase, used in the URL (product.html?id=...)
 *   cat      one of the category ids below
 *   model    main model number; `variants` lists other models in the family
 *   art      optional illustration key (see art.js); defaults to the category's art
 *   image    path to the product photo, e.g. "assets/img/products/n10.png"
 *   specs    [label, value] pairs; leave empty to show "datasheet on request"
 *   featured true to show on the home page
 *   gallery  optional list of [model code, image name in assets/img/parts] shown as "Available models"
 *   spare    optional { brand, label, fits }: also lists every gallery model on the spare parts page
 */
window.CATALOG = {
  divisions: [
    { id: "line", name: "Line Equipment", blurb: "Printing, soldering, insertion, depaneling and board handling for complete SMT & THT lines." },
    { id: "quality", name: "Inspection & Quality", blurb: "3D SPI, AOI, first-article inspection, reflow profiling and test instruments." },
    { id: "support", name: "Process Support", blurb: "Cleaning systems, moisture control, reel splicing and material handling." },
    { id: "supplies", name: "Parts & Consumables", blurb: "OEM-compatible spares, lubricants, adhesives, chemicals and cleanroom supplies." }
  ],

  categories: [
    { id: "printing", div: "line", name: "Solder Paste Printing", art: "printer", blurb: "Stencil printers, print-environment control and paste / glue preparation." },
    { id: "placement", div: "line", name: "Pick & Place Machines", art: "spi", blurb: "Yamaha, Hanwha / Samsung, JUKI and Panasonic SMT mounters." },
    { id: "soldering", div: "line", name: "Soldering & Rework", art: "oven", blurb: "Reflow ovens, wave soldering and BGA rework stations." },
    { id: "insertion", div: "line", name: "Through-Hole & Press-Fit", art: "press", blurb: "Automatic press-fit pin, eyelet and rivet insertion machines." },
    { id: "depaneling", div: "line", name: "PCB Depaneling", art: "router", blurb: "Routers, V-cut separators and PCB cutters for low-stress singulation." },
    { id: "handling", div: "line", name: "Conveyors & Board Handling", art: "conveyor", blurb: "Loaders, unloaders, buffers, conveyors and assembly work tables." },
    { id: "marking", div: "line", name: "Marking & Final Assembly", art: "laser", blurb: "Laser marking for traceability and semi-automatic screw fastening." },
    { id: "inspection", div: "quality", name: "3D SPI & Optical Inspection", art: "spi", blurb: "Solder paste inspection, AOI, nozzle inspection, FAI and microscopes." },
    { id: "testing", div: "quality", cover: "hw-12", name: "Test & Measurement", art: "tester", blurb: "Peel-strength testers and barcode / QR code verification." },
    { id: "profiling", div: "quality", name: "Reflow Profiling", art: "profiler", blurb: "KIC profilers, reflow checkers and thermocouples." },
    { id: "cleaning", div: "support", name: "Cleaning Systems", art: "cleaner", blurb: "Stencil, squeegee, PCB and fixture cleaners, filters and cleaning agents." },
    { id: "msd", div: "support", cover: "adh-1400-02", name: "Moisture & Dry Storage", art: "cabinet", blurb: "Dry cabinets, low-humidity baking ovens and vacuum packing for MSDs." },
    { id: "material", div: "support", name: "Material Handling", art: "reel", blurb: "Smart reel storage, taping, counting, programming and PCB magazines." },
    { id: "splicing", div: "support", name: "Reel Splicing", art: "splice", blurb: "Automatic splicers, splice tools, clips and tapes for SMD reels." },
    { id: "nozzles", div: "supplies", name: "SMT Nozzles", art: "nozzle", blurb: "Pick-up nozzles for FUJI, JUKI, Yamaha and Hanwha / Samsung mounters." },
    { id: "feeders", div: "supplies", name: "SMT Feeders", art: "reel", blurb: "Tape, stick and tube feeders for Yamaha, JUKI, Hanwha and Panasonic, plus calibration." },
    { id: "consumables", div: "supplies", name: "SMT Consumables", art: "drum", blurb: "Stencil wiper rolls, solder paste, lubricants, greases and oven cleaners." },
    { id: "adhesives", div: "supplies", cover: "jt-module", name: "Electronic Adhesives", art: "syringe", blurb: "Underfill, module, thermal, protective and structural adhesives." },
    { id: "cleanroom", div: "supplies", name: "Cleanroom & ESD", art: "wipe", blurb: "Lint-free wipes, cleanroom swabs, gloves and face masks." }
  ],

  products: [
    /* ───────────── Solder paste printing ───────────── */
    {
      id: "sp-series", image: "assets/img/products/sp-series.png", cat: "printing", model: "SP Series", featured: true,
      name: "Semi-Automatic Stencil Printer",
      summary: "A semi-automatic solder paste printer for prototypes, NPI and low-to-medium volume lines. Pneumatic board positioning, a motor-driven squeegee carriage on precision rails and PLC touch-screen control give repeatable prints on single- and double-sided boards.",
      features: [
        "SMC cylinder positioning for quick, repeatable board placement",
        "Precision guide rails with a motor-driven squeegee carriage for accurate strokes",
        "Squeegee head tilts up 45° for fast stencil change and blade cleaning",
        "Squeegee carriage adjusts front-to-rear to find the best print position",
        "Fixed-groove platen with locating pins for single- and double-sided printing",
        "Fine X / Y / Z stencil-to-PCB alignment adjustment",
        "PLC with touch-screen HMI; print speed shown on screen and adjustable",
        "One-way, two-way or multi-pass print modes",
        "Adjustable squeegee angle; works with steel or rubber blades",
        "Built-in production counter; screen saver with adjustable wake-up time"
      ],
      specs: [
        ["Model", "SP Series"],
        ["Operation", "Semi-automatic"],
        ["Control", "PLC with touch-screen HMI"],
        ["Positioning", "SMC pneumatic cylinders"],
        ["Print modes", "One-way, two-way or multi-pass"],
        ["Squeegee", "Steel or rubber, adjustable angle"],
        ["Board types", "Single- and double-sided PCBs"]
      ],
      apps: ["Prototype & NPI builds", "Low / medium volume SMT", "Red-glue printing", "Repair lines"]
    },
    {
      id: "hw-tr550", image: "assets/img/products/hw-tr550.jpg", cat: "printing", model: "HW-TR550", art: "cabinet",
      name: "Temperature & Humidity Conditioner for Stencil Printers",
      summary: "Keeps the air inside the solder paste printer at a constant temperature and relative humidity, so paste viscosity, tack time and print definition stay stable through every shift and season.",
      features: [
        "Holds print-chamber temperature and RH at a constant set point",
        "Reduces paste drying, slump and viscosity drift during long runs",
        "Improves print repeatability on fine-pitch apertures",
        "Designed to connect to SMT solder paste printers"
      ],
      specs: [["Model", "HW-TR550"], ["Application", "SMT solder paste printers"]],
      apps: ["Fine-pitch printing", "Plants without full air-conditioning", "Seasonal humidity control"]
    },
    {
      id: "mix500d", image: "assets/img/products/mix500d.jpg", cat: "printing", model: "MIX500D", art: "mixer",
      name: "Solder Paste Mixer / Glue Centrifuge",
      summary: "Brings refrigerated solder paste or glue back to a smooth, uniform consistency without opening the jar. Jars sit at 45° and spin on their own axis while orbiting, which mixes the paste and drives out trapped air in a single cycle.",
      features: [
        "Jars held at 45° and rotated on their own axis, so paste does not creep onto the lid",
        "Mixes and removes air bubbles in one cycle",
        "No manual stirring: no contamination or oxidation of the paste",
        "Double safety interlock protects the operator"
      ],
      specs: [["Model", "MIX500D"], ["Mixing method", "Orbital revolution with 45° axial rotation"], ["Safety", "Double interlock"]],
      apps: ["Solder paste preparation", "SMT red glue", "Dispensing fluids"]
    },
    {
      id: "cen3055", image: "assets/img/products/cen3055.jpg", cat: "printing", model: "CEN3055", art: "mixer",
      name: "Glue Defoaming Centrifuge",
      summary: "Removes air bubbles from dispensing glue and other syringe-packed fluids before they reach the dispenser, preventing voids, skipped dots and uneven dot size.",
      features: [
        "Triple safety design: latch, proximity switch and magnetic sensor",
        "Accepts most popular glue packages and syringe sizes",
        "LED display with indicator light and buzzer alerts",
        "Custom holders available on request"
      ],
      specs: [
        ["Model", "CEN3055"],
        ["Power", "220 V AC, 50 Hz, 40 W"],
        ["Rotation speed", "3000 rpm"],
        ["Working capacity", "30 ml × 2 + 15 ml × 2 (custom on request)"],
        ["Timer", "0.1 – 9.9 min"],
        ["Dimensions (W × D × H)", "390 × 390 × 200 mm"],
        ["Weight", "33 kg"]
      ],
      apps: ["Glue & underfill de-aeration", "Syringe-packed fluids", "Dispensing lines"]
    },

    /* ───────────── Pick & place machines ───────────── */
    {
      id: "yrm20", image: "assets/img/products/yrm20.jpg", cat: "placement", model: "YRM20", featured: true,
      name: "Yamaha YRM20 Premium Modular Mounter",
      summary: "Yamaha’s premium high-efficiency modular mounter. Two beams with rotary heads deliver up to 115,000 CPH while handling everything from 0201 mm chips to large 55 × 100 mm components.",
      features: [
        "Up to 115,000 CPH under optimum conditions",
        "Placement accuracy ±0.025 mm",
        "Components from 0201 mm chips up to W55 × L100 mm, up to 30 mm tall",
        "Lightweight, low-impact nozzles with nozzle ID and health checks",
        "Modular platform suited to both high-mix and high-volume lines"
      ],
      specs: [["Brand", "Yamaha"], ["Model", "YRM20"], ["Type", "Premium modular mounter"], ["Placement speed", "115,000 CPH (optimum)"], ["Accuracy", "±0.025 mm"], ["Components", "0201 mm to W55 × L100 mm, height ≤ 30 mm"]],
      apps: ["High-volume SMT", "Automotive electronics", "Telecom & networking", "EMS"]
    },
    {
      id: "yrm10", image: "assets/img/products/yrm10.jpg", cat: "placement", model: "YRM10",
      name: "Yamaha YRM10 Compact Modular Mounter",
      summary: "The compact member of Yamaha’s YRM platform: premium-class placement quality in a small footprint, at up to 52,000 CPH.",
      features: ["Up to 52,000 CPH under optimum conditions", "Placement accuracy ±0.035 mm", "Components from 0201 mm up to L100 × W55 mm, 15 mm tall", "Shares nozzles, feeders and software with the YRM20"],
      specs: [["Brand", "Yamaha"], ["Model", "YRM10"], ["Type", "Compact modular mounter"], ["Placement speed", "52,000 CPH (optimum)"], ["Accuracy", "±0.035 mm"], ["Components", "0201 mm to L100 × W55 mm, height ≤ 15 mm"]],
      apps: ["Mid-volume SMT", "High-mix lines", "NPI"]
    },
    {
      id: "ysm20", image: "assets/img/products/ysm20.jpg", cat: "placement", model: "YSM20", featured: true,
      name: "Yamaha YSM20 High-Efficiency Modular Mounter",
      summary: "A dual-beam, dual-head modular mounter for high-speed, large-board production. The YSM20 covers chips to large ICs on one platform, with very high feeder capacity.",
      features: [
        "Dual beam with two high-speed heads",
        "Large boards up to L810 × W490 mm (single lane)",
        "Components from 0201 mm chips up to W55 × L100 mm",
        "High feeder capacity for high-mix production",
        "About 90,000 CPH class under optimum conditions"
      ],
      specs: [["Brand", "Yamaha"], ["Model", "YSM20"], ["Type", "High-efficiency modular mounter"], ["Beams / heads", "2 / 2"], ["Placement speed", "≈ 90,000 CPH (optimum)"], ["PCB size", "Up to L810 × W490 mm (single lane)"], ["Components", "0201 mm to W55 × L100 mm"]],
      apps: ["High-volume SMT", "Large boards", "Consumer electronics"]
    },
    {
      id: "ysm10", image: "assets/img/products/ysm10.jpg", cat: "placement", model: "YSM10",
      name: "Yamaha YSM10 Modular Mounter",
      summary: "A versatile single-beam modular mounter rated at 46,000 CPH, handling 03015 mm micro-chips through to 55 × 100 mm components.",
      features: ["Up to 46,000 CPH under optimum conditions", "Placement accuracy ±0.035 mm", "Components from 03015 mm to W55 × L100 mm, 15 mm tall", "Compact footprint, easy changeover"],
      specs: [["Brand", "Yamaha"], ["Model", "YSM10"], ["Type", "Modular mounter"], ["Placement speed", "46,000 CPH (optimum)"], ["Accuracy", "±0.035 mm"], ["Components", "03015 mm to W55 × L100 mm, height ≤ 15 mm"]],
      apps: ["Mid-volume SMT", "High-mix lines", "LED & lighting"]
    },
    {
      id: "decan-s2", image: "assets/img/products/decan-s2.jpg", cat: "placement", model: "DECAN S2",
      name: "Hanwha DECAN S2 High-Speed Chip Mounter",
      summary: "A dual-gantry, high-speed chip mounter from Hanwha (formerly Samsung Techwin), built for fast, flexible placement of chips and ICs.",
      features: ["Dual-gantry, high-speed configuration", "Rated about 92,000 CPH under optimum conditions", "Flexible handling of chips through to ICs", "Uses Hanwha SME electric feeders and HN nozzles"],
      specs: [["Brand", "Hanwha (Samsung)"], ["Model", "DECAN S2"], ["Type", "High-speed chip mounter"], ["Gantries", "2"], ["Placement speed", "≈ 92,000 CPH (optimum)"]],
      apps: ["High-volume SMT", "Mobile & consumer", "LED"]
    },
    {
      id: "sm481", image: "assets/img/products/sm481.jpg", cat: "placement", model: "SM481",
      name: "Samsung / Hanwha SM481 Chip Mounter",
      summary: "A proven single-gantry, 10-spindle chip mounter with flying vision — a reliable workhorse for medium-volume SMT lines.",
      features: ["Single gantry with 10-spindle head", "Flying-vision component recognition", "About 39,000 CPH under optimum conditions", "Long-board option available", "Uses SME electric feeders and HN nozzles"],
      specs: [["Brand", "Samsung / Hanwha"], ["Model", "SM481"], ["Type", "Chip mounter"], ["Head", "1 × 10 spindles"], ["Placement speed", "≈ 39,000 CPH (optimum)"]],
      apps: ["Medium-volume SMT", "EMS", "Industrial electronics"]
    },
    {
      id: "rs-1", image: "assets/img/products/rs-1.jpg", cat: "placement", model: "RS-1",
      name: "JUKI RS-1 Fast Smart Modular Mounter",
      summary: "JUKI’s single-head fast modular mounter. One head covers 0201 chips to 74 mm ICs, with automatic height selection for tall parts and long-board capability.",
      features: ["About 42,000 CPH under optimum conditions", "Components from 0201 up to 74 mm square or 50 × 150 mm, 25 mm tall", "Boards up to 650 × 370 mm, or 1,200 × 370 mm long-board", "Placement accuracy ±35 µm (Cpk ≥ 1)", "Uses JUKI RF electric feeders"],
      specs: [["Brand", "JUKI"], ["Model", "RS-1"], ["Type", "Fast smart modular mounter"], ["Placement speed", "≈ 42,000 CPH (optimum)"], ["Components", "0201 to 74 mm □ or 50 × 150 mm, height ≤ 25 mm"], ["PCB size", "50 × 50 to 650 × 370 mm (1,200 × 370 mm long-board)"], ["Accuracy", "±35 µm (Cpk ≥ 1)"]],
      apps: ["High-mix SMT", "Long boards", "Automotive & LED"]
    },
    {
      id: "rs-2", image: "assets/img/products/rs-2.jpg", cat: "placement", model: "RS-2",
      name: "JUKI RS-2 Fast Smart Modular Mounter",
      summary: "The latest generation of JUKI’s RS platform, with the 8-nozzle TAKUMI head that switches between six component-height levels for faster, more flexible placement.",
      features: ["Up to 50,000 CPH under optimum conditions", "TAKUMI 8-nozzle head with 6 height levels (1–25 mm)", "Components from 03015 up to 74 mm square or 50 × 150 mm", "Up to 112 feeders with RF08AS", "Uses JUKI RF electric feeders"],
      specs: [["Brand", "JUKI"], ["Model", "RS-2"], ["Type", "Fast smart modular mounter"], ["Head", "TAKUMI 8-nozzle"], ["Placement speed", "50,000 CPH (optimum)"], ["Components", "03015 to 74 mm □ or 50 × 150 mm, height ≤ 25 mm"], ["Feeder capacity", "Up to 112 (RF08AS)"]],
      apps: ["High-mix SMT", "EMS", "Industrial electronics"]
    },
    {
      id: "rx-8", image: "assets/img/products/rx-8.jpg", cat: "placement", model: "RX-8",
      name: "JUKI RX-8 High-Speed Compact Modular Mounter",
      summary: "A very fast, compact chip shooter: up to 100,000 CPH in a module under 1 metre wide, for high-volume chip placement.",
      features: ["Up to 100,000 CPH with P20 head", "Components from 0201 to 5 mm square", "Boards 50 × 50 to 510 × 450 mm", "Placement accuracy ±0.04 mm (Cpk ≥ 1)", "Compact 998 mm machine width"],
      specs: [["Brand", "JUKI"], ["Model", "RX-8"], ["Type", "High-speed compact modular mounter"], ["Placement speed", "100,000 CPH (P20 head)"], ["Components", "0201 to 5 mm □"], ["PCB size", "50 × 50 to 510 × 450 mm"], ["Accuracy", "±0.04 mm (Cpk ≥ 1)"], ["Width", "998 mm"]],
      apps: ["High-volume chip placement", "Mobile & consumer", "LED"]
    },
    {
      id: "jm-100", image: "assets/img/products/jm-100.jpg", cat: "placement", model: "JM-100",
      name: "JUKI JM-100 Odd-Form Insertion Mounter",
      summary: "A JUKI platform for automating through-hole and odd-form component insertion, cutting manual insertion work on mixed-technology boards.",
      features: ["Automates through-hole and odd-form insertion", "Reduces manual insertion labour and errors", "Suited to mixed SMT / THT assemblies", "Contact us for configuration and component range"],
      specs: [["Brand", "JUKI"], ["Model", "JM-100"], ["Type", "Odd-form / THT insertion mounter"]],
      apps: ["Power supplies", "Automotive", "Appliance electronics"]
    },
    {
      id: "npm-w2", image: "assets/img/products/npm-w2.jpg", cat: "placement", model: "NPM-W2", featured: true,
      name: "Panasonic NPM-W2 Large-Board Modular Mounter",
      summary: "Panasonic’s wide-board modular mounter for boards up to 750 × 550 mm and components up to 150 mm long, with high accuracy and large feeder capacity.",
      features: ["Up to 42,000 cph with the 16-nozzle head", "Boards from 50 × 50 up to 750 × 550 mm (single lane)", "Components from 03015 up to 150 × 25 mm", "Placement accuracy ±40 µm (Cpk ≥ 1)", "Up to 120 feeders"],
      specs: [["Brand", "Panasonic"], ["Model", "NPM-W2"], ["Type", "Large-board modular mounter"], ["Max speed", "42,000 cph (16-nozzle head)"], ["PCB size", "50 × 50 to 750 × 550 mm (single lane)"], ["Components", "03015 to 150 × 25 mm"], ["Accuracy", "±40 µm (Cpk ≥ 1)"], ["Feeders", "Up to 120"]],
      apps: ["Large boards", "Servers & telecom", "Automotive"]
    },
    {
      id: "npm-d3a", image: "assets/img/products/npm-d3a.jpg", cat: "placement", model: "NPM-D3A",
      name: "Panasonic NPM-D3A High-Speed Modular Mounter",
      summary: "A dual-beam, high-density Panasonic NPM module for fast, accurate placement in a compact footprint, with single- and dual-lane transport.",
      features: ["Placement head up to 46,000 cph (0.078 s/chip)", "16 / 8 / 2-nozzle head options", "Boards 50 × 50 to 510 × 590 mm (single lane), 510 × 300 mm (dual lane)", "Components from 0402 up to 100 × 90 mm, 28 mm tall", "Placement accuracy ±37 µm (Cpk ≥ 1)"],
      specs: [["Brand", "Panasonic"], ["Model", "NPM-D3A"], ["Type", "High-speed modular mounter"], ["Head max speed", "46,000 cph (0.078 s/chip)"], ["Heads", "16 / 8 / 2 nozzles"], ["PCB size", "50 × 50 to 510 × 590 mm (single lane)"], ["Components", "0402 to 100 × 90 mm, height ≤ 28 mm"], ["Accuracy", "±37 µm (Cpk ≥ 1)"]],
      apps: ["High-volume SMT", "Mobile & consumer", "Automotive"]
    },

    /* ───────────── Soldering & rework ───────────── */
    {
      id: "n10", image: "assets/img/products/n10.png", cat: "soldering", model: "N-10", art: "oven", featured: true,
      name: "Hot-Air Reflow Oven (Sonic N-Series)",
      summary: "A PC-controlled forced-convection reflow oven built for lead-free soldering, repeatable profiles and low running cost. Patented three-phase balanced heaters and high thermal efficiency cut power use by 15–20% compared with similar ovens.",
      features: [
        "Industrial PC with Windows, keyboard and colour monitor; all process data on one screen",
        "15–20% lower power consumption thanks to high thermal efficiency",
        "Automatic chain-rail lubrication with an operator-programmable cycle",
        "Heat exchanger and cooling filter can be removed without stopping production",
        "Flux management system for quick cleaning and less filter maintenance",
        "Roller-type chain reduces rail friction and prevents rail deformation",
        "Patented 3-phase balanced heaters: low inrush current, strong thermal compensation"
      ],
      specs: [
        ["Model", "N-10"],
        ["Series", "Sonic N-Series"],
        ["Heating", "Forced hot-air convection"],
        ["Control", "Industrial PC, Windows"],
        ["Process", "Lead-free capable"],
        ["Energy saving", "15–20% vs comparable ovens"],
        ["Lubrication", "Automatic, programmable"]
      ],
      apps: ["High-mix SMT lines", "Lead-free reflow", "Automotive & LED", "EMS production"]
    },
    {
      id: "ht450", image: "assets/img/products/ht450.png", cat: "soldering", model: "HT450", art: "wave", featured: true,
      name: "Lead-Free Wave Soldering Machine",
      summary: "An energy-efficient, lead-free wave soldering system for through-hole and mixed-technology boards. It combines scanning flux spray, four-zone preheat and an inverter-driven solder pot, with an optional nitrogen kit that reduces dross and improves joint quality.",
      features: [
        "Inverter-controlled conveyor with automatic board entry",
        "Scanning flux spray: Japanese nozzles, rodless pneumatic cylinder, PLC control",
        "Four independently controlled preheat zones, uniform within ±2 °C",
        "Special-alloy fingers resist solder wetting; automatic finger cleaning",
        "Solder pot driven by an imported high-frequency inverter motor",
        "Easy-to-clean furnace designed for safety and low emissions",
        "Fault alarm system and \"black box\" production record",
        "Optional nitrogen configuration with a high-accuracy O₂ analyser"
      ],
      specs: [
        ["Model", "HT450"],
        ["Process", "Lead-free"],
        ["Preheat", "4 independent zones"],
        ["Preheat uniformity", "≤ ±2 °C"],
        ["Fluxer", "Scanning spray, PLC controlled"],
        ["Solder pot drive", "High-frequency inverter motor"],
        ["N₂ option", "16 m³/h at 500–1000 ppm O₂"]
      ],
      apps: ["THT & mixed-technology boards", "Power supplies", "Automotive & lighting", "Consumer electronics"]
    },
    {
      id: "b651", image: "assets/img/products/b651.png", cat: "soldering", model: "HTW-B651", art: "rework",
      name: "BGA Rework Station",
      summary: "An optical-alignment rework station for removing and replacing BGAs and other area-array packages. Independent top and bottom heaters with PID closed-loop control follow programmable eight-stage profiles that can be watched and adjusted live.",
      features: [
        "Camera image makes BGA-to-pad alignment quick and accurate",
        "Automatic BGA removal and soldering",
        "8 programmable profile stages for an optimal profile",
        "Real-time profile is displayed and adjustable",
        "Independent top & bottom heating with PID closed-loop control",
        "CE certified"
      ],
      specs: [
        ["Model", "HTW-B651"],
        ["Alignment", "Optical camera"],
        ["Heating", "Independent top & bottom zones"],
        ["Profile", "8 programmable stages"],
        ["Control", "PID closed-loop"],
        ["Certification", "CE"]
      ],
      apps: ["BGA / CSP / QFN rework", "Repair centres", "NPI debugging"]
    },

    /* ───────────── Through-hole & press-fit ───────────── */
    {
      id: "ht-pfpr6s", image: "assets/img/products/ht-pfpr6s.png", cat: "insertion", model: "HT-PFPR6S", featured: true,
      name: "Press-Fit Pin & Rivet Insertion Machine",
      summary: "A vision-guided cell that inserts press-fit pins from tape-and-reel and rivets / eyelets from Ø1.3 to 4.0 mm into PCBs in one setup — about 200 pins per minute with ±0.018 mm repeatability.",
      features: [
        "Separate heads: 1 for press-fit pins, 2 for rivets",
        "About 200 pins/min (theoretical); about 0.4 s per rivet",
        "±0.018 mm X/Y repeatability",
        "Insertion at 0°, 90°, 180°, 270° or multiple angles",
        "HD industrial CCD for hole positioning",
        "Left-to-right or right-to-left board flow (specify at order)",
        "Intel i3 PC with Windows and 7\" LCD"
      ],
      specs: [
        ["Model", "HT-PFPR6S"],
        ["Components", "Press-fit pins (tape & reel); rivets Ø1.3 – 4.0 mm"],
        ["Insertion heads", "1 × press-fit pin, 2 × rivet"],
        ["Pin speed", "≈ 200 pcs/min (theoretical)"],
        ["Rivet cycle time", "≈ 0.4 s/rivet"],
        ["X/Y repeatability", "±0.018 mm"],
        ["Insertion angles", "0 / 90 / 180 / 270° or multi-angle"],
        ["PCB loading time", "4 s"],
        ["Max PCB size", "500 × 350 mm"],
        ["Component clearance", "Top 27 mm, bottom 17 mm"],
        ["Worktable travel", "X 680 / Y 370 mm (multi-direction); X 580 / Y 370 mm (bilateral)"],
        ["Hole positioning", "HD industrial CCD"],
        ["Operating environment", "5 – 40 °C, 10 – 90% RH, non-condensing"],
        ["Air supply", "6 ± 0.5 kg/cm²"],
        ["Power", "1-phase 220 V AC, ≈ 3 kW"],
        ["Machine size", "2250 × 1300 × 1600 mm"],
        ["Weight", "≈ 1450 kg"]
      ],
      apps: ["Automotive connectors", "Power & telecom backplanes", "Press-fit headers", "Eyelet / rivet boards"]
    },
    {
      id: "ht1005", image: "assets/img/products/ht1005.png", cat: "insertion", model: "HT1005",
      name: "Automatic Eyelet / Rivet Insertion Machine",
      summary: "Automatically inserts eyelets and rivets into PCBs using one to five heads, each fed from its own vibratory bowl, at 0.4 s per rivet.",
      features: [
        "1 to 5 insertion heads, configured to the rivet types you use",
        "1 to 5 vibration trays for rivet supply",
        "0.4 s per rivet (excluding PCB movement)",
        "Handles boards from 50 × 50 mm to 330 × 330 mm"
      ],
      specs: [
        ["Model", "HT1005"],
        ["Insertion heads", "1 – 5"],
        ["Rivet supply", "1 – 5 vibration trays"],
        ["Speed", "0.4 s/rivet (excl. PCB movement)"],
        ["PCB size", "50 × 50 to 330 × 330 mm"],
        ["PCB thickness", "0.8 – 1.6 mm"],
        ["Rivet size", "Ø1.3 – 4.0 mm"],
        ["Machine size", "1920 × 1400 × 1580 mm (excl. tower light)"],
        ["Power", "220 V AC, 1-phase, 50 Hz"]
      ],
      apps: ["Single-sided boards with eyelets", "Power & appliance PCBs", "Relay & connector mounting"]
    },
    {
      id: "hw-pf30", image: "assets/img/products/hw-pf30.png", cat: "insertion", model: "HW-PF30",
      name: "Pneumatic Press-Fit Pin Insertion Press",
      summary: "A pneumatic bench press for press-fit connectors and pins. Pressing force rises with air pressure up to 12,000 N, and the open-arm design accepts large PCBAs.",
      features: [
        "Pressing force up to 12,000 N, proportional to supply air pressure",
        "Head-to-table distance adjustable from 20 to 100 mm",
        "Stroke limit set by an adjusting nut to suit product and tooling",
        "Hard-chromed #45 steel table",
        "Accepts PCBAs up to 300 mm from part to board edge, any length"
      ],
      specs: [
        ["Model", "HW-PF30"],
        ["Air supply", "0.6 – 0.8 MPa"],
        ["Max force", "12,000 N"],
        ["Max working stroke", "80 mm"],
        ["Head-to-table distance", "20 – 100 mm (adjustable)"],
        ["Head centre to arm", "300 mm"],
        ["Table", "#45 steel, Cr-plated, 600 × 450 × 12 mm"],
        ["Table levelness", "0 – 0.03 mm (X), 0 – 0.05 mm (Y)"],
        ["Machine size / weight", "600 × 750 × 1000 mm, 130 kg"],
        ["Stand size / weight", "600 × 850 × 754 mm, 70 kg"],
        ["Force at 0.1 – 0.2 MPa", "1800 – 3880 N"],
        ["Force at 0.2 – 0.3 MPa", "3880 – 5500 N"],
        ["Force at 0.3 – 0.4 MPa", "5500 – 7500 N"],
        ["Force at 0.4 – 0.5 MPa", "7500 – 9500 N"],
        ["Force at 0.5 – 0.6 MPa", "9500 – 11,450 N"],
        ["Force at 0.6 – 0.7 MPa", "11,450 – 12,900 N"]
      ],
      apps: ["Press-fit connectors", "Backplanes", "Low-volume press-fit assembly"]
    },

    /* ───────────── Depaneling ───────────── */
    {
      id: "v300d", image: "assets/img/products/v300d.png", cat: "depaneling", model: "V300D", featured: true,
      name: "PCB Depaneling Router",
      summary: "A programmable 4-axis servo router that separates PCB panels with low stress and clean edges — an economical replacement for hand breaking or V-cut on populated boards.",
      features: [
        "Imported 60,000 rpm spindle: long life, easy bit change",
        "4-axis servo control for accurate, repeatable routing",
        "20× lens camera for fast, accurate program teaching",
        "Anti-static device built in",
        "Vacuum dust extraction",
        "Upload, download, edit and back up programs over the network",
        "One-year warranty"
      ],
      specs: [
        ["Model", "V300D"],
        ["Axes", "4-axis servo"],
        ["Spindle", "60,000 rpm"],
        ["Teaching camera", "20× lens"],
        ["Dust collection", "Vacuum"],
        ["ESD", "Anti-static device"],
        ["Software", "Windows-based"],
        ["Warranty", "1 year"]
      ],
      apps: ["Populated panel separation", "Tab-routed panels", "Automotive & LED boards"]
    },
    {
      id: "rm285", image: "assets/img/products/rm285.png", cat: "depaneling", model: "RM 285", art: "router",
      name: "Offline Router with Milling Cutter",
      summary: "An offline automatic router: the milling head and camera ride on an X/Y gantry while the panel stays fixed, cutting straight lines, arcs and circles from a stored program.",
      features: [
        "Milling head and camera on the Z axis, moved by an X/Y gantry",
        "PCB stays fixed on the work table while cutting",
        "Cuts straight lines, arcs and circles to a preset program",
        "One operator loads panels and unloads finished boards",
        "Camera reads 1D / 2D barcodes for traceability"
      ],
      specs: [["Model", "RM 285"], ["Type", "Offline automatic router"], ["Cutting", "Lines, arcs, circles"], ["Traceability", "1D / 2D barcode reading"]],
      apps: ["Offline depaneling", "Mixed panel designs", "Traceable singulation"]
    },
    {
      id: "vm600", image: "assets/img/products/vm600.png", cat: "depaneling", model: "VM600", variants: ["VM600", "VM400"], art: "vcut",
      name: "V-Cut PCB Separator",
      summary: "A motorised V-groove separator: the board stays still while the upper blade travels along the groove, giving fast, low-stress separation that protects solder joints.",
      features: [
        "Much faster than manual breaking",
        "Low-stress cutting protects solder joints",
        "Board stays stationary while the upper blade moves",
        "Free start-point setting extends blade life",
        "Adjustable cutting distance",
        "Touch-screen control with output counter",
        "Safety sensor and belt conveyor"
      ],
      specs: [["Models", "VM600, VM400"], ["Cutting", "Moving upper blade, stationary PCB"], ["Control", "Touch screen"], ["Safety", "Safety sensor"], ["Transport", "Belt conveyor"]],
      apps: ["V-scored panels", "LED strips", "Long boards"]
    },
    {
      id: "hw-f200", image: "assets/img/products/hw-f200.png", cat: "depaneling", model: "HW-F200", art: "vcut",
      name: "Chopping-Type PCB Cutter",
      summary: "A guillotine-style cutter that separates V-scored sub-boards with a long high-speed-steel blade and very low cutting stress.",
      features: [
        "Separates sub-boards 4 – 100 mm wide from one panel",
        "Works with V-cut depth of one-third of board thickness",
        "Low cutting stress, typically about 200 µε",
        "High-speed steel blade, 360 mm long"
      ],
      specs: [
        ["Model", "HW-F200"],
        ["V-cut depth", "1/3 of PCB thickness"],
        ["Sub-board width", "4 – 100 mm"],
        ["Max cutting length", "360 mm"],
        ["Blade", "High-speed steel, 360 × 43.5 × 6 mm"],
        ["Cutting stress", "≈ 200 µε"],
        ["Power", "220 V AC, 100 W"],
        ["Weight", "130 kg (excl. trolley)"],
        ["Size", "700 × 325 × 400 mm (excl. trolley)"]
      ],
      apps: ["V-scored panels", "LED & lighting boards", "Power modules"]
    },

    /* ───────────── Conveyors & handling ───────────── */
    {
      id: "htc31t100m", image: "assets/img/products/htc31t100m.jpg", cat: "handling", model: "HTC31T100M",
      name: "SPI / AOI Buffer",
      summary: "Placed after SPI or AOI, this buffer stores boards, routes NG boards up to an inspection conveyor for visual review, or simply passes boards through in bypass mode.",
      features: [
        "Buffer, NG-review and bypass modes",
        "Fast, smooth and stable PCB transfer",
        "Antistatic surface treatment",
        "Compact footprint",
        "Single- and dual-lane versions"
      ],
      specs: [
        ["Model", "HTC31T100M"],
        ["Function", "Buffer after SPI / AOI"],
        ["Modes", "Store good boards, divert NG for visual check, or bypass"],
        ["PCB thickness", "≥ 0.8 mm"],
        ["PCB weight", "≤ 1 kg incl. carrier"],
        ["Vertical pitch", "20 mm (custom on request)"],
        ["Single-lane structure", "Lower incoming conveyor, upper NG conveyor, servo vertical buffer"],
        ["Dual-lane structure", "Lower fixed buffer, upper incoming conveyor, servo vertical conveyor"],
        ["Width adjustment", "Manual or automatic"],
        ["Belt", "3 mm antistatic flat belt"]
      ],
      apps: ["After SPI", "After AOI", "Line balancing"]
    },
    {
      id: "cyb-1d100l", image: "assets/img/products/cyb-1d100l.png", cat: "handling", model: "CYB-1D100L", art: "magazine",
      name: "Multi-Function Box-Type Buffer / Unloader",
      summary: "A magazine unloader and buffer that loads three standard magazines at once and has its own push-in mechanism, so no separate transfer conveyor is needed.",
      features: [
        "Microcomputer control for stable operation",
        "Fuji-style button panel or touch panel (optional)",
        "Sound and light alarms",
        "Takes three standard magazines at once",
        "Adjustable lift pitch for different PCB sizes",
        "Built-in pusher: no separate transfer machine needed",
        "Automatic counting; optional SMEMA interface"
      ],
      specs: [["Model", "CYB-1D100L"], ["Magazines", "3 loaded at once"], ["Lift pitch", "10 / 20 / 30 / 40 mm"], ["Interface", "Buttons or touch panel"], ["Communication", "SMEMA (optional)"]],
      apps: ["End-of-line unloading", "Line buffering"]
    },
    {
      id: "zl-3", image: "assets/img/products/zl-3.jpg", cat: "handling", model: "ZL-3", art: "magazine",
      name: "Automatic PCB Loader",
      summary: "Feeds bare boards from magazines into the line at the start of an SMT line, with a pressure-regulated pusher and three-point pneumatic magazine clamping.",
      features: [
        "Rugged, stable frame",
        "In-house control board with soft-touch LED membrane panel",
        "Pressure-regulated pusher prevents board damage",
        "Three-point pneumatic clamp aligns and holds the magazine",
        "Self-diagnostic error codes",
        "Pusher position adjustable for board thickness",
        "Wear-resistant cabling; SMEMA compatible"
      ],
      specs: [["Model", "ZL-3"], ["Function", "Magazine-to-line PCB loading"], ["Interface", "SMEMA"]],
      apps: ["Start of SMT line", "Magazine feeding"]
    },
    {
      id: "zl-3bm", image: "assets/img/products/zl-3bm.jpg", cat: "handling", model: "ZL-3BM", art: "magazine",
      name: "Automatic PCB Unloader",
      summary: "Collects finished boards from the line into magazines at the end of an SMT line, with the same robust build and SMEMA handshake as the ZL-3 loader.",
      features: [
        "Rugged, stable frame",
        "In-house control board with touch-sensitive LED membrane panel",
        "Pressure-regulated pusher prevents board damage",
        "Three-point pneumatic clamp aligns and holds the magazine",
        "Self-diagnostic error codes",
        "Wear-resistant cabling; SMEMA compatible"
      ],
      specs: [["Model", "ZL-3BM"], ["Function", "Line-to-magazine PCB unloading"], ["Interface", "SMEMA"]],
      apps: ["End of SMT line", "Magazine collection"]
    },
    {
      id: "ht-pc-450", image: "assets/img/products/ht-pc-450.jpg", cat: "handling", model: "HT-PC-450",
      name: "Belt-Link PCB Conveyor",
      summary: "A fully automatic link conveyor that joins wave soldering and manual insertion lines, with manual width and angle adjustment.",
      features: ["Links wave soldering and manual insertion lines", "Runs fully automatically", "Manual rail width and angle adjustment", "Stable, reliable buffer conveying"],
      specs: [["Model", "HT-PC-450"], ["Function", "Link / buffer conveyor"], ["Adjustment", "Manual width & angle"]],
      apps: ["THT insertion lines", "Wave solder in-feed", "Line linking"]
    },
    {
      id: "work-table", image: "assets/img/products/work-table.png", cat: "handling", model: "0.8 / 1.0 / 1.2 m", variants: ["0.8 m", "1.0 m", "1.2 m"], art: "table",
      name: "Assembly Work Table",
      summary: "Workbenches for manual assembly, inspection and rework stations, available in 0.8 m, 1.0 m and 1.2 m lengths. Can be customised to your layout.",
      features: ["Three standard lengths: 0.8 m, 1.0 m, 1.2 m", "Suited to assembly, inspection and rework stations", "Custom sizes and accessories on request"],
      specs: [["Lengths", "0.8 m, 1.0 m, 1.2 m"]],
      apps: ["Manual assembly", "Inspection stations", "Rework benches"]
    },

    /* ───────────── Marking & final assembly ───────────── */
    {
      id: "lm-450", image: "assets/img/products/lm-450.png", cat: "marking", model: "LM-450", featured: true,
      name: "Automatic PCB Laser Marking Machine",
      summary: "An in-line laser marker that engraves 1D / 2D codes, text, serial numbers and logos onto PCBs for traceability. XY motion, CCD + fiducial positioning, automatic width adjustment and on-line code reading are built in.",
      features: [
        "Fully automatic, PC-based software on Windows",
        "CO₂ or fibre laser source, positioned by XY stage and CCD + mark",
        "Marks text, numbers, graphics, serials, logos, barcodes and 2D codes",
        "Built-in board flipper for double-sided marking",
        "Optional upper and lower dual-laser configuration",
        "Connects to shop-floor and MES systems",
        "Imports Gerber and DXF files",
        "No consumables"
      ],
      specs: [
        ["Model", "LM-450"],
        ["Laser source", "CO₂ or fibre (configurable)"],
        ["Positioning", "XY stage + CCD fiducial"],
        ["Marking accuracy", "Within 0.02 mm"],
        ["Double-sided", "Yes, built-in flipper"],
        ["Dual laser", "Optional upper + lower"],
        ["File import", "Gerber, DXF"],
        ["Materials", "PCB, FPC, metal shields, semiconductor chips"],
        ["Software", "PC, Windows"]
      ],
      apps: ["PCB traceability", "FPC marking", "Shield-can marking"]
    },
    {
      id: "sd10", image: "assets/img/products/sd10.png", cat: "marking", model: "SD10", art: "screw",
      name: "Semi-Automatic Screw Driving Machine",
      summary: "A screw-fastening cell with two working tables, an electric screwdriver and a Japanese-brand screw feeder. Error-proofing catches loose, floating or missing screws.",
      features: [
        "Two working tables: load one while the other is fastened",
        "Easy to operate and program",
        "Flexible tooling for multiple products",
        "Japanese-brand screw feeder",
        "Error-proofing against loose, floating and missing screws"
      ],
      specs: [["Model", "SD10"], ["Work tables", "2"], ["Screwdriver", "Electric"], ["Screw feeding", "Automatic feeder"]],
      apps: ["Mobile & consumer devices", "Box build", "Module assembly"]
    },

    /* ───────────── Inspection ───────────── */
    {
      id: "s8030", image: "assets/img/products/s8030.jpg", cat: "inspection", model: "S8030", variants: ["S8030", "HERO", "ULTRA"], featured: true,
      name: "3D Solder Paste Inspection (SPI)",
      summary: "100% in-line 3D measurement of solder paste deposits. Phase-shift light modulation removes the glass grating and piezo drive of moiré systems, so there are no wearing parts, and multi-image capture gives highly repeatable results.",
      features: [
        "PSLM / PMP structured light with no glass grating or moving parts",
        "\"Stop & Catch\" multi-image capture for repeatable 3D measurement",
        "Patented full-spectrum D-Lighting reduces shadows and noise",
        "Automatic whole-board programming from Gerber data",
        "Manual Teach mode when Gerber is not available",
        "Height range up to 1200 µm: also inspects red glue and black epoxy",
        "One-key operation; a typical program takes about 5 minutes",
        "Real-time SPC to catch print problems early"
      ],
      specs: [
        ["Models", "S8030, HERO, ULTRA"],
        ["Measurement", "3D, PSLM / PMP structured light"],
        ["Max height range", "1200 µm"],
        ["Programming", "Gerber import or manual Teach"],
        ["Process control", "Real-time SPC"]
      ],
      apps: ["In-line paste inspection", "Fine-pitch & 01005", "Red glue / epoxy checks"]
    },
    {
      id: "s8080", image: "assets/img/products/s8080.png", cat: "inspection", model: "S8080", art: "spi",
      name: "3D Solder Paste Inspection (SPI) – S8080",
      summary: "A 3D SPI platform using PSLM structured light, multi-image Stop & Catch capture and patented D-Lighting for repeatable, low-noise paste measurement with zero mechanical wear.",
      features: [
        "PSLM structured light: no glass grating, PZT drive or moving parts",
        "Multi-image \"Stop & Catch\" measurement for better repeatability",
        "Patented full-spectrum D-Lighting reduces shadows and noise",
        "Gerber import for automatic programming; manual Teach mode"
      ],
      specs: [["Model", "S8080"], ["Measurement", "3D, PSLM structured light"], ["Programming", "Gerber import or manual Teach"]],
      apps: ["In-line paste inspection", "High-mix production"]
    },
    {
      id: "lx520il", image: "assets/img/products/lx520il.png", cat: "inspection", model: "LX520iL", art: "spi", featured: true,
      name: "2D Automated Optical Inspection (AOI)",
      summary: "An in-line 2D AOI with multi-angle high-brightness LED lighting and deep-learning algorithms that cut false calls. Programs can be built offline while the machine keeps running.",
      features: [
        "Traceability: saves and retrieves the full PCB image",
        "Multi-angle high-brightness LED lighting",
        "Real-time SPC statistics",
        "AI / deep-learning detection lowers false-call rate",
        "Non-stop offline programming in parallel threads"
      ],
      specs: [["Model", "LX520iL"], ["Type", "2D in-line AOI"], ["Lighting", "Multi-angle high-brightness LED"], ["Algorithms", "Deep learning / AI"], ["Programming", "Offline, non-stop"]],
      apps: ["Post-reflow inspection", "Pre-reflow inspection", "THT inspection"]
    },
    {
      id: "ani-800", image: "assets/img/products/ani-800.png", cat: "inspection", model: "ANI-800", art: "nozzle", featured: true,
      name: "Automatic Nozzle Inspection Machine",
      summary: "Checks pick-and-place nozzles automatically: vision inspection of the tip, 2D-code reading and a vacuum test, for nozzles from all major mounter brands.",
      features: [
        "Vision inspection of the nozzle tip",
        "2D-code reading for nozzle traceability",
        "Vacuum / flow check",
        "Supports nozzles from multiple mounter brands",
        "24-nozzle carrier for Fuji NXT I, II and III"
      ],
      specs: [
        ["Model", "ANI-800"],
        ["Cycle time", "1.5 s/nozzle (vision); 3 s/nozzle (vacuum)"],
        ["Tester size (L × W × H)", "570 × 240 × 530 mm (excl. PSU & IPC)"],
        ["Imaging", "1.3 MP industrial CCD, 280× zoom lens"],
        ["Nozzle size", "Height ≤ 47 mm; Ø ≤ 10 mm; tip ≤ 2 × 2 mm"],
        ["Nozzle brands", "Fuji, Panasonic, ASM, Assembleon, Sony, Universal, Juki"],
        ["Carrier capacity", "24 nozzles (Fuji NXT I / II / III)"],
        ["Key components", "Advantech IPC, Dell monitor, Omron sensor, SMC pneumatics, Daheng CCD"],
        ["Air supply", "4 – 7 kg/cm²"],
        ["Power", "AC 220 V ±10 V, 50 Hz, ≈ 1 kW"]
      ],
      apps: ["Nozzle maintenance", "Pick-up error reduction", "Nozzle traceability"]
    },
    {
      id: "f500", image: "assets/img/products/f500.png", cat: "inspection", model: "F500", art: "fai",
      name: "First Article Inspection System",
      summary: "Replaces slow, error-prone first-article checks done part by part with an LCR meter. Measurement hardware and wizard-guided software walk the operator through every component.",
      features: [
        "Measurement hardware plus easy application software",
        "Wizard-guided, step-by-step inspection",
        "Fewer human errors than manual LCR checking",
        "Ideal for frequent changeovers on small-volume models"
      ],
      specs: [["Model", "F500"], ["Typical time", "≈ 30 min for a 300-component board"], ["Workflow", "Wizard-guided"]],
      apps: ["First-article inspection", "High-mix / low-volume", "NPI"]
    },
    {
      id: "ti-300", image: "assets/img/products/ti-300.jpg", cat: "inspection", model: "TI-300", art: "scope",
      name: "3D Video Microscope",
      summary: "A 3D video microscope for SMT process engineering, incoming inspection and QA. Rotating views remove blind angles when checking solder fillets and component leads.",
      features: [
        "Interchangeable reflector modules for different tasks",
        "3D rotating view eliminates blind angles",
        "Switch between 3D and 2D observation and measurement",
        "Capture and save images",
        "Motorised 360° rotation to inspect lead solder fillets"
      ],
      specs: [["Model", "TI-300"], ["Viewing", "3D / 2D switchable"], ["Rotation", "Motorised 360°"], ["Image capture", "Yes"]],
      apps: ["SMT process analysis", "IQC", "QA failure analysis"]
    },

    /* ───────────── Test & measurement ───────────── */
    {
      id: "pft-500", image: "assets/img/products/pft-500.jpg", cat: "testing", model: "PFT-500", art: "tester",
      name: "Cover-Tape Peel Strength Tester",
      summary: "Tests carrier-tape cover peel strength to ANSI/EIA-481-D, manually or from a PC, with automatic pass/fail, tamper-proof results and full statistics.",
      features: [
        "Manual or PC-controlled operation",
        "Japanese-made 1 kg tensile test head",
        "RS232 digital data link: no conversion errors",
        "Windows software; results cannot be modified",
        "Upper / lower limits with automatic pass/fail and printing",
        "Historical database and live tension-vs-time curve",
        "Auto max, min, range, mean, RMS, std-dev and variation"
      ],
      specs: [["Model", "PFT-500"], ["Standard", "ANSI/EIA-481-D"], ["Test head", "1 kg, Japanese-made"], ["Interface", "RS232"], ["Control", "Manual or PC"], ["Display", "LCD peel speed"]],
      apps: ["Incoming reel QC", "Taping process validation"]
    },
    {
      id: "hw-12", image: "assets/img/products/hw-12.png", cat: "testing", model: "HW-12", art: "tester",
      name: "SMD Carrier Tape Peel Force Tester",
      summary: "An EIA-481 peel force tester with an IMADA 500 g test head, LCD readout, tolerance limits and automatic pass/fail. Results are stored and cannot be altered.",
      features: [
        "Built to EIA-481 peel-strength requirements",
        "Manual or PC operation",
        "Tamper-proof results for audit confidence",
        "LCD peel-force readout with real-time data",
        "Tolerance setting and automatic pass/fail",
        "Stored, traceable test data",
        "IMADA (Japan) 500 g force gauge"
      ],
      specs: [["Model", "HW-12"], ["Standard", "EIA-481"], ["Force gauge", "IMADA 500 g"], ["Control", "Manual or PC"], ["Data", "Stored & traceable"]],
      apps: ["Taping QC", "Supplier reel audits"]
    },
    {
      id: "usb-dc25", image: "assets/img/products/usb-dc25.jpg", cat: "testing", model: "USB-DC25", art: "scanner",
      name: "Barcode / QR Code Verifier",
      summary: "A USB CCD verifier with built-in lighting that grades 1D / 2D and DPM code quality to ISO standards and exports reports to PDF, Excel or printer.",
      features: [
        "CCD imager with integrated illumination; USB to PC",
        "Grades code quality to ISO, AS 9132 and AIM DPM",
        "Reports to printer, PDF or Excel",
        "Upgradeable software",
        "NIST-traceable calibration",
        "Parses and validates standard data formats",
        "Adjustable aperture"
      ],
      specs: [["Model", "USB-DC25"], ["Interface", "USB"], ["Grading", "ISO, AS 9132, AIM DPM"], ["Calibration", "NIST-traceable"], ["Aperture", "Adjustable"]],
      apps: ["Laser-mark verification", "Label QC", "Customer compliance"]
    },

    /* ───────────── Reflow profiling ───────────── */
    {
      id: "kic-x5", image: "assets/img/products/kic-x5.jpg", cat: "profiling", model: "KIC X5", featured: true,
      name: "KIC X5 Thermal Profiler",
      summary: "KIC’s fifth-generation reflow profiler with 7, 9 or 12 channels, ±0.5 °C accuracy, automatic SPC / Cpk and Navigator Power optimisation that predicts the best oven recipe without a test run.",
      features: [
        "Windows software with USB-key licence",
        "Runs on 3 × AAA batteries or USB power",
        "Standard curve overlay and automatic comparison",
        "Automatic SPC charts and Cpk",
        "Navigator Power: auto recipe for process centre, max speed or min power",
        "Predicts results of temperature / speed changes without a test run",
        "24-month hardware warranty"
      ],
      specs: [
        ["Model", "KIC X5"],
        ["Accuracy", "±0.5 °C"],
        ["Resolution", "0.1 °C"],
        ["Internal operating temp.", "0 – 85 °C"],
        ["Sampling rate", "0.1 – 10 /s"],
        ["Memory", "224,640 data points"],
        ["PC connection", "USB 2.0"],
        ["Power", "3 × AAA or USB"],
        ["RF option", "433.92 MHz"],
        ["Channels", "7, 9 or 12 (Type K)"],
        ["Size, 7-ch", "206 × 60 × 17 mm"],
        ["Size, 9-ch", "206 × 75 × 17 mm"],
        ["Size, 12-ch", "206 × 98 × 17 mm"]
      ],
      apps: ["Reflow profiling", "Wave profiling", "Oven recipe optimisation"]
    },
    {
      id: "kic-start2", image: "assets/img/products/kic-start2.jpg", cat: "profiling", model: "KIC Start2",
      name: "KIC Start2 Thermal Profiler",
      summary: "A compact, easy-to-use 6-channel profiler that rates every profile with a single Process Window Index (PWI) — ideal when you need accurate profiles quickly without deep optimisation.",
      features: [
        "6-channel hand-held profiler",
        "Picture-based interface; one-number PWI rating",
        "Lead-free-rated thermal barrier and USB 2.0 download",
        "Standard curve overlay and automatic comparison",
        "Predicts the effect of zone-temperature and conveyor-speed changes"
      ],
      specs: [["Model", "KIC Start2 (K2)"], ["Channels", "6"], ["Data transfer", "USB 2.0"], ["Rating", "Process Window Index (PWI)"]],
      apps: ["Reflow profiling", "Small & mid-size lines"]
    },
    {
      id: "kic-k2", image: "assets/img/products/kic-k2.jpg", cat: "profiling", model: "KIC K2",
      name: "KIC K2 Temperature Profiler",
      summary: "A KIC thermal profiler for capturing and verifying reflow oven profiles. Contact us for channel count, thermal barrier and software options.",
      features: ["Genuine KIC profiling hardware and software", "Works with standard Type K thermocouples", "Available with thermal barriers and accessories"],
      specs: [["Model", "KIC K2"], ["Thermocouple type", "K"]],
      apps: ["Reflow profiling", "Process verification"]
    },
    {
      id: "ui-301a6", image: "assets/img/products/ui-301a6.png", cat: "profiling", model: "UI-301A6",
      name: "Reflow Checker",
      summary: "Checks how a reflow oven is actually performing before production starts, so drift is caught before it causes defects.",
      features: ["Verifies reflow equipment conditions before production", "Helps prevent process-related defects", "Supports higher, more stable output"],
      specs: [["Model", "UI-301A6"], ["Application", "Reflow oven verification"]],
      apps: ["Daily oven checks", "Preventive maintenance"]
    },
    {
      id: "tc-datapaq", image: "assets/img/products/tc-datapaq.jpg", cat: "profiling", model: "Type K", art: "probe",
      name: "DATAPAQ Type-K Thermocouple",
      summary: "Standard Type K thermocouples compatible with DATAPAQ profiling systems.",
      features: ["Standard Type K", "Compatible with DATAPAQ profilers"],
      specs: [["Brand", "DATAPAQ"], ["Type", "K"]],
      apps: ["Reflow & wave profiling"]
    },
    {
      id: "tc-ecd", image: "assets/img/products/tc-ecd.jpg", cat: "profiling", model: "E31-0900-60", variants: ["E31-0900-60", "E31-0900-83"], art: "probe",
      name: "ECD Thermocouple",
      summary: "Replacement thermocouples for ECD profiling systems.",
      features: ["ECD-compatible", "Two standard part numbers available"],
      specs: [["Brand", "ECD"], ["Part numbers", "E31-0900-60, E31-0900-83"]],
      apps: ["Reflow profiling"]
    },
    {
      id: "tc-kic", image: "assets/img/products/tc-kic.jpg", cat: "profiling", model: "K-SM-TT-30-18", art: "probe",
      name: "KIC Thermocouple",
      summary: "Type K thermocouple for KIC profilers.",
      features: ["Type K", "Compatible with KIC profilers"],
      specs: [["Brand", "KIC"], ["Part number", "K-SM-TT-30-18"], ["Type", "K"]],
      apps: ["Reflow profiling"]
    },

    /* ───────────── Cleaning ───────────── */
    {
      id: "sc4000", image: "assets/img/products/sc4000.jpg", cat: "cleaning", model: "SC4000", featured: true,
      name: "Electric Stencil Cleaning Machine",
      summary: "Cleans solder paste stencils, red-glue stencils and misprinted PCBs in one compact stainless-steel unit: hot aqueous wash, hot DI-water rinse and hot-air drying.",
      features: [
        "Washing, rinsing and drying in one compact machine",
        "Hot aqueous cleaning spray",
        "Hot DI-water rinse spray",
        "Drying with hot air knives",
        "High cleaning quality and throughput",
        "Operator- and environment-friendly"
      ],
      specs: [
        ["Model", "SC4000"],
        ["Max stencil size", "750 × 750 × 40 mm"],
        ["Cleaning agent", "Aqueous (wash); DI or tap water (rinse)"],
        ["Tanks", "2 × 50 L (wash & rinse)"],
        ["Cleaning", "4 fixed spray bars; stencil moved by motor"],
        ["Rinsing", "4 fixed spray bars with DI water"],
        ["Drying", "4 hot air knives"],
        ["Wash time", "2 – 5 min (recommended)"],
        ["Rinse time", "2 – 5 min (recommended)"]
      ],
      apps: ["Paste stencils", "Red-glue stencils", "Misprinted PCBs"]
    },
    {
      id: "sc3000", image: "assets/img/products/sc3000.jpg", cat: "cleaning", model: "SC3000",
      name: "Pneumatic Stencil Cleaning Machine",
      summary: "A fully pneumatic stencil cleaner: no electrical parts in the wet area, so it is safe with flammable solvents. Rotating spray bars wash, then air-blow, both sides of the stencil.",
      features: [
        "For solder paste and red-glue stencils",
        "Works with solvent, semi-aqueous or aqueous agents",
        "Pneumatic drive removes ignition risk with flammable liquids",
        "SUS304 stainless steel construction",
        "Two rotating bars spray, then air-dry from both sides",
        "High-end pump and large filter; three-stage filtration for reuse",
        "Low exhaust exit and S-shaped hose reduce solvent loss"
      ],
      specs: [["Model", "SC3000"], ["Drive", "Fully pneumatic"], ["Agents", "Solvent, semi-aqueous, aqueous"], ["Body", "SUS304 stainless steel"], ["Filtration", "3-stage"]],
      apps: ["Paste stencils", "Red-glue stencils"]
    },
    {
      id: "sc3100", image: "assets/img/products/sc3100.jpg", cat: "cleaning", model: "SC3100",
      name: "Pneumatic Cleaner for Large Stencils",
      summary: "A larger version of the pneumatic cleaner, built for big LED and servo-board stencils. Safe with flammable solvents and easy for line operators to use.",
      features: [
        "Sized for large LED and servo-board stencils",
        "Solvent, semi-aqueous or aqueous agents",
        "Fully pneumatic: no ignition risk",
        "SUS304 body, piping and angle-seat valves",
        "Two rotating spray bars plus air-blow drying",
        "Three-stage filtration for agent reuse"
      ],
      specs: [["Model", "SC3100"], ["Drive", "Fully pneumatic"], ["Stencils", "Large format (LED / servo boards)"], ["Body", "SUS304 stainless steel"], ["Filtration", "3-stage"]],
      apps: ["LED stencils", "Large-format stencils"]
    },
    {
      id: "sq10", image: "assets/img/products/sq10.jpg", cat: "cleaning", model: "SQ10",
      name: "Squeegee & PCB Cleaning Machine",
      summary: "A pneumatic cleaner for printer squeegees, misprinted PCBs and small fixtures. It removes paste, flux, dust and oil, then air-dries from top and bottom.",
      features: [
        "For squeegees, misprinted PCBs and low-volume fixtures",
        "Simple to operate",
        "Solvent- or water-based cleaning agents",
        "Fully pneumatic: safe with flammable liquids",
        "Two rotating spray bars plus top and bottom air-blow",
        "Compact SUS304 body; mirror-finish chamber drains fast",
        "Shadow-free nozzle layout; high-end pump and filter"
      ],
      specs: [["Model", "SQ10"], ["Drive", "Fully pneumatic"], ["Body", "SUS304 stainless steel"]],
      apps: ["Squeegee blades", "Misprinted PCBs", "Small fixtures"]
    },
    {
      id: "st10-plus", image: "assets/img/products/st10-plus.jpg", cat: "cleaning", model: "ST10 PLUS",
      name: "Fixture & Flux-Condenser Cleaning Machine",
      summary: "A custom version of the ST10, designed for large flux condensers such as the Genbox of HELLER 1809MK3 reflow ovens. Wash, rinse and dry in one unit with recycled cleaning fluid.",
      features: [
        "Wash, rinse and dry in one machine",
        "Recirculates and filters both cleaning agent and rinse water",
        "Removes flux from corners that are hard to reach by hand",
        "No scratches or seal damage from manual brushing",
        "Efficient, easy to use, less maintenance work"
      ],
      specs: [["Model", "ST10 PLUS"], ["Designed for", "HELLER 1809MK3 flux condenser (Genbox)"], ["Process", "Wash, rinse, dry"]],
      apps: ["Reflow flux condensers", "Wave solder fixtures", "Pallets"]
    },
    {
      id: "filter-20um", image: "assets/img/products/filter-20um.jpg", cat: "cleaning", model: "20 µm", art: "drum",
      name: "High-Volume 20 µm Filters",
      summary: "Replacement 20 µm filter elements for stencil and fixture cleaning machines, keeping cleaning fluid clear for longer.",
      features: ["20 µm filtration", "High-volume flow", "For stencil / fixture cleaners"],
      specs: [["Rating", "20 µm"]],
      apps: ["Cleaner maintenance"]
    },
    {
      id: "hiclean-25200", image: "assets/img/products/hiclean-25200.jpg", cat: "cleaning", model: "Hiclean 25200", art: "drum",
      name: "Hiclean 25200 Aqueous Cleaning Agent",
      summary: "A water-based cleaning agent for stencils, fixtures and flux residue, supplied in 25 L cans.",
      features: ["Water-based (≈70% water)", "Supplied in 25 L cans", "For aqueous stencil and fixture cleaners"],
      specs: [["Product", "Hiclean 25200"], ["Pack", "25 L can"], ["Composition (CAS)", "10213-79-3 10%, 1310-58-3 1%, 5856-62-2 19%, 7732-18-5 70%"]],
      apps: ["SC4000 / ST10 cleaners", "Flux removal"]
    },

    /* ───────────── Moisture & dry storage ───────────── */
    {
      id: "dry-cabinet", image: "assets/img/products/dry-cabinet.jpg", cat: "msd", model: "DC Series", variants: ["DC-210", "DC-410", "DC-750", "DC-1150"], featured: true,
      name: "Dry Cabinet (DC Series)",
      summary: "Dry storage for moisture-sensitive components, reels and PCBs. Reaches below 5% RH without nitrogen, with an ESD-safe finish and lockable sealed doors.",
      features: [
        "Below 5% RH without nitrogen",
        "Digital readout",
        "ESD-safe, static-dissipative cabinet surface",
        "Well-sealed doors with key lock",
        "Optional data logger and chart recorder",
        "Four sizes: DC-210, DC-410, DC-750, DC-1150"
      ],
      specs: [["Models", "DC-210, DC-410, DC-750, DC-1150"], ["Humidity", "< 5% RH (no nitrogen)"], ["Display", "Digital"], ["ESD", "Static-dissipative surface"], ["Options", "Logger / chart recorder"]],
      apps: ["MSD storage", "Reel & tray storage", "Bare PCB storage"]
    },
    {
      id: "adh-1400-02", image: "assets/img/products/adh-1400-02.png", cat: "msd", model: "ADH-1400-02", art: "cabinet",
      name: "Fast-Dry Dehumidifying Cabinet",
      summary: "A deep-dry cabinet with a CDA dehumidifying unit that dries quickly at start-up and recovers fast after the door is opened — down to 1% RH, without the swings of desiccant cabinets.",
      features: [
        "Humidity control from room RH down to 1% RH",
        "Fast start-up drying and door-open recovery",
        "No humidity fluctuation compared with desiccant cabinets",
        "Antistatic powder coating",
        "LED digital controller",
        "Maintenance-free"
      ],
      specs: [["Model", "ADH-1400-02"], ["Humidity range", "Room RH to 1% RH"], ["Dehumidifier", "CDA deep-dehumidifying unit"]],
      apps: ["MSL 5–6 components", "High-reliability storage"]
    },
    {
      id: "tadhe-650", image: "assets/img/products/tadhe-650.jpg", cat: "msd", model: "TADHE-650", variants: ["T430", "T850"], art: "cabinet",
      name: "Low-Humidity Baking Oven",
      summary: "Bakes moisture-sensitive devices to reset floor life per IPC/JEDEC J-STD-033, at 125 °C or at low temperature under 5% RH. Optional nitrogen purge prevents oxidation.",
      features: [
        "Built-in CDA deep-dehumidifier for fast drying and recovery",
        "MSD floor-life reset per IPC/JEDEC J-STD-033",
        "Below 5% RH from 35 to 125 °C",
        "High temperature and humidity uniformity",
        "Hardware and software protection with alarms",
        "ESD protection and grounding",
        "Optional nitrogen purge, automatic above 150 °C"
      ],
      specs: [
        ["Model", "TADHE-650 (T430, T850)"],
        ["Temperature range", "+35 to +250 °C"],
        ["Humidity", "Room RH to < 5% RH (below 125 °C)"],
        ["Chamber", "800 × 800 × 1000 mm (< 650 L)"],
        ["Dehumidifying time", "15 – 20 min (60% → < 5% RH)"],
        ["Recovery time", "5 – 15 min to 5% RH after door opening"],
        ["Fluctuation", "≤ ±1 °C; ≤ 2% RH"],
        ["Uniformity", "≤ ±2.5% (temp.); 3 – 5% RH"],
        ["RH sensor", "Rated to 150 °C; remove above 150 °C"]
      ],
      apps: ["MSD baking", "PCB pre-bake", "Anti-oxidation baking"]
    },
    {
      id: "vp-600a", image: "assets/img/products/vp-600a.jpg", cat: "msd", model: "VP-600A", art: "packer",
      name: "Vacuum Packing Machine",
      summary: "Vacuum-seals reels, trays and boards in moisture barrier bags, with optional gas flushing. Pneumatic sealing gives a tighter seal than conventional heat bars.",
      features: [
        "Vacuum, seal and gas / air flush in one machine",
        "Pneumatic sealing for a tighter seal",
        "Evacuates in about 2 – 3 seconds",
        "Packs products of almost any shape",
        "Can flush with various gases"
      ],
      specs: [["Model", "VP-600A"], ["Max seal length", "600 × 10 mm"], ["Power", "1-phase 220 V, 50 Hz, 2800 W"], ["Dimensions", "670 × 460 × 1020 mm"], ["Net weight", "80 kg"]],
      apps: ["MSD dry-packing", "Reel re-packing", "Export packing"]
    },

    /* ───────────── Material handling ───────────── */
    {
      id: "smart-shelf", image: "assets/img/products/smart-shelf.png", cat: "material", model: "Agilink", variants: ["Agilink-385", "Agilink-580", "Agilink-1440"], art: "shelf", featured: true,
      name: "SMT Smart Reel Shelf",
      summary: "Intelligent reel storage that tracks every reel by slot. LEDs guide operators to the right reel, alarms stop wrong picks, and FIFO and MSD rules run automatically. Connects to MES / ERP.",
      features: [
        "Scan a reel and place it in any slot; slot sensors confirm presence",
        "Pick by barcode, BOM import or software selection; LEDs light the slot",
        "Alarms on unauthorised removal or unscanned storage",
        "Live inventory by reel, slot and arrival time; downloadable",
        "Data retained through power loss",
        "FIFO: part-used reels are issued first",
        "Custom rules for MSD, alternates, expiry and banned parts"
      ],
      specs: [
        ["Agilink-385 size", "1680 × 330 × 1600 mm, 5 layers"],
        ["Agilink-385 capacity", "385 slots (7\" reels, 20 mm pitch), single-sided, 20 W"],
        ["Agilink-580 size", "2730 × 330 × 1600 mm, 5 layers"],
        ["Agilink-580 capacity", "520 slots (7\" reels, 20 mm pitch), single-sided, 33 W"],
        ["Agilink-1440 size", "2200 × 450 × 1830 mm, 7 layers"],
        ["Agilink-1440 capacity", "1440 slots (7\" reels, 20 mm pitch) or custom; back-to-back, 60 W"],
        ["Power", "220 V AC"],
        ["Frame", "Aluminium alloy"],
        ["Network", "WLAN or Ethernet"],
        ["Integration", "MES & ERP"],
        ["Accessory", "High-speed scanner"]
      ],
      apps: ["SMT stores", "Kitting", "Line-side storage"]
    },
    {
      id: "hw-1010", image: "assets/img/products/hw-1010.png", cat: "material", model: "HW-1010", art: "reel",
      name: "Semi-Automatic SMD Taping Machine",
      summary: "Re-tapes loose or tray components into carrier tape with a precise sealing head and dual PID temperature control, to EIA-481.",
      features: [
        "Sealing head positioning accuracy ±0.01 mm",
        "Dual PID temperature control",
        "Adjustable cover-tape sealing position and tension",
        "Continuous or step sealing, adjustable speed",
        "Reels to EIA-481"
      ],
      specs: [["Model", "HW-1010"], ["Sealing accuracy", "±0.01 mm"], ["Temperature control", "Dual PID"], ["Standard", "EIA-481"]],
      apps: ["Re-taping loose parts", "Tray-to-reel conversion", "Sample reels"]
    },
    {
      id: "t30", image: "assets/img/products/t30.jpg", cat: "material", model: "T30", art: "reel",
      name: "Auto Taping Machine for SOP Tubes",
      summary: "Picks SOP8 / 14 / 16 ICs from tubes, places them into carrier tape and seals the cover tape automatically, to EIA-481.",
      features: [
        "Automatic tube-to-tape transfer",
        "Steady output with less operator effort",
        "Gentle handling avoids bent or damaged leads",
        "Optional camera inspection"
      ],
      specs: [["Model", "T30"], ["Packages", "SOP8, SOP14, SOP16 (tube)"], ["Standard", "EIA-481"]],
      apps: ["Tube-to-reel conversion", "IC re-packing"]
    },
    {
      id: "cou2000", image: "assets/img/products/cou2000.jpg", cat: "material", model: "COU2000", art: "counter",
      name: "SMD Reel Counter",
      summary: "Counts components on a reel quickly by reading carrier-tape sprocket holes and pocket pitch — faster, more accurate stock counts.",
      features: [
        "Fast counting from sprocket holes and pocket pitch",
        "Works with all reel sizes",
        "Optional barcode label printer",
        "Optional missing-component detection"
      ],
      specs: [["Model", "COU2000"], ["Power", "110 V AC, 60 Hz, 25 W"], ["Count range", "−59,999 to 59,999 pcs"], ["Dimensions", "450 × 240 × 280 mm"], ["Packed size", "610 × 315 × 370 mm"], ["Weight", "9 kg net / 10 kg gross"]],
      apps: ["Stores & inventory", "Kitting", "Cycle counts"]
    },
    {
      id: "all-300g", image: "assets/img/products/all-300g.png", cat: "material", model: "ALL-300G", art: "chip",
      name: "Universal Gang Programmer",
      summary: "A high-speed, multi-socket production programmer for a wide range of ICs and packages, with full pin-contact checking to protect devices.",
      features: [
        "High-performance core with USB 3.0",
        "Up to 16 sockets",
        "Supports a wide range of IC types and packages",
        "Pin-contact check catches poor contact and reversed ICs",
        "8 independent pin-driver sets for parallel programming",
        "New device support on request"
      ],
      specs: [["Model", "ALL-300G"], ["Interface", "USB 3.0"], ["Sockets", "Up to 16"], ["Pin drivers", "8 independent sets"]],
      apps: ["Production programming", "Pre-programming before SMT"]
    },
    {
      id: "pcb-magazine", image: "assets/img/products/pcb-magazine.jpg", cat: "material", model: "Standard / custom", art: "magazine",
      name: "PCB Magazine Rack",
      summary: "ESD-safe magazine racks for storing and moving PCBs between loaders, unloaders and stores. Standard and custom sizes available.",
      features: ["Compatible with standard loaders / unloaders", "Adjustable width", "ESD-safe construction", "Custom sizes on request"],
      specs: [],
      apps: ["Line loading / unloading", "WIP storage"]
    },
    {
      id: "plate-frame", image: "assets/img/products/plate-frame.jpg", cat: "material", model: "3W-9805301B1 / B1G", art: "table",
      name: "Upper & Lower Plate Frame",
      summary: "Replacement upper and lower plate frame assembly, part number 3W-9805301B1 / B1G.",
      features: ["Part no. 3W-9805301B1 / B1G"],
      specs: [["Part number", "3W-9805301B1 / B1G"]],
      apps: ["Equipment maintenance"]
    },

    /* ───────────── Reel splicing ───────────── */
    {
      id: "multiple-g", image: "assets/img/products/multiple-g.png", cat: "splicing", model: "Multiple G", art: "splicer", featured: true,
      name: "Portable Automatic Splicing Machine",
      summary: "A portable auto-splicer for 8, 12 and 16 mm carrier tape. It cuts empty pockets, pre-peels the new reel’s cover tape and splices at exact pitch, so reels can be changed without stopping the feeder.",
      features: [
        "Splices 8, 12 and 16 mm tape at accurate pitch",
        "Standard and reinforced splice tapes for strong joints",
        "Automatic width change between tape sizes",
        "Automatically cuts excess empty tape",
        "Pre-peels cover tape on the new reel",
        "Portable, with quick-swap battery for continuous use"
      ],
      specs: [["Model", "Multiple G"], ["Tape widths", "8, 12, 16 mm"], ["Power", "Swappable battery"]],
      apps: ["Non-stop feeder replenishment", "High-volume lines"]
    },
    {
      id: "ac-530", image: "assets/img/products/ac-530.png", cat: "splicing", model: "AC-530", art: "splicer",
      name: "Automatic Counting Splice Machine",
      summary: "Reads the barcode, finds the empty pocket, cuts precisely and butt-splices 8 mm paper tape in about 8 seconds, so feeders are reloaded without stopping the line.",
      features: ["Barcode reading", "Automatic empty-pocket detection", "Precise cutting", "Automatic butt-splice and taping"],
      specs: [
        ["Model", "AC-530"],
        ["Tape", "8 mm paper, 0.25 – 1.0 mm thick"],
        ["Empty pockets after splice", "1 – 3"],
        ["Cycle time", "8 s (excl. manual load / unload)"],
        ["Dimensions", "550 × 440 × 1100 mm"],
        ["Battery life", "8 – 12 h"],
        ["Working height", "≈ 850 mm"],
        ["Ambient temp.", "0 – 40 °C"],
        ["Weight", "55 kg"]
      ],
      apps: ["Chip-component reels", "Non-stop production"]
    },
    {
      id: "csw-010", image: "assets/img/products/csw-010.jpg", cat: "splicing", model: "CSW-010", art: "splicer",
      name: "MOA Swing Splice Device",
      summary: "A patented swing-type splicing tool that joins 8 – 104 mm paper and plastic tape quickly, with a 99% first-time success rate and less component waste.",
      features: ["Fast splicing with 99% success rate", "Rotates in all directions", "Stapler-style loading and unloading", "Joins 8 – 104 mm paper and plastic tape", "Adjustable table height", "Simple to use"],
      specs: [["Model", "CSW-010"], ["Tape width", "8 – 104 mm"], ["Tape types", "Paper & embossed plastic"]],
      apps: ["Manual reel splicing", "Wide tapes"]
    },
    {
      id: "cst-010", image: "assets/img/products/cst-010.jpg", cat: "splicing", model: "CST-010", art: "splicer",
      name: "Stapler Splice Tool",
      summary: "A stapler-type hand tool for crimping splice clips onto SMD carrier tape. Use with PSC-010 splice clips.",
      features: ["Stapler-style crimping", "Uses PSC-010 clip frames", "Quick reel changeovers"],
      specs: [["Model", "CST-010"], ["Clips", "PSC-010"]],
      apps: ["Manual reel splicing"]
    },
    {
      id: "psc-010", image: "assets/img/products/psc-010.jpg", cat: "splicing", model: "PSC-010", art: "splice",
      name: "Splice Clip (Frame Type)",
      summary: "Universal splice clips on frames for stapler-type splice tools, packed in portable plastic cases.",
      features: ["For stapler-type splice tools", "20 clips per frame", "Portable plastic case"],
      specs: [["Model", "PSC-010"], ["Clips / frame", "20"], ["Frames / case", "25 (500 clips)"], ["Cases / box", "8 (4,000 clips)"]],
      apps: ["Manual reel splicing"]
    },
    {
      id: "eps-010", image: "assets/img/products/eps-010.jpg", cat: "splicing", model: "EPS-010", art: "splice",
      name: "Splice Scissors",
      summary: "Precision scissors for trimming carrier tape at the splice start point and cutting paper or embossed tape cleanly.",
      features: ["Cuts the splice start point accurately", "Trims paper and embossed tape margins", "For 8 – 56 mm tape"],
      specs: [["Model", "EPS-010"], ["Tape width", "8 – 56 mm"]],
      apps: ["Manual reel splicing"]
    },
    {
      id: "hw-010", image: "assets/img/products/hw-010.jpg", cat: "splicing", model: "HW-010", art: "splice",
      name: "Splice Tape",
      summary: "Sticker-type splice tape with a two-part backing that separates easily, loads into a tape cassette and gives strong adhesion and tension.",
      features: ["Two-part, easy-release backing", "Loads easily into tape cassettes", "Strong adhesion and tensile strength", "8, 12, 16 and 24 mm tape"],
      specs: [["Model", "HW-010"], ["Carrier tape", "8, 12, 16, 24 mm"]],
      apps: ["Manual reel splicing"]
    },

    /* ───────────── Nozzles ─────────────
     * gallery: [code, image file in assets/img/parts]; each code is also listed on the spare parts page
     * under spare.brand, so it can be added to the enquiry list from either place. */
    {
      id: "nozzle-fuji-h24", image: "assets/img/products/fam-fuji-h24.jpg", cat: "nozzles", model: "H24 series", featured: true,
      name: "FUJI NXT H24 Head Nozzles",
      summary: "Pick-up nozzles for the FUJI NXT H24 placement head — 15 tip types from fine-pitch chips to larger and special-shape components.",
      features: ["15 nozzle types for the NXT H24 head", "Precision tips for stable pick-up and fewer mis-picks", "Single nozzles or complete sets", "Matched to your component list on request"],
      specs: [["Fits", "FUJI NXT / NXT III with H24 head"], ["Types", "03, 04, 07, 08, 10, 13, 18, 25, 25G, 035, J34, J44, L, M, S"]],
      apps: ["FUJI NXT lines", "Nozzle replacement", "New product changeovers"],
      spare: { brand: "fuji", label: "H24 Head Nozzle", fits: "FUJI NXT H24 head" },
      gallery: [["H24 03", "f-h24-03"], ["H24 04", "f-h24-04"], ["H24 07", "f-h24-07"], ["H24 08", "f-h24-08"], ["H24 10", "f-h24-10"], ["H24 13", "f-h24-13"], ["H24 18", "f-h24-18"], ["H24 25", "f-h24-25"], ["H24 25G", "f-h24-25g"], ["H24 035", "f-h24-035"], ["H24 J34", "f-h24-j34"], ["H24 J44", "f-h24-j44"], ["H24 L", "f-h24-l"], ["H24 M", "f-h24-m"], ["H24 S", "f-h24-s"]]
    },
    {
      id: "nozzle-juki-ke", image: "assets/img/products/fam-juki-ke.jpg", cat: "nozzles", model: "KE2000 500 series",
      name: "JUKI KE-2000 Series Nozzles (500–511)",
      summary: "The full 500-series nozzle range for JUKI KE-2000 family mounters, from 500 for the smallest chips up to 511 for large ICs.",
      features: ["12 nozzle types: 500 to 511", "For JUKI KE-2000 series mounters", "Single nozzles or complete sets"],
      specs: [["Fits", "JUKI KE-2000 series"], ["Types", "500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511"]],
      apps: ["JUKI KE lines", "Nozzle replacement"],
      spare: { brand: "juki", label: "KE-2000 Nozzle", fits: "JUKI KE-2000 series" },
      gallery: [["KE2000 500", "j-500"], ["KE2000 501", "j-501"], ["KE2000 502", "j-502"], ["KE2000 503", "j-503"], ["KE2000 504", "j-504"], ["KE2000 505", "j-505"], ["KE2000 506", "j-506"], ["KE2000 507", "j-507"], ["KE2000 508", "j-508"], ["KE2000 509", "j-509"], ["KE2000 510", "j-510"], ["KE2000 511", "j-511"]]
    },
    {
      id: "nozzle-juki-rs1", image: "assets/img/products/fam-juki-rs1.jpg", cat: "nozzles", model: "RS-1 7500 series",
      name: "JUKI RS-1 Nozzles (7500 series)",
      summary: "7500-series nozzles for the JUKI RS-1 / RS-1R head, covering chips through to large and odd-shape components.",
      features: ["11 nozzle types in the 7500 series", "For JUKI RS-1 and RS-1R", "Single nozzles or complete sets"],
      specs: [["Fits", "JUKI RS-1 / RS-1R"], ["Types", "7500, 7501, 7502, 7504, 7505, 7506, 7507, 7508, 7509, 7510, 7511"]],
      apps: ["JUKI RS lines", "Nozzle replacement"],
      spare: { brand: "juki", label: "RS-1 Nozzle", fits: "JUKI RS-1 / RS-1R" },
      gallery: [["RS-1 7500", "j-7500"], ["RS-1 7501", "j-7501"], ["RS-1 7502", "j-7502"], ["RS-1 7504", "j-7504"], ["RS-1 7505", "j-7505"], ["RS-1 7506", "j-7506"], ["RS-1 7507", "j-7507"], ["RS-1 7508", "j-7508"], ["RS-1 7509", "j-7509"], ["RS-1 7510", "j-7510"], ["RS-1 7511", "j-7511"]]
    },
    {
      id: "nozzle-juki-rx", image: "assets/img/products/fam-juki-rx.jpg", cat: "nozzles", model: "RX7 / RX8 HF series",
      name: "JUKI RX-7 / RX-8 Nozzles (HF series)",
      summary: "HF-series nozzles for the high-speed heads of JUKI RX-7 and RX-8 chip mounters.",
      features: ["7 nozzle types for RX-7 / RX-8", "Sizes for 0603 through larger chips", "Single nozzles or complete sets"],
      specs: [["Fits", "JUKI RX-7 / RX-8"], ["Types", "HF35171, HF25201, HF12081, HF3008R, HF0603R(C), HF1608R, HF1005R(C)"]],
      apps: ["JUKI RX lines", "High-speed chip placement"],
      spare: { brand: "juki", label: "RX-7 / RX-8 Nozzle", fits: "JUKI RX-7 / RX-8" },
      gallery: [["HF35171", "j-hf35171"], ["HF25201", "j-hf25201"], ["HF12081", "j-hf12081"], ["HF3008R", "j-hf3008r"], ["HF0603R(C)", "j-hf0603r"], ["HF1608R", "j-hf1608r"], ["HF1005R(C)", "j-hf1005r"]]
    },
    {
      id: "nozzle-yamaha-ys", image: "assets/img/products/fam-yamaha-ys.jpg", cat: "nozzles", model: "YS 300 series",
      name: "Yamaha YS / YSM Nozzles (300 series)",
      summary: "300-series nozzles for Yamaha YS and YSM mounters — standard chip nozzles through to special tips such as the E129.",
      features: ["11 nozzle types including 301A–313A and E129", "For Yamaha YS and YSM series", "Single nozzles or complete sets"],
      specs: [["Fits", "Yamaha YS / YSM series"], ["Types", "301A, 302A, 303A (510), 305A, 306A, 307A, 309A, 310A, 312A (508), 313A (509), E129"]],
      apps: ["Yamaha YS / YSM lines", "Nozzle replacement"],
      spare: { brand: "yamaha", label: "YS Series Nozzle", fits: "Yamaha YS / YSM series" },
      gallery: [["YS 301A", "y-ys301a"], ["YS 302A", "y-ys302a"], ["YS303A 510", "y-ys303a"], ["YS 305A", "y-ys305a"], ["YS 306A", "y-ys306a"], ["YS 307A", "y-ys307a"], ["YS 309A", "y-ys309a"], ["YS 310A", "y-ys310a"], ["312A 508", "y-312a"], ["YS313A 509", "y-ys313a"], ["YS E129", "y-e129"]]
    },
    {
      id: "nozzle-yamaha-yrm", image: "assets/img/products/fam-yamaha-yrm.jpg", cat: "nozzles", model: "YRM 8000 series",
      name: "Yamaha YRM Nozzles (8000 series)",
      summary: "8000-series nozzles for Yamaha YRM-platform mounters such as the YRM10 and YRM20.",
      features: ["12 nozzle types in the 8000 series", "For Yamaha YRM-platform mounters", "Single nozzles or complete sets"],
      specs: [["Fits", "Yamaha YRM series (e.g. YRM10, YRM20)"], ["Types", "8103A0, 8104A0, 8105A2, 8106A2, 8107A0, 8108A0, 8109A0, 8110R0, 8004H0, 8006H0, 8011H0, 8012H0"]],
      apps: ["Yamaha YRM lines", "Nozzle replacement"],
      spare: { brand: "yamaha", label: "YRM Series Nozzle", fits: "Yamaha YRM series" },
      gallery: [["YRM 8103A0", "y-8103a0"], ["YRM 8104A0", "y-8104a0"], ["YRM 8105A2", "y-8105a2"], ["YRM 8106A2", "y-8106a2"], ["YRM 8107A0", "y-8107a0"], ["YRM 8108A0", "y-8108a0"], ["YRM 8109A0", "y-8109a0"], ["YRM 8110R0", "y-8110r0"], ["YRM 8004H0", "y-8004h0"], ["YRM 8006H0", "y-8006h0"], ["YRM 8011H0", "y-8011h0"], ["YRM 8012H0", "y-8012h0"]]
    },
    {
      id: "nozzle-yamaha-yv", image: "assets/img/products/fam-yamaha-yv.jpg", cat: "nozzles", model: "YV / XP / YRM40R",
      name: "Yamaha YV, XP & YRM40R Nozzles",
      summary: "Nozzles for Yamaha YV-series and related platforms, including the YV 32 / 34 / 39A types and the 7200-series nozzles.",
      features: ["7 nozzle types", "YV 32, YV 34, YV 39A and 7202A0 – 7207A0", "Single nozzles or complete sets"],
      specs: [["Fits", "Yamaha YV-series and compatible platforms"], ["Types", "YV 39A, YV 34, YV 32, YRM40R 7207A0, YRM40R 7206A0, XP143 7204A0, YRM40R 7202A0"]],
      apps: ["Yamaha YV lines", "Nozzle replacement"],
      spare: { brand: "yamaha", label: "YV / YRM40R Nozzle", fits: "Yamaha YV series & compatible" },
      gallery: [["YV 39A", "y-yv39a"], ["YV 34", "y-yv34"], ["YV 32", "y-yv32"], ["YRM40R 7207A0", "y-7207a0"], ["YRM40R 7206A0", "y-7206a0"], ["XP143 7204A0", "y-7204a0"], ["YRM40R 7202A0", "y-7202a0"]]
    },
    {
      id: "nozzle-hanwha-hn", image: "assets/img/products/fam-hn.jpg", cat: "nozzles", model: "HN series",
      name: "Hanwha / Samsung HN Nozzles",
      summary: "HN-series nozzles for Hanwha (Samsung) SM and DECAN mounters.",
      features: ["5 nozzle types: HN020, HN030, HN040, HN140, HN220", "For Hanwha / Samsung SM and DECAN series", "Single nozzles or complete sets"],
      specs: [["Fits", "Hanwha / Samsung SM & DECAN series"], ["Types", "HN020, HN030, HN040, HN140, HN220"]],
      apps: ["Hanwha / Samsung lines", "Nozzle replacement"],
      spare: { brand: "samsung", label: "HN Nozzle", fits: "Hanwha / Samsung SM & DECAN" },
      gallery: [["HN 020", "h-020"], ["HN 030", "h-030"], ["HN 040", "h-040"], ["HN 140", "h-140"], ["HN 220", "h-220"]]
    },

    /* ───────────── Feeders ───────────── */
    {
      id: "feeder-yamaha-zs", image: "assets/img/products/fam-yamaha-zs.jpg", cat: "feeders", model: "ZS 8 – 88 mm", featured: true,
      name: "Yamaha ZS Electric Tape Feeders",
      summary: "Yamaha ZS electric tape feeders from 8 mm to 88 mm, for current Yamaha YSM and YRM mounters.",
      features: ["Eight widths: 8, 12, 16, 24, 44, 56, 72, 88 mm", "Electric drive for accurate, quiet indexing", "For Yamaha YSM / YRM series"],
      specs: [["Fits", "Yamaha YSM / YRM series"], ["Widths", "8, 12, 16, 24, 44, 56, 72, 88 mm"], ["Type", "Electric tape feeder"]],
      apps: ["Yamaha YSM / YRM lines", "Line expansion", "Spare feeders"],
      spare: { brand: "yamaha", label: "ZS Electric Feeder", fits: "Yamaha YSM / YRM" },
      gallery: [["ZS 8 mm", "zs-8"], ["ZS 12 mm", "zs-12"], ["ZS 16 mm", "zs-16"], ["ZS 24 mm", "zs-24"], ["ZS 44 mm", "zs-44"], ["ZS 56 mm", "zs-56"], ["ZS 72 mm", "zs-72"], ["ZS 88 mm", "zs-88"]]
    },
    {
      id: "feeder-yamaha-ss", image: "assets/img/products/fam-yamaha-ss.jpg", cat: "feeders", model: "SS 8 – 44 mm",
      name: "Yamaha SS Electric Tape Feeders",
      summary: "Yamaha SS electric tape feeders from 8 mm to 44 mm for Yamaha YS and YSM mounters.",
      features: ["Six widths: 8, 12, 16, 24, 32, 44 mm", "Electric drive for accurate indexing", "For Yamaha YS / YSM series"],
      specs: [["Fits", "Yamaha YS / YSM series"], ["Widths", "8, 12, 16, 24, 32, 44 mm"], ["Type", "Electric tape feeder"]],
      apps: ["Yamaha YS / YSM lines", "Spare feeders"],
      spare: { brand: "yamaha", label: "SS Electric Feeder", fits: "Yamaha YS / YSM" },
      gallery: [["SS 8 mm", "ss-8"], ["SS 12 mm", "ss-12"], ["SS 16 mm", "ss-16"], ["SS 24 mm", "ss-24"], ["SS 32 mm", "ss-32"], ["SS 44 mm", "ss-44"]]
    },
    {
      id: "feeder-juki-rf", image: "assets/img/products/fam-juki-rf.jpg", cat: "feeders", model: "RF08AS – RF44AS",
      name: "JUKI RF Electric Tape Feeders",
      summary: "JUKI RF-series electric tape feeders from 8 mm to 44 mm, used on JUKI RS and RX mounters.",
      features: ["Five widths: RF08AS, RF12AS, RF16AS, RF24AS, RF44AS", "Electric drive, compact width", "For JUKI RS-1 / RS-2 / RX series"],
      specs: [["Fits", "JUKI RS-1 / RS-2 / RX series"], ["Models", "RF08AS, RF12AS, RF16AS, RF24AS, RF44AS"], ["Type", "Electric tape feeder"]],
      apps: ["JUKI RS / RX lines", "Spare feeders"],
      spare: { brand: "juki", label: "RF Electric Feeder", fits: "JUKI RS / RX series" },
      gallery: [["RF08AS", "rf-08"], ["RF12AS", "rf-12"], ["RF16AS", "rf-16"], ["RF24AS", "rf-24"], ["RF44AS", "rf-44"]]
    },
    {
      id: "feeder-hanwha-sme", image: "assets/img/products/fam-hn-sme.jpg", cat: "feeders", model: "SME 8 – 44 mm",
      name: "Hanwha / Samsung SME Electric Feeders",
      summary: "SME electric tape feeders from 8 mm to 44 mm for Hanwha (Samsung) SM and DECAN mounters.",
      features: ["Five widths: 8, 12, 16, 24, 44 mm", "Electric drive for accurate indexing", "For Hanwha / Samsung SM and DECAN series"],
      specs: [["Fits", "Hanwha / Samsung SM & DECAN series"], ["Widths", "8, 12, 16, 24, 44 mm"], ["Type", "Electric tape feeder"]],
      apps: ["Hanwha / Samsung lines", "Spare feeders"],
      spare: { brand: "samsung", label: "SME Electric Feeder", fits: "Hanwha / Samsung SM & DECAN" },
      gallery: [["SME 08", "sme-08"], ["SME 12", "sme-12"], ["SME 16", "sme-16"], ["SME 24", "sme-24"], ["SME 44", "sme-44"]]
    },
    {
      id: "feeder-panasonic", image: "assets/img/products/fam-pana-feeder.jpg", cat: "feeders", model: "8 – 44 mm",
      name: "Panasonic Tape Feeders",
      summary: "Tape feeders in 8, 12, 24 and 44 mm widths for Panasonic CM / NPM placement machines.",
      features: ["Four widths: 8, 12, 24, 44 mm", "For Panasonic CM / NPM series", "Other widths on request"],
      specs: [["Fits", "Panasonic CM / NPM series"], ["Widths", "8, 12, 24, 44 mm"], ["Type", "Tape feeder"]],
      apps: ["Panasonic lines", "Spare feeders"],
      spare: { brand: "panasonic", label: "Tape Feeder", fits: "Panasonic CM / NPM" },
      gallery: [["8 mm", "pana-08"], ["12 mm", "pana-12"], ["24 mm", "pana-24"], ["44 mm", "pana-44"]]
    },
    {
      id: "feeder-panasonic-vib", image: "assets/img/products/fam-pana-vib.jpg", cat: "feeders", model: "Stick feeder",
      name: "Panasonic Vibration (Stick) Feeder",
      summary: "Vibration feeders that present tube-packed (stick) components such as SOICs and connectors to Panasonic placement machines.",
      features: ["Feeds tube / stick-packed components", "Several frame types available", "For Panasonic placement machines"],
      specs: [["Fits", "Panasonic placement machines"], ["Type", "Vibration / stick feeder"]],
      apps: ["SOIC & connector feeding", "Tube-packed parts"],
      spare: { brand: "panasonic", label: "Vibration (Stick) Feeder", fits: "Panasonic" },
      gallery: [["Vibration feeder types", "pana-vib"]]
    },
    {
      id: "feeder-hanwha-tube", image: "assets/img/products/fam-hn-tube.jpg", cat: "feeders", model: "Tube feeder",
      name: "Hanwha / Samsung Tubular (Stick) Feeder",
      summary: "Tubular feeders that feed stick-packed components on Hanwha (Samsung) mounters.",
      features: ["Feeds tube / stick-packed components", "Several frame types available", "For Hanwha / Samsung mounters"],
      specs: [["Fits", "Hanwha / Samsung SM & DECAN series"], ["Type", "Tubular / stick feeder"]],
      apps: ["SOIC & connector feeding", "Tube-packed parts"],
      spare: { brand: "samsung", label: "Tubular (Stick) Feeder", fits: "Hanwha / Samsung" },
      gallery: [["Tubular feeder types", "hn-tube"]]
    },
    {
      id: "feeder-yamaha-calib", image: "assets/img/products/fam-yamaha-calib.jpg", cat: "feeders", model: "Feeder calibration jig",
      name: "Yamaha Feeder Calibration Instrument",
      summary: "A bench calibration instrument for checking and adjusting Yamaha electric feeders off-line, so feeders return to the line accurately set.",
      features: ["Checks and adjusts feeder pick-up position off-line", "Reduces mis-picks caused by worn or mis-set feeders", "Supplied with cables"],
      specs: [["Fits", "Yamaha electric feeders"], ["Type", "Feeder calibration jig"]],
      apps: ["Feeder maintenance", "Preventive maintenance"],
      spare: { brand: "yamaha", label: "Feeder Calibration Instrument", fits: "Yamaha electric feeders" },
      gallery: [["Calibration instrument", "yamaha-calib"]]
    },

    /* ───────────── Consumables ───────────── */
    {
      id: "wiper-rolls", image: "assets/img/products/wiper-rolls.png", cat: "consumables", model: "DEK / MPM", variants: ["DEK53040011A1", "DEK53030011A1", "MPM45540011A1"], art: "roll", featured: true,
      name: "Stencil Wiper Rolls",
      summary: "Under-stencil cleaning rolls for DEK and MPM printers, low-lint and sized to fit each printer’s wiper system.",
      features: ["Low-lint wiping fabric", "Sized for DEK and MPM under-stencil cleaners", "Wet or dry wiping"],
      specs: [["DEK", "DEK53040011A1, DEK53030011A1"], ["MPM", "MPM45540011A1"]],
      apps: ["DEK printers", "MPM printers"]
    },
    {
      id: "solder-paste", image: "assets/img/products/solder-paste.jpg", cat: "consumables", model: "Heraeus", art: "jar",
      name: "Heraeus Solder Paste (Leaded)",
      summary: "Heraeus leaded solder paste for SMT printing. Contact us for alloy, powder size and pack size.",
      features: ["Heraeus brand", "Leaded alloy", "Multiple pack sizes"],
      specs: [["Brand", "Heraeus"], ["Alloy", "Leaded"]],
      apps: ["SMT printing"]
    },
    {
      id: "biral-bio30", image: "assets/img/products/biral-bio30.jpg", cat: "consumables", model: "Biral Bio-30", art: "drum",
      name: "Reflow Chain High-Temperature Lubricant",
      summary: "High-temperature lubricant for reflow oven conveyor chains.",
      features: ["High-temperature rated", "For reflow conveyor chains"],
      specs: [["Product", "Biral Bio-30"]],
      apps: ["Reflow oven maintenance"]
    },
    {
      id: "furnace-cleaner", image: "assets/img/products/furnace-cleaner.jpg", cat: "consumables", model: "91206", art: "drum",
      name: "Mr. Muscle Furnace Cleaner",
      summary: "Heavy-duty cleaner for flux and carbon build-up inside reflow and wave soldering ovens.",
      features: ["Removes baked-on flux and carbon", "For oven maintenance"],
      specs: [["Product code", "91206"]],
      apps: ["Reflow oven PM", "Wave solder PM"]
    },
    {
      id: "grease-guns", image: "assets/img/products/grease-guns.jpg", cat: "consumables", model: "THK MG70 / MG400, NSK HGP", variants: ["THK MG70", "THK MG400", "NSK HGP"], art: "drum",
      name: "Lubrication Grease Guns",
      summary: "THK and NSK hand grease guns for lubricating linear guides and ball screws on placement machines and printers.",
      features: ["THK MG70 and MG400", "NSK HGP hand gun", "For linear guides and ball screws"],
      specs: [["THK", "MG70, MG400"], ["NSK", "HGP"]],
      apps: ["Mounter PM", "Printer PM"]
    },
    {
      id: "nsk-lubricants", image: "assets/img/products/nsk-lubricants.jpg", cat: "consumables", model: "NSK", variants: ["LG2", "LR3", "NSL", "AS2", "PS2", "LGU"], art: "drum",
      name: "NSK Greases & Lubricating Oils",
      summary: "Genuine NSK lubricants for linear guides, ball screws and bearings, including clean-room, high-temperature and high-speed grades.",
      features: ["LG2 – clean-room grease", "LR3 – high-temperature grease", "NSL – advanced lubricant", "AS2 – general purpose", "PS2 – high-speed ball screws", "LGU – clean-room, low dust"],
      specs: [["Grades", "LG2, LR3, NSL, AS2, PS2, LGU"]],
      apps: ["Linear guides", "Ball screws", "Bearings"]
    },
    {
      id: "thk-lubricants", image: "assets/img/products/thk-lubricants.jpg", cat: "consumables", model: "THK", variants: ["AFE-CA", "AFF", "AFG", "AFB-LF", "AFC"], art: "drum",
      name: "THK Greases & Lubricants",
      summary: "Genuine THK greases for linear guides, ball screws and bearings on SMT machines.",
      features: ["AFE-CA – guide slider grease", "AFF – low-dust ball screw / guide grease", "AFG – guide rail grease", "AFB-LF – bearing grease", "AFC – ball screw grease"],
      specs: [["Grades", "AFE-CA, AFF, AFG, AFB-LF, AFC"]],
      apps: ["Linear guides", "Ball screws", "Bearings"]
    },

    /* ───────────── Adhesives ───────────── */
    {
      id: "jt-underfill", image: "assets/img/products/jt-underfill.jpg", cat: "adhesives", model: "UF3210", variants: ["UF3210", "UF3209", "UF3505"],
      name: "Underfill Adhesives (JoinTrust)",
      summary: "Capillary underfills that reinforce BGA, CSP and other area-array solder joints against drop, bend and thermal cycling.",
      features: ["Capillary flow under BGA / CSP", "Improves drop and thermal-cycle reliability", "Three grades to match your process"],
      specs: [["Brand", "JoinTrust"], ["Grades", "UF3210, UF3209, UF3505"]],
      apps: ["Mobile devices", "Automotive modules", "BGA / CSP reinforcement"]
    },
    {
      id: "jt-module", image: "assets/img/products/jt-module.jpg", cat: "adhesives", model: "EP3101L", variants: ["EP3101L", "EP3407B", "UV3032"],
      name: "Module Adhesives (JoinTrust)",
      summary: "Epoxy and UV-cure adhesives for bonding camera, display and sensor modules.",
      features: ["Epoxy and UV-cure options", "For camera, display and sensor modules", "Three grades available"],
      specs: [["Brand", "JoinTrust"], ["Grades", "EP3101L, EP3407B, UV3032"]],
      apps: ["Camera modules", "Display modules", "Sensors"]
    },
    {
      id: "jt-thermal", image: "assets/img/products/jt-thermal.jpg", cat: "adhesives", model: "TRM9103", variants: ["TRM9103", "GF6440D", "GF6440V"],
      name: "Thermally Conductive Materials (JoinTrust)",
      summary: "Thermal interface materials and gap fillers that move heat from components to heat sinks and housings.",
      features: ["Thermal interface material and gap fillers", "For power, LED and EV electronics", "Three grades available"],
      specs: [["Brand", "JoinTrust"], ["Grades", "TRM9103, GF6440D, GF6440V"]],
      apps: ["Power electronics", "LED modules", "EV electronics"]
    },
    {
      id: "jt-protection", image: "assets/img/products/jt-protection.jpg", cat: "adhesives", model: "UV3007F", variants: ["UV3007F", "UV5103L", "UV5106"],
      name: "Protective Coatings & Encapsulants (JoinTrust)",
      summary: "UV-cure protective materials for coating and encapsulating PCBA against moisture, dust and corrosion.",
      features: ["UV-cure for fast throughput", "Protects against moisture, dust and corrosion", "Three grades available"],
      specs: [["Brand", "JoinTrust"], ["Grades", "UV3007F, UV5103L, UV5106"]],
      apps: ["Conformal protection", "Component encapsulation"]
    },
    {
      id: "jt-structural", image: "assets/img/products/jt-structural.png", cat: "adhesives", model: "PUR1058F", variants: ["PUR1058F", "PUR1051", "PUR337"],
      name: "Structural Bonding Adhesives (JoinTrust)",
      summary: "Reactive polyurethane (PUR) adhesives for strong structural bonds in device housings and assemblies.",
      features: ["Reactive PUR chemistry", "High-strength structural bonding", "Three grades available"],
      specs: [["Brand", "JoinTrust"], ["Grades", "PUR1058F, PUR1051, PUR337"]],
      apps: ["Device housings", "Frame & cover bonding"]
    },
    {
      id: "jt-ev", image: "assets/img/products/jt-ev.png", cat: "adhesives", model: "UV5103", variants: ["UV5103", "MA2010D", "RTV19XX"],
      name: "EV Application Adhesives (JoinTrust)",
      summary: "Adhesives and sealants for electric-vehicle electronics, including UV-cure, methacrylate and RTV silicone grades.",
      features: ["UV-cure, methacrylate and RTV silicone", "For EV power and control electronics", "Three grades available"],
      specs: [["Brand", "JoinTrust"], ["Grades", "UV5103, MA2010D, RTV19XX"]],
      apps: ["Battery management", "Motor controllers", "On-board chargers"]
    },

    /* ───────────── Cleanroom & ESD ───────────── */
    {
      id: "lint-free-wipes", image: "assets/img/products/lint-free-wipes.png", cat: "cleanroom", model: "UF / NF Series", variants: ["UF-328", "NF-142", "NF-235"],
      name: "Lint-Free Cleanroom Wipes",
      summary: "Low-lint wipes for stencils, PCBs, optics and precision parts, in ultra-fine, super-fine and normal-fine grades.",
      features: ["UF-328 – ultra-fine series", "NF-235 – super-fine series", "NF-142 – normal-fine series", "Low particle and fibre release"],
      specs: [["Grades", "UF-328, NF-235, NF-142"]],
      apps: ["Stencil wiping", "PCB cleaning", "Optics & lenses"]
    },
    {
      id: "clean-swabs", image: "assets/img/products/clean-swabs.jpg", cat: "cleanroom", model: "PUF Series", variants: ["PUF-2582", "PUF-2588", "PUF-3590", "PUF-3595", "PUF-2579A", "PUF-2581A", "PUF-3591A", "PUF-3594A"], art: "swab",
      name: "Cleanroom Foam, Polyester & ESD Swabs",
      summary: "Cleanroom swabs for precise cleaning of connectors, nozzles, cameras and tight spaces, in foam, polyester and ESD-safe versions.",
      features: ["Foam swabs: PUF-2582, PUF-2588", "Polyester swabs: PUF-3590, PUF-3595", "ESD swabs: PUF-2579A, PUF-2581A, PUF-3591A, PUF-3594A"],
      specs: [["Foam", "PUF-2582, PUF-2588"], ["Polyester", "PUF-3590, PUF-3595"], ["ESD-safe", "PUF-2579A, PUF-2581A, PUF-3591A, PUF-3594A"]],
      apps: ["Nozzle cleaning", "Camera & lens cleaning", "Connector cleaning"]
    },
    {
      id: "nitrile-glove", image: "assets/img/products/nitrile-glove.png", cat: "cleanroom", model: "CNG-197", art: "glove",
      name: "Cleanroom Nitrile Gloves",
      summary: "Powder-free cleanroom nitrile gloves for handling components, boards and stencils.",
      features: ["Nitrile, cleanroom grade", "Protects parts from skin oils and contamination"],
      specs: [["Model", "CNG-197"]],
      apps: ["Component handling", "Cleanroom assembly"]
    },
    {
      id: "es-facemask", image: "assets/img/products/es-facemask.png", cat: "cleanroom", model: "EF-265", art: "glove",
      name: "ES Face Mask",
      summary: "Disposable face masks for cleanroom and electronics assembly areas.",
      features: ["Disposable", "For cleanroom and assembly areas"],
      specs: [["Model", "EF-265"]],
      apps: ["Cleanrooms", "Assembly areas"]
    },
    {
      id: "cleanroom-kit", image: "assets/img/products/cleanroom-kit.png", cat: "cleanroom", model: "CP-211", art: "wipe",
      name: "SMT Cleanroom Products",
      summary: "A range of cleanroom consumables for SMT areas. Contact us with your list and we will quote the full set.",
      features: ["Range of SMT cleanroom consumables", "Mixed orders welcome"],
      specs: [["Model", "CP-211"]],
      apps: ["SMT cleanrooms"]
    }
  ],

  /* ───────────── Spare parts (by OEM platform) ───────────── */
  spares: [
    {
      id: "fuji", name: "FUJI NXT", note: "Feeder, head and machine parts for FUJI NXT and CP-series mounters.",
      parts: [
        ["Vacuum Pump Maintenance Kit for DOP-300SA", "H5448D", "FUJI NXT"],
        ["CP7 Cutter", "DCPK0800 / DCPK0040", "FUJI CP7"],
        ["CP7 Cutter, Stationary", "WPK0240 / WPK0310", "FUJI CP7"],
        ["NXT Feeder Parts", "PB55182 / PB55181", "NXT feeder"],
        ["NXT 12 mm Bracket", "AA3BT00", "NXT 12 mm feeder"],
        ["NXT W32 Feeder Motor", "AA01808 / XH00200", "NXT W32 feeder"],
        ["NXT 24 mm Pin", "PM87122", "NXT 24 mm feeder"],
        ["Feeder 24 mm Block", "AA0CR01", "NXT 24 mm feeder"],
        ["NXT 16 mm Block", "AA0CN01", "NXT 16 mm feeder"],
        ["NXT 12 mm Block", "AA0CM00", "NXT 12 mm feeder"],
        ["NXT 16 mm Body", "PB30631", "NXT 16 mm feeder"],
        ["NXT 12 mm Body", "PB22865", "NXT 12 mm feeder"],
        ["NXT W08C Stepping Motor", "AA6WC06", "NXT W08C feeder"],
        ["NXT W08 Sprocket", "AA6AR06", "NXT W08 feeder"],
        ["NXT W08C Stepping Motor", "AA69S05", "NXT W08C feeder"],
        ["NXT W08 Gear", "AA18B03", "NXT W08 feeder"],
        ["NXT W08 Gear", "AA10R04", "NXT W08 feeder"],
        ["NXT W08 Pin", "AA0RK05", "NXT W08 feeder"],
        ["NXT Feeder Sensor", "PZ48470", "NXT feeder"],
        ["NXT 24 mm Gear", "AA01605", "NXT 24 mm feeder"],
        ["NXT Feeder Clamper", "HW086CLP", "NXT feeder"],
        ["NXT Feeder Sheet", "HW005SHT", "NXT feeder"],
        ["NXT Feeder Switch", "HW2035SW", "NXT feeder"],
        ["NXT Feeder Stepping Motor", "HWSTM0108M", "NXT feeder"]
      ]
    },
    {
      id: "panasonic", name: "Panasonic", note: "Motors, valves, boards, nozzles and greases for Panasonic CM, NPM and insertion machines.",
      parts: [
        ["Insert Machine Head Base / Guide", "N610082557AA (104131000701)", "Panasonic insertion"],
        ["One-Board Microcomputer", "N610059071AA", "Panasonic"],
        ["AC Servo Motor, 50 W Multi", "N610052034AA", "Panasonic"],
        ["Nozzle 230C", "N610040784AA", "Panasonic CM / NPM"],
        ["Flow Sensor", "N510068515AA", "Panasonic"],
        ["Conveyor Control Board PM-UDSB1S05-23", "N510065766AA", "Panasonic"],
        ["Valve", "N510054843AA", "Panasonic"],
        ["CM402 Grease", "N510048190AA", "Panasonic CM402"],
        ["Lithium Grease 400 g", "N510048188AA", "Panasonic"],
        ["DC Motor 2.4 W", "N510046420AA", "Panasonic"],
        ["DC Motor 1.7 W", "N510043555AA", "Panasonic"],
        ["Motor 3 W (for DT)", "N510042740AA", "Panasonic DT"],
        ["AC Servo Motor", "N510042738AA", "Panasonic CM402"],
        ["SMC Solenoid Valve 10-VQ110U-5L0-X46", "N510028619AA", "Panasonic NPM"],
        ["Packing", "N210065600AB", "Panasonic"],
        ["Packing", "N555MYA12", "Panasonic"],
        ["Valve VQZ1421-5MO-M5 (KXF0DR4AA00)", "MTNP000181AA", "Panasonic"],
        ["DC Motor 9.6 W", "MTNM000016AA", "Panasonic"],
        ["Power Supply", "MTNC000263AA", "Panasonic"],
        ["Nozzle 1404", "KXFX0558A00", "Panasonic CM602 / CM402 / NPM"]
      ]
    },
    {
      id: "samsung", name: "Samsung / Hanwha", note: "HN nozzles, SME and tube feeders, valves, boards, cameras and shafts for Samsung / Hanwha CP, SM and DECAN series.",
      parts: [
        ["Feeder Roller", "HW-PLS1114", "Samsung feeder"],
        ["CP45FV Z Shaft", "J6611008A", "Samsung CP45FV"],
        ["CP45FV Cable Chain", "J6102004A", "Samsung CP45FV"],
        ["SM421 Edge Light Solenoid Valve", "J6702049A (RCS242-M3-D24NP)", "Samsung SM421"],
        ["CP45FV NEO Motor", "MSMA012P1A01", "Samsung CP45FV NEO"],
        ["SM421 12 mm Feeder", "12 mm", "Samsung SM421"],
        ["SM Feeder Board", "J90600367C", "Samsung SM feeder"],
        ["SM 8 mm Feeder Part", "J90650179C", "Samsung SM 8 mm feeder"],
        ["SM 8 mm Feeder Gear", "J90651418A", "Samsung SM 8 mm feeder"],
        ["SM471 / 431 Blow Solenoid Valve", "VQ110-5L / HP14-000344", "Samsung SM471 / SM431"],
        ["SM Feeder LED Board", "J90650340B", "Samsung SM feeder"],
        ["SME 8 mm Electric Feeder", "8 mm", "Samsung SME"],
        ["CP45FV Moving Camera", "XC-ST50", "Samsung CP45FV"],
        ["CP45FV / SM421 Nozzle Cylinder", "J6701029A", "Samsung CP45FV / SM421"],
        ["SM 24 mm Feeder Cylinder", "J9065357A", "Samsung SM 24 mm feeder"],
        ["SME Electric Feeder Waste Button", "J72651377A", "Samsung SME feeder"],
        ["SM321 Vacuum Board", "J91741085", "Samsung SM321"],
        ["SM321 CPU Board", "VME3100", "Samsung SM321"],
        ["SM321 / 421 Z-Axis Holder", "J90550209B", "Samsung SM321 / SM421"],
        ["EXCEN PRO Filter Cotton", "—", "Samsung EXCEN PRO"]
      ]
    },
    {
      id: "yamaha", name: "Yamaha", note: "Feeders, nozzles, boards and filters for Yamaha YS / YV mounters.",
      parts: [
        ["ZS Feeder", "KLJ-MC400-004", "Yamaha"],
        ["Nozzle 76A", "KV8-M7760-00X", "Yamaha"],
        ["Mother Board Assy", "KGK-M4510-005", "Yamaha"],
        ["YV88X Filter Cotton", "K46-M8527-00X", "Yamaha YV88X"],
        ["YS Series Electric Feeder Cart", "—", "Yamaha YS series"]
      ]
    },
    {
      id: "juki", name: "JUKI", note: "KE-2000, RS-1 and RX-series nozzles and RF electric feeders for JUKI mounters.",
      parts: []
    },
    {
      id: "dek", name: "DEK", note: "Squeegees, belts, motors, sensors, controllers and safety parts for DEK 265, Horizon and Infinity printers.",
      parts: [
        ["6 mm Stainless Steel Squeegee", "6 mm", "DEK"],
        ["15 mm Stainless Steel Squeegee", "15 mm", "DEK"],
        ["Belt", "145518", "DEK"],
        ["Solenoid Valve Control Cylinder", "165431", "DEK"],
        ["Wiper Paper Spindle", "145894", "DEK"],
        ["Lifting Platform Motor Controller NODE6", "191103 (185130 / 187339)", "DEK"],
        ["Motor", "185003", "DEK"],
        ["Motor", "191492 / 205787", "DEK"],
        ["Motor", "185002", "DEK"],
        ["Safety Door", "—", "DEK 265 Infinity / Horizon"],
        ["Track Width Motor Power Cable", "185101", "DEK i-series"],
        ["Steel Grid 580 × 580", "—", "DEK"],
        ["Cleaning Unit Support Block", "156581", "DEK"],
        ["ETA Circuit Breaker", "1410-L210-L2F1-S02-5A / -3.45A", "DEK"],
        ["Belt Clamp", "156212", "DEK"],
        ["Board Edge Clamp", "158931", "DEK 265"],
        ["Solvent Diffuser Bottle", "—", "DEK"],
        ["Power Cable", "185122", "DEK"],
        ["Camera Guide Seat", "183971", "DEK 265"],
        ["Sensor", "188317", "DEK 265"]
      ]
    }
  ]
};
