//store wins
var wins = 0;

//1. list of words for Hangman game. 
var randomWordsss = ["pizza", "spaghetti", "apricots", "hamburger", "cabbage", "mushrooms", "lobster", "bananas", "sausages", "risotto", "tomato", "lollipop", "sushi", "yams", "avocado", "blackberries", "tamale", "macaroni", "croissant"];

//2. random word is chosen from this list 
var randomWord = "";

//3.  want a word like "bird" to become "----" (4 hash marks) essentially I want to change every i into "-"
var emptyArray = [];

//4. a user has 12 guesses to start.  
var userGuesssesRemaining = 12;

function startGame() {
    emptyArray = [];
    userGuesssesRemaining = 12;
    randomWord = randomWordsss[Math.floor(Math.random() * randomWordsss.length)];
    for (var i = 0; i < randomWord.length; i++) {
        emptyArray[i] = " _ ";
    }
    document.getElementById('guessesRemaining').innerHTML = userGuesssesRemaining;
    document.getElementById('whodis').innerHTML = emptyArray.join(" ");
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('already').innerHTML = "";
    console.log(randomWord);
}



//Display to the DOM, a) guessesRemaining b) the emptyArray 
window.onload = function () {
    // document.getElementById('wins').innerHTML = sessionStorage.getItem(trackMyWins);
    startGame();
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
            if (userGuesssesRemaining === 0) {
                startGame();
            }
        }
    } else {
        //8 if the letter does exist then we have correctly chosen a letter
        //go through each index in randomWord and check if the character at index === letter. If it does, update the array and redisplay the array
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                emptyArray[i] = letter;
                document.getElementById('whodis').innerHTML = emptyArray.join(" ");
            }
        }
        if (emptyArray.join("") === randomWord) {
            wins++;
            // sessionStorage.setItem(trackMyWins, wins);
            document.getElementById('wins').innerHTML = wins;
             //need some type of trigger to begin game again
            startGame();
        }
    }

}




