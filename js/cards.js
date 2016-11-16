"use strict";

let userInput = document.getElementById('editInput');

let cardStyle = {
  highlightCard(event) {
    // grab all the "is-clicked" elements and remove the class
    // before adding it to the latest clicked card
    let carCards = document.getElementsByClassName("is-clicked");
    let input = document.getElementById('editInput');
    cardStyle.setUserInput(input);

    if (carCards.length > 0) {
      for (var i = 0; i < carCards.length; i++ ) {
        carCards[i].classList.remove("is-clicked");
      }
    }
    // ".closest" find the nearest ancestor. Not EI compatible
    var card = event.target.closest(".card-wrapper");
    userInput.focus();
    // toggle the "is-clicked" class to change border and backgd in CSS
    card.classList.add("is-clicked");
    // console.log("className", card.className);
  },
  editCard(event) {
  var card = document.getElementsByClassName('is-clicked')[0];
  // description = card.lastChild;
  // console.log("description", description);
  // console.log("description.innerHTML", description.innerHTML);
  // console.log("event.currentTarget", event.currentTarget);
  // console.log("$(event.currentTarget).find('p')", $(event.currentTarget).find('p'));
  $(card).find( "p" ).html(userInput.value);
  // $(event.currentTarget).find('p')[0].innerHTML = userInput.value;
  },
  setUserInput(element){
    userInput = element;
  },
  getUserInput(){
    return userInput;
  }
};

// cardStyle.getUserInput = function(){
//   return userInput;
// };


module.exports = cardStyle;
