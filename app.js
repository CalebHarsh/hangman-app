var Word = require("./word.js")
var inquirer = require("inquirer")
var colors = require("colors")

//array of words
var hangmanWords = ["Hello World", "Foo", "JavaScript", "Function", "Visual Studios", "MySQL"]

var nodeWord = getNewWord()
gamePrompt()

function gamePrompt() {
  console.log("")

  inquirer.prompt([{

    message: "Guess a letter.",
    name: "userGuess"

  }]).then(answers => {

    var gameGuess = answers.userGuess.match(/([a-zA-Z])/)

    if (nodeWord.checkGuess(gameGuess[0])) {
      console.log("Correct".green)
    } else {
      console.log("Incorrect".red)
      nodeWord.numberGuesses--
      console.log("You have ".bold.red + nodeWord.numberGuesses + " guesses left".bold.red)
    }

    if (nodeWord.numberGuesses > 0) {
      
      if (nodeWord.checkSolved()) {
        playAgain()
      }
      else {
        nodeWord.displayWord()
        gamePrompt()
      }
    } else {
      console.log("Game Over".underline.bold.red)
      playAgain()
    }
  })
}

function playAgain() {
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