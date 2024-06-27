"use strict";

// NOTE: this file must be loaded **before** ahoy.js. Don't use jQuery or any other lib that requires an object to execute before the code executes.

(function(webstop, ahoy){

  let retailerID= document.body.getAttribute('data-retailer-id');
  let apiHost   = document.body.getAttribute('data-api-host');
  let webHost   = document.body.getAttribute('data-web-host');

  webstop.retailerID = retailerID;
  webstop.apiHost    = apiHost;
  webstop.webHost    = webHost;

  ahoy.visitParams   = {retailer_id: retailerID};
  ahoy.visitsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/visit.json";
  ahoy.eventsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/event.json";

})( window.webstop = window.webstop || {},  window.ahoy = window.ahoy || {} );
