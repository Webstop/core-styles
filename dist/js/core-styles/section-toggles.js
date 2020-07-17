"use strict";
// Form Toggle Component

$(function() {

  $('[data-form-toggle-trigger]').change(function() {
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


  // // Checkbox Toggle
  // $( "[data-checkbox-toggle-source]" ).change(function() {
  //   let name = $(this).attr('name');
  //   $(`[data-form-toggle*='${name}']`).toggleClass('d-none');
  // });
  //
  // // Radio Button Toggle
  // $( "[data-form-toggle-trigger]" ).change(function() {
  //   let name = $(this).attr('name');
  //   let value = this.value;
  //   let show = false;
  //   $(`[data-form-toggle*='${name}']`).each(function() {
  //
  //     if($(this).attr('data-form-toggle-match') == 'exact'){
  //       show = $(this).attr('data-form-toggle-show-for') == value;
  //     } else {
  //       show = $(this).attr('data-form-toggle-show-for').includes(value);
  //     }
  //
  //     if(show){
  //       $(this).removeClass('d-none');
  //     } else {
  //       $(this).addClass('d-none');
  //     }
  //   });
  //
  // });


  // // Checkbox Toggle
  // $( "[data-checkbox-toggle-source]" ).change(function() {
  //   let id = $(this).attr('id');
  //   $(`[data-form-toggle*='${id}']`).toggleClass('d-none');
  // });
  //
  // // Radio Button Toggle
  // $( "[data-radio-button-toggle-source]" ).change(function() {
  //   let id = $(this).attr('id');
  //   let value = this.value;
  //   let toggle = false;
  //   $(`[data-form-toggle*='${id}']`).each(function() {
  //
  //     if($(this).attr('data-form-toggle-match') == 'exact'){
  //       toggle = $(this).attr('data-form-toggle-show-for') == value;
  //     } else {
  //       toggle = $(this).attr('data-form-toggle-show-for').includes(value);
  //     }
  //
  //     if(toggle) { $(this).toggleClass('d-none'); }
  //   });
  // });


  // // Checkbox Toggle
  // $( ".checkbox-toggle-source" ).change(function() {
  //   let id = $(this).attr('id');
  //   $(`[data-form-toggle*='${id}']`).toggleClass('d-none');
  // });
  //
  // // Radio Button Toggle
  // $( ".radio-button-toggle-source" ).change(function() {
  //   let id = $(this).attr('id');
  //   let value = this.value;
  //   let toggle = false;
  //   $(`[data-form-toggle*='${id}']`).each(function() {
  //
  //     if($(this).attr('data-form-toggle-match') == 'exact'){
  //       toggle = $(this).attr('data-form-toggle-show-for') == value;
  //     } else {
  //       toggle = $(this).attr('data-form-toggle-show-for').includes(value);
  //     }
  //
  //     if(toggle) { $(this).toggleClass('d-none'); }
  //   });
  // });

});



// $(document).ready(function(){
//
//
//
//   $( ".radio-button-toggle-source" ).change(function() {
//     let id = $(this).attr('id');
//     let value = this.value;
//     let show = false;
//     $(`[data-form-toggle*='${id}']`).each(function() {
//
//       if($(this).attr('data-form-toggle-match') == 'exact'){
//         show = $(this).attr('data-form-toggle-show-for') == value;
//       } else {
//         show = $(this).attr('data-form-toggle-show-for').includes(value);
//       }
//
//       if(show){
//         $(this).show('fast');
//       } else {
//         $(this).hide('fast');
//       }
//     });
//   });
//
//
// });
