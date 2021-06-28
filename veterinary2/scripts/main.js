// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// From https://bbbootstrap.com/snippets/multi-step-form-wizard-30467045 

function nextModalPage(button){
  var current_fs, next_fs; //fieldsets
  var opacity;

  current_fs = $(button).parent();
  next_fs = $(button).parent().next();

  var section = button.name;
  var valid;

  switch(section) {
    case "general-information":
      valid = validatePersonal();
      break;
    case "appointment":
      valid = validateAppointment();
      break;
    case "payment":
      valid = validatePayment();
      break;
    default:
      valid = true;
      break;
  }
  
  if (valid) {
    //Add Class Active
    $("#progress-bar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
    
        current_fs.css({
          'display': 'none',
          'position': 'relative'
        });
        next_fs.css({'opacity': opacity});
      },
      duration: 600
    });
  }
}

function previousModalPage(button){
  var current_fs, previous_fs; //fieldsets
  var opacity;
 
  current_fs = $(button).parent();
  previous_fs = $(button).parent().prev();
  
  //Remove class active
  $("#progress-bar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now) {
      // for making fielset appear animation
      opacity = 1 - now;
    
      current_fs.css({
        'display': 'none',
        'position': 'relative'
      });
      previous_fs.css({'opacity': opacity});
    },
    duration: 600
  });
}

function validatePersonal() {
  var name = $("#name").val();
  var email = $("#email").val();
  var phoneNumber = $("#phone-number").val();

  var nameError = $("#name-error");
  var emailError = $("#email-error");
  var phoneNumberError = $("#phone-number-error");

  var valid = true;

  if (!name) {
    nameError.show();
    valid = false;
  } else {
    nameError.hide();
  }

  if (!email || !validEmail(email)) {
    emailError.show();
    valid = false;
  } else {
    emailError.hide();
  }

  if (!phoneNumber || !validPhoneNumber(phoneNumber)) {
    phoneNumberError.show();
    valid = false;
  } else {
    phoneNumberError.hide();
  }

  return valid;
}

function validateAppointment() {
  valid = true;

  var service = $("#service").val();
  var professional = $("#professional").val();
  var date = $("#date").datepicker("getDate");

  var serviceError = $("#service-error");
  var professionalError = $("#professional-error");
  var dateError = $("#date-error");

  if (!service) {
    serviceError.show();
    valid = false;
  } else {
    serviceError.hide();
  }

  if (!professional) {
    professionalError.show();
    valid = false;
  } else {
    professionalError.hide();
  }

  if (!date) {
    dateError.show();
    valid = false;
  } else {
    dateError.hide();
  }

  return valid;
}

function validatePayment() {
  valid = true;

  var cardHolder = $("#card-holder").val();
  var cardNumber = $("#card-number").val();
  var cvc = $("#cvc").val();
  var expireryMonth = $("#expirery-month").val();
  var expireryYear = $("#expirery-day").val();

  var cardHolderError = $("#card-holder-error");
  var cardNumberError = $("#card-number-error");
  var cvcError = $("#cvc-error");
  var expireryDateError = $("#expirery-date-error");

  if (!cardHolder) {
    cardHolderError.show();
    valid = false;
  } else {
    cardHolderError.hide();
  }

  if (!cardNumber || cardNumber.length != 19 || !validCardNumber(cardNumber)) {
    cardNumberError.show();
    valid = false;
  } else {
    cardNumberError.hide();
  }

  if (!cvc || String(cvc).length != 3 || !validCVC(cvc)) {
    cvcError.show();
    valid = false;
  } else {
    cvcError.hide();
  }

  if (!expireryMonth || !expireryYear || !validExpireryDate(expireryMonth, expireryYear)) {
    expireryDateError.show();
    valid = false;
  } else {
    expireryDateError.hide();
  }

  return valid;
}

function validEmail(email) {
  // code from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validPhoneNumber(number) {
  // code from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?[2-9]{1}\d{2}(-|\s)\d{4}$/;
  return re.test(number);
}

function validCardNumber(cardNumber) {
  const re = /\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  return re.test(cardNumber);
}

function validCVC(cvc){
  const re = /\d{3}$/;
  return re.test(cvc);
}

function validExpireryDate(month, year) {
  const re = /\d{2}$/;

  if (!re.test(month) || !re.test(year) || String(month).length != 2 || String(year).length != 2 
    || month < 1 || month > 12 || (new Date()).getTime() >= (new Date("20" + year, month, 1)).getTime())  {
      return false;
    }

  return true;
}

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
})


$(function() {
  datepicker = $("#date").datepicker({
    minDate: "+1",
    beforeShowDay: noOne
  });
})

function noOne(date) {
  return [ false, "", "" ];
}

function iris(date) {
  if (date.getDay() === 0 || date.getDay() === 3 || date.getDay() === 6)
    return [ false, "", "" ];
  else
    return [ true, "", "" ];
}

function jaylee(date) {
  if (date.getDay() === 0 || date.getDay() === 2 || date.getDay() === 4 || date.getDay() === 6)
    return [ false, "", "" ];
  else
    return [ true, "", "" ];
}

function chandler(date) {
  if (date.getDay() === 0 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 6)
    return [ false, "", "" ];
  else
    return [ true, "", "" ];
}

function changeProfessional(input) {
  console.log(input.value);

  var prof = input.value;
  var func;
  switch (prof) {
    case "iris":
      func = iris;
      break;
    case "jaylee":
      func = jaylee;
      break;
    case "chandler":
      func = chandler;
      break;
    default:
      func = noOne;
      break;
  }

  datepicker = $("#date").datepicker("destroy");

  datepicker = $("#date").datepicker({
    minDate: "+1",
    beforeShowDay: func
  });
}
