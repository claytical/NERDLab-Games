$(window).scroll(function() {

	var windowScroll = $(this).scrollTop();

	var  windowWidth = $(window).width();


  if (windowWidth >= 500) {

    if (windowScroll > 120) {
      $('.learnMore').fadeOut();
    }
    else {
      $('.learnMore').fadeIn();
    }
  }
});
