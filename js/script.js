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
		if($(this).attr("value")=="Leer +"){
			$(this).attr("value","Leer -");
			}
		else{
			$(this).attr("value","Leer +");
			};
  		$("#" + id + " p").toggle();
  		$grid.masonry();
		

	});


		});
