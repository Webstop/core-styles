"use strict";

(function(){

  // Check for Cookies JS
  function cookiesAvailable(){
    if (typeof Cookies == "undefined") {
      console.log('Cookies Undefined.');
      setTimeout(function (){cookies_available()}, 500);
    } else {
      console.log('Cookies Defined.');
      setCircularFormat()
    }
  }

  function setCircularFormat(){
    // This should set the cookie for iPad (768) and smaller
    console.log('body width: ' + document.body.clientWidth);
    if(document.body.clientWidth < 770 ){
      console.log('Setting cookie...');
      // set cookies here
      let name = window.webstop.retailerID + '_circular_format';
      console.log('cookie name: ' + name);
      Cookies.set(name, 'online', {expires: 365}); // Note: many browsers cap JS set cookies to 7 days max.
    }
  }

  cookiesAvailable();
})();
