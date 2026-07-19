const detailRoot = document.getElementById("product-detail");
const productId = new URLSearchParams(window.location.search).get("id");

function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getSelectedProduct(product) {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    color: document.getElementById("color").value,
    size: document.getElementById("size").value,
    quantity: Number(document.getElementById("quantity").value) || 1
  };
}

function addToCart(product) {
  const selectedProduct = getSelectedProduct(product);
  const cart = getCart();
  const existed = cart.find((item) =>
    item.id === selectedProduct.id &&
    item.color === selectedProduct.color &&
    item.size === selectedProduct.size
  );

  if (existed) {
    existed.quantity += selectedProduct.quantity;
  } else {
    cart.push(selectedProduct);
  }

  saveCart(cart);
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

function buyNow(product) {
  addToCart(product);
  window.location.href = "../cart/cart.html";
}

function renderProduct(product) {
  document.title = `${product.name} | KHANH FASHION`;

  detailRoot.innerHTML = `
    <p class="breadcrumb"><a href="../products/products.html">Sản phẩm</a> / ${product.name}</p>
    <section class="detail-layout">
      <div class="image-box">
        <img src="${product.img}" alt="${product.name}">
      </div>

      <section>
        <div class="info-panel">
          <span class="tag">${product.categoryName}</span>
          <h1>${product.name}</h1>
          <p class="rating">★ ${product.rating} · Đã bán ${product.sold} · Còn ${product.stock} sản phẩm</p>
          <div class="price-row">
            <span class="price">${formatMoney(product.price)}</span>
            <span class="old-price">${formatMoney(product.oldPrice)}</span>
          </div>
          <p class="description">${product.description}</p>

          <ul class="features">
            ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>

          <div class="option-grid">
            <div>
              <label for="color">Màu sắc</label>
              <select id="color">
                ${product.colors.map((color) => `<option>${color}</option>`).join("")}
              </select>
            </div>
            <div>
              <label for="size">Kích cỡ</label>
              <select id="size">
                ${product.sizes.map((size) => `<option>${size}</option>`).join("")}
              </select>
            </div>
            <div>
              <label for="material">Chất liệu</label>
              <input id="material" value="${product.material}" readonly>
            </div>
            <div>
              <label for="quantity">Số lượng</label>
              <input id="quantity" type="number" value="1" min="1" max="${product.stock}">
            </div>
          </div>

          <div class="actions">
            <button class="cart-btn" id="add-cart" type="button">Thêm vào giỏ</button>
            <button class="buy-btn" id="buy-now" type="button">Mua ngay</button>
          </div>
          <a class="outline-link" href="../products/products.html">Quay lại danh sách</a>
        </div>

        <div class="review-panel">
          <h2>Đánh giá khách hàng</h2>
          ${product.reviews.map((review) => `
            <div class="review">
              <strong>${review.name}</strong>
              <span>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
              <p>${review.comment}</p>
            </div>
          `).join("")}
        </div>
      </section>
    </section>
  `;

  document.getElementById("add-cart").addEventListener("click", () => addToCart(product));
  document.getElementById("buy-now").addEventListener("click", () => buyNow(product));
}

fetch("../products/products.json")
  .then((response) => response.json())
  .then((products) => {
    const product = products.find((item) => item.id === productId);

    if (!product) {
      detailRoot.innerHTML = `
        <div class="message">
          <h1>Không tìm thấy sản phẩm</h1>
          <p>Sản phẩm có thể đã bị xóa hoặc đường dẫn không đúng.</p>
          <a class="outline-link" href="../products/products.html">Về trang sản phẩm</a>
        </div>
      `;
      return;
    }

    renderProduct(product);
  })
  .catch(() => {
    detailRoot.innerHTML = `
      <div class="message">
        <h1>Lỗi tải dữ liệu</h1>
        <p>Vui lòng thử lại sau.</p>
      </div>
    `;
  });
