"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Jose Felix
   Date:   3.26.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
// declaring all of the values with nothing specific at the moment
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;
// as the page starts it loads the init function here
window.onload = init;
window.onload = alert("I got code done... \nbut it is not complete");
// this is the function that is run when the page loads from the code above
function init() {
      allLetters = document.querySelectorAll("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.getAttribute("data-clue-a");
      var downID = currentLetter.getAttribute("data-clue-d");
      acrossClue.value = document.getElementById("acrossID");
      downClue.value = document.getElementById("downID");
      return formatPuzzle(currentLetter);

      for (var i = 0; i < allLetters.length; i++) {
            cursor.style[i];
      }
}
function formatPuzzle() {
      currentLetter.value = puzzleLetter;
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.background = "";
      }
      acrossClue.style.color= "";
      downClue.style.color= "";
      if (currentLetter.dataset.clueA != undefined) {
            acrossClue == currentLetter.dataset.clueA;
            acrossClue.style.color = "blue";
            wordLetters = document.querySelectorAll("[data-clue-A = " + currentLetter.dataset.clueA + "]");
            wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }
      if (currentLetter.dataset.clueD != undefined) {
            acrossClue == currentLetter.dataset.clueD;
            acrossClue.style.color = "red";
            wordLetters = document.querySelectorAll("[data-clue-D = " + currentLetter.dataset.clueD + "]");
            wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }
      if (typeDirection == "right") {
            currentLetter.backgroundColor = "rgb(191, 191, 255)";
      } else {
            cuurentLetter.backgrundColor = "rgb(255, 191, 191)";
      }
}







/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
