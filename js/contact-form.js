(() => {
  'use strict';

  const form = document.getElementById('contact-form');

  function send() {
    console.log('send');
  }

  form.onsubmit = function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      var formData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        phoneNumber: $('#phoneNumber').val(),
        message: $('#message').val(),
      };

      jQuery.ajax({
        type: 'GET',
        crossOrigin: true,
        url: 'https://script.google.com/macros/s/AKfycbwuhw4uHdLcpihYc_CwySQoj8tnGCfRHOe25s8jAbvwDR146O7adluLRblH7s3seQxCfw/exec',
        data: formData,
        dataType: 'json',
        encode: true,
        success: function (response) {
          console.log('Result:' + response.result);
          if (response.result == 'success') {
            // jQuery('#success_message').show();
            jQuery('#contact-form')[0].reset();
            console.log('ok');
          } else {
            // jQuery('#err_message').show();
            console.log(response);
          }
        },
        error: function (err) {
          console.log(err);
        },
      });
    }
  };
})();
