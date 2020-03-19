"use strict";

// Aye

$(function() {
  // Here we set the thee possible events types data-aye-view, data-aye-click, & data-aye-submit

  // Sends an ahoy track when the element is served to the browser.
  $('[data-aye-view]').each(function(){
    let $element = $(this);
    let cargo = ayeCargo(this);
    ahoy.track('view ' + $element.attr('data-aye-view'), cargo);
  });

  // Sends an ahoy track when the user clicks on the element.
  $('[data-aye-click]').on('click', function(){
    let $element = $(this);
    let cargo = ayeCargo(this);
    ahoy.track('click ' + $element.attr('data-aye-click'), cargo);
  });

  // Sends an ahoy track when a form is submitted. Place on the form tag.
  $('[data-aye-submit]').on('submit', function(){
    let $element = $(this);
    let cargo = ayeCargo(this);
    cargo = ayeFormidable($element, cargo);
    ahoy.track('submit ' + $element.attr('data-aye-submit'), cargo);
  });


  // The next two functions (ayeCargo & ayeFormidable) gather data and format it for submitting to ahoy.track

  // ayeCargo gathers Aye data attributes from an HTML element and formats them for API usage.
  function ayeCargo(element){
    let properties = {};
    $.each(element.attributes, function( index, attr ) {
      if(attr.name.indexOf('data-aye-property-')===0) {
        properties[attr.name.slice(18).split("-").join("_").toLowerCase()] = attr.value;
      } else if(attr.name == 'data-aye-click' || attr.name == 'data-aye-view' || attr.name =='data-aye-submit' ){
        // skip these attributes
      } else if(attr.name.indexOf('data-aye-')===0) {
        properties[attr.name.slice(9).split("-").join("_").toLowerCase()] = attr.value;
      }
    });
    return properties;
  }

  // ayeFormidable gathers Aye data attributes from HTML form elements and formats them for API usage.
  function ayeFormidable($element, cargo = {}){
    $element.find('input,select,textarea,output').each(function(index){
      let value = this.value;
      $.each(this.attributes, function( index, attr ) {
        if(attr.name.indexOf('data-aye-property-')===0) {
          cargo[attr.name.slice(18).split("-").join("_").toLowerCase()] = value;
        }
      });
    });
    return cargo;
  }

});


// window.webstop = {
//   retailerID: retailerID,
//   environment: environment,
//   apiHost: apiHost
// };
//data-aye-tag-search data-aye-tag-search-target="#tag-search-target" data-aye-tag-search-display="#tag-search-display"

//     <span class="badge badge-secondary"><i class="icon-tag-tilted"></i> some tag <button  data-aye-tag-text="some tag" data-aye-tag-search-target="#tag-search-target" data-aye-tag-search-display="#tag-search-display"><i class="icon-cancel-circle-solid ml-1"></i></button></span>

function tagSearch(){
  let delay = null;

  $('[data-aye-tag-search]').on('keyup', function(event) {
    clearTimeout(delay);
    const $this    = $(this);
    const target   = $this.data('aye-tag-search-target');
    const display  = $this.data('aye-tag-search-display');
    const results  = $this.data('aye-tag-search-results');
    const search   = event.target.value;

    if(search.length <= 2){
      exitTagSearch(results);
    } else {
      delay = setTimeout(function(){ performTagSearch(search, target, display, results) }, 250);
    }
  });

}

$('[data-aye-tag-search]').each(function() {
  const $this    = $(this);
  const target   = $this.data('aye-tag-search-target');
  const display  = $this.data('aye-tag-search-display');
  displayTags(target, display);
});


function makeTagButtonsActive(){
  $('[data-aye-tag-add]').on('click', function(event){
    event.preventDefault();
    const $this     = $(this);
    const target    = $this.data('aye-tag-search-target');
    const results   = $this.data('aye-tag-search-results');
    // let   tags     = $(target).val().split('[,]{1}[\\s]?');
    let   tags      = trimArray($(target).val().split(','));
    const newTag    = $this.text();
    const display   = $this.data('aye-tag-search-display');

    tags.push(newTag.trim());
    $(target).val(tags.join());

    displayTags(target, display);
    exitTagSearch(results);
  });
}

function displayTags(target, display){
  const tags  = trimArray($(target).val().split(','));
  let   items = [];
  let   html  = '';

  //tags = tags.split('[,]{1}[\\s]?');


  console.log('tags: ' + tags);

  console.log('Display All Tags:');

  tags.forEach(function(tag){
    items.push(`<span class="tag bg-secondary"> ${tag} <span data-aye-tag-text="${tag}" data-aye-tag-search-target="${target}" data-aye-tag-search-display="${display}"><i class="icon-cancel ml-1"></i></span></span>`);
    console.log(tag);
  });
  html = items.join('');
  $(display).html(html);
}

function exitTagSearch(results){
  $('[data-aye-tag-add]').val('');
  $(results).html('');
}

function performTagSearch(search, target, display, results){
  const url = window.webstop.apiHost + '/api/v1/aye/tags';

  $.getJSON( `${url}?search=${search}`, function(data){renderTagSearchResults(data, target, display, results)});

}

function trimArray(a){
  let trim_a = [];
  a.forEach(function(i){
    trim_a.push(i.trim());
  });
  return trim_a;
}

function renderTagSearchResults(data, target, display, results){
  let html;
  let items = [];

  $.each( data, function( position, record ) {
    $.each( record, function( key, value ) {
      if(key == 'name'){
        items.push(`<button type="button" class="list-group-item list-group-item-action" data-aye-tag-add data-aye-tag-search-target="${target}" data-aye-tag-search-display="${display}" data-aye-tag-search-results="${results}">${value}</button>`);
      }
    });
  });

  html  = '<div class="list-group">';
  html += items.join('');
  html += '</div>';

  $(results).html(html);
  makeTagButtonsActive();
}

tagSearch();
