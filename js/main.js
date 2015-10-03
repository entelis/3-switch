$('.switch button').on('click',function(e){
		$(this).toggleClass('on');
	
});
	
$('.switch button').click(function() {
		if ($(this).hasClass('on')) {
		$('body').css('background-color','black');
		$('.status').css('color','white');
		$('.status').text("Hey, who turn off the lights?");}
});


		$('.switch button').click(function() {
		if ($(this).hasClass('off')) {
		$('body').css('background-color','white');
		$('.status').css('color','black');
		$('.status').text("It's so bright in here!");}
});
