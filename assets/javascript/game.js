// create an array of words
var phrases = ["Jerry Rice", "Terrell Owens", "Randy Moss", "Isaac Bruce", "Larry Fitzgerald", "Tony Gonzalez", "Tim Brown", "Steve Smith", "Marvin Harrison", "Reggie Wayne", "Peyton Manning", "Brett Favre", "Drew Brees", "Tom Brady", "Dan Marino", "John Elway", "Eli Manning", "Ben Roethlisberger", "Warren Moon", "Phillip Rivers", "Emmit Smith", "Walter Payton", "Barry Sanders", "Curtis Martin", "Ladainian Tomlinson", "Jerome Bettis", "Frank Gore", "Eric Dickerson", "Tony Dorsett", "Jim Brown"];
// choose word randomly
var randomWord = [Math.floor(Math.random() * phrases.length)];
var chosenWord = phrases[randomWord];
var lowerChosenWord = chosenWord.toLowerCase();
var letterCount = lowerChosenWord.length
var wins = 0
var guessesLeft = 7

// Arrays
var underScore = [];
var rightLetters = [];
var wrongLetters = [];

console.log (lowerChosenWord);
// Create underscores based on length of word
function generateUnderscores() {
	for (var i = 0; i < lowerChosenWord.length; i++) {
		underScore.push('_');
		}
		return underScore;
}

console.log (generateUnderscores());
//get users guess
	document.onkeyup = function(event) {
	var userGuess = event.key;

//check if guess is right
	if (lowerChosenWord.indexOf(userGuess) > -1) {
		// check through entire word for duplicate letters
		for (var i = 0; i < letterCount; i++) {
			
		}
		//if right, push to right array
		rightLetters.push(userGuess);
			// replace underscore with userguess
		underScore[lowerChosenWord.indexOf(userGuess)] = userGuess;
		console.log (underScore);
			if (underScore.join('') == lowerChosenWord) {
				alert("You Win!");
				wins++;
			}
		} else {
		//if wrong push to wrong array
		wrongLetters.push(userGuess);
		console.log("wrongletters " + wrongLetters);
		}}

	