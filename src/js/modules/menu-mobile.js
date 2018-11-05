import isInPage from '../helpers/isInPage';

const btnMenu  = document.querySelector('.js-menu');
const dropMenu = document.querySelector('.header-mob');


if(isInPage(btnMenu) === false || isInPage(dropMenu) === false) {
  throw new Error('absent class: js-menu or header-mob');
}

btnMenu.addEventListener('click', (e) => {
  const btn = e.currentTarget;

  btn.classList.toggle('is-active');
  dropMenu.classList.toggle('is-drop-menu');
});
