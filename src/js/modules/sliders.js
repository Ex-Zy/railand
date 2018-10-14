const reviewsSlider = $('.js-reviews-slider');


function initSlider(slider, options) {
  slider.not('.slick-initialized').slick(options);
}

initSlider(reviewsSlider, {
  slidesToShow: 1,
  // autoplay: true,
  speed: 800,
  autoplaySpeed: 4000,
  dots: true
});
