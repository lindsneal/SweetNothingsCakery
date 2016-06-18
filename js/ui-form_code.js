	
	//UI form elements

$( "#accordion" ).accordion();



var availableTags = [

							"KS",
							"KY",
							"LA",
							"ME",
							"AL",
							"AK",
							"AZ",
							"AR",
							"CA",
							"CO",
							"CT",
							"DE",
							"FL",
							"GA",
							"HI",
							"IA",
							"ID",
							"IL",
							"IN",
							"MD",
							"MA",
							"MI",
							"MN",
							"MS",
							"MO",
							"MT",
							"NE",
							"NV",
							"NH",
							"NJ",
							"NM",
							"NY",
							"NC",
							"ND",
							"OH",
							"OK",
							"OR",
							"PA",
							"RI",
							"SC",
							"SD",
							"TN",
							"TX",
							"UT",
							"VT",
							"VA",
							"WA",
							"WV",
							"WI",
							"WY",
				
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});



$( "#button" ).button();
$( "#radioset" ).buttonset();



$( "#tabs" ).tabs();



$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});



$( "#datepicker" ).datepicker({
	inline: true
});



$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});



$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);

	//ui-plugin-form
	$( "#datepicker" ).datepicker({
	inline: true
});
var availableTags = [

							"KS",
							"KY",
							"LA",
							"ME",
							"AL",
							"AK",
							"AZ",
							"AR",
							"CA",
							"CO",
							"CT",
							"DE",
							"FL",
							"GA",
							"HI",
							"IA",
							"ID",
							"IL",
							"IN",
							"MD",
							"MA",
							"MI",
							"MN",
							"MS",
							"MO",
							"MT",
							"NE",
							"NV",
							"NH",
							"NJ",
							"NM",
							"NY",
							"NC",
							"ND",
							"OH",
							"OK",
							"OR",
							"PA",
							"RI",
							"SC",
							"SD",
							"TN",
							"TX",
							"UT",
							"VT",
							"VA",
							"WA",
							"WV",
							"WI",
							"WY",
				
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});
$( "#selectmenu" ).selectmenu();
$( "#button" ).button();
$( "#radioset" ).buttonset();

}