const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) {
    alert("Sai email hoặc mật khẩu!");
    return;
  }

  localStorage.setItem("isLogin", "true");
  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Đăng nhập thành công!");
  window.location.href = "../index/index.html";
});
