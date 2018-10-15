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

// card sliders
let numSlick = 0;
$('.card__slider').each( function() {
  numSlick++;
  $(this).addClass( 'js-card-slider-' + numSlick ).slick({
    slidesToShow: 1,
    speed: 800,
    dots: true,
    autoPlay: true,
    autoplaySpeed: 4000
  });

});
