// Products Data with Indian Prices - Affordable & Realistic
const products = [
    // Mobiles - Affordable Range
    { id: 1, name: "Redmi Note 13 Pro", price: 16999, originalPrice: 21999, discount: 23, category: "mobiles", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", rating: 4.4, reviews: 8500 },
    { id: 2, name: "Samsung Galaxy M34", price: 14999, originalPrice: 19999, discount: 25, category: "mobiles", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", rating: 4.3, reviews: 6200 },
    { id: 3, name: "Realme 11 Pro 5G", price: 18999, originalPrice: 24999, discount: 24, category: "mobiles", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", rating: 4.5, reviews: 4800 },
    
    // Electronics - Budget Friendly
    { id: 4, name: "HP 15s Laptop Core i3", price: 32990, originalPrice: 42990, discount: 23, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", rating: 4.2, reviews: 3400 },
    { id: 5, name: "boAt Rockerz 450 Headphones", price: 1299, originalPrice: 2990, discount: 57, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", rating: 4.1, reviews: 12000 },
    { id: 6, name: "Lenovo IdeaPad Slim 3", price: 38990, originalPrice: 49990, discount: 22, category: "electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 4.3, reviews: 2100 },
    
    // Men's Clothing - Affordable Fashion
    { id: 7, name: "Men's Casual Shirt Blue", price: 499, originalPrice: 1299, discount: 62, category: "fashion", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400", rating: 4.2, reviews: 1800 },
    { id: 8, name: "Men's Formal Shirt White", price: 599, originalPrice: 1499, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", rating: 4.3, reviews: 2200 },
    { id: 9, name: "Men's Denim Jeans", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", rating: 4.4, reviews: 3100 },
    { id: 10, name: "Men's T-Shirt Pack of 3", price: 599, originalPrice: 1299, discount: 54, category: "fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", rating: 4.1, reviews: 4500 },
    { id: 11, name: "Men's Sports Tracksuit", price: 899, originalPrice: 2499, discount: 64, category: "fashion", image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400", rating: 4.3, reviews: 1600 },
    { id: 12, name: "Men's Polo T-Shirt", price: 449, originalPrice: 999, discount: 55, category: "fashion", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400", rating: 4.2, reviews: 2800 },
    
    // Women's Clothing - Trendy & Affordable
    { id: 13, name: "Women's Cotton Kurti", price: 399, originalPrice: 999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400", rating: 4.4, reviews: 5200 },
    { id: 14, name: "Women's Palazzo Set", price: 649, originalPrice: 1499, discount: 57, category: "fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400", rating: 4.3, reviews: 3800 },
    { id: 15, name: "Women's Saree with Blouse", price: 799, originalPrice: 1999, discount: 60, category: "fashion", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400", rating: 4.5, reviews: 2900 },
    { id: 16, name: "Women's Jeans Skinny Fit", price: 699, originalPrice: 1799, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400", rating: 4.2, reviews: 4100 },
    { id: 17, name: "Women's Top & Skirt Set", price: 749, originalPrice: 1899, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400", rating: 4.4, reviews: 2600 },
    { id: 18, name: "Women's Ethnic Dress", price: 899, originalPrice: 2299, discount: 61, category: "fashion", image: "https://images.unsplash.com/photo-1612336307429-8e844c27e481?w=400", rating: 4.3, reviews: 3300 },
    
    // Kids Clothing - Boys & Girls
    { id: 19, name: "Boys Cotton T-Shirt Pack of 5", price: 599, originalPrice: 1499, discount: 60, category: "kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400", rating: 4.3, reviews: 2400 },
    { id: 20, name: "Boys Denim Shorts", price: 399, originalPrice: 999, discount: 60, category: "kids", image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=400", rating: 4.2, reviews: 1800 },
    { id: 21, name: "Boys Sports Combo Set", price: 749, originalPrice: 1899, discount: 61, category: "kids", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400", rating: 4.4, reviews: 1500 },
    { id: 22, name: "Girls Party Dress Pink", price: 699, originalPrice: 1799, discount: 61, category: "kids", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400", rating: 4.5, reviews: 2100 },
    { id: 23, name: "Girls Frock with Leggings", price: 549, originalPrice: 1399, discount: 61, category: "kids", image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400", rating: 4.3, reviews: 3200 },
    { id: 24, name: "Girls Ethnic Kurti Set", price: 499, originalPrice: 1299, discount: 62, category: "kids", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7fb4c0?w=400", rating: 4.4, reviews: 1900 },
    { id: 25, name: "Kids Unisex Jacket", price: 899, originalPrice: 2299, discount: 61, category: "kids", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e4?w=400", rating: 4.2, reviews: 1600 },
    
    // Home & Furniture - Budget Options
    { id: 26, name: "LED TV 32 inch Smart", price: 12999, originalPrice: 18999, discount: 32, category: "home", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400", rating: 4.2, reviews: 2800 },
    { id: 27, name: "Study Table Wooden", price: 3999, originalPrice: 7999, discount: 50, category: "home", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400", rating: 4.1, reviews: 1200 },
    { id: 28, name: "Bean Bag Chair", price: 1499, originalPrice: 3999, discount: 63, category: "home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400", rating: 4.3, reviews: 1800 },
    
    // Appliances - Essential Items
    { id: 29, name: "Electric Kettle 1.5L", price: 599, originalPrice: 1299, discount: 54, category: "appliances", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400", rating: 4.2, reviews: 3500 },
    { id: 30, name: "Mixer Grinder 500W", price: 1899, originalPrice: 3999, discount: 53, category: "appliances", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400", rating: 4.3, reviews: 2100 },
    { id: 31, name: "Iron Press 1000W", price: 699, originalPrice: 1499, discount: 53, category: "appliances", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400", rating: 4.1, reviews: 4200 },
    
    // Beauty Products
    { id: 32, name: "Lakme Face Wash Combo", price: 399, originalPrice: 799, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", rating: 4.3, reviews: 5600 },
    { id: 33, name: "Maybelline Lipstick Set", price: 599, originalPrice: 1199, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", rating: 4.4, reviews: 4800 },
    { id: 34, name: "Hair Oil Combo Pack", price: 299, originalPrice: 599, discount: 50, category: "beauty", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400", rating: 4.2, reviews: 3200 },
    
    // Sports & Fitness
    { id: 35, name: "Yoga Mat 6mm", price: 499, originalPrice: 999, discount: 50, category: "sports", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", rating: 4.3, reviews: 2800 },
    { id: 36, name: "Skipping Rope", price: 199, originalPrice: 499, discount: 60, category: "sports", image: "https://images.unsplash.com/photo-1601925260559-2cfb76e08e4f?w=400", rating: 4.1, reviews: 1900 },
    { id: 37, name: "Gym Bag", price: 699, originalPrice: 1499, discount: 53, category: "sports", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", rating: 4.2, reviews: 1500 },
    
    // Books
    { id: 38, name: "Rich Dad Poor Dad", price: 299, originalPrice: 450, discount: 34, category: "books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", rating: 4.8, reviews: 8900 },
    { id: 39, name: "Atomic Habits", price: 349, originalPrice: 599, discount: 42, category: "books", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400", rating: 4.9, reviews: 12000 },
    { id: 40, name: "The Psychology of Money", price: 279, originalPrice: 450, discount: 38, category: "books", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", rating: 4.7, reviews: 7800 }
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

// Display Products
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No products found.</p>';
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

// Format Price
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

// Format Number
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-list li').forEach(li => {
        li.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
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
    
    document.getElementById('sectionTitle').textContent = categoryNames[category] || 'All Products';
}

// Filter by Price
function filterPrice(range) {
    currentPriceFilter = range;
    applyFilters();
}

// Apply Filters
function applyFilters() {
    let filtered = products;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
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

// View Product
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const savings = product.originalPrice - product.price;
    alert(`📱 ${product.name}\n\n💰 Price: ₹${formatPrice(product.price)}\n💵 MRP: ₹${formatPrice(product.originalPrice)}\n💚 You Save: ₹${formatPrice(savings)} (${product.discount}% off)\n\n⭐ Rating: ${product.rating}/5\n\n🛒 Click "Add to Cart" to purchase!`);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    cart.push(product);
    updateCartCount();
    saveCart();
    showNotification(`✓ ${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) {
        countEl.textContent = cart.length;
    }
}

// View Cart
function viewCart() {
    const modal = document.getElementById('cartModal');
    const cartList = document.getElementById('cartItemsList');
    
    if (!modal || !cartList) {
        alert('Cart feature is loading...');
        return;
    }
    
    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p style="font-size: 18px; margin-bottom: 10px;">Your cart is empty!</p>
                <p>Start shopping to add items.</p>
            </div>
        `;
        document.getElementById('cartSubtotal').textContent = '₹0';
        document.getElementById('cartSavings').textContent = '₹0';
        document.getElementById('cartTotal').textContent = '₹0';
    } else {
        cartList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${formatPrice(item.price)}</div>
                    ${item.originalPrice ? `<div style="font-size: 12px; color: #666;">You save: ₹${formatPrice(item.originalPrice - item.price)}</div>` : ''}
                </div>
                <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `).join('');
        
        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        const discount = cart.reduce((sum, item) => sum + (item.originalPrice ? item.originalPrice - item.price : 0), 0);
        
        document.getElementById('cartSubtotal').textContent = '₹' + formatPrice(subtotal);
        document.getElementById('cartSavings').textContent = '₹' + formatPrice(discount);
        document.getElementById('cartTotal').textContent = '₹' + formatPrice(subtotal);
    }
    
    modal.style.display = 'block';
}

// Close Cart Modal
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Remove from Cart
function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateCartCount();
    saveCart();
    showNotification(`🗑️ ${removedItem.name} removed!`);
    viewCart();
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`🎉 Checkout!\n\nTotal: ₹${formatPrice(total)}\n\nCheckout page coming soon!`);
    closeCartModal();
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
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('otpInput').value = '';
}

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
        alert('❌ Please enter valid 10-digit mobile number');
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
        alert('❌ Please enter valid 6-digit OTP');
        return;
    }
    
    if (otp === '123456' || otp.length === 6) {
        const phoneNumber = document.getElementById('phoneNumber').value;
        currentUser = {
            phone: phoneNumber,
            name: 'User'
        };
        
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateSignInButton();
        closeLogin();
        showNotification('✓ Logged in successfully!');
    } else {
        alert('❌ Invalid OTP. Use: 123456');
    }
}

function resendOTP() {
    showNotification('✓ OTP resent!');
    console.log('Test OTP: 123456');
}

function changeNumber() {
    document.getElementById('phoneStep').style.display = 'block';
    document.getElementById('otpStep').style.display = 'none';
}

function updateSignInButton() {
    const btn = document.getElementById('signInBtn');
    if (currentUser && btn) {
        btn.querySelector('span:last-child').textContent = currentUser.name;
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: #ff9f00;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 10001;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2500);
}

// Close modals on outside click
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const cartModal = document.getElementById('cartModal');
    
    if (event.target === loginModal) {
        closeLogin();
    }
    if (event.target === cartModal) {
        closeCartModal();
    }
}

// Initialize
window.onload = initializePage;

// Search on Enter
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
