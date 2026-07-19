const isLogin = localStorage.getItem("isLogin");
const menu = document.getElementById("menu");

if (isLogin === "true") {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  menu.innerHTML = `
    <li><a href="index.html">Trang chủ</a></li>
    <li><a href="../products/products.html">Sản phẩm</a></li>
    <li><a href="../cart/cart.html">Giỏ hàng</a></li>
    <li>Xin chào, ${currentUser.fullname}</li>
    <li><a href="#" id="logout-link">Đăng xuất</a></li>
    <li><a href="#" id="delete-link">Xóa tài khoản</a></li>
  `;

  document.getElementById("logout-link").addEventListener("click", logout);
  document.getElementById("delete-link").addEventListener("click", deleteAccount);
}

function logout(event) {
  event.preventDefault();
  localStorage.setItem("isLogin", "false");
  localStorage.removeItem("currentUser");
  alert("Đăng xuất thành công!");
  window.location.reload();
}

function deleteAccount(event) {
  event.preventDefault();

  if (!confirm("Bạn có chắc muốn xóa tài khoản không?")) {
    return;
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem("users")) || [];

  users = users.filter((user) => user.email !== currentUser.email);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.removeItem("currentUser");
  localStorage.setItem("isLogin", "false");

  alert("Đã xóa tài khoản!");
  window.location.reload();
}
