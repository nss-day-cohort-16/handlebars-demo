"use strict";

var cardStyle = require('./cards'),
    cardWrapper = document.getElementById("inventory-cards");

var throwError = function () {
  window.alert("Please click on a card to begin editing");
};

var activateEvents = function() {
  cardWrapper.addEventListener("click", cardStyle.highlightCard);
  let input = document.getElementById("editInput");
  input.addEventListener("keyup", function() {
    var highlighted = document.getElementsByClassName('is-clicked');
    if(highlighted.length === 0) {
      throwError();
    } else {
      cardStyle.editCard(event);
    }
  });
};

module.exports = activateEvents;

