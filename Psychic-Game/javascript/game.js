    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSofar = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//displays Guesses so far and guesses Left (**Not sure why i am getting an error afer "guessesLeft"**)
function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML ="Guesses Left: " + guessesLeft;
}
function guessesSofar() {
	document.querySelector("#guessesSofar").innerHTML = "Your Guesses so far: " + guessesSofar.join(' ');
}
countGuessesLeft();
var restart = function() {
	guessesLeft = 9;
	letterUser = [];

}
    
      //make letters lowercase
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // This function is run whenever the user presses a key.
      document.onkeyup = function (event) {
        
        // Determines which key was pressed.
      va          wins++;
          document.querySelector("#wins").innerHTML = "Wins: " + wins;
          restart();
        } 

	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		restart();
	};r userGuess = event.key;
  
         // This logic determines the outcome of the game (win/loss), and increments the appropriate number
        if (userGuess === computerGuess){
