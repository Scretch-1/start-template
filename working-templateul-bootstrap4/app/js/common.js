$(function() {

// accortion
	$( "#accordion" ).accordion();
// -end accordion

// autocomplete
	var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
	$( "#tags" ).autocomplete({
		source: availableTags
	});
// -end autocomplete

// button
	$( ".widget input[type=submit], .widget .btn, .widget .btn" ).button();
	$( ".btn" ).click( function( event ) {
		event.preventDefault();
	} );
// -end button

// Checkboxradio
	$( "input[type='radio']" ).checkboxradio();
	$( "input[type='checkbox']" ).checkboxradio();
// -end Checkboxradio

// countdown
var fiveSeconds = new Date().getTime() + 5000;
$('#clock').countdown(fiveSeconds, {elapse: true})
.on('update.countdown', function(event) {
	var $this = $(this);
	if (event.elapsed) {
		$this.html(event.strftime('After end: <span>%H:%M:%S</span>'));
	} else {
		$this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
	}
});
// -end countdown

// Controlgroup
	$( ".controlgroup" ).controlgroup()
	$( ".controlgroup-vertical" ).controlgroup({
		"direction": "vertical"
	});
// -end Controlgroup

// Datepicker
	$( "#datepicker" ).datepicker();
// -end Datepicker

// Dialog
	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 500
		},
		hide: {
			effect: "explode",
			duration: 500
		}
	});

	$( "#opener" ).on( "click", function() {
		$( "#dialog" ).dialog( "open" );
	});
// -end Dialog

// Menu
	$( "#menu" ).menu();
// -end Menu

// Progressbar
	$( "#progressbar" ).progressbar({
		value: 20
	});
// -end Progressbar

// Selectmenu
	$( "#speed" ).selectmenu();

	$( "#files" ).selectmenu();

	$( "#number" )
	.selectmenu()
	.selectmenu( "menuWidget" )
	.addClass( "overflow" );

	$( "#salutation" ).selectmenu();
// -end Selectmenu


// Slider
	$( "#slider" ).slider();
// -end Slider

// Spinner
	var spinner = $( "#spinner" ).spinner();

	$( "#disable" ).on( "click", function() {
		if ( spinner.spinner( "option", "disabled" ) ) {
			spinner.spinner( "enable" );
		} else {
			spinner.spinner( "disable" );
		}
	});
	$( "#destroy" ).on( "click", function() {
		if ( spinner.spinner( "instance" ) ) {
			spinner.spinner( "destroy" );
		} else {
			spinner.spinner();
		}
	});
	$( "#getvalue" ).on( "click", function() {
		alert( spinner.spinner( "value" ) );
	});
	$( "#setvalue" ).on( "click", function() {
		spinner.spinner( "value", 5 );
	});

	$( "button" ).button();
// -end Spinner

// Tabs
	$( "#tabs" ).tabs();
// -end Tabs

// Tooltip
	$( document ).tooltip();
// -end Tooltip

// ajax form
// Обязательно присутствует вместе с "mail.php"
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

// validate form
// documentation https://jqueryvalidation.org/documentation
$("#commentForm").validate();
// -end validate form

});