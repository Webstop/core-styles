"use strict";
// Search Component

$(function() {

  function liveSearch(){
    let delay = null;

    $('[data-search="live"]').find('.search-from-search-text').on('keyup', function(event) {
      clearTimeout(delay);
      let $form = $(this).parents('[data-search="live"]');
      let target = $form.data('target');
      let search = event.target.value;
      let url = $form.attr('action');
      //console.log('typed: ' + search);

      if(search.length <= 2){
        $(target).html('');
      } else {
        delay = setTimeout(function(){ performSearch(search, target, url) }, 500);
      }
    });
  }

  function performSearch(search, target, url){
    //console.log('search: ' + search);
    $(target).load(url, { search: search });
  }

  liveSearch();
});

