"use strict";
// Ajax Modal Component

$(function() {
  // Resets modal once closed
  $('#site-modal').on('hidden.bs.modal', function () {
    $('#site-modal-title').text('');
    $('#site-modal-body').html('');
    $('#site-modal-footer').removeClass('d-none');
  });

  $('#site-modal').on('show.bs.modal', function (event) {
    let $trigger = $(event.relatedTarget)
    let title = $trigger.attr('data-title');
    let url = $trigger.attr('data-load');
    let content = $trigger.attr('data-content');
    let footer = $trigger.attr('data-footer');
    if(footer == 'hide'){
      $('#site-modal-footer').addClass('d-none');
    }
    $('#site-modal-title').text(title);
    if(content){
      $('#site-modal-body').html(content);
    }
    if(url){
      $('#site-modal-body').load(url);
    }
  });

});



