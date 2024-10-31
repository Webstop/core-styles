"use strict";

// Aye

// Please Note: this file is divided into 2 sections (I & II).
// Section I is the newer code that has been refactored into Vanilla JS.
// Section II is the older jQuery based code that still needs to be converted to Vanilla JS.

// Section I: Newer Vanilla JS version. Namespaced into window.webstop.aye
(function( webstop ) {

  // Public Sub-Class
  webstop.aye = {}
  // Aye data attributes
  let attrView     = 'data-aye-view';
  let attrClick    = 'data-aye-click';
  let attrSubmit   = 'data-aye-submit';
  let attrWatching = 'data-aye-watching';


  webstop.aye.cargo = function(element){
    let properties = {};
    properties['store_number'] = webstop.storeNumber;
    for(let attribute of element.attributes) {
      if(attribute.name.indexOf('data-aye-property-')===0) {
        properties[attribute.name.slice(18).split("-").join("_").toLowerCase()] = attribute.value;
      } else if(attribute.name == attrClick || attribute.name == attrView || attribute.name == attrSubmit || attribute.name == attrWatching ){
        // skip these attributes
      } else if(attribute.name.indexOf('data-aye-')===0) {
        properties[attribute.name.slice(9).split("-").join("_").toLowerCase()] = attribute.value;
      }
    }
    return properties;
  }

  webstop.aye.formidable = function(element, cargo = {}) {
    let fields = element.querySelectorAll('input,select,textarea,output');
    fields.forEach((field) => {
      let value = field.value;
      field.getAttributeNames().forEach((attr) => {
        if (attr.indexOf('data-aye-property-') === 0) {
          cargo[attr.slice(18).split('-').join('_').toLowerCase()] = value;
        }
      });
    });

    return cargo;
  }

  webstop.aye.track = function(name, element){
    let cargo = webstop.aye.cargo(element);
    let ahoyName = name + ' ';
    if(name === 'submit') {
      cargo = webstop.aye.formidable(element, cargo);
      ahoyName += element.getAttribute(attrSubmit);
    } else if(name === 'click') {
      ahoyName += element.getAttribute(attrClick);
    } else if(name === 'view') {
      ahoyName += element.getAttribute(attrView);
    }
    ahoy.track(ahoyName, cargo);
  }

  webstop.aye.watch = function(){
    let clickables = document.querySelectorAll('[data-aye-click]:not([data-aye-watching])');
    let submitables = document.querySelectorAll('[data-aye-submit]:not([data-aye-watching])');
    let viewables = document.querySelectorAll('[data-aye-view]:not([data-aye-watching])');

    clickables.forEach(function(element) {
      webstop.aye.listen('click', element);
    });

    submitables.forEach(function(element) {
      webstop.aye.listen('submit', element);
    });

    viewables.forEach(function(element) {
      if(element.hasAttribute(attrWatching) === false){
        element.setAttribute(attrWatching, '');
        webstop.aye.track('view', element);
      }
    });

  }

  // Name can be 'click', 'submit', or 'view'
  webstop.aye.listen = function(name, element){
    if(element.hasAttribute(attrWatching) === false){
      element.setAttribute(attrWatching, '');
      element.addEventListener(name, function() {
        webstop.aye.track(name, this);
      });
    }
  }

  webstop.aye.start = function(){

    // Live executes the watch script once at init, so we don't have to run it again in here.
    // webstop.aye.watch();
    webstop.live(webstop.aye.watch);
  }


  // Starts Aye tracking only when the DOM is ready.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", webstop.aye.start);
  } else {
    webstop.aye.start();
  }

})( window.webstop = window.webstop || {} );

