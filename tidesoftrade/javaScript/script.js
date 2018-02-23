//load all images in the Gallery
var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;

var myInterval = setInterval(loadImage, 1);

function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;

        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'images/GalleryImages/exhibit-pic' + i + '.jpg';

    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
}

function fDoesntExist() {
    bFinishCheck = true;
}

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
