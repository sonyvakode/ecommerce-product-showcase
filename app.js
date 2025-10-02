const products = [
  { id: 1, name: "Men's Shirt", price: "$25", img: "images/shirt.jpg", category: "men" },
  { id: 2, name: "Women's Dress", price: "$40", img: "images/dress.jpg", category: "women" },
  { id: 3, name: "Headphones", price: "$60", img: "images/headphones.jpg", category: "headphones" },
  { id: 4, name: "Makeup Kit", price: "$30", img: "images/makeup.jpg", category: "makeup" },
  { id: 5, name: "Baby Toy", price: "$15", img: "images/baby.jpg", category: "baby" },
  { id: 6, name: "Girls Top", price: "$20", img: "images/girls.jpg", category: "girls" },
  { id: 7, name: "Watch", price: "$50", img: "images/watch.jpg", category: "accessories" },
  { id: 8, name: "Jacket", price: "$70", img: "images/jacket.jpg", category: "men" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let filteredProducts = [...products];

// Save products in localStorage for details page
localStorage.setItem("products", JSON.stringify(products));

// Display products
function displayProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  if(list.length === 0){
    container.innerHTML = `<p style="text-align:center; font-size:18px;">No products found</p>`;
    return;
  }
  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <a href="details.html?id=${p.id}">
          <img src="${p.img}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p>${p.price}</p>
        </a>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Add to cart
function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent = cart.length;
}

// Active category button
function setActiveCategory(button){
  const buttons = document.querySelectorAll(".sidebar button");
  buttons.forEach(b => b.classList.remove("active"));
  button.classList.add("active");
}

// Filter category
function filterCategory(cat, buttonElem){
  setActiveCategory(buttonElem);
  if(cat === "all") filteredProducts = [...products];
  else filteredProducts = products.filter(p => p.category === cat);

  const query = document.getElementById("search").value.toLowerCase();
  if(query){
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(query));
  }
  displayProducts(filteredProducts);
}

// Live search
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  let result = filteredProducts.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(result);
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  document.getElementById("cart-count").textContent = cart.length;
});
