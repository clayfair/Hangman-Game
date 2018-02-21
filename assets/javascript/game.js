//1. list of words for Hangman game. 
var randomWordsss = ["backpack", "dinosaur", "octopus", "hamburger", "snowman", "popsicle", "inchworm", "skateboard", "caterpillar", "helicopter", "sunglasses", "lollipop", "mountains", "starfish", "feather", "elephant", "videogame", "psychology", "animal"];

//2. random word is chosen from this list 
var randomWord = randomWordsss[Math.floor(Math.random() * randomWordsss.length)];

//4. a user has 12 guesses to start. Display on the DOM 
var userGuesssesRemaining = 12;
window.onload = function () {
    document.getElementById('guessesRemaining').innerHTML = userGuesssesRemaining;
    console.log(randomWord);
}

//5. need to store my guesses to check for repeats later 
var string = "";

//6. Capture keyboard input
document.onkeyup = function (event) {
    //7. Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();

    //8. when keyboard input = letter, index my randomWord and check if that letter exists. If it doesn't...
    if (randomWord.indexOf(letter) === -1) {
        //8.1 push all wrong guesses into my string. 
        string = letter + string;
        //8.2 Check this string against my keyboard letter for repeats
        if (string.indexOf(letter, 1) === -1) {
            //8.3 append guess to the DOM
            var alreadyDiv = document.getElementById('already');
            var newDiv = document.createElement("div");
            newDiv.innerHTML = letter;
            alreadyDiv.appendChild(newDiv);
            //8.3 decrease user guess by 1
            userGuesssesRemaining--
            //8.4 update the DOM with userGuesses remaining 
            document.getElementById('guessesRemaining').innerHTML = userGuesssesRemaining;
        } else {
            return "repeat"
        }


    } else {
        //8 if the letter does exist then we have correctly chosen a letter 
        console.log("correct letter!: " + letter);
    }

}




