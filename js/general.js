
/* Custom General jQuery
-------------------------------------------------------------------*/
;(function($) {
	$(document).ready( function(e) {
			/* Header Sticky */
			$(window).scroll(function() {
				if ($(this).scrollTop() > 1){  
					$('.header').addClass("sticky");
				  }
				  else{
					$('.header').removeClass("sticky");
				  }
			});
/*-------------------------------------------------------------------*