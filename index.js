// Random number
var rollPlayer1 = Math.random() * 6;
rollPlayer1 = Math.floor(rollPlayer1) + 1;
// Random image
var randomImage = "dice" + rollPlayer1 + ".png";
// Image source
var randomImageSource = "images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// 2nd dice
var rollPlayer2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + rollPlayer2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//
if (rollPlayer1 > rollPlayer2) {
  document.querySelector(".score").innerHTML = "🎲 Player 1 Wins 🎲";
} else if (rollPlayer2 > rollPlayer1) {
  document.querySelector(".score").innerHTML = "🎲 Player 2 Wins 🎲";
} else {
  document.querySelector(".score").innerHTML = "🎲 Draw 🎲";
}
