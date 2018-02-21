
//1. list of words for Hangman game. 
var randomWordsss = ["backpack", "dinosaur", "octopus", "hamburger", "snowman", "popsicle", "inchworm", "skateboard", "caterpillar", "helicopter", "sunglasses", "lollipop", "mountains", "starfish", "feather", "elephant", "videogame", "psychology", "animal"];

//2. random word is chosen from this list 
var randomWord = randomWordsss[Math.floor(Math.random() * randomWordsss.length)];

//3. new word is chosen each game and appended to the DOM
window.onload = function beginGame() {
    var newDiv = document.getElementById("new");
    var newWord = document.createElement("div");
    newWord.innerHTML = randomWord;
    newDiv.appendChild(newWord);
    console.log(randomWord);
}


//I actually want to index word and place an underscore for each word 

//4. append this new word to the new div 








//4. a user has 12 guesses 
var userGuessses = 12;
window.onload = function showGuesses() {
    var guessDiv = document.getElementById("guesses");
    var guessesRemaining = document.createElement("div");
    guessesRemaining.innerHTML = userGuessses;
    guessDiv.appendChild(guessesRemaining);
}

//5. Capture keyboard input
document.onkeyup = function (event) {

    //6. Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();

    //7. when keyboard input is a letter, index the randomWord and check if that letter exists. If it doesn't...
    if (randomWord.indexOf(letter) === -1) {
        //7.1 user guesses decreases by -1
        userGuessses--
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

