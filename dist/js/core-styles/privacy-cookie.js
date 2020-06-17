"use strict";

// privacy cookie

$(function() {

  $('.privacy-close').on('click', function(){
	// set cookie for sessions
	Cookies.set('privacy_terms', '1');	
	$('.privacy').remove();
  });
  
  // set cookie for expiration of perhaps 180 days
  $('.privacy-accept').on('click', function() {
	 Cookies.set('privacy_terms','1', {expires: 180});
  	$('.privacy').remove();
  });

});
