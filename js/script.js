// User profile (example - can be replaced dynamically)
const user = {
    name: "Sony Vakode", // any user name can appear here
    email: "sony.vakode@example.com",
    address: "Hyderabad, India"
};

// Display user greeting dynamically
function displayUserGreeting() {
    const greetingEl = document.getElementById('userGreeting');
    if (greetingEl) {
        greetingEl.textContent = `Welcome, ${user.name}!`;
        // Optional: add some styling
        greetingEl.style.display = 'block';
        greetingEl.style.marginBottom = '10px';
        greetingEl.style.fontWeight = 'bold';
        greetingEl.style.fontSize = '18px';
        greetingEl.style.color = '#0077cc';
    }
}

// Call this on page load
displayUserGreeting();
// Product data array
const products = [
    { id: 1, name: "Men's Shirt", price: 25, category: "men", image: "shirt.jpg" },
    { id: 2, name: "Women's Dress", price: 40, category: "women", image: "dress.jpg" },
    { id: 3, name: "Headphones", price: 60, category: "headphones", image: "headphones.jpg" },
    { id: 4, name: "Makeup Kit", price: 35, category: "makeup", image: "makeup.jpg" },
    { id: 5, name: "Men's Jeans", price: 45, category: "men", image: "jeans.jpg" },
    { id: 6, name: "Women's Top", price: 30, category: "women", image: "top.jpg" },
    { id: 7, name: "Girls' Dress", price: 28, category: "girls", image: "girls-dress.jpg" },
    { id: 8, name: "Baby Clothes Set", price: 22, category: "baby", image: "baby.jpg" },
    { id: 9, name: "Wireless Earbuds", price: 55, category: "headphones", image: "earbuds.jpg" },
    { id: 10, name: "Leather Wallet", price: 18, category: "accessories", image: "wallet.jpg" },
    { id: 11, name: "Sunglasses", price: 32, category: "accessories", image: "sunglasses.jpg" },
    { id: 12, name: "Lipstick Set", price: 25, category: "makeup", image: "lipstick.jpg" }
];

// Cart array to store added products
let cart = [];

// Current selected category
let currentCategory = 'all';

/**
 * Display products on the page
 */
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <div class="product-image"></div>
            <div class="product-title">${product.name}</div>
            <div class="product-price">₹${product.price}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

/**
 * Filter products by category
 */
function filterCategory(category) {
    currentCategory = category;
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    displayProducts(filtered);
}

/**
 * Search products by name
 */
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    displayProducts(filtered);
}

/**
 * Add product to cart
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

/**
 * Update cart count in header
 */
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

/**
 * View cart contents
 */
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        const cartItems = cart.map(item => `${item.name} - ₹${item.price}`).join('\n');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Cart Items:\n${cartItems}\n\nTotal: ₹${total}`);
    }
}

// Initialize page
displayProducts(products);
displayUserGreeting(); // show user dynamically
