/* Variables */
var sprite = document.querySelector('.sprite');
var counter = 0;
var isEnabled = true;
var windowname = '#window-1';
var previouswindow = '#window-1';
var messages = ['Make a game in 48 hours! Click to join in.',
'Show your work at Filmgate or explore VR experiences!',
'Join the IGDA and make some great connections.',
'Prepare yourself for a professional game design career.',
'Check out this games celebration! Click above for more.',
'Show your work at Filmgate or explore VR experiences!',
'Check out the video games club and have fun!',
'The library has tons of games to play!'];

/* Little Dude Walking Animation */

var windowsize = $(window).width();
var halfWindow = windowsize / 2;
var buttonPlacement = (windowsize * 0.15) + 77;

$(window).resize(function() {
  windowsize = $(window).width();
  halfWindow = windowsize / 2;
});

(function() {

	var key = {left: false, right: false},
		trans = 0,
		property = getTransformProperty(sprite);

	function getTransformProperty(element) {
	    var properties = [
	        'transform',
	        'WebkitTransform',
	        'msTransform',
	        'MozTransform',
	        'OTransform'
	    ];
	    var p;
	    while (p = properties.shift()) {
	        if (typeof element.style[p] != 'undefined') {
	            return p;
	        }
	    }
	    return false;
	}

	function translate() {
		sprite.style[property] = 'translateX(' + trans + 'px)';
	}

  function cycleForward() {
    counter += 1;
    windowname = '#window-' + String(counter);
    $('#message').removeClass("css-typing");
    $('#message').hide();
    if (counter == 1 || counter == 6) {
      $('.special-button').hide();
      $('#selection-section').hide();
      $('#back').show();
      $('#next').show();
      $(windowname).show();
      $('.speech-bubble').show();
      $('#message').show();
      $('#message').html(messages[counter-1]);
      $('#message').addClass("css-typing");
    } else if (counter == 9 || counter == 5) {
      $(previouswindow).hide();
      $('.speech-bubble').hide();
      $('.special-button').show();
      $('#selection-section').show();
      $('#back').hide();
      $('#next').hide();
      counter = 0;
    }
    else if (counter > 0) {
      previouswindow = '#window-' + String(counter-1);
      $(previouswindow).hide();
      $(windowname).show();
      $('#message').show();
      $('#message').html(messages[counter-1]);
      $('#message').addClass("css-typing");
    }
    console.log(counter);
  }

  function cycleBackwards() {
      windowname = '#window-' + String(counter);
      counter = counter - 1;
      $('#message').removeClass("css-typing");
      if (counter == 0 || counter == 5) {
        $('.speech-bubble').hide();
        $('.special-button').show();
        $('#selection-section').show();
        $('#back').hide();
        $('#next').hide();
        $(windowname).hide();
        counter = 0;
      }
      else if (counter > 0) {
        previouswindow = '#window-' + String(counter);
        $(previouswindow).show();
        $(windowname).hide();
        $('#message').html(messages[counter-1]);
      }
    console.log(counter);
  }

  function backToCenter() {
    if (counter > 0) {
      $(windowname).hide();
    }
    sprite.style[property] = 'translateX(calc(-50% + 60px))';
    trans = 0;
    $("#fadeOverlay").fadeOut(1000);
    $(".sprite").hide();
  }

	function walk(e) {
		var keyCode = e.keyCode;
		if (keyCode === 39) {
			key.right = true;
		} else if (keyCode === 37) {
			key.left = true;
		}

    if (key.right === true) {
			trans += 10;
      if (counter == 0) {
        if (trans + 35 >= halfWindow - buttonPlacement) {
          $("#fadeOverlay").fadeIn(100);
          backToCenter();
          cycleForward();
          $(".sprite").fadeIn(500);
        }
      }
      if (trans +35 >= halfWindow) {
        $("#fadeOverlay").fadeIn(100);
        backToCenter();
        cycleForward();
        $(".sprite").fadeIn(500);
      } else{
			translate();
      }
			sprite.classList.remove('left');
			sprite.classList.add('right');
			sprite.classList.add('walk-right');
		} else if (key.left === true) {
      trans -= 10;
      if (counter == 0) {
        if (Math.abs(trans - 35) >= halfWindow - buttonPlacement) {
          counter = 5;
          $("#fadeOverlay").fadeIn(100);
          backToCenter();
          cycleForward();
          $(".sprite").fadeIn(500);
        }
      }
      if (Math.abs(trans - 35) >= halfWindow) {
        $("#fadeOverlay").fadeIn(100);
        backToCenter();
        cycleBackwards();
        $(".sprite").fadeIn(500);
      } else {
			     translate();
      }
			sprite.classList.remove('right');
			sprite.classList.add('left');
			sprite.classList.add('walk-left');
		}
      //console.log(halfWindow);  The size of the window is detected even if it changed
	}

	function stop(e) {
		var keyCode = e.keyCode;
		if (keyCode === 39) {
			key.right = false;
		} else if (keyCode === 37) {
			key.left = false;
		}
		if (key.right === false) {
			sprite.classList.remove('walk-right');
		} if (key.left === false) {
			sprite.classList.remove('walk-left');
		}
	}

	document.addEventListener('keydown', walk, false);
	document.addEventListener('keyup', stop, false);

})();


/* Scrolling Back to Top */
function myScrollFunction() {
        var element_to_scroll_to = document.getElementById('scrollhere');
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
