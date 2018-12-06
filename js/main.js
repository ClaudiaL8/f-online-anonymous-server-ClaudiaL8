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
