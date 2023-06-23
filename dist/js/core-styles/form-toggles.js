"use strict";
// Form Toggle Component

$(function() {

  $(document.body).on('change', '[data-form-toggle-trigger]', function(event){
    let $this   = $(this);
    let name    = $this.attr('name');
    let tag     = $this.prop('tagName');
    let control = ''; // possible values 'select', 'checkbox', or 'radio'

    // Find control
    if(tag == 'SELECT'){
      control = 'select';
    } else if (tag == 'INPUT'){
      let input_type = $this.attr('type');
      if(input_type == 'CHECKBOX' || input_type == 'checkbox') {
        control = 'checkbox';
      } else if(input_type == 'RADIO' || input_type == 'radio'){
        control = 'radio';
      }
    }

    // Perform toggle
    if(control == 'select' || control == 'radio') {
      let value = this.value;
      let show = false;

      $(`[data-form-toggle*='${name}']`).each(function() {

        if($(this).attr('data-form-toggle-match') == 'exact'){
          show = $(this).attr('data-form-toggle-show-for') == value;
        } else {
          show = $(this).attr('data-form-toggle-show-for').includes(value);
        }

        if(show){
          $(this).removeClass('d-none');
        } else {
          $(this).addClass('d-none');
        }
      });
    } else if(control == 'checkbox') {
      $(`[data-form-toggle='${name}']`).toggleClass('d-none');
    }

  });

});
