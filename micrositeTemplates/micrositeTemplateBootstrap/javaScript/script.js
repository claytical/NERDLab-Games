// // arrowCenter();
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


// //get the width of the arrow so it can be absolute centered and do it on resize
// function arrowCenter(){
//     $arrow = document.getElementById("downarrow");
//     $arrowDiv = document.getElementById("arrowDiv");
//     $halfWinWidth = ($(window).width())/2;
//     $arrowWidth = ($arrow.getBoundingClientRect()).width / 2;
//     $arrowDivLeft = ($halfWinWidth - $arrowWidth) + "px";
//     console.log($arrowDivLeft);
//     $($arrowDiv).css("left", $arrowDivLeft);
// }




