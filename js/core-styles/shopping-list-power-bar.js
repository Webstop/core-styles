"use strict";

// TODO: For now this is global. It really should be loaded as an es6 module instead.
function loadShoppingListPowerBar(){
  $('#site-aside-slider').load('/shopping_list/power_bar');
}

$(function() {

  loadShoppingListPowerBar();

  $('.site-aside-slider-toggle').on('click', function(event){
    event.preventDefault();
    $('#site-aside-slider').toggleClass('site-aside-slider-open');
  });

});



