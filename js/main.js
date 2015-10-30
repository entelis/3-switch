$('.on').on('click', function(e) {
	if ($(this).hasClass('on')) {
		$(this).removeClass('on').addClass('off');
		$('.light').removeClass('light').addClass('dark');
		$('.status').css("color", "white").text("Who turned off the lights?");
	}
	else {
		$(this).removeClass('off').addClass('on');
		$('.dark').removeClass('dark').addClass('light');
		$('.status').css("color", "black").text("It's so bright in here!");
	};
});