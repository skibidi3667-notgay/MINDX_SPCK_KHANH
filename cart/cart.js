const cartList = document.getElementById("cart-list");
const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");
const checkoutForm = document.getElementById("checkout-form");

function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function calculateSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderSummary(cart) {
  const subtotal = calculateSubtotal(cart);
  const shipping = subtotal > 0 ? 30000 : 0;
  const total = subtotal + shipping;

  subtotalElement.textContent = formatMoney(subtotal);
  shippingElement.textContent = formatMoney(shipping);
  totalElement.textContent = formatMoney(total);
}

function renderCart() {
  const cart = getCart();

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart">
        <h2>Giỏ hàng đang trống</h2>
        <p>Hãy chọn vài sản phẩm trước khi thanh toán.</p>
        <a href="../products/products.html">Tiếp tục mua sắm</a>
      </div>
    `;
    checkoutForm.querySelector("button").disabled = true;
    renderSummary(cart);
    return;
  }

  checkoutForm.querySelector("button").disabled = false;
  cartList.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>Màu: ${item.color} · Size: ${item.size}</p>
        <span class="price">${formatMoney(item.price)}</span>
        <div class="quantity">
          <button type="button" data-action="minus" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="plus" data-index="${index}">+</button>
        </div>
      </div>
      <button class="remove-btn" type="button" data-action="remove" data-index="${index}">Xóa</button>
    </article>
  `).join("");

  renderSummary(cart);
}

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const cart = getCart();
  const index = Number(button.dataset.index);
  const action = button.dataset.action;

  if (action === "plus") {
    cart[index].quantity += 1;
  }

  if (action === "minus") {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }

  if (action === "remove") {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cart = getCart();
  if (cart.length === 0) return;

  const subtotal = calculateSubtotal(cart);
  const shipping = 30000;
  const order = {
    id: "KF" + Date.now(),
    createdAt: new Date().toLocaleString("vi-VN"),
    customer: {
      name: document.getElementById("customer-name").value.trim(),
      phone: document.getElementById("customer-phone").value.trim(),
      address: document.getElementById("customer-address").value.trim()
    },
    items: cart,
    subtotal,
    shipping,
    total: subtotal + shipping,
    currentStep: 1
  };

  localStorage.setItem("currentOrder", JSON.stringify(order));
  localStorage.removeItem("cart");
  window.location.href = "../order/order.html";
});

renderCart();
