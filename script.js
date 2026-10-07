// let arr = [];
// let players = [];
// let theircountry = [];
// let input = document.getElementById("name");
// let country = document.getElementById("country");
// let runs = document.getElementById("score");
// let sortRuns = document.getElementById("addbtn");

// sortRuns.addEventListener("click", function (e) {
//   e.preventDefault();
//   let playerName = input.value;
//   players.push(playerName);

//   let playerruns = Number(runs.value);
//   arr.push(playerruns);

//   let playerCountry = country.value;
//   theircountry.push(playerCountry);

//   arr.sort((a, b) => b - a);

//   console.log(arr);
//   console.log(players);

//   console.log(theircountry);

//   input.value = "";
//   runs.value = "";
//   country.value = "";
// });
// [
//   {
//   name: "Virat";
//   country: "India";
//   score: 30
// },
// {
//   name: "Virat";
//   country: "India";
//   score: 25
// },
// {
//   name: "Virat";
//   country: "India";
//   score: 30
// },

// ]
let form = document.getElementById("cricketForm");

let nameInput = document.getElementById("name");
let countryInput = document.getElementById("country");
let runsInput = document.getElementById("runs");

let scoreList = document.getElementById("scoreList");

let players = [];


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = nameInput.value;
    let country = countryInput.value;
    let runs = Number(runsInput.value);

    let player = {
        name: name,
        country: country,
        runs: runs
    };

    players.push(player);

    displayPlayers();

    nameInput.value = "";
    countryInput.value = "";
    runsInput.value = "";

});


function displayPlayers() {

    scoreList.innerHTML = "";

    players.forEach(function(player) {

        scoreList.innerHTML += `
            <div>
                <h2>${player.name}</h2>
                <p>Country: ${player.country}</p>
                <p>Runs: ${player.runs}</p>
            </div>
        `;

    });

}