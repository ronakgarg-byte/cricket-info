let form = document.getElementById("cricketForm");

let nameInput = document.getElementById("name");
let countryInput = document.getElementById("country");
let runsInput = document.getElementById("runs");

let scoreList = document.getElementById("scoreList");

let players = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let playerName = nameInput.value;
    let playerCountry = countryInput.value;
    let playerRuns = Number(runsInput.value);

    let player = {
        name: playerName,
        country: playerCountry,
        runs: playerRuns
    };

    players.push(player);
    players.sort((a, b) => b.runs - a.runs);

    displayPlayers();

    nameInput.value = "";
    countryInput.value = "";
    runsInput.value = "";
});
function displayPlayers() {
    scoreList.innerHTML = "";

    players.forEach(function(player) {
        scoreList.innerHTML +=
        `<div class='record'><p>${player.name}</p><p>${player.country}</p><p>${player.runs}</p><\div>`;
    });
}