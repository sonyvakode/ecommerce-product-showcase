# 🛒 E-Commerce Website

A modern, responsive e-commerce platform built with HTML, CSS, and JavaScript featuring 170+ products across multiple categories with Indian pricing.

## 📋 Table of Contents

- [Features](#features)
- [Product Categories](#product-categories)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [Features Details](#features-details)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **170+ Products** with high-quality images from Unsplash
- **Festive Discount Popup** - Diwali/Festival offers on page load
- **12 Product Categories**: Mobiles, Electronics, Fashion, Home & Furniture, Appliances, Beauty, Kids, Sports, Books
- **Advanced Filtering**:
  - Filter by category
  - Filter by price range
  - Filter by ratings
  - Sort by price (low to high, high to low)
  - Sort by ratings
- **Shopping Cart System**:
  - Add/Remove products
  - Real-time cart updates
  - View cart summary
  - Total savings calculation
- **User Authentication**:
  - Mobile OTP login system
  - Session management
- **Responsive Design**: Mobile, Tablet, Desktop optimized
- **Search Functionality**: Search products by name or category
- **Indian Pricing**: All prices in ₹ (INR)
- **Discount Badges**: Clear discount percentages on products
- **Session Persistence**: Cart data saved in browser

## 📦 Product Categories

| Category | Products | Price Range |
|----------|----------|-------------|
| **Mobiles** | 8 | ₹14,999 - ₹19,999 |
| **Electronics** | 14 | ₹599 - ₹38,990 |
| **Women's Fashion** | 41 | ₹299 - ₹1,499 |
| **Men's Fashion** | 34 | ₹399 - ₹2,999 |
| **Girls Clothing** | 23 | ₹299 - ₹899 |
| **Boys Clothing** | 22 | ₹399 - ₹999 |
| **Kids Products** | 25 | ₹249 - ₹3,999 |
| **Home & Furniture** | 16 | ₹499 - ₹22,999 |
| **Appliances** | 14 | ₹599 - ₹12,999 |
| **Beauty Products** | 14 | ₹299 - ₹1,499 |
| **Sports & Fitness** | 16 | ₹199 - ₹1,499 |
| **Books** | 16 | ₹199 - ₹2,499 |

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional, for local testing)

### Setup

1. **Clone or Download** the repository:
```bash
git clone https://github.com/yourusername/ecommerce-website.git
cd ecommerce-website
```

2. **File Structure**:
```
ecommerce-website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

3. **Open in Browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # PHP
     php -S localhost:8000
     
     # Node.js (with http-server)
     npx http-server
     ```

4. **Access**:
   - Open browser and navigate to `http://localhost:8000` (if using server)
   - Or directly open `index.html`

## 📁 File Structure

### index.html
Main HTML structure containing:
- Navigation header
- Category sidebar
- Product grid
- Shopping cart modal
- Login modal
- Festival discount popup

### styles.css
Complete styling including:
- Responsive grid layout
- Product cards styling
- Modal designs
- Navigation styles
- Mobile responsive breakpoints
- Popup animations

### script.js
JavaScript functionality:
- Product data array (170+ products)
- Cart management functions
- Filter and sort logic
- Search functionality
- User authentication (OTP simulation)
- Session storage management
- Popup timer system

## 💻 Usage

### For Customers

1. **Browse Products**:
   - Scroll through all products or select a category
   - Use filters to narrow down choices
   - Sort by price or ratings

2. **Add to Cart**:
   - Click "Add to Cart" button on any product
   - View notification of added item
   - Cart count updates automatically

3. **View Cart**:
   - Click cart icon in header
   - See all added items with prices
   - View total savings
   - Remove unwanted items

4. **Login** (Optional):
   - Click "Sign In" button
   - Enter 10-digit mobile number
   - Enter OTP: `123456` (demo mode)
   - Access personalized features

### For Developers

#### Adding New Products

Edit `script.js` and add to the `products` array:

```javascript
{
    id: 291,
    name: "Product Name",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    category: "mobiles", // or fashion, electronics, etc.
    image: "https://images.unsplash.com/photo-xxxxx?w=500&q=80",
    rating: 4.5,
    reviews: 1000
}
```

#### Modifying Categories

Update category filters in the `filterCategory()` function:

```javascript
const categoryNames = {
    'all': 'All Products',
    'yourcategory': 'Your Category Name',
    // ... add more
};
```

#### Customizing Popup

Edit the popup content in `index.html`:

```html
<div id="festivalPopup" class="festival-popup">
    <!-- Your custom popup content -->
</div>
```

Adjust popup timing in `script.js`:

```javascript
setTimeout(() => {
    document.getElementById('festivalPopup').style.display = 'block';
}, 2000); // Change delay (in milliseconds)
```

## ⚙️ Configuration

### Popup Settings

Change popup display duration in `script.js`:

```javascript
// Auto-close popup after 10 seconds
setTimeout(() => {
    closePopup();
}, 10000); // Change duration here
```

### OTP Settings

For production, replace demo OTP with actual API:

```javascript
function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    
    // Replace with your API call
    if (otp === '123456') {
        // Success logic
    }
}
```

### Price Filters

Modify price ranges in `applyFilters()`:

```javascript
switch(currentPriceFilter) {
    case 'under-1000': return p.price < 1000;
    case '1000-5000': return p.price >= 1000 && p.price <= 5000;
    // Add custom ranges
}
```

## 🎨 Features Details

### Festival Discount Popup
- Auto-displays 2 seconds after page load
- Shows current festival offers
- Can be closed manually or auto-closes after 10 seconds
- Only shows once per session

### Search System
- Real-time search across product names
- Category-based search
- Case-insensitive matching
- Enter key support

### Cart Management
- Session storage persistence
- Automatic price calculations
- Total savings display
- Remove items functionality
- Empty cart handling

### Responsive Design
Breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript (ES6+)**: Arrow functions, Template literals, Array methods
- **Unsplash API**: High-quality product images
- **Session Storage**: Cart persistence

## 📱 Mobile Optimization

- Touch-friendly buttons
- Responsive images
- Optimized layout for small screens
- Fast loading times
- Lazy loading images

## 🔒 Security Notes

- All prices are display-only (no payment integration)
- OTP system is demo mode (not secure for production)
- No sensitive data stored
- Session storage used (clears on browser close)

## 🚧 Future Enhancements

- [ ] Payment gateway integration
- [ ] Real OTP system via SMS
- [ ] User registration & profiles
- [ ] Order history
- [ ] Product reviews system
- [ ] Wishlist functionality
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Product comparison
- [ ] Size/color variants

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for product images
- [Font Awesome](https://fontawesome.com) for icons (if used)
- All contributors who helped improve this project

## 📞 Support

For support, email sonyvakode648@gmail.com

---

