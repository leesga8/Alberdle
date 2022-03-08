const gameBoard = document.querySelector('.rows')
const keyboard = document.querySelector('.keyboard')

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
  'DELETE',
]

const rows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

/*--Word Rows--*/
rows.forEach((row, index) => {
  const word = document.createElement('div')
  index++;
  word.setAttribute('id', 'row' + index)
  row.forEach((y, letterIndex) => {
    const x = document.createElement('div')
    letterIndex++;
    x.setAttribute('id', 'row' + index + '-letter' + letterIndex)
    x.classList.add('letter')
    word.append(x)
  })
  //Appends to 2d array 
  gameBoard.append(word)
})

function handleClick() {
  console.log("test")
}


/*--Keyboard--*/
keys.forEach(element => {
  const buttonLetter = document.createElement('button')
  buttonLetter.textContent = element
  buttonLetter.setAttribute("id", element)
  buttonLetter.addEventListener('click', handleClick)
  keyboard.append(buttonLetter)
})