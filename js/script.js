// Products Data with Indian Prices
const products = [
    { id: 1, name: "Samsung Galaxy S24 Ultra", price: 74999, originalPrice: 89999, discount: 17, category: "mobiles", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", rating: 4.6, reviews: 2580 },
    { id: 2, name: "Apple iPhone 15 Pro Max", price: 134900, originalPrice: 159900, discount: 16, category: "mobiles", image: "https://images.unsplash.com/photo-1592286927505-2a3d63c2e5e6?w=400", rating: 4.8, reviews: 4200 },
    { id: 3, name: "OnePlus 12 5G", price: 64999, originalPrice: 74999, discount: 13, category: "mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", rating: 4.5, reviews: 1850 },
    
    { id: 4, name: "MacBook Air M2", price: 99990, originalPrice: 114900, discount: 13, category: "electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 4.7, reviews: 1200 },
    { id: 5, name: "Dell XPS 15 Laptop", price: 124990, originalPrice: 149990, discount: 17, category: "electronics", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", rating: 4.6, reviews: 890 },
    { id: 6, name: "Sony WH-1000XM5 Headphones", price: 26990, originalPrice: 32990, discount: 18, category: "electronics", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400", rating: 4.8, reviews: 3400 },
    
    { id: 7, name: "Men's Premium Cotton Shirt", price: 799, originalPrice: 1599, discount: 50, category: "fashion", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400", rating: 4.3, reviews: 560 },
    { id: 8, name: "Women's Ethnic Kurti Set", price: 1299, originalPrice: 2499, discount: 48, category: "fashion", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400", rating: 4.4, reviews: 890 },
    { id: 9, name: "Nike Air Max Sneakers", price: 6995, originalPrice: 9995, discount: 30, category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", rating: 4.5, reviews: 1200 },
    
    { id: 10, name: "Samsung 55\" 4K Smart TV", price: 42990, originalPrice: 54990, discount: 22, category: "home", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400", rating: 4.6, reviews: 780 },
    { id: 11, name: "3 Seater L-Shape Sofa", price: 24999, originalPrice: 39999, discount: 38, category: "home", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", rating: 4.4, reviews: 340 },
    { id: 12, name: "Wooden Study Table", price: 7999, originalPrice: 12999, discount: 38, category: "home", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", rating: 4.2, reviews: 450 },
    
    { id: 13, name: "LG Front Load Washing Machine", price: 29990, originalPrice: 39990, discount: 25, category: "appliances", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400", rating: 4.5, reviews: 560 },
    { id: 14, name: "Samsung Refrigerator 240L", price: 21990, originalPrice: 28990, discount: 24, category: "appliances", image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400", rating: 4.6, reviews: 890 },
    { id: 15, name: "Philips Air Fryer", price: 5499, originalPrice: 8999, discount: 39, category: "appliances", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", rating: 4.7, reviews: 2100 },
    
    { id: 16, name: "Lakme Complete Makeup Kit", price: 2499, originalPrice: 4999, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400", rating: 4.3, reviews: 1560 },
    { id: 17, name: "Maybelline Lipstick Combo", price: 899, originalPrice: 1499, discount: 40, category: "beauty", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", rating: 4.4, reviews: 890 },
    { id: 18, name: "The Man Company Grooming Kit", price: 1299, originalPrice: 2199, discount: 41, category: "beauty", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", rating: 4.5, reviews: 670 },
    
    { id: 19, name: "LEGO City Police Station", price: 4999, originalPrice: 6999, discount: 29, category: "kids", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400", rating: 4.7, reviews: 340 },
    { id: 20, name: "Barbie Dreamhouse Playset", price: 8999, originalPrice: 12999, discount: 31, category: "kids", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400", rating: 4.6, reviews: 560 },
    { id: 21, name: "Hot Wheels Track Set", price: 2499, originalPrice: 3999, discount: 38, category: "kids", image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400", rating: 4.5, reviews: 780 },
    
    { id: 22, name: "Yoga Mat with Bag", price: 899, originalPrice: 1499, discount: 40, category: "sports", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", rating: 4.4, reviews: 1200 },
    { id: 23, name: "Dumbbells Set 10kg", price: 1999, originalPrice: 2999, discount: 33, category: "sports", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400", rating: 4.3, reviews: 450 },
    { id: 24, name: "Badminton Racket Set", price: 1599, originalPrice: 2499, discount: 36, category: "sports", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400", rating: 4.5, reviews: 670 },
    
    { id: 25, name: "The Psychology of Money", price: 299, originalPrice: 450, discount: 34, category: "books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", rating: 4.8, reviews: 3400 },
    { id: 26, name: "Atomic Habits by James Clear", price: 399, originalPrice: 599, discount: 33, category: "books", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400", rating: 4.9, reviews: 5600 },
    { id: 27, name: "Rich Dad Poor Dad", price: 249, originalPrice: 399, discount: 38, category: "books", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", rating: 4.7, reviews: 4200 }
];

// State Management
let cart = [];
let currentUser = null;
let currentCategory = 'all';
let currentPriceFilter = 'all';
let displayedProducts = [...products];

// Initialize Page
function initializePage() {
    displayProducts(products);
    updateCartCount();
    loadCart();
    
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateSignInButton();
    }
}

// Display Products with proper formatting
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No products found matching your criteria.</p>';
        return;
    }
    
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            ${product.discount ? `<div class="product-badge">${product.discount}% OFF</div>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-title">${product.name}</div>
            <div class="product-rating">⭐ ${product.rating} | ${formatNumber(product.reviews)} reviews</div>
            <div>
                <span class="product-price">₹${formatPrice(product.price)}</span>
                ${product.originalPrice ? `
                    <span class="product-original-price">₹${formatPrice(product.originalPrice)}</span>
                    <span class="product-discount">${product.discount}% off</span>
                ` : ''}
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Format Price with Indian number system
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

// Format number
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    
    // Update active state in sidebar
    document.querySelectorAll('.category-list li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.classList.add('active');
    
    applyFilters();
    
    const categoryNames = {
        'all': 'All Products',
        'mobiles': 'Mobiles & Tablets',
        'electronics': 'Electronics',
        'fashion': 'Fashion',
        'home': 'Home & Furniture',
        'appliances': 'Appliances',
        'beauty': 'Beauty & Personal Care',
        'kids': 'Kids & Toys',
        'sports': 'Sports & Fitness',
        'books': 'Books & Media'
    };
    
    document.getElementById('sectionTitle').textContent = categoryNames[category];
}

// Filter by Price
function filterPrice(range) {
    currentPriceFilter = range;
    applyFilters();
}

// Apply all filters
function applyFilters() {
    let filtered = products;
    
    // Category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // Price filter
    if (currentPriceFilter !== 'all') {
        filtered = filtered.filter(p => {
            switch(currentPriceFilter) {
                case 'under-1000': return p.price < 1000;
                case '1000-5000': return p.price >= 1000 && p.price <= 5000;
                case '5000-20000': return p.price >= 5000 && p.price <= 20000;
                case 'above-20000': return p.price > 20000;
                default: return true;
            }
        });
    }
    
    displayedProducts = filtered;
    displayProducts(filtered);
}

// Filter by Rating
function filterRating() {
    // Get all checked rating checkboxes
    const checkedRatings = Array.from(document.querySelectorAll('.rating-filter input:checked'))
        .map(input => parseFloat(input.value));
    
    if (checkedRatings.length === 0) {
        displayProducts(displayedProducts);
        return;
    }
    
    const minRating = Math.min(...checkedRatings);
    const filtered = displayedProducts.filter(p => p.rating >= minRating);
    displayProducts(filtered);
}

// Sort Products
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...displayedProducts];
    
    switch(sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sorted.reverse();
            break;
    }
    
    displayProducts(sorted);
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(products);
        document.getElementById('sectionTitle').textContent = 'All Products';
        return;
    }
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filtered);
    document.getElementById('sectionTitle').textContent = `Search Results for "${searchTerm}"`;
}

// View Product Details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    const savings = product.originalPrice - product.price;
    
    alert(`
📱 ${product.name}

💰 Price: ₹${formatPrice(product.price)}
${product.originalPrice ? `\n💵 MRP: ₹${formatPrice(product.originalPrice)}\n💚 You Save: ₹${formatPrice(savings)} (${product.discount}% off)` : ''}

⭐ Rating: ${product.rating}/5 (${formatNumber(product.reviews)} reviews)

🛒 Click "Add to Cart" to purchase!

Full product page coming soon!
    `);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    saveCart();
    showNotification(`✓ ${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

// View Cart
function viewCart() {
    if (cart.length === 0) {
        alert('🛒 Your cart is empty!\n\nStart shopping to add items.');
        return;
    }
    
    const cartItems = cart.map((item, index) => 
        `${index + 1}. ${item.name}\n   ₹${formatPrice(item.price)}`
    ).join('\n\n');
    
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discount = cart.reduce((sum, item) => sum + (item.originalPrice ? item.originalPrice - item.price : 0), 0);
    const total = subtotal;
    
    alert(`
🛒 Your Shopping Cart (${cart.length} items)
━━━━━━━━━━━━━━━━━━━━━━━━━━

${cartItems}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal: ₹${formatPrice(subtotal)}
Discount: -₹${formatPrice(discount)}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Total: ₹${formatPrice(total)}

🎉 You saved ₹${formatPrice(discount)}!

Checkout page coming soon!
    `);
}

// Save & Load Cart
function saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Login Functions
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

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
        alert('❌ Please enter a valid 10-digit mobile number');
        return;
    }
    
    document.getElementById('displayPhone').textContent = '+91 ' + phoneNumber;
    document.getElementById('phoneStep').style.display = 'none';
    document.getElementById('otpStep').style.display = 'block';
    
    showNotification('✓ OTP sent to +91 ' + phoneNumber);
    console.log('Test OTP: 123456');
}

function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    
    if (otp.length !== 6) {
        alert('❌ Please enter a valid 6-digit OTP');
        return;
    }
    
    if (otp === '123456' || otp.length === 6) {
        const phoneNumber = document.getElementById('phoneNumber').value;
        currentUser = {
            phone: phoneNumber,
            name: 'User ' + phoneNumber.substr(-4)
        };
        
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateSignInButton();
        closeLogin();
        showNotification('✓ Successfully logged in!');
    } else {
        alert('❌ Invalid OTP. For testing, use: 123456');
    }
}

function resendOTP() {
    showNotification('✓ OTP resent successfully!');
    console.log('Test OTP: 123456');
}

function changeNumber() {
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
}

function updateSignInButton() {
    if (currentUser) {
        document.getElementById('signInBtn').innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>${currentUser.name}</span>
        `;
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10001;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLogin();
    }
}

// Initialize on load
window.onload = initializePage;

// Search on Enter key
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
