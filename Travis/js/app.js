
let wordsArray=["recumbent","permeable", "lothario","terpsichorean","fructify","gravamen"]



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
	game.remainingGuesses = (selectWord.length+5);
	game.selectWord = selectWord;
	game.remainingLetters = selectWord.length;

}
// an obj for storing game var

let game = {
	numberOfGuesses:0,/// this does nothing. 
	remainingGuesses:0,
	selectWord:[],
	remainingLetters:0,
	guessedLetters: [],
	blankSpaces:[]
	//need a game board that is underscores that updates with letters 
}


// a class for doing stuff with the imput 

class Letter {
  constructor(guess) {
  		this.guess = guess;
  		game.guessedLetters.push(guess);
  		game.remainingGuesses--
  		console.log(game);
  		// loop to check to see if the letter is in the selected word
  		for(let i=0;i<game.selectWord.length;i++){
  			//lets use this oppurtunity to fill our a blank spaces var
  				game.blankSpaces[i]='_'; 
  			if(game.selectWord[i]==guess && game.remainingGuesses > 0){
  				// insert the letter in the spot it belongs
  				game.blankSpaces[i]=guess
  				// prompt for next letter
	  			let guess = prompt("hell yes! you have "+game.remainingGuesses+" guesses left. you have alreay guessed: "+game.guessedLetters+", spaces: "+game.blankSpaces);
				let guessed = new Letter(guess);

				//was getting stuck in else need a new condition
  			}else if(game.remainingGuesses > 0){
  				 let guess = prompt("you suck and that's sad. "+game.remainingGuesses+" guesses left. you have alreay guessed: "+game.guessedLetters+", spaces: "+game.blankSpaces);
  				 let guessed = new Letter(guess);

  			 }else {alert("you lose ya little bitch. the word was "+game.selectWord+" ...clearly");
  			 			//reset values
							game.remainingGuesses=0;
							game.selectWord=[];
							game.remainingLetters=0;
							game.guessedLetters=[];
							game.blankSpaces='';
  			}
  		}
	}
}

humanInterface=(guess)=>{
		//imput prompt up and running
	 prompt("annoying as shit! you can't do a dam thing untill you try and guess this "+game.selectWord.length+" letter word","")
	let guessed = new Letter(guess)
}

selectWord()
humanInterface()

console.log(blankSpaces)



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







