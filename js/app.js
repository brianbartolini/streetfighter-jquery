

$(document).ready(function() {	

	playOpening();

$(".ryu").mouseenter(function(){
	$(".ryu-still").hide();
	$(".ryu-ready").show();

	})
	.mouseleave(function(){
	$(".ryu-ready").hide();
	$(".ryu-still").show();

	})
	.mousedown(function(){
	playHadouken();
	$(".ryu-ready").hide();
	$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '529px');
		}
		);

	})

	.mouseup(function(){
	$(".ryu-throwing").hide();
	$(".ryu-ready").show();

	})


	var e = jQuery.Event("keydown");
	e.which = 88;

	$(document).keydown(function(e) {
		$(".ryu-cool").show();
		$(".ryu-still").hide();
		$(".ryu-throwing").hide();
		$(".ryu-ready").hide();
	})

	var e = jQuery.Event("keyup");
	e.which = 88;
	
	$(document).keyup(function(e) {
		$(".ryu-cool").hide();
		$(".ryu-ready").show();

	})	



});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();

}

function playOpening() {
	$('#ryu-cool-sound')[0].value = 0.5;
	$('#ryu-cool-sound')[0].load();
	$('#ryu-cool-sound')[0].play();
}
