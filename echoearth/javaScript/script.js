document.getElementById("downarrow").onclick = function() {myScrollFunction()};

function myScrollFunction() {
        var element_to_scroll_to = document.getElementById('demovideo');
        element_to_scroll_to.scrollIntoView({block: "end", behavior: "smooth"});
};

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

document.getElementById("uparrow").onclick = function() {$('html, body').animate({ scrollTop: 0 }, 'fast');};
