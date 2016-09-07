jQuery(document).ready(function() {

var vp = $('.media-test').width();

// Extra form info show/hide
$('.show-info').click(function () {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$(this).next('p').slideUp();
	} else {
		$(this).addClass('open');
		$(this).next('p').slideDown();
	}
	return false;
});

// Manual address show/hide
$('.show-manual').click(function () {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$(this).next('div').slideUp();
	} else {
		$(this).addClass('open');
		$(this).next('div').slideDown();
	}
	return false;
});

$('.help').click(function(event){
   event.stopPropagation();
});

// Show/hide help
$('.show-help').click(function () {
	$('#' + this.id + '-overlay').fadeIn();
	return false;
});
$('.close-help, .help-container').click(function () {
	$('.help-container').fadeOut();
	return false;
});
$('.add-giftaid').click(function () {
	$('.help-container').fadeOut();
	$('#giftaid').prop('checked', true);
	return false;
});
$('.add-recurring').click(function () {
	$('.help-container').fadeOut();
	$('#recurring').prop('checked', true);
	return false;
});

// Show overlay
$('.show-overlay').click(function () {
	$('.overlay').fadeIn();
	return false;
});
$('.close-overlay').click(function () {
	$('.overlay').fadeOut();
	return false;
});

// Show more on campaign
$('.show-campaign-info').click(function () {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open').html('Show more');
		$('.campaign-info').css('height', '8em');
		$('.campaign-info').css('padding-bottom', '0');
		$('.fade').show();
	} else {
		$(this).addClass('open').html('Show less');
		$('.campaign-info').css('height', 'auto');
		$('.campaign-info').css('padding-bottom', '1em');
		$('.fade').hide();
	}
	return false;
});

var tablet = function() {
	// Show filters desktop
	$('div.filters ul a').click(function () {
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$('.show-' + this.id).slideUp();
		} else {
			if ($("div[class^='show-']").is(':visible')) {
				if ($(this).hasClass('selected')) {
					$(this).removeClass('selected');
					$("div[class^='show-']").fadeOut();
				} else {
					$('div.filters ul a').removeClass('selected');
					$("div[class^='show-']").hide();
					$(this).addClass('selected');
					$('.show-' + this.id).fadeIn();
				}
			} else {
				$(this).addClass('selected');
				$('.show-' + this.id).slideDown();
			}
		}
		return false;
	});
};

var mobile = function() {
	// Show filters mobile
	$('.show-filters').click(function () {
		$('.overlay').fadeIn();
		$('.filters-container').animate({right: 0});
		return false;
	});

	$('.close, .overlay').click(function () {
		$('.overlay').fadeOut();
		$('.filters-container').animate({right: '-100%'});
		return false;
	});

	$('div.filters h2').click(function () {
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$('.show-' + this.id).slideUp();
		} else {
			$(this).addClass('selected');
			$('.show-' + this.id).slideDown();
		}
		return false;
	});
};

// Mobile filters show/hide
if (vp === 200) {
	mobile();
} 

// Tablet filters show/hide
if (vp === 300) {
	tablet();
} 

function check_difference(a, b) { return Math.abs(a - b); } 
	
function check_window_size() {
	var new_vp = $('.media-test').width();
	var x = check_difference(new_vp, vp);			
	if (x === 100) {
		if (new_vp === 300) {
			location.reload();
			tablet();
		}
		if (new_vp === 200) {
			location.reload();
			mobile();
		}
		vp = new_vp;
	}
}

var resizeTimer;
$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(check_window_size, 100);
});

});