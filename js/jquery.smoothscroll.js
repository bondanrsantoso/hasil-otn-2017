$(document).ready(function(){
	$('a[href^="#"]:not(.carousel-control)').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 50
	    }, 400, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
