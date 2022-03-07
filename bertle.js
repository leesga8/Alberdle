const guessRow = document.querySelector('.row')
const keyboard = document.querySelector('.letter')

const keys = [
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

const guess = ['', '', '', '', '']
//6 arrays with 5 letter guesses
//foreach array create div with id?

function handleClick() {
  console.log("test")
}

keys.forEach(element => {
  const buttonKey = document.createElement('button')
  buttonKey.textContent = element
  buttonKey.setAttribute("id", element)
  buttonKey.addEventListener('click', handleClick)
  keyboard.append(buttonKey)
})