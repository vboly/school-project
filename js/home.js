document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("home-text").textContent = "Welcome, " + localStorage.getItem("LoginLIST") + "!"
    document.getElementById('logout-but').addEventListener('click', (e) => {
        window.location.replace('index.html');
        localStorage.removeItem("LoginLIST")
    });
    document.getElementById('download-but').addEventListener('click', (e) => {
        window.location.replace('assets/software.exe');
    });
});