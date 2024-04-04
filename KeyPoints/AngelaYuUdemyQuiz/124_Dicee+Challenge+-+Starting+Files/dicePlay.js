const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

const roll1 = Math.floor(Math.random() * 6) + 1;
const roll2 = Math.floor(Math.random() * 6) + 1;

const img1 = "images/dice" + roll1 + ".png";
const img2 = "images/dice" + roll2 + ".png";

dice1.textContent = roll1;
dice1.src = img1;

dice2.textContent = roll2;
dice2.src = img2;

if (roll1 > roll2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (roll1 < roll2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
