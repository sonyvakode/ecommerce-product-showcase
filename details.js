const products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getProductFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  return products.find(p => p.id === id);
}

function displayProductDetails() {
  const product = getProductFromQuery();
  const container = document.getElementById("product-details");
  if(!product){
    container.innerHTML += "<p>Product not found</p>";
    return;
  }

  container.innerHTML += `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent = cart.length;
  alert(`${product.name} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
  displayProductDetails();
  document.getElementById("cart-count").textContent = cart.length;
});
