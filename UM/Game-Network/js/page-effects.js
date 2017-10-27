/* Variables */
var sprite = document.querySelector('.sprite');
var counter = 0;
var isEnabled = true;
var windowname = '#window-1';
var previouswindow = '#window-1'

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
    if (counter == 1) {
      $('.special-button').hide();
      $(windowname).show();
    } else if (counter >=5){
      $(previouswindow).hide();
      $('.special-button').show();
      counter = 0;
    }
    else if (counter > 0) {
      previouswindow = '#window-' + String(counter-1);
      $(previouswindow).hide();
      $(windowname).show();
    }
    console.log(counter);
  }

  function cycleBackwards() {
      counter = counter - 1;
      windowname = '#window-' + String(counter);
      if (counter == 0) {
        $('.special-button').show();
        $(windowname).hide();
      } else if (counter >=5){
        $(previouswindow).show();
        $('.special-button').hide();
        counter = 0;
      }
      else if (counter > 0) {
        previouswindow = '#window-' + String(counter-1);
        $(previouswindow).show();
        $(windowname).hide();
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
