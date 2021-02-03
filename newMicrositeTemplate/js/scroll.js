$(document).ready(function() {

	var newNavElement = document.createElement("a");
	
	$("#lightgallery").lightGallery(
		{		mode: 'lg-fade',
			 download:false,
			 share:false,
			 fullScreen:false,
			 actualSize:false

		}
	);
	 // $("#lightSlider").lightSlider();
	$('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

	var idCount = 1;
	$('.page-section').each(function() {
	   $(this).attr('id', idCount);
	   idCount++;
	});

		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});


				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navBar a.active').removeClass('active');
						$('.navBar a').eq(i).addClass('active');
				}
		});


}).scroll();
