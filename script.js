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
let players = [];

let input = document.getElementById("name");
let country = document.getElementById("country");
let runs = document.getElementById("score");
let addBtn = document.getElementById("addbtn");

addBtn.addEventListener("click", function () {
  let playerName = input.value.trim();
  let playerCountry = country.value;
  let playerScore = Number(runs.value);

  if (playerName === "" || playerCountry === "" || runs.value.trim() === "") {
    alert("Name, country aur valid score bharo");
    return;
  }

  let player = {
    name: playerName,
    country: playerCountry,
    score: playerScore,
  };

  players.push(player);
  players.sort((a, b) => b.score - a.score);

  console.log(players);
  let results = document.getElementById("results");

results.textContent = "";

players.forEach(function (player) {
  let p = document.createElement("p");

  p.textContent =
    player.name + " - " + player.country + " - " + player.score;

  results.appendChild(p);
});

  input.value = "";
  runs.value = "";
});
