// Core product data
const products = [
  { id: 1, name: "Blue Shirt", price: 25, img: "images/shirt.jpg", category: "mens" },
  { id: 2, name: "Denim Jeans", price: 40, img: "images/jeans.jpg", category: "mens" },
  { id: 3, name: "Leather Jacket", price: 60, img: "images/jacket.jpg", category: "mens" },
  { id: 4, name: "Red Dress", price: 50, img: "images/dress.jpg", category: "womens" },
  { id: 5, name: "Kids T-Shirt", price: 15, img: "images/kids.jpg", category: "boys" },
  { id: 6, name: "Baby Romper", price: 20, img: "images/baby.jpg", category: "baby" },
  { id: 7, name: "Girls Skirt", price: 30, img: "images/skirt.jpg", category: "girls" },
  { id: 8, name: "Sports Cap", price: 10, img: "images/cap.jpg", category: "accessories" },
  { id: 9, name: "Headphones", price: 70, img: "images/headphones.jpg", category: "electronics" },
  { id: 10, name: "Smart Watch", price: 120, img: "images/watch.jpg", category: "electronics" },
  { id: 11, name: "Makeup Kit", price: 45, img: "images/makeup.jpg", category: "makeup" },
  { id: 12, name: "Handbag", price: 55, img: "images/bag.jpg", category: "womens" },
  { id: 13, name: "Sneakers", price: 80, img: "images/shoes.jpg", category: "mens" },
  { id: 14, name: "Jewellery Set", price: 100, img: "images/jewellery.jpg", category: "accessories" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    saveCart();
    updateCartCount();
    alert(product.name + " added to cart!");
  }
}

function addToWishlist(id) {
  const product = products.find(p => p.id === id);
  if (product && !wishlist.some(item => item.id === id)) {
    wishlist.push(product);
    saveWishlist();
    updateWishlistCount();
    alert(product.name + " added to wishlist!");
  } else {
    alert("Already in wishlist!");
  }
}

function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => el.textContent = cart.length);
}

function updateWishlistCount() {
  document.querySelectorAll("#wishlist-count").forEach(el => el.textContent = wishlist.length);
}
