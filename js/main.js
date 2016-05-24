$(function() {

	// jQuery Goes here!

	// When we click on the hamburger
	$('.fa-bars').on('click', function(){
		console.log('it worked :)');
		// We need to display flex the main nav
		// $('.mainNav').css('display','flex');
		$('.navbar').toggleClass('show');

	});
});