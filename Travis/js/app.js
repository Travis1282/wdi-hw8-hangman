
let wordsArray=["recumbentplay","permeable", "lothario","terpsichorean","fructify","gravamen"]

let startGame=()=>{

let selectWord=()=>{
	// random number generator within the lenght of the array
 let randomNumber = Math.floor(Math.random() * (wordsArray.length));
 	console.log(randomNumber)
	//pick which word to play and split to array of charicters
	let selectWord = wordsArray[randomNumber].split('');
	console.log(selectWord)
	//remove from array 
	wordsArray.splice([randomNumber],1)
	console.log(wordsArray)
	// Generate and track number of guesses
	let numberOfGuesses = (selectWord.legnth*0.5)
}
selectWord()

// an array of guessed letters

// isOver()
// a function that checks whether to play another round, depending if the game is won, the game is lost, or the game can still be played (not won and still less than 10 guesses) Suggested functionality:
// returns true if the word is fully guessed; run the function isFound() (see Word constructor function )
// returns true if the number of guesses is 0
// returns false if the game should still be in play

// overMessage()
// returns "You win", if the word is completely guessed
// returns "You lose", if guesses is 0

}
startGame()
