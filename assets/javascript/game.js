//1. list of words for Hangman game. 
var randomWordsss = ["backpack", "dinosaur", "octopus", "hamburger", "snowman", "popsicle", "inchworm", "skateboard", "caterpillar", "helicopter", "sunglasses", "lollipop", "mountains", "starfish", "feather", "elephant", "videogame", "psychology", "animal"];

//2. random word is chosen from this list 
var randomWord = randomWordsss[Math.floor(Math.random() * randomWordsss.length)];

//4. a user has 12 guesses to start. Display on the DOM 
var userGuessses = 12;
window.onload = function () {
    document.getElementById('guessesRemaining').innerHTML = userGuessses;
}

//5. Capture keyboard input
document.onkeyup = function (event) {

    //6. Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();

    //7. when keyboard input is a letter, index the randomWord and check if that letter exists. If it doesn't...
    if (randomWord.indexOf(letter) === -1) {
        //7.1 user guesses decreases by -1
        userGuessses--
        document.getElementById('guessesRemaining').innerHTML = userGuessses;
        //7.2 append the wrong guessed letter to the "wrong" div. 
        var wrongDiv = document.getElementById("wrong");
        var wrongGuess = document.createElement("div");
        wrongGuess.innerHTML = letter;
        wrongDiv.appendChild(wrongGuess);
        console.log("letters already guessed:" + letter);
    } else {
        console.log("correct!");
    }

}


