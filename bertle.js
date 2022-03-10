const gameBoard = document.querySelector('.rows');
const keyboard = document.querySelector('.keyboard');
const messageContainer = document.querySelector('.message')

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
let answer = 'SUPER';
let gameOver = false; 

/*--Word Rows--*/

rows.forEach((row, index) => { //creates a row div forEach arr in ROWS array.
  const word = document.createElement('div');
  word.setAttribute('id', 'row' + index) //sets id of div to index #+1
  row.forEach((y, letterIndex) => { //creates a letter div forEach letter in inner ROW array
    const x = document.createElement('div');
    x.setAttribute('id', 'row' + index + '-letter' + letterIndex); //sets id's of div to index
    x.classList.add('letter'); //add class for styling
    word.append(x); //add to created word.div
  })
  //Appends to 2d array 
  gameBoard.append(word)
})

/*--Keyboard--*/
keys.forEach(letter => {
  const buttonLetter = document.createElement('button')
  buttonLetter.textContent = letter;
  buttonLetter.setAttribute("id", letter);
  buttonLetter.addEventListener('click', () => handleClick(letter));
  keyboard.append(buttonLetter);
})

document.addEventListener('keyup', (e) => {
  let upperKey = e.key.toUpperCase();
  // console.log('keypress: ' + e.key)
  if (upperKey==='ENTER') {
    enter();
  } else if (upperKey==='BACKSPACE'){
      deleteKey()
  } else if(keys.includes(upperKey)){
    // console.log(upperKey)
    getKey(upperKey)
  } else {
    upperKey==='';
  }
});


const handleClick = (letter) => {
  if (letter === 'DELETE') {
    deleteKey();
    return
  }
  if (letter === 'ENTER') {
    enter();
    return
  }
  if (currentLetter < 5 && currentRow < 6) {
    getKey(letter);
  }
}

const getKey = (letter) => {
  const box = document.getElementById('row' + currentRow + '-letter' + currentLetter);
  box.textContent = letter;
  rows[currentRow][currentLetter] = letter;
  box.setAttribute('data', letter)
  currentLetter++;
}

const deleteKey = () => {
  if (currentLetter > 0) {
    currentLetter--;
    const box = document.getElementById('row' + currentRow + '-letter' + currentLetter);
    box.textContent = '';
    rows[currentRow][currentLetter] = '';
    box.setAttribute('data', '');
  }
}

const enter = () => {
  const guess = rows[currentRow].join('')
  if (currentLetter === 5) {
    addColor();
    //if the guess is right game over
    if (answer === guess) {
      createMessage('WIN');
      gameOver = true;
      return;
    } else {
      //if the guess is wrong too many times game over
      if (currentRow >= 5) {
        // gameOver = false;
        createMessage('Game Over');
        return;
      }
      //if guess if wrong go to next row
      if (currentRow < 5) {
        currentRow++;
        currentLetter = 0;
      }
    }
  }
}

const createMessage = (element) => {
  const message = document.createElement('p')
  message.textContent = element;
  messageContainer.append(message);
  setTimeout(() => messageContainer.removeChild(message), 2000) 
}

const addColorToKeyboard = (e, color)=> {
  const key = document.getElementById(e)
  key.classList.add(color)
}

const addColor = () => {
  const rowLetters = document.querySelector('#row' + currentRow).childNodes;

  rowLetters.forEach((letter, index) => {
    const dataLetter = letter.getAttribute('data')
    setTimeout(()=>{
      letter.classList.add('turn')
      if (dataLetter == answer[index]) {
        letter.classList.add('green');
        addColorToKeyboard(dataLetter, 'green')
      } else if(answer.includes(dataLetter)) {
        letter.classList.add('yellow');
        addColorToKeyboard(dataLetter, 'yellow')
      } else {
        letter.classList.add('grey');
        addColorToKeyboard(dataLetter, 'grey')
      }
    }, 300*index)
  })
}

// /*--DARKMODE TOGGLE--*/
// // Select the button
// const btn = document.querySelector(".btn-toggle");
// // Listen for a click on the button
// btn.addEventListener("click", function() {
//   // Then toggle (add/remove) the .dark-theme class to the body
//   document.body.classList.toggle("dark-theme");
//   changeColorBox();
// });

// function changeColorBox() {
//   const element = getElementbyClass('rows');
//   console.log(element)
//   element.classList.add('.dark-mode')
//   console.log(element)
// }
