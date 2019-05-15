function ValidateForm() {
    let usr = document.forms["formlogin"]["username"].value;
    let pass = document.forms["formlogin"]["password"].value;
    if (usr == "") {
        document.getElementById("error-username").innerText = "Bạn phải nhập tên đăng nhập";
    }
    if (pass == "") {
        document.getElementById("error-pass").innerText = "Bạn phải nhập mật khẩu";
    }
    return false;
}