$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// animatecss
	//waypoints official site http://imakewebthings.com/waypoints/
	$("section h2").animated("zoomInUp"); /*Используется в качестве примера*/
	// -end  animatecss

	// OwlCarousel
	// documentation https://github.com/OwlCarousel2/OwlCarousel2
	$('.owl-carousel').owlCarousel();
	// -end OwlCarousel

	// ajax form
	// Обязательно присутствует вместе с "mail.php"
	// ссылка на урок https://www.youtube.com/watch?v=0bexJuzHFRo
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	// -end ajax form

	// page scroll to id
	 // $("nav a").mPageScroll2id(); /*Пример подключения, ссылка на урок https://www.youtube.com/watch?v=YPlHvyYua8c&t=9s*/
	// -end page scroll to id

	// validate form
	// documentation https://jqueryvalidation.org/documentation
	$("#commentForm").validate();
	// -end validate form

	// preloader
	$(".loader").delay(400).fadeOut("slow");
	$(".loader-inner").fadeOut();

});