var passwordInput = document.getElementById('password')
var phoneInput = document.getElementById('phone')

var letter = document.getElementById('letter')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var length = document.getElementById('length')

// allow ONLY numbers in text input
function validate(evt) {
  var theEvent = evt || window.event;

  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

passwordInput.onfocus = function() {
    document.getElementById('passwordReminder').style.display = "block"
}

passwordInput.onblur = function() {
    document.getElementById('passwordReminder').style.display = "none"
}

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
})

passwordInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(passwordInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(passwordInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(passwordInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
}
