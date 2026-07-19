const productGrid = document.getElementById("product-grid");
const filterBox = document.getElementById("category-filters");
const searchInput = document.getElementById("search-input");
const loading = document.getElementById("loading");
const emptyMessage = document.getElementById("empty-message");
const cartCount = document.getElementById("cart-count");
const totalProducts = document.getElementById("total-products");
const totalSold = document.getElementById("total-sold");

let products = [];
let activeCategory = "all";

function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}

function fakeFetchProducts() {
  loading.classList.add("show");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("products.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Không tải được dữ liệu sản phẩm");
          }
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    }, 650);
  });
}

function getCategories() {
  const uniqueCategories = [];

  products.forEach((product) => {
    const existed = uniqueCategories.find((item) => item.id === product.category);
    if (!existed) {
      uniqueCategories.push({
        id: product.category,
        name: product.categoryName
      });
    }
  });

  return [{ id: "all", name: "Tất cả" }, ...uniqueCategories];
}

function renderFilters() {
  filterBox.innerHTML = getCategories()
    .map((category) => {
      const activeClass = category.id === activeCategory ? "active" : "";
      return `<button class="${activeClass}" data-category="${category.id}">${category.name}</button>`;
    })
    .join("");
}

function createProductCard(product) {
  return `
    <article class="card">
      <img src="${product.img}" alt="${product.name}">
      <div class="card-body">
        <div class="card-top">
          <span class="tag">${product.categoryName}</span>
          <span class="rating">★ ${product.rating}</span>
        </div>
        <h3>${product.name}</h3>
        <div class="price-row">
          <span class="price">${formatMoney(product.price)}</span>
          <span class="old-price">${formatMoney(product.oldPrice)}</span>
        </div>
        <p class="meta">${product.gender} · Đã bán ${product.sold} · Còn ${product.stock}</p>
        <div class="card-actions">
          <a href="../details/product.html?id=${product.id}">Chi tiết</a>
          <button type="button" data-add="${product.id}">Thêm giỏ</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory;
    const matchKeyword = product.name.toLowerCase().includes(keyword) ||
      product.categoryName.toLowerCase().includes(keyword);

    return matchCategory && matchKeyword;
  });

  productGrid.innerHTML = filteredProducts.map(createProductCard).join("");
  emptyMessage.classList.toggle("show", filteredProducts.length === 0);
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const cart = getCart();
  const existed = cart.find((item) => item.id === productId);

  if (existed) {
    existed.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      color: product.colors[0],
      size: product.sizes[0],
      quantity: 1
    });
  }

  saveCart(cart);
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

filterBox.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderFilters();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-add]");
  if (!button) return;

  addToCart(button.dataset.add);
});

searchInput.addEventListener("input", renderProducts);

fakeFetchProducts()
  .then((data) => {
    products = data;
    totalProducts.textContent = products.length;
    totalSold.textContent = products.reduce((sum, product) => sum + product.sold, 0);
    renderFilters();
    renderProducts();
  })
  .catch((error) => {
    productGrid.innerHTML = `<p class="empty show">${error.message}</p>`;
  })
  .finally(() => {
    loading.classList.remove("show");
  });

updateCartCount();
