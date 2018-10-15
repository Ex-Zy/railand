//Копипаст кода на скорую руку, функционал будет переписан

(function() {
  let contentList = document.querySelectorAll('.js-content');
  let tabList = document.querySelectorAll('.js-tab');

  tabList.forEach(tab => tab.addEventListener('click', clickOnTabHandler));
  // handlers
  function clickOnTabHandler(e) {
    console.log('here');
    e.preventDefault();
    const tab = this;
    const tabIndex = +tab.getAttribute('data-tab');
    const contentItems = document.querySelectorAll(`.js-content[data-tab="${tabIndex}"]`);

    removeActiveClass(tabList, contentList);
    setActiveClass(tab, contentItems);
  }

  function setActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      // если есть length, работаем с элементом как с collection
      if (item.length) {
        item.forEach(node => node.classList.add('is-active'));
      } else {
        item.classList.add('is-active');
      }
    });
  }

  function removeActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      item.forEach(node => node.classList.remove('is-active'));
    });
  }
})();

(function() {
  let contentList = document.querySelectorAll('.js-order-tab-content');
  let tabList = document.querySelectorAll('.js-order-tab-link');

  tabList.forEach(tab => tab.addEventListener('click', clickOnTabHandler));
  // handlers
  function clickOnTabHandler(e) {
    console.log('here');
    e.preventDefault();
    const tab = this;
    const tabIndex = +tab.getAttribute('data-tab');
    const contentItems = document.querySelectorAll(`.js-order-tab-content[data-tab="${tabIndex}"]`);

    removeActiveClass(tabList, contentList);
    setActiveClass(tab, contentItems);
  }

  function setActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      // если есть length, работаем с элементом как с collection
      if (item.length) {
        item.forEach(node => node.classList.add('is-active'));
      } else {
        item.classList.add('is-active');
      }
    });
  }

  function removeActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      item.forEach(node => node.classList.remove('is-active'));
    });
  }
})();

(function() {
  let contentList = document.querySelectorAll('.js-tab-apartments-content');
  let tabList = document.querySelectorAll('.js-tab-apartments-link');

  tabList.forEach(tab => tab.addEventListener('click', clickOnTabHandler));
  // handlers
  function clickOnTabHandler(e) {
    console.log('here');
    e.preventDefault();
    const tab = this;
    const tabIndex = +tab.getAttribute('data-tab');
    const contentItems = document.querySelectorAll(`.js-tab-apartments-content[data-tab="${tabIndex}"]`);

    removeActiveClass(tabList, contentList);
    setActiveClass(tab, contentItems);
  }

  function setActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      // если есть length, работаем с элементом как с collection
      if (item.length) {
        item.forEach(node => node.classList.add('is-active'));
      } else {
        item.classList.add('is-active');
      }
    });
  }

  function removeActiveClass() {
    const args = [].slice.call(arguments);

    args.forEach(item => {
      item.forEach(node => node.classList.remove('is-active'));
    });
  }
})();
