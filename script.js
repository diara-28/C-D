const PRODUCTS = [
  { id: "p1",  name: "Satin Midi Dress", image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",     price: 28000, category: "Dresses",     rating: 4.6, sizes: ["XS","S","M","L","XL"],       colors: ["#1B1714","#A85668","#EDE3D2"], isNew: false, popularity: 88,
    description: "A fluid satin midi cut on the bias for a soft, candlelit drape. Finished with a concealed side zip and adjustable straps." },
  { id: "p2",  name: "Classic Blazer", image:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",      price: 35000, category: "Tops",        rating: 4.8, sizes: ["XS","S","M","L","XL"],       colors: ["#1B1714","#4A423B"],           isNew: true,  popularity: 95,
    description: "Structured shoulders, a nipped waist and a single-button close — the one piece that makes everything else look intentional." },
  { id: "p3",  name: "Ribbed Crop Top",  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9M6qemxfQjeK-m4jWSs0AhkZEupjyiraSbwxs4bG73eVGPbFq7BRQ63e&s=10",    price: 12000, category: "Tops",        rating: 4.3, sizes: ["XS","S","M","L"],            colors: ["#E7B8BE","#1B1714","#EDE3D2"], isNew: false, popularity: 70,
    description: "Soft ribbed knit with a fitted silhouette and a scoop neckline. Layers under blazers or wears alone with high-waist trousers." },
  { id: "p4",  name: "Wide-Leg Trousers",    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIxwRAwgnLHLGMtLHLkbbivfSPj-mAkHsn3pAkPVXBcaN8oTf3MQsqcU&s=10", price: 24000, category: "Trousers",    rating: 4.5, sizes: ["XS","S","M","L","XL"],       colors: ["#9C8172","#1B1714"],           isNew: false, popularity: 65,
    description: "A high-rise, wide-leg trouser with a clean front crease and a fluid fall from hip to hem." },
  { id: "p5",  name: "Pleated Skirt",        image:"https://img.fruugo.com/product/1/90/1727837901_max.jpg", price: 20000, category: "Skirts",      rating: 4.4, sizes: ["XS","S","M","L"],            colors: ["#EDE3D2","#A85668"],           isNew: true,  popularity: 60,
    description: "Fine knife pleats that move with every step, finished at a flattering midi length with a hidden elastic waistband." },
  { id: "p6",  name: "Mini Shoulder Bag",    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85", price: 18000, category: "Bags",        rating: 4.7, sizes: null,                          colors: ["#1B1714","#9C8172"],           isNew: false, popularity: 78,
    description: "A structured mini bag with a detachable chain strap — just enough room for the essentials, worn cross-body or in hand." },
  { id: "p7",  name: "Linen Shirt",          image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85", price: 22000, category: "Tops",        rating: 4.2, sizes: ["S","M","L","XL","XXL"],      colors: ["#EDE3D2","#9C8172"],           isNew: false, popularity: 55,
    description: "Breathable linen with a relaxed boxy fit, mother-of-pearl buttons and a curved hem you can wear in or out." },
  { id: "p8",  name: "Bodycon Dress",        image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85", price: 25000, category: "Dresses",     rating: 4.6, sizes: ["XS","S","M","L"],            colors: ["#1B1714","#A85668"],           isNew: false, popularity: 82,
    description: "A second-skin knit dress with a sweetheart neckline, built to hold its shape from desk to dinner." },
  { id: "p9",  name: "Classic Heels",        image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85", price: 30000, category: "Shoes",       rating: 4.9, sizes: null,                          colors: ["#1B1714","#A85668"],           isNew: false, popularity: 90,
    description: "A timeless pointed-toe pump on a 3-inch heel, cushioned insole included for all-day wear." },
  { id: "p10", name: "Denim Jacket",         image:"https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85", price: 27000, category: "Tops",        rating: 4.5, sizes: ["XS","S","M","L","XL"],       colors: ["#4A423B"],                     isNew: true,  popularity: 73,
    description: "A rigid-wash denim jacket with a boxy crop, dropped shoulders and antique brass hardware." },
  { id: "p11", name: "Statement Sunglasses", image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85", price: 10000, category: "Accessories", rating: 4.1, sizes: null,                          colors: ["#1B1714","#9C8172"],           isNew: false, popularity: 40,
    description: "Oversized acetate frames with UV400 protection — the last thing you put on before walking out the door." },
  { id: "p12", name: "Elegant Handbag",      image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85", price: 32000, category: "Bags",        rating: 4.8, sizes: null,                          colors: ["#A85668","#1B1714"],           isNew: false, popularity: 85,
    description: "Full-grain textured leatherette with a structured top handle and a slim detachable strap for two ways to carry." },
  { id: "p13", name: "Silk Wrap Dress",      image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85", price: 31000, category: "Dresses",     rating: 4.7, sizes: ["S","M","L"],                 colors: ["#E7B8BE","#1B1714"],           isNew: true,  popularity: 92,
    description: "A true wrap dress in liquid silk-touch fabric, self-tie waist and a soft flare skirt that moves beautifully." },
  { id: "p14", name: "Ankle Strap Sandals",  image:"https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/0267914/1.jpg?0355", price: 21000, category: "Shoes",       rating: 4.3, sizes: null,                          colors: ["#9C8172","#EDE3D2"],           isNew: false, popularity: 50,
    description: "A slim block heel and an adjustable ankle strap make this the sandal that goes from brunch to the last dance." },
  { id: "p15", name: "Soft Knit Cardigan",   image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85", price: 23000, category: "Tops",        rating: 4.6, sizes: ["XS","S","M","L","XL"],       colors: ["#EDE3D2","#9C8172","#1B1714"],      isNew: true,  popularity: 68,
    description: "A softly brushed knit cardigan with a relaxed fit, delicate buttons and an easy drape for layering through the seasons." },
  { id: "p16", name: "Leather Waist Belt",   image:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85", price: 9000, category: "Accessories", rating: 4.4, sizes: null,                          colors: ["#1B1714","#9C8172"],           isNew: false, popularity: 48,
    description: "A polished leather belt with a sculptural buckle, designed to define dresses, tailoring and high-waisted silhouettes." },
];

const CATEGORIES = ["All", "Dresses", "Tops", "Trousers", "Skirts", "Bags", "Shoes", "Accessories"];

/* Categories that require a size to be selected before adding to cart. */
const CLOTHING_CATEGORIES = ["Dresses", "Tops", "Trousers", "Skirts"];

/* Replace this with the real business WhatsApp number (with country code, no + or spaces)
   before deploying, e.g. "2348012345678". */
const YOUR_WHATSAPP_NUMBER = "2349037509328";

/* ==========================================================================
   2. UTILITIES
   ========================================================================== */

function formatNaira(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG");
}

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function needsSize(product) {
  return CLOTHING_CATEGORIES.includes(product.category);
}

/* Minimal line-art "photograph" placeholders per category, drawn in the
   brand palette, since this demo ships with no external image assets. */
function productSVG(product) {
  if (product.image) {
    return `<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">`;
  }

  const bg = "#EDE3D2";
  const ink = "#1B1714";
  const accent = "#A85668";
  const icons = {
    Dresses: `<path d="M100 40 L85 70 L70 240 L130 240 L115 70 Z" fill="none" stroke="${ink}" stroke-width="2"/><path d="M85 70 Q100 90 115 70" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="100" cy="50" r="10" fill="none" stroke="${ink}" stroke-width="2"/>`,
    Tops: `<path d="M60 70 L85 55 L100 65 L115 55 L140 70 L130 100 L115 90 L115 200 L85 200 L85 90 L70 100 Z" fill="none" stroke="${ink}" stroke-width="2"/><path d="M85 55 Q100 75 115 55" fill="none" stroke="${accent}" stroke-width="2"/>`,
    Trousers: `<path d="M75 40 L125 40 L130 220 L108 220 L100 110 L92 220 L70 220 Z" fill="none" stroke="${ink}" stroke-width="2"/><line x1="75" y1="60" x2="125" y2="60" stroke="${accent}" stroke-width="2"/>`,
    Skirts: `<path d="M78 50 L122 50 L145 190 L55 190 Z" fill="none" stroke="${ink}" stroke-width="2"/><line x1="78" y1="50" x2="122" y2="50" stroke="${accent}" stroke-width="2"/><line x1="100" y1="50" x2="100" y2="190" stroke="${ink}" stroke-width="1" opacity="0.4"/>`,
    Bags: `<rect x="65" y="90" width="70" height="80" rx="6" fill="none" stroke="${ink}" stroke-width="2"/><path d="M78 90 Q78 55 100 55 Q122 55 122 90" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="100" cy="125" r="4" fill="${ink}"/>`,
    Shoes: `<path d="M55 165 Q55 145 80 140 L120 130 L145 150 Q150 165 140 168 L60 172 Q52 172 55 165 Z" fill="none" stroke="${ink}" stroke-width="2"/><line x1="80" y1="140" x2="80" y2="172" stroke="${accent}" stroke-width="2"/>`,
    Accessories: `<circle cx="78" cy="110" r="24" fill="none" stroke="${ink}" stroke-width="2"/><circle cx="132" cy="110" r="24" fill="none" stroke="${ink}" stroke-width="2"/><line x1="102" y1="105" x2="108" y2="105" stroke="${ink}" stroke-width="2"/><line x1="54" y1="100" x2="40" y2="90" stroke="${accent}" stroke-width="2"/><line x1="156" y1="100" x2="170" y2="90" stroke="${accent}" stroke-width="2"/>`,
  };
  return `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${product.name}">
    <rect width="200" height="260" fill="${bg}"/>
    ${icons[product.category] || icons.Accessories}
  </svg>`;
}

function starRow(rating) {
  return `<span class="product-rating"><svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2L4.6 17.3l1.3-6L1.3 7.2l6.1-.6z"/></svg>${rating.toFixed(1)}</span>`;
}

/* ==========================================================================
   3. STATE — cart & wishlist, persisted with localStorage
   ========================================================================== */

const CART_KEY = "luxeelan_cart";
const WISHLIST_KEY = "luxeelan_wishlist";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Could not read cart from localStorage:", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart to localStorage:", e);
  }
}

function loadWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Could not read wishlist from localStorage:", e);
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Could not save wishlist to localStorage:", e);
  }
}

let cart = loadCart();
let wishlist = loadWishlist();

/* ==========================================================================
   4. CART FUNCTIONS
   ========================================================================== */

function addToCart(productId, size, qty, colorHex) {
  const product = getProduct(productId);
  if (!product) return;
  qty = Math.max(1, parseInt(qty, 10) || 1);

  const lineId = productId + "__" + (size || "onesize") + "__" + (colorHex || "default");
  const existing = cart.find((l) => l.lineId === lineId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      lineId,
      productId,
      name: product.name,
      price: product.price,
      size: size || null,
      color: colorHex || null,
      qty,
    });
  }
  saveCart(cart);
  renderCartBadge();
  renderCartDrawer();
}

function removeFromCart(lineId) {
  cart = cart.filter((l) => l.lineId !== lineId);
  saveCart(cart);
  renderCartBadge();
  renderCartDrawer();
}

function updateQuantity(lineId, delta) {
  const line = cart.find((l) => l.lineId === lineId);
  if (!line) return;
  line.qty += delta;
  if (line.qty < 1) line.qty = 1;
  saveCart(cart);
  renderCartBadge();
  renderCartDrawer();
}

function clearCart() {
  cart = [];
  saveCart(cart);
  renderCartBadge();
  renderCartDrawer();
}

function cartItemCount() {
  return cart.reduce((sum, l) => sum + l.qty, 0);
}

function calculateTotals(deliveryFee) {
  const subtotal = cart.reduce((sum, l) => sum + l.price * l.qty, 0);
  const delivery = cart.length ? (deliveryFee || 0) : 0;
  return {
    subtotal,
    delivery,
    total: subtotal + delivery,
  };
}

/* ==========================================================================
   5. WISHLIST FUNCTIONS
   ========================================================================== */

function toggleWishlist(productId) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
  } else {
    wishlist.push(productId);
  }
  saveWishlist(wishlist);
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach((btn) => {
    btn.classList.toggle("active", wishlist.includes(productId));
  });
}

/* ==========================================================================
   6. RENDERING — cart badge (every page) & cart drawer (every page)
   ========================================================================== */

function renderCartBadge() {
  document.querySelectorAll(".cart-count").forEach((el) => {
    const count = cartItemCount();
    el.textContent = count;
    el.dataset.empty = count === 0 ? "true" : "false";
  });
}

function cartLineSvg(productId) {
  const product = getProduct(productId);
  return product ? productSVG(product) : "";
}

function renderCartDrawer() {
  const itemsEl = document.getElementById("cartItems");
  const summaryEl = document.getElementById("cartSummary");
  if (!itemsEl || !summaryEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M3 6h2l2.4 12.4a2 2 0 002 1.6h8.4a2 2 0 002-1.6L20 8H6"/><circle cx="9" cy="21" r="1"/><circle cx="17" cy="21" r="1"/></svg>
        <p>Your cart is empty.</p>
        <a class="btn btn-outline btn-sm" href="shop.html">Continue Shopping</a>
      </div>`;
    summaryEl.innerHTML = "";
    return;
  }

  itemsEl.innerHTML = cart
    .map((l) => {
      const subtotal = l.price * l.qty;
      const meta = [l.size ? `Size ${l.size}` : null].filter(Boolean).join(" · ");
      return `
      <div class="cart-line">
        <div class="cart-line-media">${cartLineSvg(l.productId)}</div>
        <div>
          <div class="cart-line-name">${l.name}</div>
          <div class="cart-line-meta">${meta}</div>
          <div class="cart-line-price">${formatNaira(subtotal)}</div>
          <button class="cart-line-remove" onclick="removeFromCart('${l.lineId}')">Remove</button>
        </div>
        <div class="cart-line-qty">
          <div class="qty-control">
            <button aria-label="Decrease quantity" onclick="updateQuantity('${l.lineId}', -1)">−</button>
            <span>${l.qty}</span>
            <button aria-label="Increase quantity" onclick="updateQuantity('${l.lineId}', 1)">+</button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  const totals = calculateTotals(cart.length ? 2000 : 0);
  summaryEl.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatNaira(totals.subtotal)}</span></div>
    <div class="summary-row"><span>Delivery (est.)</span><span>${formatNaira(totals.delivery)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatNaira(totals.total)}</span></div>
    <a href="checkout.html" class="btn btn-block">Checkout</a>
    <button class="clear-cart-link" onclick="clearCart()">Clear cart</button>
  `;
}

/* ==========================================================================
   7. SHOP PAGE — filter / search / sort / render
   ========================================================================== */

let activeCategory = "All";
let activeSearch = "";
let activeSort = "default";

function filterProducts() {
  return PRODUCTS.filter((p) => activeCategory === "All" || p.category === activeCategory);
}

function searchProducts(list) {
  const q = activeSearch.trim().toLowerCase();
  if (!q) return list;
  return list.filter(
    (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );
}

function sortProducts(list) {
  const copy = [...list];
  switch (activeSort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "newest":
      return copy.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1));
    case "popular":
      return copy.sort((a, b) => b.popularity - a.popularity);
    default:
      return copy;
  }
}

function productCardHTML(p) {
  const isWished = wishlist.includes(p.id);
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="product-media">
      <div class="tag-hole"></div>
      ${p.isNew ? '<span class="product-badge">New</span>' : ""}
      <button class="wishlist-btn ${isWished ? "active" : ""}" data-id="${p.id}" aria-label="Toggle wishlist for ${p.name}" onclick="toggleWishlist('${p.id}')">
        <svg viewBox="0 0 24 24" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.2C.4 8.2 2.3 4.5 6 4c2-.3 3.7.7 6 3 2.3-2.3 4-3.3 6-3 3.7.5 5.6 4.2 4 7.8-2.5 4.6-10 9.2-10 9.2z"/></svg>
      </button>
      ${productSVG(p)}
    </div>
    <div class="product-body">
      <span class="product-cat">${p.category}</span>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-meta">
        <span class="product-price">${formatNaira(p.price)}</span>
        ${starRow(p.rating)}
      </div>
      <div class="product-actions">
        <button class="btn btn-outline" onclick="openProductModal('${p.id}')">View Details</button>
        <button class="btn" onclick="quickAdd('${p.id}')">Add to Cart</button>
      </div>
    </div>
  </article>`;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  let list = filterProducts();
  list = searchProducts(list);
  list = sortProducts(list);

  const countEl = document.getElementById("resultsCount");
  if (countEl) {
    countEl.textContent = list.length
      ? `Showing ${list.length} of ${PRODUCTS.length} pieces`
      : "";
  }

  grid.innerHTML = list.length
    ? list.map(productCardHTML).join("")
    : `<p class="no-results">No products found.</p>`;
}

function quickAdd(productId) {
  const product = getProduct(productId);
  if (!product) return;
  if (needsSize(product)) {
    /* Clothing needs a size, so send the shopper to the modal instead
       of guessing a size for them. */
    openProductModal(productId);
    return;
  }
  addToCart(productId, null, 1, product.colors[0]);
  flashCartOpen();
}

function flashCartOpen() {
  openCartDrawer();
}

/* ==========================================================================
   8. PRODUCT DETAILS MODAL
   ========================================================================== */

let modalState = { productId: null, size: null, color: null, qty: 1 };

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;
  modalState = { productId, size: null, color: product.colors[0], qty: 1 };

  const overlay = document.getElementById("productModalOverlay");
  const body = document.getElementById("modalBody");
  const media = document.getElementById("modalMedia");
  if (!overlay || !body || !media) return;

  media.innerHTML = productSVG(product);

  body.innerHTML = `
    <span class="product-cat">${product.category}</span>
    <h3>${product.name}</h3>
    <div class="modal-price">${formatNaira(product.price)}</div>
    ${starRow(product.rating)}
    <p class="modal-desc">${product.description}</p>

    <div class="option-group">
      <label>Color</label>
      <div class="swatches" id="modalSwatches">
        ${product.colors
          .map(
            (c, i) =>
              `<button class="swatch ${i === 0 ? "selected" : ""}" style="background:${c}" data-color="${c}" aria-label="Color ${c}" onclick="selectModalColor('${c}', this)"></button>`
          )
          .join("")}
      </div>
    </div>

    ${
      needsSize(product)
        ? `<div class="option-group">
            <label>Size</label>
            <div class="size-row" id="modalSizes">
              ${product.sizes.map((s) => `<button class="size-btn" data-size="${s}" onclick="selectModalSize('${s}', this)">${s}</button>`).join("")}
            </div>
            <div class="size-error" id="sizeError">Please select a size.</div>
          </div>`
        : ""
    }

    <div class="option-group">
      <label>Quantity</label>
      <div class="qty-row">
        <div class="qty-control">
          <button aria-label="Decrease quantity" onclick="changeModalQty(-1)">−</button>
          <span id="modalQty">1</span>
          <button aria-label="Increase quantity" onclick="changeModalQty(1)">+</button>
        </div>
      </div>
    </div>

    <button class="btn btn-block" onclick="confirmAddToCart()">Add to Cart</button>
    <div class="modal-add-feedback" id="modalFeedback">Added to your cart.</div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function selectModalColor(color, el) {
  modalState.color = color;
  document.querySelectorAll("#modalSwatches .swatch").forEach((s) => s.classList.remove("selected"));
  el.classList.add("selected");
}

function selectModalSize(size, el) {
  modalState.size = size;
  document.querySelectorAll("#modalSizes .size-btn").forEach((s) => s.classList.remove("selected"));
  el.classList.add("selected");
  document.getElementById("sizeError").classList.remove("show");
}

function changeModalQty(delta) {
  modalState.qty = Math.max(1, modalState.qty + delta);
  document.getElementById("modalQty").textContent = modalState.qty;
}

function confirmAddToCart() {
  const product = getProduct(modalState.productId);
  if (!product) return;

  if (needsSize(product) && !modalState.size) {
    document.getElementById("sizeError").classList.add("show");
    return;
  }

  addToCart(product.id, modalState.size, modalState.qty, modalState.color);

  const feedback = document.getElementById("modalFeedback");
  feedback.classList.add("show");
  setTimeout(() => {
    closeProductModal();
    openCartDrawer();
  }, 550);
}

function closeProductModal() {
  const overlay = document.getElementById("productModalOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==========================================================================
   9. CART DRAWER open/close
   ========================================================================== */

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;
  renderCartDrawer();
  drawer.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==========================================================================
   10. CHECKOUT PAGE
   ========================================================================== */

let selectedDelivery = 2000;

function renderCheckoutSummary() {
  const list = document.getElementById("checkoutItems");
  const summary = document.getElementById("checkoutTotals");
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  const whatsappBtn = document.getElementById("whatsappOrderBtn");
  if (!list || !summary) return;

  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty">
      <p>Your cart is empty.</p>
      <a class="btn btn-outline btn-sm" href="shop.html">Continue Shopping</a>
    </div>`;
    summary.innerHTML = "";
    if (placeOrderBtn) placeOrderBtn.disabled = true;
    if (whatsappBtn) whatsappBtn.disabled = true;
    return;
  }

  if (placeOrderBtn) placeOrderBtn.disabled = false;
  if (whatsappBtn) whatsappBtn.disabled = false;

  list.innerHTML = cart
    .map((l) => {
      const meta = l.size ? `Size ${l.size} · Qty ${l.qty}` : `Qty ${l.qty}`;
      return `<div class="summary-item">
        <div class="summary-item-media">${cartLineSvg(l.productId)}</div>
        <div>
          <div class="summary-item-name">${l.name}</div>
          <div class="summary-item-meta">${meta}</div>
        </div>
        <div class="summary-item-price">${formatNaira(l.price * l.qty)}</div>
      </div>`;
    })
    .join("");

  const totals = calculateTotals(selectedDelivery);
  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatNaira(totals.subtotal)}</span></div>
    <div class="summary-row"><span>Delivery</span><span>${formatNaira(totals.delivery)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatNaira(totals.total)}</span></div>
  `;
}

function selectDelivery(fee, el) {
  selectedDelivery = fee;
  document.querySelectorAll(".delivery-option").forEach((o) => o.classList.remove("selected"));
  el.classList.add("selected");
  el.querySelector('input[type="radio"]').checked = true;
  renderCheckoutSummary();
}

function showFieldError(fieldEl, show) {
  fieldEl.classList.toggle("invalid", show);
}

function validateCheckout() {
  if (cart.length === 0) return false;

  const requiredIds = ["fullName", "email", "phone", "address", "city", "state"];
  let valid = true;

  requiredIds.forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    const fieldEl = input.closest(".field");
    const empty = input.value.trim() === "";
    let bad = empty;

    if (id === "email" && !empty) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      bad = !emailPattern.test(input.value.trim());
    }
    if (id === "phone" && !empty) {
      const phonePattern = /^[0-9+\s-]{7,15}$/;
      bad = !phonePattern.test(input.value.trim());
    }

    showFieldError(fieldEl, bad);
    if (bad) valid = false;
  });

  return valid;
}

function getCustomerInfo() {
  const val = (id) => (document.getElementById(id) ? document.getElementById(id).value.trim() : "");
  return {
    fullName: val("fullName"),
    email: val("email"),
    phone: val("phone"),
    address: val("address"),
    city: val("city"),
    state: val("state"),
  };
}

function placeDemoOrder() {
  if (!validateCheckout()) return;

  const orderCol = document.getElementById("checkoutFormCol");
  if (orderCol) orderCol.innerHTML = successHTML();

  clearCart();
  renderCheckoutSummary();
}

function successHTML() {
  return `
    <div class="checkout-panel order-success">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M20 6L9 17l-5-5"/></svg>
      <h3>Demo order created successfully!</h3>
      <p>Thank you — your details were validated and your order summary was generated right here in your browser.</p>
      <div class="demo-notice">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M12 9v4M12 17h.01M10.3 3.9L2.7 17a2 2 0 001.7 3h15.2a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>
        <div>
          <b>This is a frontend demo</b>
          <p>No real payment was processed and no order was saved to a server. Nothing here was sent to a real store.</p>
        </div>
      </div>
      <a href="shop.html" class="btn">Continue Shopping</a>
    </div>
  `;
}

function createWhatsAppOrder() {
  if (!validateCheckout()) return;

  const customer = getCustomerInfo();
  const totals = calculateTotals(selectedDelivery);
  const deliveryLabel = selectedDelivery === 5000 ? "Express Delivery" : "Standard Delivery";

  let message = `Hello C&D! I'd like to place an order:\n\n`;
  cart.forEach((l) => {
    const sizeLabel = l.size ? ` (Size ${l.size})` : "";
    message += `• ${l.name}${sizeLabel} x${l.qty} — ${formatNaira(l.price * l.qty)}\n`;
  });
  message += `\nDelivery: ${deliveryLabel} — ${formatNaira(totals.delivery)}`;
  message += `\nTotal: ${formatNaira(totals.total)}`;
  message += `\n\nName: ${customer.fullName}`;
  message += `\nPhone: ${customer.phone}`;
  message += `\nAddress: ${customer.address}, ${customer.city}, ${customer.state}`;

  const url = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

/* ==========================================================================
   11. CONTACT FORM
   ========================================================================== */

function handleContactSubmit(e) {
  e.preventDefault();
  const nameEl = document.getElementById("contactName");
  const emailEl = document.getElementById("contactEmail");
  const msgEl = document.getElementById("contactMessage");
  const feedback = document.getElementById("contactFeedback");

  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  [nameEl, emailEl, msgEl].forEach((el) => {
    const fieldEl = el.closest(".field");
    const empty = el.value.trim() === "";
    let bad = empty;
    if (el === emailEl && !empty) bad = !emailPattern.test(el.value.trim());
    showFieldError(fieldEl, bad);
    if (bad) valid = false;
  });

  if (!valid) {
    feedback.className = "form-msg error show";
    feedback.textContent = "Please fix the highlighted fields.";
    return;
  }

  feedback.className = "form-msg success show";
  feedback.textContent = "Thank you! Your message has been prepared successfully.";
  e.target.reset();
}

/* ==========================================================================
   12. NEWSLETTER
   ========================================================================== */

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  const feedback = document.getElementById("newsletterFeedback");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(input.value.trim())) {
    feedback.className = "form-msg error show";
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  feedback.className = "form-msg success show";
  feedback.textContent = "You're subscribed to the demo newsletter!";
  e.target.reset();
}

/* ==========================================================================
   13. NAV — hamburger + search bar toggle
   ========================================================================== */

function initNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("open");
      navLinks.classList.toggle("open", isOpen);
      if (navOverlay) navOverlay.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
        if (navOverlay) navOverlay.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
    if (navOverlay) {
      navOverlay.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
        navOverlay.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  }

  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  if (searchToggle && searchBar) {
    searchToggle.addEventListener("click", () => {
      searchBar.classList.toggle("open");
      if (searchBar.classList.contains("open")) {
        searchBar.querySelector("input").focus();
      }
    });
  }

  const navSearchInput = document.getElementById("navSearchInput");
  if (navSearchInput) {
    navSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        window.location.href = "shop.html?q=" + encodeURIComponent(navSearchInput.value.trim());
      }
    });
  }

  const cartBtn = document.getElementById("cartToggle");
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  const cartClose = document.getElementById("cartClose");
  if (cartClose) cartClose.addEventListener("click", closeCartDrawer);
  const cartOverlay = document.getElementById("cartOverlay");
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

  const modalClose = document.getElementById("modalClose");
  if (modalClose) modalClose.addEventListener("click", closeProductModal);
  const modalOverlay = document.getElementById("productModalOverlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
    }
  });
}

/* ==========================================================================
   14. SHOP PAGE INIT — reads ?category= and ?q= from the URL
   ========================================================================== */

function initShopPage() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const qParam = params.get("q");
  const catParam = params.get("category");

  if (qParam) activeSearch = qParam;
  if (catParam && CATEGORIES.includes(catParam)) activeCategory = catParam;

  const searchInput = document.getElementById("shopSearchInput");
  if (searchInput) {
    searchInput.value = activeSearch;
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value;
      renderProducts();
    });
  }

  const chipRow = document.getElementById("categoryChips");
  if (chipRow) {
    chipRow.innerHTML = CATEGORIES.map(
      (c) => `<button class="chip ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");
    chipRow.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.dataset.cat;
        chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderProducts();
      });
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }

  renderProducts();
}

/* ==========================================================================
   15. INIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderCartBadge();
  renderCartDrawer();
  initShopPage();

  const newArrivalsGrid = document.getElementById("newArrivalsGrid");
  if (newArrivalsGrid) {
    const featured = [...PRODUCTS].sort((a, b) => b.isNew - a.isNew || b.popularity - a.popularity).slice(0, 4);
    newArrivalsGrid.innerHTML = featured.map(productCardHTML).join("");
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) newsletterForm.addEventListener("submit", handleNewsletterSubmit);

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    renderCheckoutSummary();
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      placeDemoOrder();
    });
  }
  const whatsappBtn = document.getElementById("whatsappOrderBtn");
  if (whatsappBtn) whatsappBtn.addEventListener("click", createWhatsAppOrder);
});