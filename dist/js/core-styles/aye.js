"use strict";

// Aye

$(function() {

  // let $body = $('body');
  // let retailerID  = $body.data('retailer-id');
  // let environment = $body.data('environment');
  // let apiHost = $body.data('api-host');
  //
  // if(environment == 'production'){
  //   apiHost = 'https://api.grocerywebsite.com';
  // } else if(environment == 'development'){
  //   apiHost = 'http://grocery.local:3000';
  // }
  //
  // ahoy.configure({
  //   visitParams: {retailer_id: retailerID},
  //   visitsUrl: apiHost + "/ahoy/visits",
  //   eventsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/track/event.json"
  // });

  //ahoy.track('Aye! Loaded!', {app: 1, title: 'aye.js file loaded'});
  //ahoy.track('Aye! Loaded!', {retailer_id: 1234, source: 'In consumer.js file.', app_id: 2, category: 'Consumer', resource: 'Consumer', resource_id: 123})


  // Here we set the thee possible events types data-aye-view, data-aye-click, & data-aye-submit

  // Sends an ahoy track when the element is served to the browser.
  $('[data-aye-view]').each(function(){
    let $element = $(this);
    let cargo = ayeCargo($element);
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
    let cargo = ayeCargo($element);
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
      $.each(this.attributes, function( index, attr ) {
        if(attr.name.indexOf('data-aye-property-')===0) {
          cargo[attr.name.slice(18).split("-").join("_").toLowerCase()] = attr.value;
        }
      });
    });
    return cargo;
  }

});

