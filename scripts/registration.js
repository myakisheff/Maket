const button = document.querySelector('button');
const form = document.querySelector('#reg');
const popup = document.querySelector('.popup');
const passView = document.querySelector('.password-control');
const passInput = document.querySelector('#password-input');

button.addEventListener('click', () => {
  popup.style.display = "block";
  form.style.display = "block";
});

popup.addEventListener('click', function(e) {
  if (e.target.id == 'popup1') {
    popup.style.display = "none";
    form.style.display = "none";
  }
  else{
    return;
  }
});

passView.addEventListener('click', () => {
  if(passInput.getAttribute('type') == 'password'){
    passInput.setAttribute('type', 'text');
  }
  else{
    passInput.setAttribute('type', 'password');
  }
});