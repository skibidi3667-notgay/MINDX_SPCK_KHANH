const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user =>
        user.email === email &&
        user.password === password
    );

    if (user) {

        localStorage.setItem("isLogin", "true");

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Đăng nhập thành công!");

        window.location.href = "../index/index.html";

    } else {

        alert("Sai email hoặc mật khẩu!");

    }

});
