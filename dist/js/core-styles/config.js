"use strict";

// NOTE: this file must be loaded **before** ahoy.js. Don't use jQuery or any other lib that requires an object to execute before the code executes.

// Ahoy Config

(function(){
  let retailerID  = document.body.getAttribute('data-retailer-id');
  let environment = document.body.getAttribute('data-environment');
  let apiHost     = document.body.getAttribute('data-api-host');

  if (environment == 'production') {
    apiHost = 'https://api.grocerywebsite.com';
  } else if (environment == 'development') {
    apiHost = 'http://grocery.local:3000';
  }

  window.webstop = {
    retailerID: retailerID,
    environment: environment,
    apiHost: apiHost
  };

  window.ahoy = {
    visitParams: {retailer_id: retailerID},
    //visitsUrl: apiHost + "/ahoy/visits",
    //eventsUrl: apiHost + "/ahoy/events"
    visitsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/aye/visit.json",
    eventsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/aye/event.json"
  };
})();


