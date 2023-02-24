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
			heighHeader = $('header').outerHeight(),
			top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top - heighHeader }, 500);
	});
});
// scroll animate anchor end




$(document).ready(function () {
	var block_show = null;

	function scrollTracking() {
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var et = $('.you-clients').offset().top;
		var eh = $('.you-clients').outerHeight();

		if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
			if (block_show == null || block_show == false) {
				$.each($('.you-clients-box'), function (i, el) {
					setTimeout(function () {
						$(el).addClass("active");
					}, 500 + (i * 500));
				});
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				$('.you-clients-box').removeClass('active');
			}
			block_show = false;
		}
	}

	$(window).scroll(function () {
		scrollTracking();
	});

	$(document).ready(function () {
		scrollTracking();
	});
});

// sliders
$('.work-slider1').slick({
	slidesToShow: 3,
	adaptiveHeight: true,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	centerMode: true,
	prevArrow:  '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.work-slider2').slick({
	slidesToShow: 2,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	centerMode: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>'
});
// slick active
$(window).on('load resize', function () {
	if ($(window).width() < 576) {
		$('.clients-logos:not(.slick-initialized)').slick({
			// dots: true,
			infinite: true,
			// speed: 100,
			slidesToShow: 3,
			arrows: false
		});
	} else {
		$(".clients-logos.slick-initialized").slick("unslick");
		// scroll brands
		$(document).ready(function () {
			var element = document.getElementById("scroll-section");
			var cnt = 0;

			document.addEventListener('wheel', function (event) {
				event = event || window.event;
				var y = event.deltaY || event.detail || event.wheelDelta, val = 0.3, min = 0, max = 0;

				if (y > 0) {
					cnt = cnt + 1;
					element.style.transform = 'translate(' + cnt + '%)';
				}
				if (y < 0) {
					cnt = cnt - 1;
					element.style.transform = 'translate(' + cnt + '%)';
				}
			});
		});
// scroll brands end
	}
});
// slick active
// sliders end

$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		$('.js-tab-trigger.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		$('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
});

// mobile menu
$('.btn-burger').click(function () {
	$('.header-bottom').fadeToggle();
});

$('.mobile-menu__close').click(function () {
	$('.header-bottom').fadeOut();
});

$(function () {
	var $el = $('.parallax-window');
	$(window).on('scroll', function () {
		var scroll = $(document).scrollTop();
		$el.css({ 'background-position': '50% ' + (-.1 * scroll) + 'px' });
	});
});