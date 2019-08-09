import './common.js';
import $ from 'jquery';

$(document).ready(() => {

  /**
   * Next button click
   */
  $('.footer__next_button').click((e) => {
    e.preventDefault();

    let currentStep = $('.steps__single.active').index() + 1;

    switch(currentStep) {

      case 1:
        if($('.content__single--first .content__radio input:checked').length === 0) {
          alert('gh');
        } else {
          moveToStep(1);
          $('.footer__bottom').show();
          $('.footer__prev').show();
        }
        break;
        
      case 2:
        if(validateEmail($('#email').val())) {
          submitForm();
        }
        
        break;

    }
  });

  $('.footer__prev_button').click(() => {
    let currentStep = $('.steps__single.active').index();
    moveToStep(currentStep + 1, 'prev');
  });


  function moveToStep(step = 0, direction = 'next') {
    
    if(direction === 'next') {
      $('.steps__single').removeClass('active');
      $('.steps__single').eq(step).addClass('active');

      $('.content__single').hide();
      $('.content__single').eq(step).fadeIn();
    } else {
      $('.steps__single').removeClass('active');
      $('.steps__single').eq(step - 2).addClass('active');

      $('.content__single').hide();
      $('.content__single').eq(step - 2).fadeIn();
    }
  }


  function submitForm() {

    let $form = $(this);

    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize()
    }).done(function() {

      moveToStep(3);

    }).fail(function() {

      console.log('fail');

    });
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
    

  
}); 



