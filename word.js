var Letter = require("./letter.js")

//Word Constructor
var Word = function (word) {
  console.log("")
  this.word = word.split("").map(letter => {
    return new Letter(letter)
  })
  this.numberGuesses = 8
  this.solved = false
  this.displayWord()
}

//Display the word
Word.prototype.displayWord = function () {
  var display = this.word.map(letter => {
    return letter.getDisplay()
  }).join(" ")
  console.log(display)
}

//check if word has been solved
Word.prototype.checkSolved = function () {
  var guessedCount = 0
  this.word.forEach(letter => {
    letter.guessed ? guessedCount++ : null
  })
  if(guessedCount === this.word.length) {
    this.solved = true
  }
  return this.solved
}

//cehck letters if they have been guessed
Word.prototype.checkGuess = function(a) {
  var test = false
  this.word.forEach(letter => {
    letter.guess(a) ? test = true : null
  })
  return test
}

module.exports = Word

