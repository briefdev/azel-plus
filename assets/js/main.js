/* =========================================================
   عازل بلس — Theme scripts
   Layout (header/footer) + store data + cart + UI behaviors
   ========================================================= */

/* ---------- Store config (edit here) ---------- */
const STORE = {
  name: "عازل بلس",
  phone: "966500000000",          // TODO: رقم المتجر الفعلي
  whatsapp: "966500000000",       // TODO: رقم الواتساب الفعلي
  email: "info@azel-sa.com",
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  coupon: { code: "Az25", percent: 25 }, // TODO: كود الخصم ونسبته الفعلية
  freeShipping: 300,
  shippingFee: 25,
  vatNo: "300000000000003"        // TODO: الرقم الضريبي
};

/* ---------- Tint grades ----------
   heat = نسبة العزل الحراري (TSER) | uv = حجب الأشعة فوق البنفسجية | privacy = مستوى الخصوصية (للعرض فقط) */
const GRADES = [
  { id: "00", label: "00", name: "خفيف العتمة", short: "خفيف · مطابق للمرور", desc: "تظليل خفيف مع رؤية واضحة وراحة أكبر أثناء القيادة — مطابق لأنظمة المرور", alpha: .28, heat: 65, uv: 99, privacy: 35 },
  { id: "01", label: "01", name: "متوسط العتمة", short: "متوسط العتمة", desc: "تظليل متوسط يجمع بين الخصوصية والرؤية المريحة", alpha: .55, heat: 76, uv: 99, privacy: 65 },
  { id: "02", label: "02", name: "تعتيم كامل", short: "تعتيم كامل", desc: "تظليل داكن يوفر أعلى مستوى من الخصوصية وتقليل الوهج", alpha: .82, heat: 94, uv: 99, privacy: 100 }
];

/* ---------- Products ---------- */
const PRODUCTS = [
  {
    id: "car-film", cat: "cars", catName: "عوازل السيارات",
    name: "عازل حراري لمختلف أنواع السيارات",
    short: "تقنية نانو سيراميك مطوّرة بضمان حقيقي 5 سنوات",
    price: 196, old: 300, img: "assets/img/product-car.webp", cover: true,
    gallery: ["assets/img/product-car.webp", "assets/img/rolls.webp"],
    rating: 4.9, reviews: 312, badge: "الأكثر مبيعاً", grades: true,
    specs: [["العزل الحراري (TSER)", "حتى 94% حسب الدرجة"], ["حجب الأشعة UV", "99%"], ["الضمان", "5 سنوات"]]
  },
  {
    id: "home-film", cat: "homes", catName: "عوازل المنازل والمكاتب",
    name: "عازل حراري للمكاتب والمنازل",
    short: "يقلل دخول الحرارة ويوفّر في استهلاك الكهرباء",
    price: 75, unit: "للمتر", img: "assets/img/product-home.webp", cover: true,
    gallery: ["assets/img/product-home.webp", "assets/img/rolls.webp"],
    rating: 4.8, reviews: 96, badge: "جديد", grades: true,
    specs: [["العزل الحراري (TSER)", "حتى 94% حسب الدرجة"], ["حجب الأشعة UV", "99%"], ["توفير الطاقة", "عالي"]]
  },
  { id: "charger-120", cat: "acc", catName: "إكسسوارات السيارة", name: "شاحن سيارة 120W مع أسلاك مدمجة", short: "أسلاك قابلة للسحب Type-C و Lightning", price: 150, img: "assets/img/acc-1.webp", gallery: ["assets/img/acc-1.webp"], rating: 4.7, reviews: 41 },
  { id: "powerbank-10k", cat: "acc", catName: "إكسسوارات السيارة", name: "بطارية محمولة 10000mAh بشحن سريع وشاشة عرض", short: "شحن سريع مع شاشة رقمية لنسبة الشحن", price: 90, img: "assets/img/acc-2.webp", gallery: ["assets/img/acc-2.webp"], rating: 4.6, reviews: 28 },
  { id: "charger-4in1", cat: "acc", catName: "إكسسوارات السيارة", name: "شاحن سيارة 4 في 1 بقوة 45W مع وايرات مدمجة", short: "منافذ متعددة وأسلاك مدمجة", price: 150, img: "assets/img/acc-3.webp", gallery: ["assets/img/acc-3.webp"], rating: 4.8, reviews: 35 },
  { id: "magsafe-holder", cat: "acc", catName: "إكسسوارات السيارة", name: "مثبت جوال ماج سيف للسيارة مع قاعدة كوب", short: "تثبيت مغناطيسي قوي على حامل الأكواب", price: 90, img: "assets/img/acc-4.webp", gallery: ["assets/img/acc-4.webp"], rating: 4.5, reviews: 19 }
];

/* ---------- Payment methods (icons from Salla CDN) ---------- */
const PAYMENTS = [
  { img: "mada",               alt: "مدى" },
  { img: "credit_card",        alt: "Visa / Mastercard" },
  { img: "apple_pay",          alt: "Apple Pay" },
  { img: "stc_pay",            alt: "stc Bank" },
  { img: "tabby_installment",  alt: "تابي" },
  { img: "tamara_installment", alt: "تمارا" },
  { img: "bank",               alt: "تحويل بنكي" }
];
const payIcons = (list = PAYMENTS) => list.map(p => `<span class="pay-ico" title="${p.alt}"><img src="assets/img/pay/${p.img}.png" alt="${p.alt}" loading="lazy"></span>`).join("");

const CATS = [
  { id: "cars",  name: "عوازل السيارات" },
  { id: "homes", name: "عوازل المنازل والمكاتب" },
  { id: "acc",   name: "إكسسوارات السيارة" }
];

const NAV = [
  { href: "index.html",   label: "الرئيسية" },
  { href: "shop.html",    label: "المتجر" },
  { href: "shop.html?cat=cars", label: "عوازل السيارات" },
  { href: "shop.html?cat=homes", label: "المنازل والمكاتب" },
  { href: "https://warranty.azel-sa.com/", label: "تفعيل الضمان", ext: true },
  { href: "centers.html", label: "مراكز التركيب" },
  { href: `https://wa.me/${STORE.whatsapp}`, label: "تواصل معنا", ext: true }
];

/* ---------- Icons (inline SVG) ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  heart: '<path d="M12 20.5s-7.5-4.4-9.3-9.2C1.4 7.7 3.8 4.5 7.1 4.5c2 0 3.4 1 4.9 2.8 1.5-1.8 2.9-2.8 4.9-2.8 3.3 0 5.7 3.2 4.4 6.8-1.8 4.8-9.3 9.2-9.3 9.2Z"/>',
  bag: '<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  chevL: '<path d="m15 6-6 6 6 6"/>',
  chevR: '<path d="m9 6 6 6-6 6"/>',
  chevD: '<path d="m6 9 6 6 6-6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m8.8 12 2.2 2.2 4.4-4.4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  thermo: '<path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0Z"/><path d="M12 9v7"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  uv: '<circle cx="12" cy="12" r="9"/><path d="M8 9v4a2 2 0 0 0 4 0V9M13.5 9l1.8 6 1.7-6"/>',
  truck: '<path d="M3 6h11v10H3zM14 9.5h4l3 3.5v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.8-4M4 13a8 8 0 0 0 14.8 4"/><path d="M5 3v4h4M19 21v-4h-4"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m9 14.2-1.5 7 4.5-2.5 4.5 2.5-1.5-7"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  wa: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1L3.5 20.5Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2L9 8.5Z"/>',
  insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 2.8 2.4 4.6 5 4.8"/>',
  car: '<path d="M5 16V12l2-5h10l2 5v4"/><path d="M3 16h18v2H3z"/><circle cx="7.5" cy="16" r="1.5"/><circle cx="16.5" cy="16" r="1.5"/><path d="M5 12h14"/>',
  home: '<path d="M4 11 12 4l8 7v9H4v-9Z"/><path d="M10 20v-5h4v5"/>',
  box: '<path d="m3 7.5 9-4.5 9 4.5v9L12 21l-9-4.5v-9Z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
  tool: '<path d="M14.5 6.5a4 4 0 0 0 5 5L13 18a2.1 2.1 0 0 1-3-3l6.5-6.5"/><path d="M14.5 6.5 17 4l3 3-2.5 2.5"/><path d="M4 20l6-6"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 8l-4 4 4 4M6 12h10"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16v4Z"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a3 3 0 0 1-3 2h-3"/>',
  nav: '<path d="m3 11 18-8-8 18-2-8-8-2Z"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>'
};
const icon = (name, cls = "") => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => `${Number(n).toLocaleString("en-US")} <span class="cur">ر.س</span>`;
const findProduct = id => PRODUCTS.find(p => p.id === id);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const stars = r => `<span class="stars" aria-label="${r} من 5">${Array.from({ length: 5 }, (_, i) => icon("star", i < Math.round(r) ? "" : "off")).join("")}</span>`;
const currentPage = () => (location.pathname.split("/").pop() || "index.html") + location.search;

/* ---------- Cart ---------- */
const Cart = {
  items() { return store.get("azel_cart", []); },
  save(items) { store.set("azel_cart", items); Cart.render(); },
  key(id, opt) { return opt ? `${id}__${opt}` : id; },
  add(id, qty = 1, opt = "") {
    const items = Cart.items();
    const k = Cart.key(id, opt);
    const ex = items.find(i => i.key === k);
    ex ? ex.qty += qty : items.push({ key: k, id, opt, qty });
    Cart.save(items);
    const p = findProduct(id);
    toast(`تمت إضافة «${p.name}» للسلة`, "cart.html", "عرض السلة");
  },
  setQty(key, qty) {
    let items = Cart.items();
    const it = items.find(i => i.key === key);
    if (!it) return;
    it.qty = Math.max(1, Math.min(99, qty));
    Cart.save(items);
  },
  remove(key) { Cart.save(Cart.items().filter(i => i.key !== key)); },
  count() { return Cart.items().reduce((s, i) => s + i.qty, 0); },
  subtotal() { return Cart.items().reduce((s, i) => s + (findProduct(i.id)?.price || 0) * i.qty, 0); },
  coupon() { return store.get("azel_coupon", null); },
  totals() {
    const sub = Cart.subtotal();
    const c = Cart.coupon();
    const discount = c ? Math.round(sub * c.percent / 100) : 0;
    const shipping = sub === 0 || sub - discount >= STORE.freeShipping ? 0 : STORE.shippingFee;
    return { sub, discount, shipping, total: sub - discount + shipping };
  },
  render() {
    $$("[data-cart-count]").forEach(el => { const n = Cart.count(); el.textContent = n; el.dataset.n = n; });
    renderMiniCart();
    document.dispatchEvent(new CustomEvent("cart:change"));
  }
};

const Wish = {
  items() { return store.get("azel_wish", []); },
  has(id) { return Wish.items().includes(id); },
  toggle(id) {
    let w = Wish.items();
    const on = !w.includes(id);
    w = on ? [...w, id] : w.filter(x => x !== id);
    store.set("azel_wish", w);
    $$(`[data-wish="${id}"]`).forEach(b => b.classList.toggle("on", on));
    $$("[data-wish-count]").forEach(el => { el.textContent = w.length; el.dataset.n = w.length; });
    toast(on ? "أُضيف إلى المفضلة" : "أُزيل من المفضلة");
    document.dispatchEvent(new CustomEvent("wish:change"));
  }
};

/* ---------- Product card ---------- */
function productCard(p) {
  return `
  <article class="p-card">
    ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
    <button class="wish ${Wish.has(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="أضف للمفضلة">${icon("heart", "i-sm")}</button>
    <a href="product.html?id=${p.id}" class="p-media ${p.cover ? "cover" : ""}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
    <div class="p-body">
      <span class="p-cat">${p.catName}</span>
      <h3 class="p-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="p-rating">${stars(p.rating)} <span class="num">${p.rating}</span> <span>(${p.reviews})</span></div>
      <div class="p-foot">
        <span class="price">${money(p.price)}${p.unit ? ` <small>${p.unit}</small>` : ""}</span>
        ${p.grades
          ? `<a href="product.html?id=${p.id}" class="add-btn" aria-label="اختر الدرجة">${icon("arrowL", "i-sm")}</a>`
          : `<button class="add-btn" data-add="${p.id}" aria-label="أضف للسلة">${icon("plus", "i-sm")}</button>`}
      </div>
    </div>
  </article>`;
}

/* ---------- Layout: header / footer ---------- */
function renderHeader() {
  const host = $("#site-header");
  if (!host) return;
  const cur = currentPage();
  const isActive = href => href === cur || (href === "index.html" && (cur === "" || cur === "index.html"));
  host.outerHTML = `
  <div class="topbar">
    <div class="container">
      <span>${icon("tag", "i-xs")}</span>
      <span>بالقوة أقنعنا المدير! <strong>وفّر على نفسك</strong> واستخدم الكود</span>
      <button class="coupon" data-copy="${STORE.coupon.code}" aria-label="نسخ الكود">${STORE.coupon.code}<span>نسخ</span></button>
    </div>
  </div>
  <header class="site-header" id="header">
    <div class="container header-inner">
      <button class="h-btn menu-toggle" data-open="mnav" aria-label="القائمة">${icon("menu")}</button>
      <a href="index.html" class="logo" aria-label="عازل بلس - الرئيسية"><img src="assets/img/logo.webp" alt="عازل بلس" width="250" height="91"></a>
      <nav class="main-nav" aria-label="القائمة الرئيسية">
        ${NAV.map(n => `<a href="${n.href}" class="${isActive(n.href) ? "active" : ""}"${n.ext ? ' target="_blank" rel="noopener"' : ""}>${n.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="h-btn" data-search aria-label="بحث">${icon("search")}</button>
        <a href="#" class="h-btn hide-sm" aria-label="حسابي">${icon("user")}</a>
        <button class="h-btn" data-open="cart" aria-label="السلة">${icon("bag")}<span class="count" data-cart-count></span></button>
      </div>
    </div>
    <div class="search-panel" id="search-panel">
      <div class="container">
        <form class="search-field" action="shop.html">
          ${icon("search")}
          <input type="search" name="q" placeholder="ابحث عن عازل، شاحن، إكسسوار..." aria-label="بحث">
        </form>
        <div class="search-tags"><span>الأكثر بحثاً:</span>
          <a href="product.html?id=car-film">عازل سيارات</a><a href="product.html?id=home-film">عازل منازل</a><a href="shop.html?cat=acc">شواحن سيارة</a><a href="https://warranty.azel-sa.com/" target="_blank" rel="noopener">تفعيل الضمان</a>
        </div>
      </div>
    </div>
  </header>

  <div class="overlay" id="overlay"></div>

  <aside class="drawer drawer-start" id="mnav" aria-label="القائمة">
    <div class="drawer-head">
      <img src="assets/img/logo.webp" alt="عازل بلس" style="height:36px;width:auto">
      <button class="h-btn" data-close aria-label="إغلاق">${icon("x")}</button>
    </div>
    <div class="drawer-body">
      <nav class="mobile-nav">
        ${NAV.map(n => `<a href="${n.href}" class="${isActive(n.href) ? "active" : ""}"${n.ext ? ' target="_blank" rel="noopener"' : ""}>${n.label}${icon("chevL", "i-sm")}</a>`).join("")}
        <a href="#">حسابي${icon("chevL", "i-sm")}</a>
      </nav>
      <div class="mobile-contact">
        <a href="https://wa.me/${STORE.whatsapp}" class="btn btn-block" style="--btn-bg:#25D366">${icon("wa")} تواصل واتساب</a>
        <a href="tel:+${STORE.phone}" class="btn btn-outline btn-block">${icon("phone")} اتصل بنا</a>
      </div>
    </div>
  </aside>

  <aside class="drawer drawer-end" id="cart" aria-label="سلة التسوق">
    <div class="drawer-head">
      <h3>${icon("bag")} سلة التسوق</h3>
      <button class="h-btn" data-close aria-label="إغلاق">${icon("x")}</button>
    </div>
    <div class="drawer-body" id="mini-cart"></div>
    <div class="drawer-foot" id="mini-cart-foot"></div>
  </aside>
  <div class="toast-wrap" id="toasts" aria-live="polite"></div>`;
}

function renderFooter() {
  const host = $("#site-footer");
  if (!host) return;
  const y = new Date().getFullYear();
  host.outerHTML = `
  <footer class="site-footer">
    <div class="container footer-top">
      <div class="footer-brand">
        <img src="assets/img/logo-white.webp" alt="عازل بلس" width="250" height="91">
        <p>بخبرة عميقة في سوق العزل الحراري، يقدّم عازل بلس منتجات مختارة بعناية أثبتت كفاءتها واجتازت اختبارات الجودة، لتمنحك راحة أكبر وحماية من الحرارة والأشعة الضارة، وأداءً يدوم لسنوات.</p>
        <div class="socials">
          <a href="${STORE.instagram}" target="_blank" rel="noopener" aria-label="انستقرام">${icon("insta", "i-sm")}</a>
          <a href="${STORE.tiktok}" target="_blank" rel="noopener" aria-label="تيك توك">${icon("tiktok", "i-sm")}</a>
          <a href="https://wa.me/${STORE.whatsapp}" target="_blank" rel="noopener" aria-label="واتساب">${icon("wa", "i-sm")}</a>
        </div>
      </div>
      <div>
        <h4>المتجر</h4>
        <div class="footer-links">
          <a href="shop.html?cat=cars">عوازل السيارات</a>
          <a href="shop.html?cat=homes">عوازل المنازل والمكاتب</a>
          <a href="shop.html?cat=acc">إكسسوارات السيارة</a>
          <a href="#">من نحن</a>
          <a href="centers.html">مراكز التركيب المقترحة</a>
        </div>
      </div>
      <div>
        <h4>روابط تهمّك</h4>
        <div class="footer-links">
          <a href="https://warranty.azel-sa.com/" target="_blank" rel="noopener">تفعيل الضمان</a>
          <a href="#">تتبع الطلب</a>
          <a href="#">سياسة الضمان والاسترجاع</a>
          <a href="#">الشحن والتوصيل</a>
          <a href="#">سياسة الخصوصية</a>
          <a href="index.html#faq">الأسئلة الشائعة</a>
        </div>
      </div>
      <div class="footer-contact-col">
        <h4>خدمة العملاء</h4>
        <div class="footer-contact">
          <a href="https://wa.me/${STORE.whatsapp}" target="_blank" rel="noopener"><span class="ico">${icon("wa", "i-sm")}</span><span>واتساب<br><span class="ltr">+${STORE.whatsapp}</span></span></a>
          <a href="tel:+${STORE.phone}"><span class="ico">${icon("phone", "i-sm")}</span><span>اتصال مباشر<br><span class="ltr">+${STORE.phone}</span></span></a>
          <a href="mailto:${STORE.email}"><span class="ico">${icon("mail", "i-sm")}</span><span>${STORE.email}</span></a>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${y} عازل بلس — جميع الحقوق محفوظة</span>
      <div class="pay" aria-label="طرق الدفع">
        ${payIcons()}
      </div>
    </div>
  </footer>
  <a href="https://wa.me/${STORE.whatsapp}" class="wa-float" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب">${icon("wa")}</a>`;
}

/* ---------- Mini cart ---------- */
function renderMiniCart() {
  const body = $("#mini-cart"), foot = $("#mini-cart-foot");
  if (!body) return;
  const items = Cart.items();
  if (!items.length) {
    body.innerHTML = `<div class="cart-empty"><div class="empty-ico">${icon("bag", "i-lg")}</div><h4>سلتك فارغة</h4><p>تصفّح منتجاتنا وابدأ بحماية سيارتك من حرارة الشمس.</p><a href="shop.html" class="btn mt-3">تسوّق الآن</a></div>`;
    foot.innerHTML = "";
    foot.style.display = "none";
    return;
  }
  foot.style.display = "";
  body.innerHTML = items.map(i => {
    const p = findProduct(i.id); if (!p) return "";
    return `<div class="mini-item">
      <img src="${p.img}" alt="">
      <div><h4>${p.name}</h4>${i.opt ? `<div class="meta">${i.opt}</div>` : ""}
        <div class="flex items-center gap-1 mt-1">
          <div class="qty sm"><button data-qty="${i.key}" data-d="1" aria-label="زيادة">${icon("plus", "i-xs")}</button><input value="${i.qty}" readonly aria-label="الكمية"><button data-qty="${i.key}" data-d="-1" aria-label="إنقاص">${icon("minus", "i-xs")}</button></div>
        </div>
      </div>
      <div style="text-align:end"><div class="price">${money(p.price * i.qty)}</div><button class="muted mt-1" data-remove="${i.key}" aria-label="حذف">${icon("trash", "i-sm")}</button></div>
    </div>`;
  }).join("");
  const t = Cart.totals();
  const left = Math.max(0, STORE.freeShipping - (t.sub - t.discount));
  foot.innerHTML = `
    <div class="free-ship">${left > 0 ? `أضف <b class="num">${left}</b> ر.س للحصول على <b>شحن مجاني</b>` : `${icon("check", "i-xs")} مبروك! طلبك مؤهل <b>للشحن المجاني</b>`}
      <div class="progress"><span style="width:${Math.min(100, ((t.sub - t.discount) / STORE.freeShipping) * 100)}%"></span></div></div>
    <div class="sum-row total"><span>المجموع</span><span class="price">${money(t.sub)}</span></div>
    <p class="muted" style="font-size:12.5px;margin-bottom:14px">الأسعار شاملة الضريبة. الشحن والخصم يُحسبان عند إتمام الطلب.</p>
    <div class="grid-2" style="gap:10px"><a href="cart.html" class="btn btn-outline">عرض السلة</a><a href="checkout.html" class="btn">إتمام الطلب</a></div>`;
}

/* ---------- Toast ---------- */
function toast(msg, href = "", linkText = "") {
  const wrap = $("#toasts"); if (!wrap) return;
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `${icon("check", "i-sm")}<span>${msg}</span>${href ? `<a href="${href}">${linkText}</a>` : ""}`;
  wrap.appendChild(t);
  setTimeout(() => { t.style.transition = "opacity .3s"; t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 3200);
}

/* ---------- Drawers ---------- */
function openDrawer(id) {
  $("#" + id)?.classList.add("open");
  $("#overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawers() {
  $$(".drawer.open, .filters.open").forEach(d => d.classList.remove("open"));
  $("#overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- Global events ---------- */
function bindGlobal() {
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-open],[data-close],[data-add],[data-wish],[data-qty],[data-remove],[data-copy],[data-search],#overlay");
    if (!t) return;
    if (t.id === "overlay" || t.hasAttribute("data-close")) return closeDrawers();
    if (t.dataset.open) { e.preventDefault(); return openDrawer(t.dataset.open); }
    if (t.dataset.add) { e.preventDefault(); Cart.add(t.dataset.add); t.classList.add("added"); t.innerHTML = icon("check", "i-sm"); setTimeout(() => { t.classList.remove("added"); t.innerHTML = icon("plus", "i-sm"); }, 1500); return; }
    if (t.dataset.wish) { e.preventDefault(); return Wish.toggle(t.dataset.wish); }
    if (t.dataset.qty) { const it = Cart.items().find(i => i.key === t.dataset.qty); if (it) Cart.setQty(it.key, it.qty + Number(t.dataset.d)); return; }
    if (t.dataset.remove) return Cart.remove(t.dataset.remove);
    if (t.dataset.copy) { navigator.clipboard?.writeText(t.dataset.copy); return toast(`تم نسخ الكود ${t.dataset.copy}`); }
    if (t.hasAttribute("data-search")) { const p = $("#search-panel"); p.classList.toggle("open"); if (p.classList.contains("open")) $("input", p).focus(); }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeDrawers(); $("#search-panel")?.classList.remove("open"); } });

  const header = $("#header");
  const onScroll = () => header?.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Reveal
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 }) : null;
  $$(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

  // Tabs
  $$("[data-tabs]").forEach(group => {
    const btns = $$("[data-tab]", group);
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => x.classList.toggle("active", x === b));
      $$(".tab-panel", group.parentElement).forEach(p => p.classList.toggle("active", p.id === b.dataset.tab));
    }));
  });
}

/* ---------- Tint explorer (home + product) ---------- */
function initTint(root) {
  if (!root) return;
  const preview = $(".tint-preview", root);
  const set = id => {
    const g = GRADES.find(x => x.id === id) || GRADES[1];
    $$(".grade", root).forEach(b => b.classList.toggle("active", b.dataset.grade === g.id));
    preview?.style.setProperty("--tint", g.alpha);
    $$("[data-t]", root).forEach(el => {
      const k = el.dataset.t;
      if (k === "label") el.textContent = g.label;
      else if (k === "name") el.textContent = g.name;
      else if (k === "desc") el.textContent = g.desc;
      else el.textContent = g[k] + "%";
    });
    $$("[data-bar]", root).forEach(el => el.style.width = g[el.dataset.bar] + "%");
    root.dataset.selected = g.id;
    root.dispatchEvent(new CustomEvent("grade", { detail: g }));
  };
  $(".grades", root).innerHTML = GRADES.map(g => `<button type="button" class="grade" data-grade="${g.id}" style="--a:${g.alpha}"><div class="sw"></div><b>${g.label}</b><span>${g.name}</span></button>`).join("");
  $$(".grade", root).forEach(b => b.addEventListener("click", () => set(b.dataset.grade)));
  set(root.dataset.default || "01");
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  bindGlobal();
  Cart.render();
  $$("[data-wish-count]").forEach(el => { const n = Wish.items().length; el.textContent = n; el.dataset.n = n; });
  $$("[data-products]").forEach(el => {
    const f = el.dataset.products;
    const list = f === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === f || f.split(",").includes(p.id));
    el.innerHTML = list.map(productCard).join("");
  });
  $$("[data-pay]").forEach(el => el.innerHTML = payIcons());
  $$("[data-i]").forEach(el => el.insertAdjacentHTML("afterbegin", icon(el.dataset.i, el.dataset.ic || "")));
  $$("[data-stars]").forEach(el => el.outerHTML = stars(Number(el.dataset.stars)));
  $$("[data-tint]").forEach(initTint);
  document.dispatchEvent(new CustomEvent("theme:ready"));
});
