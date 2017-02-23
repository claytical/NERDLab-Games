$(window).scroll(function() {

	var windowScroll = $(this).scrollTop();

	var  windowWidth = $(window).width();

	$('.handcops').css({
		'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
	});

	$('.condoms').css({
		'transform' : 'translate(0px, '+ windowScroll /5 +'%)'
	});

	$('.titleText').css({
		'transform' : 'translate(0px, '+ windowScroll /2 +'%)'
	});

	$('.learnMore').css({
		'transform' : 'translate(0px, '+ windowScroll +'%)'
	});


	if (windowWidth <= 480) {
		if (windowScroll > 120) {
			$('.learnMore').hide();
		}
		else {
			$('.learnMore').fadeIn();
		}
    }
    else {
 		if (windowScroll > 100) {
			$('.learnMore').fadeOut();
		}
		else {
			$('.learnMore').fadeIn();
		}   	
    }


	if (windowScroll > 450) {
		$('.titleText').fadeOut("easing");
	}
	else {
		$('.titleText').fadeIn("easing");	
	}


	if (windowWidth <= 480) {
		if (windowScroll < 650 || windowScroll > 2000  ) {
			$('.textDescription').fadeOut("easing").removeClass('textDescriptionAnimation');

		}
		else if (windowScroll > 700) {
			$('.textDescription').fadeIn("easing").addClass('textDescriptionAnimation');
		}
	}
	else {
		if (windowScroll < 1200 || windowScroll > 2500  ) {
			$('.textDescription').fadeOut("easing").removeClass('textDescriptionAnimation');

		}
		else if (windowScroll > 1300) {
			$('.textDescription').fadeIn("easing").addClass('textDescriptionAnimation');
		}
	}



	

	console.log(windowScroll);
	console.log("windowWidth", windowWidth);

});
	$('.a1').hide();
	$('.a2').hide();
	$('.a3').hide();
	$('.a4').hide();
	var myCounter = 0;

	setInterval(function () {
		++myCounter;

		if (myCounter == 4) {
			myCounter = 0;
		}

		if (myCounter == 0) {
			$('.a4').fadeOut("easing").removeClass('awardAnimationOutLeft');
			$('.a1').fadeIn("easing").addClass('awardAnimationOutLeft');
		}
		else if (myCounter == 1) {
			$('.a1').fadeOut("easing").removeClass('awardAnimationOutLeft');
			$('.a2').fadeIn("easing").addClass('awardAnimationOutLeft');
		}
		else if (myCounter == 2) {
			$('.a2').fadeOut("easing").removeClass('awardAnimationOutLeft');
			$('.a3').fadeIn("easing").addClass('awardAnimationOutLeft');
		}
		else if (myCounter == 3) {
			$('.a3').fadeOut("easing").removeClass('awardAnimationOutLeft');
			$('.a4').fadeIn("easing").addClass('awardAnimationOutLeft');
		}
		console.log(myCounter);
	}, 5000);
