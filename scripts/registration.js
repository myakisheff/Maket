const button = document.querySelector('button');
const form = document.querySelector('#reg');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.style.display = "block";
  form.style.display = "block";
});

/* popup.addEventListener('click', () =>{
  popup.style.display = "none";
  form.style.display = "none";
}); */

