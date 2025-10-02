// Product data array - UPDATE IMAGE NAMES TO MATCH YOUR FILES
const products = [
    { id: 1, name: "Men's Shirt", price: 25, category: "men", image: "images/shirt.jpg" },
    { id: 2, name: "Women's Dress", price: 40, category: "women", image: "images/dress.jpg" },
    { id: 3, name: "Headphones", price: 60, category: "headphones", image: "images/headphones.jpg" },
    { id: 4, name: "Makeup Kit", price: 35, category: "makeup", image: "images/makeup.jpg" },
    { id: 5, name: "Men's Jeans", price: 45, category: "men", image: "images/jeans.jpg" },
    { id: 6, name: "Women's Top", price: 30, category: "women", image: "images/top.jpg" },
    { id: 7, name: "Girls' Dress", price: 28, category: "girls", image: "images/girls-dress.jpg" },
    { id: 8, name: "Baby Clothes Set", price: 22, category: "baby", image: "images/baby.jpg" },
    { id: 9, name: "Wireless Earbuds", price: 55, category: "headphones", image: "images/earbuds.jpg" },
    { id: 10, name: "Leather Wallet", price: 18, category: "accessories", image: "images/wallet.jpg" },
    { id: 11, name: "Sunglasses", price: 32, category: "accessories", image: "images/sunglasses.jpg" },
    { id: 12, name: "Lipstick Set", price: 25, category: "makeup", image: "images/lipstick.jpg" }
];

// Cart array to store added products
let cart = [];

// Current selected category
let currentCategory = 'all';

/**
 * Display products on the page
 * @param {Array} productsToShow - Array of products to display
 */
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="product-image"
                 onerror="this.style.background='linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'; this.src='';">
            <div class="product-title">${product.name}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

/**
 * Filter products by category
 * @param {string} category - Category to filter by
 */
function filterCategory(category) {
    currentCategory = category;
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');

    // Filter products based on category
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
    
    // Filter products that match search term
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filtered);
}

/**
 * Add product to cart
 * @param {number} productId - ID of product to add
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
        const cartItems = cart.map(item => `${item.name} - $${item.price}`).join('\n');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Cart Items:\n${cartItems}\n\nTotal: $${total}`);
    }
}

// Initialize page with all products when page loads
displayProducts(products);
