// create an array of words
var phrases = ["Jerry Rice", "Terrell Owens", "Randy Moss", "Isaac Bruce", "Larry Fitzgerald", "Tony Gonzalez", "Tim Brown", "Steve Smith", "Marvin Harrison", "Reggie Wayne", "Peyton Manning", "Brett Favre", "Drew Brees", "Tom Brady", "Dan Marino", "John Elway", "Eli Manning", "Ben Roethlisberger", "Warren Moon", "Phillip Rivers", "Emmit Smith", "Walter Payton", "Barry Sanders", "Curtis Martin", "Ladainian Tomlinson", "Jerome Bettis", "Frank Gore", "Eric Dickerson", "Tony Dorsett", "Jim Brown"];

// choose word randomly
var randomWord = [Math.floor(Math.random() * phrases.length)];
var chosenWord = phrases[randomWord];
var lowerChosenWord = chosenWord.toLowerCase();
var letterCount = lowerChosenWord.length

// Arrays
var underScore = [];
var guessesGuessed = [];
var wrongLetters = [];

//Counters
var correctGuesses = 0
var wins = 0;
var guessesLeft = 7;

//print statements
console.log (lowerChosenWord);
console.log (underScore);

//functions

// Create underscores based on length of word
function generateUnderscores() {
	for (var i = 0; i < lowerChosenWord.length; i++) {
		underScore.push('_');
		}
		return underScore;
	}

//Function to capture userGuess
function buttonPress() {
	//Generate underscores once game starts
	console.log("button pressed");
	generateUnderscores();
	//store the button pressed as userGuess
	document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(userGuess);
	//check to see if the userGuess has been chosen already
	if (guessesGuessed.indexOf(userGuess) === -1) {
		//store userGuess to guessesGuessed array
			guessesGuessed.push(userGuess);
	//check to see if the userGuess is within the lowerChosenWord Array
		if (lowerChosenWord.indexOf(userGuess) > -1) {
			for (var i = 0; i < lowerChosenWord.length; i++) {
				//replace the correct underscores with userGuess
				if (lowerChosenWord.charAt(i) === userGuess) {
				underScore[i] = userGuess;
				}
				console.log(underScore);
				//update the DOM with letters for underscore
				document.getElementById("underscores").innerHTML = underScore.join('').toUpperCase();
			}
			//check to see if the word is completed;
			console.log("This is the value of the Lower Chosen before game won is called: " +lowerChosenWord);
			console.log("This is the value of Underscore at the end of game 1: " + underScore);
			gameWon();
		}
	//if userGuess is wrong		
		else {
			console.log ("test to see if wrong letters register");
			wrongLetters.push(userGuess);
			console.log("wrongletters guessed array = " + wrongLetters.join(''));
			guessesLeft = guessesLeft - 1;
			document.getElementById("wrongLettersGuessed").innerHTML = wrongLetters.join(" ").toUpperCase();
			//Check to see if game is lost
			gameLost();
		}	 
	}
	}
}

function gameWon() {
	console.log("This is the value of lowerchosen when gameWon is called: " + this.lowerChosenWord)
	console.log("This is the value of underscore when gameWon is called: " + underScore.join('') )
if (underScore.join("") == lowerChosenWord) {
	wins++;
	console.log ("number of wins = : " +wins);
	//Update html
	document.getElementById("winsCount").innerHTML = "WINS - " + wins;
	alert("You Win.  Press Space Key To Continue");
	//reset game with new word
	randomWord = [Math.floor(Math.random() * phrases.length)];
	chosenWord = phrases[randomWord];
	lowerChosenWord = chosenWord.toLowerCase();
	console.log("the chosen word after gamewon is : " +lowerChosenWord);
	console.log;
	resetToDefault();
	("the underScore array after gamewon is : " + underScore.join(''));
	buttonPress();
	}
}

function gameLost() {
if (guessesLeft === 0) {
	//reset game with new word
	randomWord = [Math.floor(Math.random() * phrases.length)];
	chosenWord = phrases[randomWord];
	lowerChosenWord = chosenWord.toLowerCase();
	console.log("chosenword after gamewon function is called : " + lowerChosenWord);
	wins = 0;
	console.log("this is the number of wins: " + wins);
	alert("Good try.  Press the Space Bar to start a new game");
	resetToDefault();
	buttonPress();

	}
}

function resetToDefault() {
console.log ("test resettodefault function");
//reset arrays
underScore = [];
guessesGuessed = [];
wrongLetters = [];
guessesLeft = 7
//reset html
document.getElementById("wrongLettersGuessed").innerHTML = wrongLetters;
document.getElementById("guessesCount").innerHTML = guessesLeft;
}

//Gameplay
function startGame() {
	buttonPress();
}

startGame();



