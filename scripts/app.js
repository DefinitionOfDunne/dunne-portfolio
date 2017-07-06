'use strict'

 $('#contact-form').on('submit', function() {
  event.preventDefault();
   var firstName = $('input[name=firstname]').val();
   var lastName = $('input[name=lastname]').val();
   var inquiry = $('textarea[name=subject]').val();
   $('.inquiry-all').append("<div class='inquiry-one'>" + 'Message for Dylan:' + "<br/>" + "From: " + firstName + " " + lastName + '<br/>' + '<br/>' + inquiry + "</div>");
 });
