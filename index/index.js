const isLogin = localStorage.getItem("isLogin");

const menu = document.getElementById("menu");

if (isLogin === "true") {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    menu.innerHTML = `
        <li><a href="#">Trang chủ</a></li>
        <li>Xin chào, ${currentUser.fullname}</li>
        <li><a href="#" onclick="logout()">Đăng xuất</a></li>
        <li><a href="#" onclick="deleteAccount()">Xóa tài khoản</a></li>
    `;

}

function logout(){

    localStorage.setItem("isLogin","false");

    localStorage.removeItem("currentUser");

    alert("Đăng xuất thành công!");

    window.location.reload();

}

function deleteAccount(){

    if(!confirm("Bạn có chắc muốn xóa tài khoản không?")){
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users = users.filter(user => user.email !== currentUser.email);

    localStorage.setItem("users",JSON.stringify(users));

    localStorage.removeItem("currentUser");

    localStorage.setItem("isLogin","false");

    alert("Đã xóa tài khoản!");

    window.location.reload();

}