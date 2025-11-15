import { displayCards } from "./cards.js";

const url = "./data/members.json";

const filteredCards = document.querySelector('#filteredCards');

function getRandomMembers(array) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

async function getMembersData(jsonFile) {
    const response = await fetch(jsonFile);
    const data = await response.json();
    const eligible = data.members.filter(member => member.memLevel > 1);
    const selected = getRandomMembers(eligible);
    displayCards(selected, filteredCards);
}

getMembersData(url);