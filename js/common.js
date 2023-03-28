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

$(window).scroll(function () {
	var heightHeader = $('.header').height();
	if ($(this).scrollTop() > heightHeader) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
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


// sliders
$('.work-slider1').slick({
	slidesToShow: 3,
	adaptiveHeight: true,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	centerMode: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
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

$('.portfolio-gallery-preview').slick({
	slidesToShow: 5,
	adaptiveHeight: true,
	infinite: true,
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	asNavFor: '.portfolio-gallery-presentation',
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 2,
			}
		}
	]
});

$('.portfolio-gallery-presentation').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	asNavFor: '.portfolio-gallery-preview',
});

$('.similar-slider').slick({
	slidesToShow: 4,
	infinite: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.article-offers').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.recommended-articles-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.latest-articles').slick({
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
});
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


$('.slider-range').slider({
	range: true,
	min: 35700,
	max: 861390,
	values: [56000, 500000],
	classes: {
		"ui-slider-handle": "ui-corner-all"
	},
	slide: function (event, ui) {
		//Поле минимального значения
		$(".dec1").val(ui.values[0]);
		//Поле максимального значения
		$(".dec2").val(ui.values[1]);
	}
});

$(".dec1").val($(".slider-range").slider("values", 0));
$(".dec2").val($(".slider-range").slider("values", 1));


// hidden list > 5
$('.list-checkbox').each(function () {
	if ($(this).find('li').length > 5) {
		$(this).find('li').slice(5).hide();
		$(this).parent('.accordion-body').append('<a href="#" class="color-accent link-toggle-all">показать все</a>');
	}
});

// hidden list > 5

// show list all
$('.link-toggle-all').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parent().find('ul li');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('показать все');

		content.slice(5).slideUp();
	}
});

$('.link-all-characteristics').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.page-product').find('.list-characteristics-product li');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть');

		content.css('display', 'flex');
	} else {
		$this.removeClass('trigger');
		$this.html('показать все');

		content.slice(7).css('display', 'none');
	}
});

$('.btn-toggle-tags').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.list-tags').find('.list-tags__links');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('показать все');
		content.slice(10).css('display', 'none');
		
	} else {
		$this.removeClass('trigger');
		$this.html('Скрыть');
		content.css('display', 'flex');
	}
});

$('.links-toggle-menu').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $('.keep-menu');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('свернуть');
		content.removeClass('hidden');

	} else {
		$this.removeClass('trigger');
		$this.html('развернуть');
		content.addClass('hidden');
	}
});
// show list all

// load more
$('.link-load-portfolio').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.row').find('.work-item-col:hidden').slice(0, 4).slideDown();

	var onBlock = $(this).parents('.row').find('.work-item-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

// sidebar
$('.btn-filter').click(function () {
	$('.sidebar').fadeToggle();
});

$('.sidebar-close').click(function () {
	$('.sidebar').fadeOut();
});

$(".js-tab-trigger").click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});



