"use strict";
// Search Component

$(function() {
  function liveSearch(){

    let delay = null;




    $('[data-search="live"]').find('.search-from-search-text').on('keyup', function(event) {

      clearTimeout(delay);

      let $form = $(this).parents('[data-search="live"]');
      let target = $form.data('target');
      let searchText = event.target.value;
      let url = $form.attr('action');

      console.log('typed: ' + searchText);

      if(searchText.lenght <= 2){
        // clear target
        $target.html(' ');
      } else {
        //delay = setTimeout(function(){ performSearch(searchText, target, url, $) }, 500);
        performSearch(searchText, target, url)
      }

      //setTimeout(function(){ alert("Hello"); }, 3000);

    });

  }

  function performSearch(searchText, target, url){
    console.log('search: ' + searchText);
    console.log(target);
    console.log($(target));
    console.log('url:' + url);
    // load here
    $(target).load(url, { search: searchText });
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
