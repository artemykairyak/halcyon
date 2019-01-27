$(function() {

	function selectItem(item, word, wrapper) {
		var stringItem = String(item);
		$(item).html($(item).html().replace(word, '<span class="'+ wrapper +'">' + word + '</span>'));
	}

	selectItem('.portfolio p', 'consequat ut sed sem', 'wrapped-item');
	selectItem('.counter-text-bottom', 'design', 'counter-wrapped-text');

	$('.design-slider').slick({
		infinite: false,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false,
  		draggable: false
	});

	$('.projects-slider').slick({
		infinite: false,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		dots: true,
  		arrows: false,
  		draggable: false
	});

	$('.team-members').slick({
		infinite: false,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		dots: true,
  		arrows: false,
  		draggable: false
	});

	$('.project-card').on('mouseenter', function(e) {
		$(this).addClass('hover-project');
		$(this).find('.mask').css('opacity', '0').animate({opacity: '0.7'}, 300);
		$(this).find('.hover-content').css('opacity', '0').animate({opacity: '1'}, 300);
	})

	$('.project-card').on('mouseleave', function(e) {
		$(this).find('.mask').animate({opacity: '0'}, 300);
		$(this).find('.hover-content').animate({opacity: '0'}, 300).removeClass('hover-project');
	})

	$('.burger').on('click', function(e) {
		$('.menu').toggleClass('menu-active');
		$('.burger').toggleClass('burger-active');
		if ($(this).hasClass('burger-active')) {
			console.log($(this));
			$('.overlay').css('display', 'block').animate({opacity: '0.7'}, 400);
		} else {
			$('.overlay').css({'display': 'none', 'opacity': '0'});
		}
	})

	$('.overlay').on('click', function(e) {
		$('.menu').removeClass('menu-active');
		$('.burger').removeClass('burger-active');
		$('.overlay').css({'display': 'none', 'opacity': '0'});
	})

	$('.learn-more-btn').on('click', function(e) {
		$('html, body').animate({
        scrollTop: $('.portfolio').offset().top
     }, 500);
	})

	$('.fa-angle-down').on('click', function(e) {
		$('html, body').animate({
        scrollTop: $('.projects').offset().top
     }, 500);
	})
})