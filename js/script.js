jQuery(document).ready(function($) {

	$('.my-slider').unslider({
		autoplay: true,
		arrows: true,
		infinite: true
	});

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
	 	columnWidth: 0,
	 	transitionDuration: '0.8s'
	});

	$( ".leer_mas" ).click(function() {
		var id = $(this).attr("id");
		//alert(id);
  		$("#" + id + " p").toggle();
  		$grid.masonry();

	});


		});
