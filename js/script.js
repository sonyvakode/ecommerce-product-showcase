// Categories Data
const categories = [
    { id: 1, name: "Live Now", icon: "🔴", image: "images/live-now.png", category: "live" },
    { id: 2, name: "Mobiles", icon: "📱", image: "images/mobiles.png", category: "mobiles" },
    { id: 3, name: "Fashion", icon: "👗", image: "images/fashion.png", category: "fashion" },
    { id: 4, name: "Electronics", icon: "💻", image: "images/electronics.png", category: "electronics" },
    { id: 5, name: "Travel", icon: "✈️", image: "images/travel.png", category: "travel" },
    { id: 6, name: "Home", icon: "🏠", image: "images/home.png", category: "home" },
    { id: 7, name: "Everyday Needs", icon: "🛒", image: "images/everyday-needs.png", category: "everyday" },
    { id: 8, name: "Bills and Recharges", icon: "📱", image: "images/bills-recharges.png", category: "bills" },
    { id: 9, name: "Beauty", icon: "💄", image: "images/beauty.png", category: "beauty" },
    { id: 10, name: "Appliances", icon: "🔌", image: "images/appliances.png", category: "appliances" },
    { id: 11, name: "Furniture", icon: "🛋️", image: "images/furniture.png", category: "furniture" },
    { id: 12, name: "Kids & Toys", icon: "🧸", image: "images/kids-toys.png", category: "kids" }
];

// Products Data
const products = [
    { id: 1, name: "Samsung Galaxy S24", price: 799, category: "mobiles", image: "images/phone1.jpg", rating: 4.5 },
    { id: 2, name: "iPhone 15 Pro", price: 999, category: "mobiles", image: "images/phone2.jpg", rating: 4.8 },
    { id: 3, name: "Men's Casual Shirt", price: 29, category: "fashion", image: "images/mens-shirt.jpg", rating: 4.2 },
    { id: 4, name: "Women's Dress", price: 49, category: "fashion", image: "images/womens-dress.jpg", rating: 4.6 },
    { id: 5, name: "MacBook Pro 14", price: 1999, category: "electronics", image: "images/laptop.jpg", rating: 4.9 },
    { id: 6, name: "Sony Headphones", price: 199, category: "electronics", image: "images/headphones.jpg", rating: 4.7 },
    { id: 7, name: "Travel Backpack", price: 59, category: "travel", image: "images/backpack.jpg", rating: 4.3 },
    { id: 8, name: "Sofa Set 3+2", price: 899, category: "furniture", image: "images/sofa.jpg", rating: 4.4 },
    { id: 9, name: "LED Smart TV 55", price: 599, category: "home", image: "images/tv.jpg", rating: 4.6 },
    { id: 10, name: "Washing Machine", price: 449, category: "appliances", image: "images/washing-machine.jpg", rating: 4.5 },
    { id: 11, name: "Makeup Kit", price: 79, category: "beauty", image: "images/makeup-kit.jpg", rating: 4.7 },
    { id: 12, name: "Kids Remote Car", price: 45, category: "kids", image: "images/toy-car.jpg", rating: 4.3 },
    { id: 13, name: "Grocery Combo Pack", price: 89, category: "everyday", image: "images/groceries.jpg", rating: 4.2 },
    { id: 14, name: "Wireless Mouse", price: 25, category: "electronics", image: "images/mouse.jpg", rating: 4.4 },
    { id: 15, name: "Running Shoes", price: 79, category: "fashion", image: "images/shoes.jpg", rating: 4.5 }
];

// Cart and User State
let cart = [];
let currentUser = null;
let currentCategory = 'all';

// Initialize Page
function initializePage() {
    displayCategories();
    displayProducts(products);
    updateCartCount();
    
    // Check if user is logged in
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateSignInButton();
    }
}

// Display Categories
function displayCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterCategory('${cat.category}')">
            <img src="${cat.image}" alt="${cat.name}" class="category-image" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="category-icon" style="display:none;">${cat.icon}</div>
            <p>${cat.name}</p>
        </div>
    `).join('');
}

// Display Products
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image"
                 onerror="this.style.background='linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'; this.alt='${product.name}';">
            <div class="product-title">${product.name}</div>
            <div class="product-rating">⭐ ${product.rating} | 1000+ ratings</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Filter Products by Category
function filterCategory(category) {
    currentCategory = category;
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    const categoryName = categories.find(c => c.category === category)?.name || 'All Products';
    document.getElementById('sectionTitle').textContent = categoryName;
    displayProducts(filtered);
    
    // Scroll to products section
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    document.getElementById('sectionTitle').textContent = `Search Results for "${searchTerm}"`;
    displayProducts(filtered);
}

// View Product Details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Product: ${product.name}\nPrice: $${product.price}\nRating: ${product.rating} ⭐\n\nFull product page coming soon!`);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
    saveCart();
}

// Update Cart Count
function updateCartCount() {
    const count = cart.length;
    document.getElementById('cartCount').textContent = count;
}

// View Cart
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!\n\nStart shopping to add items to your cart.');
        return;
    }
    
    const cartItems = cart.map((item, index) => 
        `${index + 1}. ${item.name} - $${item.price}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemCount = cart.length;
    
    alert(`🛒 Your Cart (${itemCount} items)\n\n${cartItems}\n\n━━━━━━━━━━━━━━━━\nSubtotal: $${total.toFixed(2)}\n\nCheckout page coming soon!`);
}

// Save Cart to Session Storage
function saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from Session Storage
function loadCart() {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Login Modal Functions
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('otpInput').value = '';
}

// Send OTP
function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const countryCode = document.getElementById('countryCode').value;
    
    if (phoneNumber.length < 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }
    
    // Simulate OTP sending
    const fullNumber = countryCode + ' ' + phoneNumber;
    document.getElementById('displayPhone').textContent = fullNumber;
    document.getElementById('phoneStep').style.display = 'none';
    document.getElementById('otpStep').style.display = 'block';
    
    // Simulate OTP (in real app, this would be sent via SMS)
    console.log('OTP sent to:', fullNumber);
    console.log('Test OTP: 123456');
    showNotification('OTP sent to ' + fullNumber);
}

// Verify OTP
function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    
    if (otp.length !== 6) {
        alert('Please enter a valid 6-digit OTP');
        return;
    }
    
    // Simulate OTP verification (in real app, verify with backend)
    if (otp === '123456' || otp.length === 6) {
        const phoneNumber = document.getElementById('phoneNumber').value;
        currentUser = {
            phone: phoneNumber,
            name: 'User'
        };
        
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateSignInButton();
        closeLogin();
        showNotification('Successfully signed in!');
    } else {
        alert('Invalid OTP. Please try again.\n\nFor testing, use: 123456');
    }
}

// Resend OTP
function resendOTP() {
    showNotification('OTP resent successfully!');
    console.log('Test OTP: 123456');
}

// Change Number
function changeNumber() {
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
}

// Update Sign In Button
function updateSignInButton() {
    if (currentUser) {
        document.getElementById('signInBtn').innerHTML = `
            <span>Hello, ${currentUser.name}</span>
            <strong>Account</strong>
        `;
    }
}

// View Orders
function viewOrders() {
    if (!currentUser) {
        showLogin();
        return;
    }
    alert('📦 Your Orders\n\nNo orders yet!\n\nStart shopping to see your orders here.');
}

// Toggle Menu
function toggleMenu() {
    alert('📱 Menu\n\n• Your Account\n• Your Orders\n• Your Wishlist\n• Prime Membership\n• Customer Service\n• Settings\n\nFull menu coming soon!');
}

// Show Notification
function showNotification(message) {
    // Simple alert for now - can be replaced with toast notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #232F3E;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLogin();
    }
}

// Initialize on page load
window.onload = function() {
    initializePage();
    loadCart();
};

// Handle Enter key in search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});
