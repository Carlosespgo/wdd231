document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("worldcup-form");
    const dialog = document.getElementById("top3");

    const rounds = [
        { id: "round-of-16", matches: 8 },
        { id: "quarter-finals", matches: 4 },
        { id: "semi-finals", matches: 2 },
        { id: "final", matches: 1 }
    ];

    rounds.forEach(round => {
        const container = document.getElementById(round.id);
        for(let i=1; i<=round.matches; i++){

            const team1 = document.createElement("input");
            team1.type = "text";
            team1.name = `${round.id}-match${i}-team1`;
            team1.placeholder = "Equipo 1";

            const match = document.createElement("div");
            match.classList.add("match");

            const team2 = document.createElement("input");
            team2.type = "text";
            team2.name = `${round.id}-match${i}-team2`;
            team2.placeholder = "Equipo 2";

            match.appendChild(team1);
            match.appendChild(team2);

            container.appendChild(match);
        }
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(form);
        const values = Array.from(formData.values());

        const top3 = values.slice(-3);

        dialog.innerHTML = `
            <h2>Your Prediction!</h2>
            <div id="winner">Champion: ${top3[top3.length-1]}</div>
            <div class="top3">
                <div>1️⃣ ${top3[top3.length-1]}</div>
                <div>2️⃣ ${top3[top3.length-2]}</div>
            </div>
            <button id="close-modal">Cerrar</button>
        `;
        dialog.showModal();

        dialog.querySelector("#close-modal").addEventListener("click", () => {
            dialog.close();
        });
    });
});