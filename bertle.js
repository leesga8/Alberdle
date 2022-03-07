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

keys.forEach(element => {
  const buttonKey = document.createElement('button')
  buttonKey.textContent = element
  keyboard.append(buttonKey)
})