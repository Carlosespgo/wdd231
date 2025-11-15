import { displayCards } from "./cards.js";

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

const url = "./data/members.json";

const cards = document.querySelector('#cards');

async function getMembersData(jsonFile) {
    const response = await fetch(jsonFile);
    const data = await response.json();
    displayCards(data.members, cards);
}

getMembersData(url);