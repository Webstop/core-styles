"use strict";
// Site Modal Component

// TODO: For now this is global. It really should be loaded as an es6 module instead.
function loadShoppingListPowerBar(added = false){
  $('#shopping-list-power-bar').load('/shopping_list/power_bar', function (added) {
    if(added) {
      $('.shopping-list-power-bar-item:first-child').addClass('alert-warning').delay( 800 ).removeClass('alert-warning');
    }
  });
}

$(function() {

  loadShoppingListPowerBar();

  $('.shopping-list-power-bar-toggle').on('click', function(event){
    event.preventDefault();
    $('#shopping-list-power-bar').toggleClass('shopping-list-power-bar-open');
  });

});



