const products = [
  { id: 1, name: "T-Shirt", price: 499, category: "clothing", image: "assets/images/tshirt.jpg" },
  { id: 2, name: "Jeans", price: 999, category: "clothing", image: "assets/images/jeans.jpg" },
  { id: 3, name: "Laptop", price: 45000, category: "electronics", image: "assets/images/laptop.jpg" },
  { id: 4, name: "Headphones", price: 2999, category: "electronics", image: "assets/images/headphones.jpg" },
  { id: 5, name: "Handmade Vase", price: 799, category: "handicrafts", image: "assets/images/vase.jpg" },
  { id: 6, name: "Bracelet", price: 299, category: "handicrafts", image: "assets/images/bracelet.jpg" },
];

let cart = [];

function displayProducts(filteredProducts = products) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("searchBar").addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchText));
  displayProducts(filtered);
});

// Initial load
displayProducts();
