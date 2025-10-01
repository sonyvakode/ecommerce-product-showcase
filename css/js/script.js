// Product data
const products = [
    {
        name: "Blue T-Shirt",
        category: "clothing",
        price: "$25",
        description: "Comfortable cotton t-shirt.",
        image: "assets/images/product1.jpg"
    },
    {
        name: "Headphones",
        category: "electronics",
        price: "$60",
        description: "High-quality over-ear headphones.",
        image: "assets/images/product2.jpg"
    },
    {
        name: "Handmade Vase",
        category: "handicrafts",
        price: "$30",
        description: "Beautiful ceramic vase made by artisans.",
        image: "assets/images/product3.jpg"
    },
    {
        name: "Red Hoodie",
        category: "clothing",
        price: "$40",
        description: "Warm and cozy hoodie for winter.",
        image: "assets/images/product4.jpg"
    },
];

// Select elements
const gallery = document.getElementById("product-gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close");

// Display products
function displayProducts(productsArray) {
    gallery.innerHTML = "";
    productsArray.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;
        // Modal click
        card.querySelector("img").addEventListener("click", () => {
            openModal(product);
        });
        gallery.appendChild(card);
    });
}

// Filter products
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        if (category === "all") {
            displayProducts(products);
        } else {
            displayProducts(products.filter(p => p.category === category));
        }
    });
});

// Modal functions
function openModal(product) {
    modal.style.display = "block";
    modalImg.src = product.image;
    modalName.textContent = product.name;
    modalDesc.textContent = product.description;
    modalPrice.textContent = product.price;
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Initial display
displayProducts(products);
