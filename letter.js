

var Letter = function (letter) {
  this.letter = letter
  this.guessed = false
  if(letter === " ") {
    this.guessed = true
  }
}

Letter.prototype.getDisplay = function (){
  return this.guessed ? this.letter : "_"
} 

Letter.prototype.guess = function (userGuess) {
  if (userGuess.toLowerCase() === this.letter.toLowerCase()) {
    this.guessed = true;
    return true
  }
  return false
}

module.exports = Letter

//Test Case
// var a = new Letter("a")
// console.log(a.getDisplay())
// a.guess("a")
// a
