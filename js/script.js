// --- Product Data (40 Demo Products) ---
const products = [
    { id: 1, name: "Casual T-Shirt", category: "Clothing", price: 500, image: "assets/images/product1.jpg" },
    { id: 2, name: "Formal Shirt", category: "Clothing", price: 800, image: "assets/images/product2.jpg" },
    { id: 3, name: "Jeans", category: "Clothing", price: 1200, image: "assets/images/product3.jpg" },
    { id: 4, name: "Sneakers", category: "Clothing", price: 2000, image: "assets/images/product4.jpg" },
    { id: 5, name: "Sports Jacket", category: "Clothing", price: 2500, image: "assets/images/product5.jpg" },
    { id: 6, name: "Laptop", category: "Electronics", price: 45000, image: "assets/images/product6.jpg" },
    { id: 7, name: "Smartphone", category: "Electronics", price: 25000, image: "assets/images/product7.jpg" },
    { id: 8, name: "Headphones", category: "Electronics", price: 3000, image: "assets/images/product8.jpg" },
    { id: 9, name: "Smartwatch", category: "Electronics", price: 7000, image: "assets/images/product9.jpg" },
    { id: 10, name: "Bluetooth Speaker", category: "Electronics", price: 4000, image: "assets/images/product10.jpg" },
    { id: 11, name: "Handmade Vase", category: "Handicrafts", price: 1500, image: "assets/images/product11.jpg" },
    { id: 12, name: "Wooden Sculpture", category: "Handicrafts", price: 3500, image: "assets/images/product12.jpg" },
    { id: 13, name: "Decorative Lamp", category: "Handicrafts", price: 2200, image: "assets/images/product13.jpg" },
    { id: 14, name: "Handwoven Basket", category: "Handicrafts", price: 900, image: "assets/images/product14.jpg" },
    { id: 15, name: "Ceramic Plate Set", category: "Handicrafts", price: 2800, image: "assets/images/product15.jpg" },
    { id: 16, name: "Backpack", category: "Clothing", price: 1500, image: "assets/images/product16.jpg" },
    { id: 17, name: "Sunglasses", category: "Clothing", price: 1200, image: "assets/images/product17.jpg" },
    { id: 18, name: "Leather Jacket", category: "Clothing", price: 5500, image: "assets/images/product18.jpg" },
    { id: 19, name: "Sports Shoes", category: "Clothing", price: 2300, image: "assets/images/product19.jpg" },
    { id: 20, name: "Cap", category: "Clothing", price: 400, image: "assets/images/product20.jpg" },
    { id: 21, name: "Tablet", category: "Electronics", price: 18000, image: "assets/images/product21.jpg" },
    { id: 22, name: "Keyboard", category: "Electronics", price: 1500, image: "assets/images/product22.jpg" },
    { id: 23, name: "Gaming Mouse", category: "Electronics", price: 1200, image: "assets/images/product23.jpg" },
    { id: 24, name: "Monitor", category: "Electronics", price: 12000, image: "assets/images/product24.jpg" },
    { id: 25, name: "Camera", category: "Electronics", price: 30000, image: "assets/images/product25.jpg" },
    { id: 26, name: "Handmade Painting", category: "Handicrafts", price: 8000, image: "assets/images/product26.jpg" },
    { id: 27, name: "Clay Pot", category: "Handicrafts", price: 700, image: "assets/images/product27.jpg" },
    { id: 28, name: "Wall Hanging", category: "Handicrafts", price: 1300, image: "assets/images/product28.jpg" },
    { id: 29, name: "Woolen Carpet", category: "Handicrafts", price: 4500, image: "assets/images/product29.jpg" },
    { id: 30, name: "Handcrafted Mirror Frame", category: "Handicrafts", price: 3200, image: "assets/images/product30.jpg" },
    { id: 31, name: "Winter Sweater", category: "Clothing", price: 1800, image: "assets/images/product31.jpg" },
    { id: 32, name: "Traditional Kurta", category: "Clothing", price: 2200, image: "assets/images/product32.jpg" },
    { id: 33, name: "Denim Jacket", category: "Clothing", price: 3500, image: "assets/images/product33.jpg" },
    { id: 34, name: "Track Pants", category: "Clothing", price: 900, image: "assets/images/product34.jpg" },
    { id: 35, name: "Ethnic Saree", category: "Clothing", price: 4500, image: "assets/images/product35.jpg" },
    { id: 36, name: "Microwave", category: "Electronics", price: 12000, image: "assets/images/product36.jpg" },
    { id: 37, name: "Refrigerator", category: "Electronics", price: 35000, image: "assets/images/product37.jpg" },
    { id: 38, name: "Washing Machine", category: "Electronics", price: 28000, image: "assets/images/product38.jpg" },
    { id: 39, name: "Ceiling Fan", category: "Electronics", price: 4000, image: "assets/images/product39.jpg" },
    { id: 40, name: "Air Conditioner", category: "Electronics", price: 45000, image: "assets/images/product40.jpg" }
];

let cart = [];
let filteredProducts = products;

// --- Render Products ---
function renderProducts(list) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    list.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

// --- Filter by Category ---
function filterProducts(category) {
    if (category === "All") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }
    renderProducts(filteredProducts);
}

// --- Search ---
document.getElementById("search").addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const list = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    renderProducts(list);
});

// --- Add to Cart ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// --- Update Cart ---
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById("cart-total").textContent = total;
    document.getElementById("cart-count").textContent = cart.length;
}

// --- Initial Load ---
renderProducts(products);
