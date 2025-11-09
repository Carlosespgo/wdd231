const navbutton = document.querySelector('#ham-btn');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show')
    navBar.classList.toggle('show')
});

const navBar = document.querySelector('#nav-bar');

const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(lastModifiedDate)}`;

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.remove("grid");
	display.classList.add("list");
});