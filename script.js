// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// =========================
// FORM ĐĂNG KÝ
// =========================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullname = document.getElementById("fullname").value;

    alert(
        "Đăng ký thành công!\n\n" +
        "Học viên: " + fullname
    );

});


// =========================
// NÚT NHẬP LẠI
// =========================

registerForm.addEventListener("reset", function (event) {

    const confirmReset = confirm(
        "Bạn có muốn nhập lại thông tin không?"
    );

    if (!confirmReset) {
        event.preventDefault();
    }

});