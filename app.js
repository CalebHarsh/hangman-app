var Word = require("./word.js")
var inquirer = require("inquirer")
var colors = require("colors")

//array of words
var hangmanWords = ["Hello World", "Foo", "JavaScript", "Function", "Visual Studios", "MySQL", "Hyper Text Markup Language", "variable", "Debugging"]

var nodeWord = getNewWord()
gamePrompt()

function gamePrompt() {
  console.log("")

  inquirer.prompt([{

    message: "Guess a letter.",
    name: "userGuess"

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
      console.log("Game Over".underline.bold.red)
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

function getNewWord() {
  var randNum = Math.floor(Math.random() * 6)
  return gameWord = new Word(hangmanWords[randNum])
}