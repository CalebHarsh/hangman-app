var Word = require("./word.js")
var inquirer = require("inquirer")
var colors = require("colors")

//array of words
var hangmanWords = ["Hello World", "Foo", "JavaScript", "Function", "Visual Studios", "MySQL", "Hyper Text Markup Language", "variable", "Debugging"]

//gets a word from word bank
var nodeWord = getNewWord()
gamePrompt()

//game inquirer 
function gamePrompt() {
  console.log("")

  //ask for letter
  inquirer.prompt([{

    message: "Guess a letter.",
    name: "userGuess",
    validate: (guess) => {
      return (/[a-zA_Z]/).test(guess) ? true : console.log("  >Not a valid guess")
    }

  }]).then(answers => {

    console.log("")
    
    var gameGuess = answers.userGuess.match(/([a-zA-Z])/)

    if (nodeWord.checkGuess(gameGuess[0])) {

      console.log("   !!!!Correct!!!!".green)

    } else {

      console.log("  !!!!Incorrect!!!".red)
      nodeWord.numberGuesses--
      console.log(`You have ${nodeWord.numberGuesses} guesses left`.bold.red)
      
    }
    console.log("")
    nodeWord.displayWord()

    if (nodeWord.numberGuesses > 0) {

      if (nodeWord.checkSolved()) {
  
        playAgain()
      }
      else {

        gamePrompt()
      }
    } else {
      console.log("\n   Game Over".underline.bold.red)
      playAgain()
    }
  })
}

function playAgain() {
  console.log("")

  inquirer.prompt([{

    message: "Play Again",
    name: "playAgain",
    type: "confirm"

  }]).then(answers => {

    if (answers.playAgain) {
      nodeWord = getNewWord()
      gamePrompt()
    }
  })
}

//get a new word from the word bank
function getNewWord() {
  var randNum = Math.floor(Math.random() * 6)
  return gameWord = new Word(hangmanWords[randNum])
}