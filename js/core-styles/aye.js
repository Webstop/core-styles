"use strict";
// Aye

$(function() {

  let $body = $('body');
  let retailerID  = $body.data('retailer-id');
  let environment = $body.data('environment');
  let apiHost = '';

  if(environment == 'production'){
    apiHost = 'https://api.grocerywebsite.com';
  } else if(environment == 'development'){
    apiHost = 'http://grocery.local:3000';
  } else if(environment.indexOf('core')===0){
    apiHost = 'http://grocery.local:3000';
  }

  ahoy.configure({
    visitParams: {retailer_id: retailerID},
    visitsUrl: apiHost + "/ahoy/visits",
    //eventsUrl: "/ahoy/events"
    eventsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/track/event.json"
  });

  //ahoy.track('Aye! Loaded!', {app: 1, title: 'aye.js file loaded'});
  ahoy.track('Aye! Loaded!', {retailer_id: 1234, source: 'In consumer.js file.', app_id: 2, category: 'Consumer', resource: 'Consumer', resource_id: 123})


  //ahoy.trackClicks();


  // Here we set the thee possible events types data-aye-view, data-aye-click, & data-aye-submit

  // Sends an ahoy track when the element is served to the browser.
  $('[data-aye-view]').each(function(){
    let $element = $(this);
    let cargo = ayeCargo($element);
    ahoy.track('view ' + $element.attr('data-aye-view'), cargo);
  });

  // Sends an ahoy track when the user clicks on the element.
  $('[data-aye-click]').on('click', function(){

    ahoy.track('click triggered!', {app: 1, context: 'Foo', context_id: '1', title: 'foo'});

    console.log('data-aye-click triggered!');
    let $element = $(this);
    let cargo = ayeCargo(this);
    console.log('cargo set!');
    console.log('cargo: ' + cargo);
    ahoy.track('click ' + $element.attr('data-aye-click'), cargo);
  });

  // Sends an ahoy track when a form is submitted. Place on the form tag.
  $('[data-aye-submit]').on('submit', function(){
    let $element = $(this);
    let cargo = ayeCargo($element);
    ahoy.track('submit ' + $element.attr('data-aye-submit'), cargo);
  });

  // The next two functions gather the data the format it for submitting to ahoy.track
  function ayeCargo(element){

    let properties = {};
    console.log('element.attributes: ' + element.attributes);
    $.each(element.attributes, function( index, attr ) {
      console.log('attr.name: ' + attr.name);
      console.log('attr.value: ' + attr.value);
      if(attr.name.indexOf('data-aye-property-')===0) {
        console.log('property: ' + attr.name.slice(18).split("-").join("_").toLowerCase());

        properties[attr.name.slice(18).split("-").join("_").toLowerCase()] = attr.value;
      }else if(attr.name == 'data-aye-click' || attr.name == 'data-aye-view' || attr.name =='data-aye-submit' ){
        // skip these attributes
        console.log('skip');
      }else if(attr.name.indexOf('data-aye-')===0) {
        console.log('attribute: ' + attr.name.slice(9).split("-").join("_").toLowerCase());
        properties[attr.name.slice(9).split("-").join("_").toLowerCase()] = attr.value;

        console.log('attribute value: ' + properties[attr.name.slice(9).split("-").join("_").toLowerCase()]);
      }



    });

    console.log('properties: ' + JSON.stringify(properties));
    return properties;
  }

  // function ayeCargo(element){
  //   let property_names = [];
  //   let attribute_names = [];
  //   console.log('element.attributes: ' + element.attributes);
  //   $.each(element.attributes, function( index, attr ) {
  //     console.log('attr.name: ' + attr.name);
  //     if(attr.name.indexOf('data-aye-property-')===0) {
  //       property_names.push(attr.name);
  //     }else if(attr.name == 'data-aye-click' || attr.name == 'data-aye-view' || attr.name =='data-aye-submit' ){
  //       // skip these attributes
  //     }else if(attr.name.indexOf('data-aye-')===0) {
  //       attribute_names.push(attr.name)
  //     }
  //
  //     let properties = ayePrepareCargo(property_names,  'data-aye-property-', element);
  //     let attributes = ayePrepareCargo(attribute_names, 'data-aye-', element);
  //
  //     // properties.keys.forEach(function(key){
  //     //   attributes[key] = properties[key];
  //     // });
  //
  //     return attributes;
  //   });
  // }

  // function ayeCargo(target){
  //   let property_names = [];
  //   let attribute_names = [];
  //   $.each(target.attributes, function( index, attr ) {
  //     if(attr.name.indexOf('data-aye-property-')===0) {
  //       property_names.push(attr.name);
  //     }else if(attr.name == 'data-aye-click' || attr.name == 'data-aye-view' || attr.name =='data-aye-submit' ){
  //       // skip these attributes
  //     }else if(attr.name.indexOf('data-aye-')===0) {
  //       attribute_names.push(attr.name)
  //     }
  //
  //     let properties = ayePrepareCargo(property_names,  'data-aye-property-', $element);
  //     let attributes = ayePrepareCargo(attribute_names, 'data-aye-', $element);
  //
  //     properties.keys.forEach(function(key){
  //       attributes[key] = properties[key];
  //     });
  //
  //     return attributes;
  //   });
  // }


  function ayePrepareCargo(names, remove, element){
    let results = {};
    let $element = $(element);
    names.forEach(function(name){
      results[name] = $element.attr(name);
    });
    return results;
  }


});

// ahoy.trackClicks = function () {
//   onEvent("click", "a, button, input[type=submit]", function (e) {
//     let target = e.target;
//     let properties = eventProperties(e);
//     properties.text = properties.tag == "input" ? target.value : (target.textContent || target.innerText || target.innerHTML).replace(/[\s\r\n]+/g, " ").trim();
//     properties.href = target.href;
//     ahoy.track("$click", properties);
//   });
// };
//
//
// function onEvent(eventName, selector, callback) {
//   document.addEventListener(eventName, function (e) {
//     if (matchesSelector(e.target, selector)) {
//       callback(e);
//     }
//   });
// }
//
// function matchesSelector(element, selector) {
//   let matches = element.matches ||
//     element.matchesSelector ||
//     element.mozMatchesSelector ||
//     element.msMatchesSelector ||
//     element.oMatchesSelector ||
//     element.webkitMatchesSelector;
//
//   if (matches) {
//     return matches.apply(element, [selector]);
//   } else {
//     log("Unable to match");
//     return false;
//   }
// }
//
// function cleanObject(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (obj[key] === null) {
//         delete obj[key];
//       }
//     }
//   }
//   return obj;
// }
//
// function eventProperties(e) {
//   let target = e.target;
//   return cleanObject({
//     tag: target.tagName.toLowerCase(),
//     id: presence(target.id),
//     "class": presence(target.className),
//     page: page(),
//     section: getClosestSection(target)
//   });
// }
//
// function getClosestSection(element) {
//   for ( ; element && element !== document; element = element.parentNode) {
//     if (element.hasAttribute('data-section')) {
//       return element.getAttribute('data-section');
//     }
//   }
//
//   return null;
// }
//
// function presence(str) {
//   return (str && str.length > 0) ? str : null;
// }
//
// function page() {
//   return window.location.pathname;
//}
