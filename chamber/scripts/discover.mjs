import areas from "../data/areas.mjs";

const displayCards = (areas, elementId) => {
    areas.forEach(area => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let image = document.createElement('figure');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let btn = document.createElement('button');

        title.textContent = `${area.name}`;

        let img = document.createElement('img');
        img.setAttribute('src', area.image);
        img.setAttribute('alt', `A brief view of ${area.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        image.appendChild(img);

        address.textContent = `${area.address}`;

        description.textContent = `${area.description}`;

        btn.textContent = 'Learn more';

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(btn);

        elementId.appendChild(card);
    });
}

const cards = document.querySelector('#cards');

displayCards(areas, cards);

const dialog = document.getElementById("visitDialog");
const messageArea = document.getElementById("visitMessage");
const closeBtn = document.getElementById("closeBtn");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - parseInt(lastVisit, 10);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message = "Back so soon! Awesome!";
    } else if (days === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${days} days ago.`;
    }
}
messageArea.textContent = message;
dialog.showModal();

closeBtn.addEventListener("click", () => {
    dialog.close();
});

localStorage.setItem("lastVisit", now);
