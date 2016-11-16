"use strict";

let carInventory = require('./carLot'),
    eventStuff = require('./events'),
    HandleBars = require('hbsfy/runtime'),
    carTemplate = require('../templates/car-grid.hbs');

HandleBars.registerPartial('navbar', require('../templates/partials/navbar.hbs'));

HandleBars.registerHelper('increment', (value) => parseInt(value) + 1);

function populatePage (inventory) {
  // Grab the div we want to apppend the cards to
  let cardDiv = document.createElement("div"); 
  cardDiv.innerHTML = carTemplate(inventory);

  let cards = document.getElementById("inventory-cards");
  
  cards.appendChild(cardDiv);
  // let card = document.getElementById(`card--${index}`);

  // Now that the DOM is loaded, establish all the event listeners needed
  eventStuff();
}

// The Promises Way puts the callback responsibility on the caller
carInventory.loadInventory()
.then(
  function (inventoryFromLoadInventoryResolve) {
    populatePage(inventoryFromLoadInventoryResolve);
    console.log("carPromise", inventoryFromLoadInventoryResolve);
  },
  function (reason) {
    console.error('Something went wrong', reason);
  });
