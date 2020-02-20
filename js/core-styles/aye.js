"use strict";

// Aye

$(function() {
  // Here we set the thee possible events types data-aye-view, data-aye-click, & data-aye-submit

  // Sends an ahoy track when the element is in the viewport on page load
/*
  var porthole = new InTheViewport('[data-aye-view]', {
  	proportion: 0.2
  });
  porthole.init()
*/
  
  ayePortHoleView();
  
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
  
  // Sends an ahoy track when the element is in the view after a scroll
  $(window).scrollEnd(function() {
    ayePortHoleView();
  }, 500);

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
  
  function ayePortHoleView(){
    $('[data-aye-view]').each(function(){
      if($(this).visible()) {

      	let $element = $(this);
      	let cargo = ayeCargo(this);
/*
        ahoy.track('view ' + $element.attr('data-aye-view'), cargo);
*/
        alert("Element is in the viewport");        
        $element.removeAttr("data-aye-view");
      }
    });
  }

});
// extension:
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
