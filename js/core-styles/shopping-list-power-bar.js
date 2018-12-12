"use strict";

// TODO: For now this is global. It really should be loaded as an es6 module instead.
function loadShoppingListPowerBar(){
  $('#site-aside-slider').load('/shopping_list/power_bar');
}

$(function() {

  loadShoppingListPowerBar();

  $('.site-aside-slider-toggle').on('click', function(event){
    event.preventDefault();
    $('#site-aside-slider').toggleClass('site-aside-slider-open');
  });


  let $modal = $('#shopping-list-modal')

  $modal.on('show.bs.modal', function(event) {
    let $form = $modal.find('.shopping-list-form')
    let $errors = $form.find('.shopping-list-form-errors')
    let button = $(event.relatedTarget) // Button that triggered the modal
    //  verbs: Create (new), Update (rename/edit), Delete (delete)
    let verb = button.data('verb') // Extract info from data-* attributes
    let response = {status: '', message: ''}
    let $name = $modal.find('.modal-body .shopping-list-form-name')

    $modal.find('.modal-title').text(verb + ' Shopping List')
    $errors.html('')

    if(verb == 'Delete'){
      $modal.find('.shopping-list-form-name-group').addClass('is-hidden')
    } else {
      $modal.find('.shopping-list-form-name-group').removeClass('is-hidden')
    }

    if(verb == 'Create'){
      let today = new Date();
      today = today.toLocaleDateString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric' })
      $name.val('My ' + today + ' List')
    }

    let url = '/shopping_lists/List/' + verb;

    $form.attr('action', url);

    // Form response expects the following JSON:
    // {
    //   status: 'success' or 'failure',
    //   message: 'text message here'
    // }
    $form.on('submit', function(e) {
      e.preventDefault();
      // Do ajax calling url
      let request = $.ajax({
        url: url,
        method: 'POST',
        //data: { id : menuId },
        dataType: 'json'
      });

      request.done(function(data){
        if(data.status == 'success'){
          response = data
          $modal.hide()
        } else if(data.status == 'failure') {
          response = data
        } else {
          response = {status: 'failure', message: 'Unable to process request. Please try again.'}
        }

        if(response.status == 'failure') {
          $errors.html('<p class="shopping-list-form-errors-message alert alert-danger">' + response.message + '</p>');
        }

      })
    });

  })

  $modal.on('hidden.bs.modal', function() {
    loadShoppingListPowerBar();
  })


});



