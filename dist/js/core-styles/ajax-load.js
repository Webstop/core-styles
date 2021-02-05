"use strict";
// Ajax Load Component

$(function() {

  $('[data-ajax-load]').on('click', function(event){
    let $this = $(this);
    let url = $this.data('load');
    let $target = $this;

    if( $this.is('[data-target]') ){
      $target = $($this.data('target'));
    } else {
      if($this.parent().is('.ajax-form-container')) {
      }  else {
        $this.wrap( "<div class='ajax-form-container'></div>" );
      }
      $target = $this.parent();
    }


    if( $this.is('[data-disable-loading-indicator]') ) {
    } else {
      if( $this.is('input[type="submit"]') ) {
        $this.val('Loading...');
      } else {
        $this.text('Loading...');
      }
      if( $this.is('button') || $this.is('input[type="submit"]') ) { $this.prop('disabled', true); }
    }

    $target.load(url,function(){
      if( $this.is('[data-power-bar]') ){ loadShoppingListPowerBar(); }
      if( $this.is('[data-load-on-callback]') && $this.is('[data-target-on-callback]') ){
        loadOnCallback();
      }
    });

    function loadOnCallback() {
      let callbackUrls = $this.data('load-on-callback').split(',');
      let callbackTargets = $($this.data('target-on-callback'));
      callbackUrls.forEach(function(callbackUrl, index){
        let $callbackTarget = $(callbackTargets[index]);
        $callbackTarget.load(callbackUrl);
      });
    }

  });

});
