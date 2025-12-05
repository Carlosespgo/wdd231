document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".Qteams > div");
    const buttons = document.querySelectorAll(".buttons button");

    const infoBox = document.createElement("div");
    infoBox.classList.add("info-box");

    let total = 0;
    let confInfo = "";

    sections.forEach(section => {
        const count = section.querySelectorAll("li").length;
        total += count;
        confInfo += `<strong>${section.id.toUpperCase()}:</strong> ${count} teams<br>`;
    });

    infoBox.innerHTML = `
        <h2>Team Information</h2>
        <p>Total: <strong>${total}</strong> qualified teams.</p>
        <p>${confInfo}</p>
        <p><em>Click on a confederation to see its teams.</em></p>
    `;

    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.parentNode.insertBefore(infoBox, buttonsContainer);

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.textContent.toLowerCase();

            infoBox.style.display = "none";
            sections.forEach(sec => sec.style.display = "none");

            document.getElementById(id).style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".players-container");
    const btnBack = document.getElementById("back");
    const btnForward = document.getElementById("forward");

    const response = await fetch("./data/players.json");
    const data = await response.json();
    const players = data.players;

    players.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("player-card");

        card.innerHTML = `
            <img src="${player.portrait}" alt="${player.name}">
            <div class="player-info">
                <h3>${player.name}</h3>
                <p>${player.team}</p>
                <p>Cups Played: ${player.cupsPlayed}</p>
            </div>
        `;

        container.appendChild(card);
    });

    const scrollAmount = 250;

    btnForward.addEventListener("click", () => {
        container.scrollLeft += scrollAmount;
    });

    btnBack.addEventListener("click", () => {
        container.scrollLeft -= scrollAmount;
    });
});