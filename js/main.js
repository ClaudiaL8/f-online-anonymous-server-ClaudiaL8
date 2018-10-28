var boton = document.querySelector('.nav-trigger');
var navegador = document.querySelector('.nav');
var botonCerrar = document.querySelector('.nav-close');
var footer = document.querySelector('.page__footer');

function openMenu(){
  navegador.classList.add('navOpen');
  footer.classList.add('page__footer__none');
}


function closeMenu(){
  navegador.classList.remove('navOpen');
  footer.classList.remove('page__footer__none');
}

boton.addEventListener('click', openMenu);
botonCerrar.addEventListener('click', closeMenu);


// var menuIcon = document.querySelector('.nav-trigger');
// var cross = document.querySelector('.nav-close');
// var items = document.querySelector('.nav');

// function showMenu (){
//   items.classList.add('nav__open');
//   menuIcon.classList.add('trigger__out');
//   items.classList.add('nav__animation');
// }
// function hideMenu() {
//   items.classList.remove('nav__open');
//   menuIcon.classList.remove('trigger__out');
// }
// menuIcon.addEventListener('click', showMenu);
// cross.addEventListener('click', hideMenu);