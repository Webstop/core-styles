"use strict";
// Ajax Load Component

$(function() {

  $('[data-ajax-load]').on('click', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.data('load');
    let target = $this.data('target');

    if( $this.is('[data-power-bar]') ){
      $(target).load(url,loadShoppingListPowerBar());
    } else {
      $(target).load(url);
    }

  });

});
