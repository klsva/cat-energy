/*BURGER menu in header*/
const iconHeaderMenu = document.querySelector('.icon-menu');
const menuHeaderBody = document.querySelector('.navigation__menu');
const body = document.querySelector('body');
const section = document.querySelectorAll('section');

iconHeaderMenu.addEventListener('click', openHeaderMenuBurger);

// function open burger menu
function openHeaderMenuBurger(){
  iconHeaderMenu.classList.toggle('active');
  menuHeaderBody.classList.toggle('active');
  body.classList.toggle('lock');
  section.forEach(item => item.classList.toggle('hidden'));
}

