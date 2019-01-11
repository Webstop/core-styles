"use strict";
// Ajax Form Component

$(function() {

  $('[data-ajax-form]').on('submit', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.attr('action');
    let data = $this.serializeArray();
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

    if( $this.is('[data-power-bar]') ){
      $target.load(url,data,function(){
        loadShoppingListPowerBar();
      });
    } else {
      $target.load(url,data);
    }

  });

});
