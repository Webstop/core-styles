"use strict";
// Site Modal Component

// TODO: For now this is global. It really should be loaded as an es6 module instead.
function loadShoppingListPowerBar(){
  $('#shopping-list-power-bar').load('/shopping_list/power_bar');
}

$(function() {

  loadShoppingListPowerBar();

  $('.shopping-list-power-bar-toggle').on('click', function(event){
    event.preventDefault();
    $('#shopping-list-power-bar').toggleClass('shopping-list-power-bar-open');
  });

});



