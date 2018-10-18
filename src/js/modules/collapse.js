const collapseLink = document.querySelector('.js-collapse-link');
const collapseBlock = document.querySelector('.js-collapse-content');

if(collapseLink && collapseBlock) {
  collapseLink.addEventListener('click', (e) => {
    const link = e.currentTarget;
    link.style.display = 'none';
    collapseBlock.classList.remove('is-short');
  });
}

