"use strict";

// Tag Search


(function(){

  function tagSearch(){
    let delay = null;

    $('[data-tag-search]').on('keyup', function(event) {
      clearTimeout(delay);
      const search_text   = event.target.value;
      const tagging = setTagging(this, search_text);

      if(search_text.length <= 2){
        exitTagSearch(tagging);
      } else {
        delay = setTimeout(function(){ performTagSearch(tagging) }, 100);
      }
    });

  }

  function setTagging(search_this, search_text) {
    const $search  = $(search_this);
    const target   = $search.data('tag-search-target');
    const display  = $search.data('tag-search-display');
    const results  = $search.data('tag-search-results');

    const tagging = {
      search_text: search_text,
      search_this: search_this,
      target:   target,
      display:  display,
      results:  results,
      $search:  $search,
      $target:  $(target),
      $display: $(display),
      $results: $(results)
    }
    return tagging;
  }

  $('[data-tag-search]').each(function() {
    const tagging = setTagging(this, '');
    displayTags(tagging);
  });


  function makeTagResultsActive(){
    $('[data-tag-add]').on('click', function(event){
      event.preventDefault();

      const tagging = setTagging(this, '');
      let   tags    = trimArray(tagging.$target.val().split(','));
      const newTag  = tagging.$search.text().trim();

      //tags.indexOf(newTag) === -1 ? tags.push(newTag) : console.log("This tag already exists.");
      tags.push(newTag);
      tagging.$target.val(removeLeadingComma(uniqArraySort(tags).join()));

      displayTags(tagging);
      exitTagSearch(tagging);
    });
  }

  function displayTags(tagging){
    const tags  = trimArray(tagging.$target.val().split(','));
    let   items = [];
    let   html  = '';

    tags.forEach(function(tag){
      if(tag) {
        items.push(`<span class="tag bg-secondary"> ${tag} <span data-tag-search-remove-tag data-tag-text="${tag}"><i class="icon-cancel ml-1"></i></span></span>`);
      }
    });
    html = items.join('');
    tagging.$display.html(html);
    makeRemoveTagsActive(tagging);
  }

  function makeRemoveTagsActive(tagging){
    tagging.$display.find('[data-tag-search-remove-tag]').on('click', function(event){
      event.preventDefault();
      const tag   = $(this).data('tag-text');
      let   tags  = uniqArraySort(trimArray(tagging.$target.val().split(',')));
      const index = tags.indexOf(tag);

      tags.splice(index, 1);
      tagging.$target.val(removeLeadingComma(uniqArraySort(tags).join()));

      displayTags(tagging);
    });
  }

  function exitTagSearch(tagging){
    $('[data-tag-add]').val('');
    tagging.$results.html('');
  }

  function performTagSearch(tagging){
    const url = window.webstop.apiHost + '/api/v1/tags/search';
    $.getJSON( `${url}?search=${tagging.search_text}`, function(data){renderTagSearchResults(data, tagging)});
  }

  function renderTagSearchResults(data, tagging){
    let html;
    let items = [];

    $.each( data, function( position, record ) {
      $.each( record, function( key, value ) {
        if(key == 'name'){
          items.push(`<button type="button" class="list-group-item list-group-item-action" data-tag-add data-tag-search-target="${tagging.target}" data-tag-search-display="${tagging.display}" data-tag-search-results="${tagging.results}" data-tag-search-value="${value}">${value}</button>`);
        }
      });
    });

    items.push(`<button type="button" class="list-group-item list-group-item-action" data-tag-add data-tag-search-target="${tagging.target}" data-tag-search-display="${tagging.display}" data-tag-search-results="${tagging.results}" data-tag-search-value="${tagging.search_text}">Create New "${tagging.search_text}" Tag.</button>`);


    html  = '<div class="list-group">';
    html += items.join('');
    html += '</div>';

    tagging.$results.html(html);
    makeTagResultsActive();
  }

  // Utilities
  function trimArray(a){
    let trim_a = [];
    a.forEach(function(i){
      trim_a.push(i.trim());
    });
    return trim_a;
  }

  function uniqArraySort(a) {
    return a.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
    })
  }

  function removeLeadingComma(text){
    if (text[0] == ',') {
      text = text.substring(1);
    }
    return text;
  }

  tagSearch();

})();


