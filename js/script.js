let currentProducts = [...products];

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateWishlistCount();
  renderProducts(currentProducts);
});

// Render products
function renderProducts(list) {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">🛒 Add</button>
      <button onclick="addToWishlist(${p.id})">❤️ Wishlist</button>
      <button onclick="viewDetails(${p.id})">👀 View</button>
    `;
    container.appendChild(card);
  });
}

// Category Filter
function filterCategory(category) {
  currentProducts = category === "all" ? [...products] : products.filter(p => p.category === category);
  renderProducts(currentProducts);
}

// Search
function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  currentProducts = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(currentProducts);
}

// Sorting
function sortProducts() {
  const sortValue = document.getElementById("sort").value;
  if (sortValue === "low-high") currentProducts.sort((a, b) => a.price - b.price);
  else if (sortValue === "high-low") currentProducts.sort((a, b) => b.price - a.price);
  else if (sortValue === "a-z") currentProducts.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortValue === "z-a") currentProducts.sort((a, b) => b.name.localeCompare(a.name));
  else currentProducts = [...products];
  renderProducts(currentProducts);
}

// Details Page
function viewDetails(id) {
  window.location.href = `details.html?id=${id}`;
}
