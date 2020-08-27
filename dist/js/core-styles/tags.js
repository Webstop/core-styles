"use strict";

// Tag Search


(function(){

  function tagSearch(){
    let delay = null;

    $('[data-tag-search]').on('keyup', function(event) {
      clearTimeout(delay);
      const searchText   = event.target.value;
      const tagging = setTagging(this, searchText);

      if(searchText.length <= 2){
        exitTagSearch(tagging);
      } else {
        delay = setTimeout(function(){ performTagSearch(tagging) }, 100);
      }
    });

  }

  function setTagging(searchThis, searchText) {
    const $search    = $(searchThis);
    const searchId   = '#' + $search.attr('id');
    const targetId   = $search.data('tag-search-target');
    const displayId  = $search.data('tag-search-display');
    const resultsId  = $search.data('tag-search-results');

    const tagging = {
      searchText: searchText,
      searchId:   searchId,
      targetId:   targetId,
      displayId:  displayId,
      resultsId:  resultsId,
      $search:    $search,
      $target:    $(targetId),
      $display:   $(displayId),
      $results:   $(resultsId)
    };
    console.log('Tagging Set');
    console.log(`searchText: ${searchText}`);
    console.log(`searchId:   ${searchId}`);
    console.log(`targetId:   ${targetId}`);
    console.log(`displayId:  ${displayId}`);
    console.log(`resultsId:  ${resultsId}`);
    return tagging;
  }

  $('[data-tag-search]').each(function() {
    const tagging = setTagging(this, '');
    displayTags(tagging);
  });


  function makeTagResultsActive(){
    $('[data-tag-add]').on('click', function(event){
      event.preventDefault();
      const searchId = $(this).data('tag-search-id');
      const tagging  = setTagging(searchId, '');
      let   tags     = trimArray(tagging.$target.val().split(','));
      const newTag   = $(this).data('tag-search-value').trim();

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
    //$('[data-tag-add]').val('');
    tagging.$results.html('');
  }

  function performTagSearch(tagging){
    const url = window.webstop.apiHost + '/api/v1/tags/search';
    $.getJSON( `${url}?search=${tagging.searchText}`, function(data){renderTagSearchResults(data, tagging)});
  }

  function renderTagSearchResults(data, tagging){
    let html;
    let items = [];

    $.each( data, function( position, record ) {
      $.each( record, function( key, value ) {
        if(key == 'name'){
          //items.push(`<button type="button" class="list-group-item list-group-item-action" data-tag-add data-tag-search-target="${tagging.targetId}" data-tag-search-display="${tagging.displayId}" data-tag-search-results="${tagging.resultsId}" data-tag-search-value="${value}">${value}</button>`);
          items.push(`<button type="button" class="list-group-item list-group-item-action" data-tag-add data-tag-search-id="${tagging.searchId}" data-tag-search-value="${value}">${value}</button>`);
        }
      });
    });

    items.push(`<button type="button" class="list-group-item list-group-item-secondary list-group-item-action" data-tag-add data-tag-add data-tag-search-id="${tagging.searchId}" data-tag-search-value="${tagging.searchText}"><em class="text-muted">Create New "</em>${tagging.searchText}<em class="text-muted">" Tag.</em></button>`);

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


