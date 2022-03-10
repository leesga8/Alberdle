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
let words = ['apple', 'brake', 'cashy', 'store', 'speak', 'clone', 'bread']
let answer = '';
let gameOver = false; 

const chooseWord = () => {
  let randomWord = Math.floor(Math.random() * (words.length - 1)) +1;
  answer = words[randomWord].toUpperCase();
}
chooseWord();
console.log(answer)

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
  if (upperKey==='ENTER') {
    enter();
  } else if (upperKey==='BACKSPACE'){
      deleteKey()
  } else if(keys.includes(upperKey)){
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
  } else {
    getKey(letter);
  }
}

const getKey = (letter) => {
  if(currentLetter<5 && currentRow<6){
  const box = document.getElementById('row' + currentRow + '-letter' + currentLetter);
  box.textContent = letter;
  rows[currentRow][currentLetter] = letter;
  box.setAttribute('data', letter)
  currentLetter++;
  }
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
  let checkAnswer = answer;
  const guess = [];

  rowLetters.forEach(e => {
    guess.push({letter: e.getAttribute('data'), color: 'grey'})
  })

  guess.forEach((e, index)=>{
    if(e.letter == answer[index]){
      e.color = 'green';
      checkAnswer = checkAnswer.replace(e.letter, '');
    }
  })

  guess.forEach(e=>{
    if (checkAnswer.includes(e.letter)) {
      e.color = 'yellow';
      checkAnswer = checkAnswer.replace(e.letter,'')
    }
  })
  rowLetters.forEach((letter, index) => {
    setTimeout(()=>{
      letter.classList.add('turn')
      letter.classList.add(guess[index].color)
      addColorToKeyboard(guess[index].letter, guess[index].color)
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
