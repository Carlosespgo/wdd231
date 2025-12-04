const hamBtn = document.getElementById("ham-btn");
const navBar = document.getElementById("nav-bar");

hamBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
});

const slides = document.querySelectorAll('.slide');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

forwardBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});


showSlide(currentIndex);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
