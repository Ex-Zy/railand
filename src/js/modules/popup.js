// import 'gsap';
import 'element-closest';
// import { TweenLite } from 'gsap';

export function callPopup() {
  let popupCallers = document.getElementsByClassName('btn-call-popup');
  let popupBody = document.getElementById('popup-bg');
  let closePopup = document.getElementsByClassName('js-close');
  let bodyCont = document.body;
  // let header = document.getElementById('header');
  let popups = document.getElementsByClassName('popup');
  // let burger = document.getElementById('burger');
  // let iframe = document.getElementById('vimeo-iframe');
  // let registrationBtns = document.getElementsByClassName('btn_registration-payment');
  let curWidth = window.innerWidth;
  let thePose = 0;
  let mobileW = 599;
  let isMobile = null;
  isMobile = chechIfMobile();
  // let tl = new TimelineMax();

  function chechIfMobile() {
    if (curWidth <= mobileW) {
      return true;
    }
    else {
      return false;
    }
  };

  if (popupCallers.length > 0) {
    for (let i = 0; i < popupCallers.length; i++) {
      popupCallers[i].addEventListener('click', (e) => {
        let target = e.target.closest('.btn-call-popup');
        openPopup(target);
      });;
    }
    for (let i = 0; i < closePopup.length; i++) {
      closePopup[i].addEventListener('click', (e) => {
        closePopupsWithArea();
      });
    }
  }

  // openPopup('login');

  if (popupBody) {
    popupBody.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest('.popup')) {
        closePopupsWithArea();
      }
    });
  }

  document.addEventListener('keyup', function(e) { // Close popups on ESC button
    if (e.keyCode === 27) { // escape key maps to keycode `27` - is code of ESCape button
      closePopupsWithArea();
    }
  });

  function openPopup(target) {
  // disableScroll();
    let dataPopup;
    closePopups();
    // burger.classList.add('is-hidden');
    if (isMobile) { // на мобайле прикреплять контент 
      if (!bodyCont.classList.contains('is-fixed')) { // если не зафиксирован
      // header.classList.add('is-hidden');
        console.log(thePose);
        thePose = window.pageYOffset;
      }
      bodyCont.style.top = `-${thePose}px`;
      console.log(bodyCont.style.top);
      bodyCont.classList.add('is-fixed');
    }
    if (target.dataset === undefined ||
      target.dataset.popup === undefined) { // if trigered not from button but from code 
      dataPopup = target;
    }
    else { // if trigered from button
      dataPopup = target.dataset.popup;
    }
    popupBody.style.display = 'flex'; // show popup area 
    if (dataPopup) { // Open popup from data
      document.body.classList.add('is-overflow');
      // document.body.style.top = `${window.pageYOffset}px`;
      // document.body.style.position = 'fixed';
      let popupName = `popup_${dataPopup}`;
      let thisPopup = document.getElementById(popupName);
      thisPopup.classList.add('is-active');
      thisPopup.style.display = 'block';
      thisPopup.scrollTop = 0;

      // tl
      // .fromTo(thisPopup, .5, { alpha: 0, y: 50 }, { alpha: 1, y: 0 })

      // individual popup code
      if (dataPopup === 'registration') { // code for specific popup in example registration related to popup_registration
        // console.log('specific code for registration popup ');
      }
      else if (dataPopup === 'login') { // code for specific popup in example registration related to popup_login
        // console.log('specific code for login popup ');
      }

    }
  };

  function closePopupsWithArea(e) {
    closePopups();
    // burger.classList.remove('is-hidden');
    // header.classList.remove('is-hidden');

    if (isMobile) {
      bodyCont.classList.remove('is-fixed');
      window.scrollTo(0, thePose);
    }
    if (popupBody) {
      popupBody.style.display = 'none';
    }
  // };
  };

  function closePopups() {
    for (let i = 0; i < popups.length; i++) {
      popups[i].style.display = 'none';
      popups[i].classList.remove('is-active');

    }
    document.body.classList.remove('is-overflow');
  // document.body.style.position = 'relative';
  };

  // Stuff about preventing scroll page
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
// function disableScroll() {
//   if (window.addEventListener) // older FF
//     window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove = preventDefault; // mobile
//   document.onkeydown = preventDefaultForScrollKeys;
// }
// function enableScroll() {
//   if (window.removeEventListener)
//     window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.onmousewheel = document.onmousewheel = null;
//   window.onwheel = null;
//   window.ontouchmove = null;
//   document.onkeydown = null;
// };


};

callPopup();
