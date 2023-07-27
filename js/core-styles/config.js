"use strict";

/**
 * Ahoy Config
 * NOTE: this file must be loaded **before** ahoy.js. Don't use jQuery or any
 * other lib that requires an object to execute before the code executes.
 */

(function(){
  let retailerID  = document.body.getAttribute('data-retailer-id');
  let apiHost = document.body.getAttribute('data-api-host');

  window.webstop = {
    retailerID: retailerID,
    apiHost: apiHost
  };

  window.ahoy = {
    visitParams: {retailer_id: retailerID},
    visitsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/aye/visit.json",
    eventsUrl: apiHost + "/api/v1/retailers/" + retailerID + "/aye/event.json"
  };
})();
