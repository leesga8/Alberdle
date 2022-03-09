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

let currentRow = 0;
let currentLetter = 0;

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
keys.forEach(e => {
  const buttonLetter = document.createElement('button')
  buttonLetter.textContent = e
  buttonLetter.setAttribute("id", e)
  buttonLetter.addEventListener('click', () => handleClick(e))
  keyboard.append(buttonLetter)
})

const handleClick = (e) => {
  getKey(e)
}

const getKey = (e) => {
  const box = document.getElementById('row'+currentRow+'-letter'+currentLetter)
  box.textContent = e
}

