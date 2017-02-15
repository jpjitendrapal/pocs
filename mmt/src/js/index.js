$(document).ready(function(){
  $('.bxslider-1').bxSlider({
    // mode: "fade",
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 210,
    slideMargin: 5,
    moveSlides: 1,
    randomStart: true,
    nextSelector: '#bx1-next',
    prevSelector: '#bx1-prev',
    nextText: '<img src="./mmt/src/img/right.png" />',
    prevText: '<img src="./mmt/src/img/left.png" />',
    pager: false
  });

  $('.bxslider-2').bxSlider({
    mode: "vertical",
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 430,
    slideMargin: 5,
    moveSlides: 3,
    controls: false
  });

  $('.bxslider-3').bxSlider({
    minSlides: 3,
    maxSlides: 5,
    slideWidth: 210,
    slideMargin: 15,
    moveSlides: 3,
    controls: false
  });
  $('.bxslider-4').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 210,
    slideMargin: 15,
    moveSlides: 1,
    pagerCustom: '#bxslider-4-pager',
    controls: false
  });
});