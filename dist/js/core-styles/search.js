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

      console.log('typed: ' + search);

      if(search.length <= 2){
        // clear target
        $(target).html('');
      } else {
        delay = setTimeout(function(){ performSearch(search, target, url) }, 500);
        //performSearch(search, target, url)
      }

      //setTimeout(function(){ alert("Hello"); }, 3000);

    });

  }

  function performSearch(search, target, url){
    console.log('search: ' + search);
    console.log(target);
    console.log($(target));
    console.log('url:' + url);
    // load here
    $(target).load(url, { search: search });
  }

  liveSearch();
});

// var timeoutID = null;
//
// function findMember(str) {
//   console.log('search: ' + str);
// }
//
// $('#target').keyup(function(e) {
//   clearTimeout(timeoutID);
//   timeoutID = setTimeout(findMember.bind(undefined, e.target.value), 500);
// });
