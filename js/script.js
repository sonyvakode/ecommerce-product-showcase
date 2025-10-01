// Products
const products = [
    {name:"Blue T-Shirt", category:"clothing", price:1999, description:"Comfortable cotton t-shirt.", image:"https://via.placeholder.com/200x150?text=Blue+T-Shirt"},
    {name:"Headphones", category:"electronics", price:4499, description:"High-quality over-ear headphones.", image:"https://via.placeholder.com/200x150?text=Headphones"},
    {name:"Handmade Vase", category:"handicrafts", price:2499, description:"Beautiful ceramic vase.", image:"https://via.placeholder.com/200x150?text=Vase"},
    {name:"Red Hoodie", category:"clothing", price:2999, description:"Warm hoodie for winter.", image:"https://via.placeholder.com/200x150?text=Red+Hoodie"},
];

// DOM Elements
const gallery = document.getElementById("product-gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalAddCart = document.getElementById("modal-add-cart");
const closeBtn = document.querySelector(".close");
const cartItemsEl = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

// Cart
let cart = [];
let currentProduct = null;

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
        card.querySelector("img").addEventListener("click",()=>openModal(product));
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

// Modal
function openModal(product){
    currentProduct = product;
    modal.style.display="block";
    modalImg.src=product.image;
    modalName.textContent=product.name;
    modalDesc.textContent=product.description;
    modalPrice.textContent=`₹${product.price}`;
}
closeBtn.addEventListener("click",()=>modal.style.display="none");
window.addEventListener("click",(e)=>{if(e.target===modal) modal.style.display="none"});
modalAddCart.addEventListener("click",()=>{addToCart(currentProduct); modal.style.display="none";});

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
        li.innerHTML=`${item.name} x ${item.qty} <button onclick="removeFromCart({name:'${item.name}'})">Remove</button>`;
        cartItemsEl.appendChild(li);
    });
    totalPriceEl.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Search
searchInput.addEventListener("input", ()=>{
    const val = searchInput.value.toLowerCase();
    displayProducts(products.filter(p=>p.name.toLowerCase().includes(val) || p.description.toLowerCase().includes(val)));
});

// Initial Display
displayProducts(products);
