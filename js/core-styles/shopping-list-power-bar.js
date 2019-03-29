"use strict";

// TODO: For now this is global. It really should be loaded as an es6 module instead.
function loadShoppingListPowerBar(){
  console.log('loadShoppingListPowerBar triggered');
  let url = '/shopping_list/power_bar?url=' + window.location.href ;
  $('#site-aside-slider').load(url);
}

$(function() {

  loadShoppingListPowerBar();

  $('.site-aside-slider-toggle').on('click', function(event){
    event.preventDefault();
    $('#site-aside-slider').toggleClass('site-aside-slider-open');
  });

  // Everything below here should probably go, as more generic methods are appropriate
  // ajax-form and site-modal should be used instead. Keeping it for now as reference
  // until we get the shopping list features.

  let $modal = $('#shopping-list-modal')

  $modal.on('show.bs.modal', function(event) {
    // jQuery Objects
    let $form        = $modal.find('.shopping-list-form')
    let $errors      = $form.find('.shopping-list-form-errors')
    let $button      = $(event.relatedTarget) // Button or link that triggered the modal
    let $title       = $modal.find('.modal-title')
    let $nameGroup   = $modal.find('.modal-body .shopping-list-form-name-group')
    let $name        = $modal.find('.modal-body .shopping-list-form-name')
    let $submit      = $form.find('.shopping-list-form-submit')
    let $description = $form.find('.shopping-list-form-description')

    // strings
    //let currentList = $('#shopping-list-power-bar-list').text()
    let verb = $button.data('verb') //  verbs: Create (new), Update (rename/edit), Delete (delete)
    let url =  $button.data('url')
    let response = {status: '', message: ''}

    //console.log('current list: ' + currentList)


    $title.text(verb + ' Shopping List')
    $submit.text(verb)
    $errors.html('')
    $form.attr('action', url)

    if(verb == 'Create'){
      let today = new Date();
      today = today.toLocaleDateString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric' })
      $nameGroup.removeClass('is-hidden')
      $name.val('My ' + today + ' List')
      $description.text('')
      $description.addClass('is-hidden')
    }else if(verb == 'Rename'){
      $nameGroup.removeClass('is-hidden')
      $name.val($('#shopping-list-power-bar-list').text())
      $description.text('')
      $description.addClass('is-hidden')
    }else if(verb == 'Delete'){
      $nameGroup.addClass('is-hidden')
      $description.removeClass('is-hidden')
      $description.text('Once deleted your most recent shopping list will become your current list. If you have no shopping lists a new one will be created. Are you sure you want to delete your current shopping list?')
    }


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
        contentType: "application/json",
        dataType: 'json'
      });

      request.done(function(jqXHR, data){
        console.log('ajax response status: ' + data.status)
        console.log('message: ' + data.message)
        if(data.status == 'success'){
          response = data
          $modal.modal('hide')
          console.log('hide modal triggered')
        } else if(data.status == 'failure') {
          response = data
        } else {
          response = {status: 'failure', message: 'Unable to process request. Please try again.'}
        }

        if(response.status == 'failure') {
          $errors.html('<p class="shopping-list-form-errors-message alert alert-danger">' + response.message + '</p>');
        }

      })

      request.fail(function(response){
        $errors.html('<p class="shopping-list-form-errors-message alert alert-danger">' + response.message + '</p>');
      })


    });

  })

  $modal.on('hidden.bs.modal', function() {
    console.log('modal fully hidden')
    loadShoppingListPowerBar();
  })


});



