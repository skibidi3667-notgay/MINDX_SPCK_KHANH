const orderPage = document.getElementById("order-page");

const steps = [
  {
    title: "Người bán nhận đơn",
    description: "Shop đã nhận thông tin đặt hàng và đang kiểm tra sản phẩm."
  },
  {
    title: "Đóng gói đơn hàng",
    description: "Sản phẩm được kiểm tra size, màu sắc và đóng gói cẩn thận."
  },
  {
    title: "Giao cho đơn vị vận chuyển",
    description: "Đơn hàng đã rời kho và đang được bàn giao cho shipper."
  },
  {
    title: "Đang giao hàng",
    description: "Shipper đang vận chuyển đơn đến địa chỉ của bạn."
  },
  {
    title: "Giao hàng thành công",
    description: "Bạn đã nhận được đơn hàng. Cảm ơn bạn đã mua sắm tại KHANH."
  }
];

function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function getOrder() {
  return JSON.parse(localStorage.getItem("currentOrder"));
}

function saveOrder(order) {
  localStorage.setItem("currentOrder", JSON.stringify(order));
}

function renderEmpty() {
  orderPage.innerHTML = `
    <div class="empty-order">
      <h1>Chưa có đơn hàng</h1>
      <p>Bạn hãy thêm sản phẩm vào giỏ và nhấn mua ngay để tạo đơn.</p>
      <a href="../products/products.html">Mua sắm ngay</a>
    </div>
  `;
}

function renderOrder() {
  const order = getOrder();
  if (!order) {
    renderEmpty();
    return;
  }

  const currentStep = order.currentStep || 1;

  orderPage.innerHTML = `
    <section class="order-hero">
      <div>
        <span>Mã đơn ${order.id}</span>
        <h1>Theo dõi tiến trình đơn hàng</h1>
      </div>
      <div class="status-pill">${steps[currentStep - 1].title}</div>
    </section>

    <section class="order-layout">
      <div class="panel">
        <h2>Tiến trình xử lý</h2>
        <div class="timeline">
          ${steps.map((step, index) => {
            const stepNumber = index + 1;
            const statusClass = stepNumber < currentStep ? "done" : stepNumber === currentStep ? "active" : "";
            const icon = stepNumber < currentStep ? "✓" : stepNumber;

            return `
              <div class="step ${statusClass}">
                <div class="step-icon">${icon}</div>
                <div>
                  <h3>${step.title}</h3>
                  <p>${step.description}</p>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="actions">
          <button type="button" id="next-step">Cập nhật bước tiếp theo</button>
          <a class="link-btn" href="../products/products.html">Mua thêm</a>
        </div>
      </div>

      <aside class="panel">
        <h2>Thông tin đơn</h2>
        <div class="info-row"><span>Ngày đặt</span><strong>${order.createdAt}</strong></div>
        <div class="info-row"><span>Người nhận</span><strong>${order.customer.name}</strong></div>
        <div class="info-row"><span>Số điện thoại</span><strong>${order.customer.phone}</strong></div>
        <div class="info-row"><span>Địa chỉ</span><strong>${order.customer.address}</strong></div>
        <div class="info-row"><span>Phí vận chuyển</span><strong>${formatMoney(order.shipping)}</strong></div>
        <div class="info-row"><span>Tổng thanh toán</span><strong>${formatMoney(order.total)}</strong></div>

        <div class="order-items">
          ${order.items.map((item) => `
            <div class="order-item">
              <img src="${item.img}" alt="${item.name}">
              <div>
                <strong>${item.name}</strong>
                <p>${item.color} · ${item.size} · SL ${item.quantity}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </aside>
    </section>
  `;

  const nextButton = document.getElementById("next-step");
  nextButton.disabled = currentStep >= steps.length;
  nextButton.textContent = currentStep >= steps.length ? "Đơn đã hoàn tất" : "Cập nhật bước tiếp theo";

  nextButton.addEventListener("click", () => {
    order.currentStep = Math.min(currentStep + 1, steps.length);
    saveOrder(order);
    renderOrder();
  });
}

renderOrder();
