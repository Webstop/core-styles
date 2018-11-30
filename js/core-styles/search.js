"use strict";
// Search Component

$(function() {

  function liveSearch(){
    let delay = null;

    $('[data-search="live"]').find('.search-from-search-text').on('keyup', function(event) {
      clearTimeout(delay);
      let $form = $(this).parents('[data-search="live"]');
      let target = $form.data('target');
      let hide = $form.data('hide');
      let url = $form.attr('action');
      let search = event.target.value;

      if(search.length <= 2){
        exitSearch(target);
      } else {
        let data = $form.serializeArray();
        delay = setTimeout(function(){ performSearch(data, target, hide, url) }, 500);
      }
    });

    $('[data-search="live"]').find('.search-form-clear').on('click', function(event) {
      event.preventDefault();
      let $form = $(this).parents('[data-search="live"]');
      let target = $form.data('target');
      let reveal = $form.data('hide');
      let $clear = $form.find('.search-from-search-text');
      exitSearch(target, reveal, $clear);
    });
  }

  function exitSearch(target, reveal = null, $clear = null){
    if($clear != null){
      $clear.val('');
    }
    let $target = $(target);
    $target.html('');
    $target.hide();
    if(reveal != null){
      $(reveal).show();
    }
  }

  function performSearch(data, target, hide, url){
    let $target = $(target);
    $(hide).hide();
    $target.show('fast', function(){
      $target.load(url, data);
    });
  }

  liveSearch();
});

