const wordRow = document.querySelector('.row')
const keyboard = document.querySelector('.letter')

const letters = [
  "Q", 
  "W", 
  "E",
  "R",
  "T", 
  "Y", 
  "U", 
  "I",
  "O", 
  "P", 
  "A", 
  "S", 
  "D", 
  "F", 
  "G", 
  "H", 
  "J",
  "K", 
  "L", 
  'ENTER',
  "Z", 
  "X", 
  "C", 
  "V", 
  "B", 
  "N", 
  "M",
  'BACKSPACE',
]

const rows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]
//6 arrays with 5 letter guesses
//foreach array create div with id?

rows.forEach((row, index) => {
  const word = document.createElement('div')
  index++;
  word.setAttribute('id', 'row' + index)

 
  wordRow.append(word)
})

function handleClick() {
  console.log("test")
}

letters.forEach(element => {
  const buttonLetter = document.createElement('button')
  buttonLetter.textContent = element
  buttonLetter.setAttribute("id", element)
  buttonLetter.addEventListener('click', handleClick)
  keyboard.append(buttonLetter)
})