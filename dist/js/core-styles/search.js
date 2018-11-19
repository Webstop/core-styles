"use strict";
// Search Component

$(function() {
  function liveSearch(){

    let delay = null;

    function performSearch(search_text, $target, url){
      console.log('search: ' + search_text);
      // load here
      // $target.load(url);
    }


    $('[data-search="live"]').find('.search-from-search-text').on('keyup', function(event) {

      clearTimeout(delay);

      let $form = $(this).parents('[data-search="live"]');
      let $target = $($form.data('target'));
      let search_text = event.target.value;
      let url = $form.attr('action');

      if(search_text.lenght <= 2){
        // clear target
        $target.html(' ');
      } else {
        delay = setTimeout(performSearch.bind(undefined, search_text, $target, url), 500);
      }



      console.log('search key up');
      console.log($(this).attr('class'));

      console.log('typed: ' + search_text);
    });

  }

  liveSearch();
});



var timeoutID = null;

function findMember(str) {
  console.log('search: ' + str);
}

$('#target').keyup(function(e) {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(findMember.bind(undefined, e.target.value), 500);
});
