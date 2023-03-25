const button = document.querySelector('button');
const divform = document.querySelector('#reg');
const popup = document.querySelector('.popup');
const passView = document.querySelector('.password-control');
const passInput = document.querySelector('#password-input');
const form = document.querySelector("#regform");

const emailInput = document.querySelector('[name="Email"]'); 

//show a modal window
button.addEventListener('click', () => {
  popup.style.display = "block";
  divform.style.display = "block";
});

popup.addEventListener('click', function(e) {
  if (e.target.id == 'popup1') {
    popup.style.display = "none";
    divform.style.display = "none";
  }
  else{
    return;
  }
});

/* passView.addEventListener('pointerdown', () => {
  if(passInput.getAttribute('type') == 'password'){
    passInput.setAttribute('type', 'text');
  }
  else{
    passInput.setAttribute('type', 'password');
  }
}); */

//show/hide password
passView.addEventListener('pointerdown', () => {
  passInput.setAttribute('type', 'text');
});

passView.addEventListener('pointerup', () => {
    passInput.setAttribute('type', 'password');
});

//check form validation
form.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;

  if(event.target == emailInput && !isValid)
  {
    console.log(32);
    emailInput.setCustomValidity('Please enter valid email. example@mail.com');
  }
  if(event.target == passInput && !isValid)
  {
    console.log(23);
    passInput.setCustomValidity('Please use at least 6 characters.');
  }

  const message = event.target.validationMessage;
  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

  if (connectedValidation && message && !isValid) { 
    connectedValidation.innerText = message;
  } else {
    connectedValidation.innerText = '';
  }
  emailInput.setCustomValidity('');
  passInput.setCustomValidity('');
}, true);

//send form
form.addEventListener("submit", (event) => {

  const isEmailValid = emailInput.validity.valid;
  const isPassValid = passInput.validity.valid;

  if(!isEmailValid || !isPassValid)
    return;

  event.preventDefault();

  var formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]); 
  }

  popup.style.display = "none";
  divform.style.display = "none";
});