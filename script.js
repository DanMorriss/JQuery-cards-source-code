$(document).ready(function() {
 

 	$("#stream1_btn").on(function() {
 		$(".stream1").toggle();
		$(".stream1").toggle(1000);
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 

// Challenge 1

$('p').click(function() {
    $('p').css('color', 'red');
});

$('h2').hover(function() {
    $('h2').css('background', 'lightblue');
});

$('.card-panel').mouseenter(function() {
    $('body').css('background-color', 'black');
});

$('.card-panel').mouseleave(function() {
    $('body').css('background-color', '#e1e2e2');
});

// Challenge 2

$('#card-panel-1').click(function() {
    $('#card-panel-1').hide('slow');
});

$('#card-panel-2').click(function() {
    $('#card-panel-2').hide('medium');
});

$('#card-panel-3').click(function() {
    $('#card-panel-3').hide('fast');
});

$('#card-panel-4').click(function(){
    $('#card-panel-4').hide(3000);
});

// Method Chaining Challenge

$('button').mouseenter(function(){
    $('button').removeClass('make-red').addClass('make-border');
});

$('button').mouseleave(function(){
    $('button').removeClass('make-border').addClass('make-red');
});

// The Importance of this Challenge 1

$('p').click(function(){
    $(this).text('Changed only the text for this paragraph')
});
$('.card').mouseenter(function(){
    $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
});

// The Importance of this Challenge 2

$('.module-nav').on('click', function() {
    let allModulesCardsSelector = ".card";
    let thisModuleCardsSelector = "." + this.id + "-card";
    $(allModulesCardsSelector).removeClass('card-highlight');
    $(thisModuleCardsSelector).addClass('card-highlight');
});

// Traversing children challenge

$('p').click(function(){
    $(this).children('a').css('background-color', 'yellow');
});

// Other Traversing Methods Challenge

$("button").click(function() {
	$(this).next().slideToggle('slow');
});

// Traversing sideways challenge 2

$('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function(){
	$(this).siblings('span').addClass('yellow');
});

$('#card-btn-2').click(function(){
	$(this).siblings('#card-par-1').addClass('red');
});

$('#card-btn-3').click(function(){
	$(this).siblings().addClass('large-font');
});