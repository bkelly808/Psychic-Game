   var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSofar = [];

// This function is run whenever the user presses a key.
User Choice: <input type="text" id="userchoice" onkeyup="myFunction()">

function myFunction() {
  var userChoice = document.getElementById("userchoice");
  var userChoice = event.key;

  document.onkeyup = function (event) {
    displayStats();
}

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//displays Guesses so far and guesses Left
function countGuessesLeft() {
  document.getElementById("guessesLeft").innerHTML ="Guesses Left: " + guessesLeft;
}
function guessesSofar() {
	document.getElementById("guessesSofar").innerHTML = "Your Guesses so far: " + guessesSofar;
}
   
  
         // This logic determines the outcome of the game (win/loss), and increments the appropriate number
        if (userGuess === computerGuess){
          wins++;
          document.getElementById("wins").innerHTML = "Wins: " + wins;
          restart();
        } 

	else if (guessesLeft === 0) {
		losses++;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		restart();
	}};
