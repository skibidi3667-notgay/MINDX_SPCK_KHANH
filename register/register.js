const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const checkEmail = users.find(user => user.email === email);

    if (checkEmail) {
        alert("Email đã tồn tại!");
        return;
    }

    const newUser = {
        fullname: fullname,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    window.location.href = "../login/login.html";

});