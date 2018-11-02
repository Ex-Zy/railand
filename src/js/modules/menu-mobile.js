const btnMenu  = document.querySelector('.js-menu');
const dropMenu = document.querySelector('.header-mob');

btnMenu.addEventListener('click', (e) => {
  const btn = e.currentTarget;

  btn.classList.toggle('is-active');
  dropMenu.classList.toggle('is-drop-menu');
});
