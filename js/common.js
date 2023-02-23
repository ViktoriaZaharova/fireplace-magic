// phone mask
$('[name="phone"]').mask('+7 (999) 999-99-99');
// phone mask end

// header fixed scroll
$(window).scroll(function () {
	var heightHome = $('.home').height();
	if ($(this).scrollTop() > heightHome) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});
// header fixed scroll end

// scroll animate anchor
$(document).ready(function () {
	$(".go_to").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			heighHeader = $('header').outherHeight(),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top - heighHeader }, 500);
	});
});
// scroll animate anchor end

// scroll brands
$(document).ready(function () {
	var element = document.getElementById("scroll-section");
	var cnt = 0;

	document.addEventListener('wheel', function (event) {
		event = event || window.event;
		var y = event.deltaY || event.detail || event.wheelDelta, val = 0.3, min = 0, max = 0;

		if (y > 0) {
			cnt = cnt - 1;
			element.style.transform = 'translate(' + cnt + '%)';
		}
		if (y < 0) {
			cnt = cnt + 1;
			element.style.transform = 'translate(' + cnt + '%)';
		}
	});
});
// scroll brands end

