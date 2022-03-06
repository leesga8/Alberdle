const guessRow = document.querySelector('.row')
const keyboard = document.querySelector('.letter')

const keys = [
  "A", 
  "B", 
  "C",
  "D",
  "E", 
  "F", 
  "G", 
  "H",
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z",
  'ENTER',
  'BACKSPACE',
]

keys.forEach(key => {
  const buttonKey = document.createElement('button')
  buttonKey.textContent = key
  keyboard.append(buttonKey)
})