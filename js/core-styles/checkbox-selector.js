"use strict";
// Checkbox Selector Component

$(function() {


  // The button should be in the `select` state if there are more unchecked checkboxes than checked,
  // if there are not more unchecked than checked it should be in the `unselect` state
  function update_status(context){
    let group = $(context).attr('data-check-selector-group');
    let checked = 0;
    let unchecked = 0;

    console.log('Checkbox Changed!');

    // check state of all checkboxes in the group
    $(`input[type="checkbox"][data-check-selector-group="${group}"]`).each(function(index){
      if($(this).prop('checked')) {
        checked += 1;
      } else {
        unchecked += 1;
      }
    });

    if( checked <= unchecked ) {
      select(group);
    } else {
      unselect(group);
    }
  }

  function select(group){
    console.log('Change button to select.');
    $(`[data-check-selector-for="${group}"]`).removeClass('is-unselect');
    $(`[data-check-selector-for="${group}"]`).addClass('is-select');
    $(`[data-check-selector-for="${group}"]`).attr('data-check-selector-state', 'select');
  }

  function unselect(group){
    console.log('Change button to unselect.');
    $(`[data-check-selector-for="${group}"]`).removeClass('is-select');
    $(`[data-check-selector-for="${group}"]`).addClass('is-unselect');
    $(`[data-check-selector-for="${group}"]`).attr('data-check-selector-state', 'unselect');
  }

  // Check and update the button status everytime a checkbox is checked or unchecked
  $('input[type="checkbox"][data-check-selector-group]').on('change', function(){
    update_status(this);
  });

  $('input[type="checkbox"][data-check-selector-group]').each(function(){
    update_status(this);
  });



  // If a select/unselect button is clicked, make the grouped checkboxes checked/unchecked.
  $('[data-check-selector-for]').on('click', function(event){
    event.preventDefault();

    let $button = $(this);
    let group = $button.attr('data-check-selector-for');
    let state = $button.attr('data-check-selector-state');

    if(state == 'select'){
      $(`input[type="checkbox"][data-check-selector-group="${group}"]`).prop('checked', true);
      unselect(group);
    } else {
      $(`input[type="checkbox"][data-check-selector-group="${group}"]`).prop('checked', false);
      select(group);
    }

  });

});
