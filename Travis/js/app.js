
let wordsArray=["recumbentplay","permeable", "lothario","terpsichorean","fructify","gravamen"]



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
	// put relevant values into game array
	game.numberOfGuesses = (selectWord.length*2);
	game.selectWord = selectWord;
	game.remainingLetters = selectWord.length;

}
// an obj for storing game var

let game = {
	numberOfGuesses:0,
	remainingGuesses:0,
	selectWord:[],
	remainingLetters:0,
	guessedLetters: []
}


// a class for doing stuff with the imput 

class Letter {
  constructor(guess) {
  		this.guess = guess
  		console.log(guess)
  		console.log(game)
  		// loop to check to see if the letter is in the selected word
  		for(let i=0;i<game.selectWord.length;i++){
  			if(game.selectWord[i]==guess){
	  			let guess = prompt("hell yes! you have "+game.numberOfGuesses+" guesses left","")
				let guessed = new Letter(guess)
  			}else{
  				 prompt("you suck and that's sad. "+game.numberOfGuesses+" guesses left","")
  			}
  		}

	}
  }

humanInterface=()=>{
		//imput prompt up and running
	let guess = prompt("whatcha got?","")
	let guessed = new Letter(guess)
}

selectWord()

humanInterface()





// game
// An object that has the following attributes:

// guesses
// a number of guesses remaining
// guessedLetters
// an array of strings
// isOver()
// a function that checks whether to play another round, depending if the game is won, the game is lost, or the game can still be played (not won and still less than 10 guesses) Suggested functionality:
// returns true if the word is fully guessed; run the function isFound() (see Word constructor function )
// returns true if the number of guesses is 0
// returns false if the game should still be in play
// overMessage()
// returns "You win", if the word is completely guessed
// returns "You lose", if guesses is 0







