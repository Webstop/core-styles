"use strict";
// Ajax Load Component

$(function() {

  $('[data-ajax-load]').on('click', function(event){
    event.preventDefault();

    console.log('data-ajax triggered');

    let $this = $(this);
    let url = $this.attr('data-load');
    let target = $this.attr('data-target');

    console.log('url: ' + url);
    console.log('target: ' + target);

    $(target).load(url);
  });

});
