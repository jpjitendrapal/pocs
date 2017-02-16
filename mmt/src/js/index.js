$(document).ready(function(){
  $('.bxslider-1').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 210,
    slideMargin: 5,
    moveSlides: 1,
    startSlide: 4,
    nextSelector: '#bx1-next',
    prevSelector: '#bx1-prev',
    nextText: '<img src="./mmt/src/img/right.png" />',
    prevText: '<img src="./mmt/src/img/left.png" />',
    pager: false,
    auto: true,
    pause: 6000
  });

  $('.bxslider-2').bxSlider({
    mode: "vertical",
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 550,
    slideMargin: 15,
    moveSlides: 2,
    controls: false,
    auto: true,
    pause: 3000
  });

  $('.bxslider-3').bxSlider({
    minSlides: 3,
    maxSlides: 5,
    slideWidth: 220,
    slideMargin: 15,
    moveSlides: 3,
    controls: false,
    auto: true
  });
  $('.bxslider-4').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 250,
    slideMargin: 5,
    moveSlides: 1,
    pagerCustom: '#bxslider-4-pager',
    controls: false,
    auto: true,
    pause: 5000
  });
});