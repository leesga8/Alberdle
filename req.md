Game Features:

# V.0:
- provide 5 char words as guesses
- each guess must be a valid word from the data
- keyboard can be used and when you press enter,
  - board 
    - your guess is submitted and each letter turns into a color
    - grey - letter doesnt exist in the word
    - yellow - letter exists in the word but in the wrong position
    - green - letter exists and is in the correct position
- after n attempts you lose
- initial visual state
  - all rows are empty with borders on empty char

# V.01:
- basic html structure
  - All divs inside one section "bertle"
  - title div
  - Win or Lose message div that appears after the game
  - 6 row div for each guess
  - 5 letter divs inside each row for each letter
- ? keyboard at the bottom? 

# V.02:
- keyboard
  - QWERTY, backspace, enter
- array of letters, backspace, and enter?
- create buttons for each
- createElement foreach button and add click function?
  - handleClick() function for keyboard will add the clicked letter as the value in the 5-letter guess. 
  - the guess will be an array? Clicked letter will be pushed to guess array? 
- javascript key presses?

# V.03:
- Game mechanics:
  - the game board is a two dimensional array
  - each array has 5 indexes / letters, and there are 6 arrays / guesses
  - inside the row div, create 6 divs / rows for each guess
  - inside each div, create 5 divs for each letter
    - nested foreach loop each creating an element? 
  - add id's and classes when creating elements

# V.04:
- handleClick() - when letter is clicked, key is added to the correct box:
  - get the key that is clicked in eventListener
    - variable for current position for current row and letter
    - clicked letter will be added to current position
  - getKey(key)
    -  get the div's with the id of current position and add content with the letter clicked
    - clicked letter has to go into array 2d array in correct position


# EndGame
- provide 5 char words as guesses
- each guess must be a valid word from the data
- when you press enter,
  - board 
    - your last guess is submitted and each letter turns into a color
    - grey - letter doesnt exist in the word
    - yellow - letter exists in the word but in the wrong position
    - green - letter exists and is in the correct position
  - keyboard
    - key presses reflect data
    - bottom row has enter and backspace
    - when you press enter, each letter animates into colors
- after n attempts you lose
- initial visual state
  - all rows are empty with borders on empty char

# Stretch goals
- After each game, stats page will appear with total wins/losses or how many attempts it took to solve
- User can click different color schemes or light/dark mode
- User can choose from different category of words

