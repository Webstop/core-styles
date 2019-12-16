"use strict";

// NOTE: this file must be loaded **before** ahoy.js

// Ahoy Config

// Non-jQuery version


(function(){
  let retailerID  = document.body.getAttribute('data-retailer-id');
  let environment = document.body.getAttribute('data-environment');
  let apiHost     = document.body.getAttribute('data-api-host');

  console.log('retailerID: ' + retailerID);
  console.log('environment: ' + environment);
  console.log('apiHost: ' + apiHost);

  if (environment == 'production') {
    apiHost = 'https://api.grocerywebsite.com';
  } else if (environment == 'development') {
    apiHost = 'http://grocery.local:3000';
  }

  window.ahoy = {
    visitParams: {retailer_id: retailerID},
    visitsUrl: apiHost + "/ahoy/visits",
    //eventsUrl: apiHost + "/ahoy/events"
    eventsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/track/event.json"
  };
})();

// jQuery Version

// $(function() {
//
//   let $body = $('body');
//   let retailerID = $body.data('retailer-id');
//   let environment = $body.data('environment');
//   let apiHost = $body.data('api-host');
//
//   if (environment == 'production') {
//     apiHost = 'https://api.grocerywebsite.com';
//   } else if (environment == 'development') {
//     apiHost = 'http://grocery.local:3000';
//   }
//
//   window.ahoy = {
//     visitParams: {retailer_id: retailerID},
//     visitsUrl: apiHost + "/ahoy/visits",
//     eventsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/track/event.json"
//   };
//
// });

