//*Put the following text on your page:
    //Guess what letter I'm thinking of
    //Wins: (# of times the user has guessed the letter correctly)
    //Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
    //Guesses Left: (# of guesses left. This will update)
    //Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
    //When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    //When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSofar = [];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("guessesLeft-text");
    var tiesText = document.getElementById("guessesSofar-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
    
      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

        if (userGuess === computerGuess) {
          wins++;
          attempts = 10;
          guessesSofar = [];
        }
        jsPsychic();
        if (attempts == 0) {
          losses++;
          guessesSofar = []
          attempts = 10;
        }
        
        $(':reset');

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userChoice;
        computerChoiceText.textContent = "The computer chose: " + computerChoice;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "guesses Left" + guessesLeft;
        guessesSofarText.textContent = "guesses so far" + guessesSofar;
      }