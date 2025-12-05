const hamBtn = document.getElementById("ham-btn");
const navBar = document.getElementById("nav-bar");

hamBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;