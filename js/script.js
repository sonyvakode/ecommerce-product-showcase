// Products
const products = [
    {name:"Blue T-Shirt", category:"clothing", price:499, description:"Comfortable cotton t-shirt.", image:"assets/images/product1.jpg"},
    {name:"Headphones", category:"electronics", price:2499, description:"High-quality over-ear headphones.", image:"assets/images/product2.jpg"},
    {name:"Handmade Vase", category:"handicrafts", price:899, description:"Beautiful ceramic vase.", image:"assets/images/product3.jpg"},
    {name:"Red Hoodie", category:"clothing", price:1299, description:"Warm hoodie for winter.", image:"assets/images/product4.jpg"},
];

// DOM Elements
const gallery = document.getElementById("product-gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartItemsEl = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

// Cart
let cart = [];

// Display products
function displayProducts(list) {
    gallery.innerHTML = "";
    list.forEach(product=>{
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">₹${product.price}</p>
            <button>Add to Cart</button>
        `;
        card.querySelector("button").addEventListener("click",()=>addToCart(product));
        gallery.appendChild(card);
    });
}

// Filter
filterButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const category = btn.getAttribute("data-category");
        if(category==="all") displayProducts(products);
        else displayProducts(products.filter(p=>p.category===category));
    });
});

// Add to Cart
function addToCart(product){
    const existing = cart.find(p=>p.name===product.name);
    if(existing) existing.qty += 1;
    else cart.push({...product, qty:1});
    updateCart();
}

// Remove from Cart
function removeFromCart(product){
    cart = cart.filter(p=>p.name!==product.name);
    updateCart();
}

// Update Cart
function updateCart(){
    cartItemsEl.innerHTML="";
    let total=0;
    cart.forEach(item=>{
        total += item.price * item.qty;
        const li = document.createElement("li");
        li.innerHTML=`${item.name} x ${item.qty} - ₹${item.price*item.qty} 
        <button onclick="removeFromCart({name:'${item.name}'})">Remove</button>`;
        cartItemsEl.appendChild(li);
    });
    totalPriceEl.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Search
function searchProducts(){
    const val = searchInput.value.toLowerCase();
    displayProducts(products.filter(p=>p.name.toLowerCase().includes(val) || p.description.toLowerCase().includes(val)));
}

// Initial Display
displayProducts(products);
