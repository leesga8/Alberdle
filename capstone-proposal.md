# Project Proposal Template

## Name of Student: 

Albert Lee

## Name of Project:

Alberdle 

## Project's Purpose or Goal: 

Alberdle is a word-guessing game that users will play to find the correct word. It is based on the game Wordle, where a user has six chances to solve the word, given hints from the game.

## List the absolute minimum features the project requires to meet this purpose or goal:

The MVP of the project will have the basic UI and layout of the game and basic functionality that will alow the user to play the game and win/lose. The basic UI includes, rows of letter boxes, three colored hints for each letter, and a responsive keyboard under the rows. The basic functionality of the game allows the user to input a word, determine which letters are correct in the word and ultimately win the game if the correct word is guessed or lose the game if they run out of chances. 

## What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

I will be using mainly JavaScript to build the game mechanics. Typing on the keyboard or clicking on the display keyboard will register letters. I can write a function to match the guess to the selected word and produce wins or losses. React could be used to implement the user interface. The game can be structured to have different components like the tiles and keyboard display. For the list of words I will be researching different API's to source the data or having an array of words. Research from different articles on google and youtube videos for further clarification will be the main sources of information. 

## If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

Stretch goals: 

  - Allow user to select a category which has only relevant words. 
  - User authentication to keep track of user's statistics and how many tries it took to solve. 
  - Learn and implement Tailwind CSS to style project
  - User can click light/dark mode or different color schemes for game characters

## What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

Allowing the user to select different categories could be created with vanilla javascript logic. Further research will need to be done to implement authentication but possible avenues could be Auth0? If I need a database to store user game data I am thinking of using Firestore. I would have to find Tailwind tutorials or videos and learn how to implement into my project. For the light/dark mode and color schemes, vanilla javascript should be enough. 

## Is there anything else you'd like your instructor to know?
I would like to build out the project in React but I am also leaving the option open to write it using vanilla Javascript. Further learning of React will take time and research will have to be done to outline the project.