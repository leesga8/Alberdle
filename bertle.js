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

rows.forEach((row, index) => { //creates a row div forEach arr in ROWS array.
  const word = document.createElement('div')
  index++;
  word.setAttribute('id', 'row' + index) //sets id of div to index #+1
  row.forEach((y, letterIndex) => { //creates a letter div forEach letter in inner ROW array
    const x = document.createElement('div')
    letterIndex++;
    x.setAttribute('id', 'row' + index + '-letter' + letterIndex) //sets id's of div to index
    x.classList.add('letter') //add class for styling
    word.append(x) //add to created word.div
  })
  //Appends to 2d array 
  gameBoard.append(word)
})

/*--Keyboard--*/
keys.forEach(element => {
  const buttonLetter = document.createElement('button')
  buttonLetter.textContent = element
  buttonLetter.setAttribute("id", element)
  buttonLetter.addEventListener('click', handleClick(element))
  keyboard.append(buttonLetter)
})


function handleClick(a) {
  console.log(a)
}

