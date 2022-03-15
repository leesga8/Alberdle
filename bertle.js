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

const board = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

const body = document.body;
const gameBoard = document.querySelector('.rows');
const keyboard = document.querySelector('.keyboard');
const messageContainer = document.querySelector('.message')

let currentRow = 0;
let currentLetter = 0;
let words = ['other', 'about', 'which', 'their', 'every', 'maybe', 'bread']
let answer = '';
let gameOver = false; 

/*--MODAL--*/

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  // modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/*--Word Rows--*/

board.forEach((boardRow, index) => { 
  const word = document.createElement('div'); //creates a boardRow div forEach arr in board 2D array.
  word.setAttribute('id', 'row' + index) //sets id of div to index
  boardRow.forEach((y, letterIndex) => { 
    const letter = document.createElement('div'); //creates a letter div forEach letter of inner boardRow array
    letter.setAttribute('id', 'row' + index + '-letter' + letterIndex); //sets id's of div to index
    letter.classList.add('letter'); //add class for styling
    word.append(letter); //append to created word.div
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

const chooseWord = () => {
  let randomWord = Math.floor(Math.random() * (words.length - 1)) +1;
  answer = words[randomWord].toUpperCase();
}
chooseWord();
console.log(answer)

const getKey = (letter) => {
  if(currentLetter<5 && currentRow<6){
    const box = document.getElementById('row' + currentRow + '-letter' + currentLetter);
    box.textContent = letter;
    board[currentRow][currentLetter] = letter;
    box.setAttribute('data', letter)
    currentLetter++;
  }
}

const deleteKey = () => {
  if (currentLetter > 0) {
    currentLetter--;
    const box = document.getElementById('row' + currentRow + '-letter' + currentLetter);
    box.textContent = '';
    board[currentRow][currentLetter] = '';
    box.setAttribute('data', '');
  }
}

const enter = () => {
  const guess = board[currentRow].join('')
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

const createMessage = (string) => {
  setTimeout(() => gameBoard.innerHTML = string, 2500) ;
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
/*--DARKMODE TOGGLE--*/
// Select the button
const btn = document.querySelector(".btn-toggle");
// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});

// function changeColorBox() {
//   const element = getElementbyClass('rows');
//   console.log(element)
//   element.classList.add('.dark-mode')
//   console.log(element)
// }
