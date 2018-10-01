$(function() {

	// preloader
	$(".loader").delay(400).fadeOut("slow");
	$(".loader-inner").fadeOut();

	// fixed-menu Фиксированное меню которое пропадает при скролле вниз и появляется при обратном скролле (т.е вверх) https://codepen.io/andiio/pen/gspxJ
	// $('html').on('DOMMouseScroll mousewheel', function (e) {
	//   if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
	//   	console.log('Down');
	//   	$( "#header-nav" ).addClass( "hide-nav-bar" );
	//   } else {
	//   	console.log('Up');
	//   	$( "#header-nav" ).removeClass( "hide-nav-bar" );
	//   }
	// });

	// animatecss
	//waypoints official site http://imakewebthings.com/waypoints/
	// $("section h2").animated("bounceIn"); 

  //  active tooltips BS4
  // $('[data-toggle="tooltip"]').tooltip()

  // ripple effect btn
  // Добавляем элементу класс .ripple Активируем sass файл в libs
  // [].map.call(document.querySelectorAll(".ripple"), el=> {
  // 	el.addEventListener('click',e => {
  // 		e = e.touches ? e.touches[0] : e;
  // 		const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
  // 		el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
  // 		el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
  // 	})
  // })

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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
	
});