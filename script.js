function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "admin123";

    if(password === correctPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainWebsite").style.display = "block";
    } else {
        document.getElementById("errorMsg").innerText = "Password salah!";
    }
}
