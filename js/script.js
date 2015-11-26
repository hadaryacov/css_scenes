$(document).ready(function(){

	var $sky = $('.sky');
	var $sun = $('.sun');
	var $sunset = $('.sunset');
	var $clouds = $('.cloud');
	var posY = $sky.offset().top - 300;

	$( window ).scroll(function() {
		if($(window).scrollTop() > posY){
			var per = ($(window).scrollTop() - posY)/$sky.height();
			console.log('per',per);
			$sun.css('top',per*100 + '%');
			$sunset.css('opacity',per);
			$clouds.css('opacity', 1-per);

		}
	});

});