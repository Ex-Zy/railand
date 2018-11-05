class Select {
  constructor(options) {
    this.selectElement = options.selectElement;
    this.activeClass = options.activeClass;
    this._state = false;

    this._hideOnDocumentClick();
  }
  _show() {
    this._state = true;
    this.selectElement.classList.add(this.activeClass);
  }
  _hide() {
    this._state = false;
    this.selectElement.classList.remove(this.activeClass);
  }
  _hideOnDocumentClick() {
    document.addEventListener('click', e => {
      const selectContainer = this.selectElement;

      if(!selectContainer.contains(e.target)) {
        this._hide();
      }
    });
  }
}

class SelectLang extends Select {
  constructor(options) {
    super(options);
    this._currentLang = this.selectElement.querySelector('.cselect__current');

    this._clickOnCurrentLang();
    this._clickOnLangItem();
  }
  _clickOnCurrentLang() {
    this._currentLang.addEventListener('click', e => {
      if(!this._state) {
        this._show();
      } else {
        this._hide();
      }
    });
  }
  _clickOnLangItem() {
    const langs = this.selectElement.querySelectorAll('.cselect__item');

    langs.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();

        const currentLangContent = this._currentLang.innerHTML.trim();

        this._currentLang.innerHTML = item.innerHTML.trim();
        item.innerHTML = currentLangContent;
        this._hide();
      });
    });
  }
}

class SelectTel extends Select {
  constructor(options) {
    super(options);
    this._arrow = this.selectElement.querySelector('.tselect__arrow');
    this._currentTel = this.selectElement.querySelector('.tselect__current-link');

    this._clickOnArrow();
    this._clickOnTelItem();
  }
  _clickOnArrow() {
    this._arrow.addEventListener('click', e => {
      if(!this._state) {
        this._show();
      } else {
        this._hide();
      }
    });
  }
  _clickOnTelItem() {
    const tels = this.selectElement.querySelectorAll('.tselect__item');

    tels.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();

        const currentTelContent = this._currentTel.innerHTML.trim();

        this._currentTel.innerHTML = item.innerHTML.trim();
        this._currentTel.setAttribute('href', `tel:${item.innerHTML.trim()}`);
        item.innerHTML = currentTelContent;
        this._hide();
      });
    });
  }
}

new SelectLang({
  selectElement: document.querySelector('.cselect'),
  activeClass: 'is-active'
});

new SelectTel ({
  selectElement: document.querySelector('.tselect'),
  activeClass: 'is-active'
});
