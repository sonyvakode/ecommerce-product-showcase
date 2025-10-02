let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  const container = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const emptyCartEl = document.getElementById("empty-cart");
  container.innerHTML = "";
  if(cart.length === 0){
    emptyCartEl.style.display = "block";
    totalPriceEl.style.display = "none";
    return;
  } else {
    emptyCartEl.style.display = "none";
    totalPriceEl.style.display = "block";
  }

  let total = 0;
  cart.forEach((p, index) => {
    total += parseFloat(p.price.replace("$",""));
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  totalPriceEl.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  document.getElementById("cart-count").textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cart-count").textContent = cart.length;
  displayCart();
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if(cart.length === 0) alert("Cart is empty!");
  else alert("Checkout successful!"); 
});
