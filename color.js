const darkButton = document.querySelector('#dark');
const lightButton = document.querySelector('#light');
const body = document.querySelector('body');

darkButton.addEventListener('click', () => {
  body.classList.add('dark');
  body.classList.remove('light');
});

lightButton.addEventListener('click', () => {
  body.classList.add('light');
  body.classList.remove('dark');
});