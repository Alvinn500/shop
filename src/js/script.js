let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
  currentYearElement.innerText = currentYear;
} else {
  console.error("Element with ID 'currentYear' not found.");
}
// ==================================================================

const close = document.querySelector("#close");
close.addEventListener("click", () => {
  document.querySelector(".aside").classList.add("close");
});

const navCart = document.querySelector("#cart");
navCart.addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("close");
});

// ==================================================================
const addToCartButtons = document.querySelectorAll(".card-cart");
const cartItemsContainer = document.querySelector("#cart-items");
const cartTotal = document.querySelector(".cart-total");
const totalOrder = document.querySelector(".total-order");
const clearCartButton = document.querySelector(".clear-cart-btn");
let totalO = 0;
let totalPrice = 0;

let cart = [];

function addToCart(e) {
  const button = e.target;
  const product = button.parentElement.parentElement.parentElement;
  const productName = product.querySelector(".card-title h3").innerText;
  const productPrice = product.querySelector(".card-price h3").innerText;
  const productImg = product.querySelector(".card-img img").src;

  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item");
  // cartItem.innerText = `${item.name} - ${item.price}`;
  cartItem.innerHTML = `
    <div class="cart-aside">
      <div class="cart-img">
        <img src="${productImg}" alt="product" />
        </div>
        <div class="cart-info">
        <h3 class="cart-title">${productName}</h3>
        <h3 class="cart-price">${productPrice}</h3>
        </div>
        </div>`;
  cartItemsContainer.appendChild(cartItem);

  totalO += 1;
  totalOrder.innerText = totalO;
  totalPrice += parseFloat(productPrice.replace("$", ""));
  cartTotal.innerText = `$${totalPrice.toFixed(2)}`;
}

function clearCart() {
  cartItemsContainer.innerHTML = "";
  totalO = 0;
  totalOrder.innerText = totalO;
  cartTotal.innerText = "$0.00";
}

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

clearCartButton.addEventListener("click", clearCart);
