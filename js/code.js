if ($(window).width() > 479) {
 $('head').append('<script type="text/javascript" src="js/jquery.cycle2.min.js"></script>',
 '<script type="text/javascript" src="js/_dependent/greensock/TweenMax.min.js"></script>',
	'<script type="text/javascript" src="js/_dependent/greensock/plugins/ScrollToPlugin.min.js"></script>',
	'<script type="text/javascript" src="js/jquery.scrollmagic.min.js"></script>',
	'<script type="text/javascript" src="js/_examples/demo.js"></script>',
	'<script type="text/javascript" src="js/_examples/highlight.pack.js"></script>',
	'<script type="text/javascript" src="js/_examples/general.js"></script>',
	'<script type="text/javascript" src="js/_examples/modernizr.custom.min.js"></script>',
	'<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>',
	'<script type="text/javascript" src="js/scrollmagic.js"></script>');
}		
		
			if ($('#imageboxhome').length > 0){
		$('#imageboxhome').append('<div id="pager"></div>').cycle();
	}			
			if ($('#imagebox1').length > 0){
		$('#imagebox1').cycle();
	}
		if ($('#fancybox a').length > 0){
			$('#fancybox a').fancybox();
	}
	

		
		

$(document).ready(function(){

/*//ajax--click 
 $('body').on('click', '#bigBox li a', function(e){
		var url = $(this).attr('href');
		//var id = '#' + $(this).parents().attr('id');
		pageAjax(url);
		e.preventDefault();
	});	
*/
	

  
  //cycle plugin
	
	$('#imageboxhome').append('<div id="pager"></div>').cycle(
	{
		slides: 'a',
		
		pager: '#pager',
		'pause-on-hover': 'true'
	});

	
//gallery page - cycle2 and Fancy box
	$('#imagebox1').cycle(
		{
			fx: 'scrollHorz',
			timeout: 1900,
			overlayTemplate:'{{desc}}',
			captionPlugin : 'caption2',
			overlayFxOut: 'slideUp',
			overlayFxIn: 'slideDown',
	});
	
	$('#fancybox a').fancybox();
	/*
//scrollmagic//
	var controller;
	  		if (Modernizr.touch) {
	  			var myScroll;
	  			$(document).ready(function () {
	  				// wrap for iscroll
		  			$("#content-wrapper")
		  				.addClass("scrollContainer")
		  				.wrapInner('<div class="scrollContent"></div>');

		  			// add iScroll
	  				myScroll = new IScroll('#content-wrapper', {scrollX: false, scrollY: true, scrollbars: true, useTransform: false, useTransition: false, probeType: 3, click: true});
					
	  				// update container on scroll
					myScroll.on("scroll", function () {
						controller.update();
					});

					// overwrite scroll position calculation to use child's offset instead of parents scrollTop();
					controller.scrollPos(function () {
						return -myScroll.y;
					});

					// refresh height, so all is included.
					setTimeout(function () {
					    myScroll.refresh();
					}, 0);

					// manual set hight (so height 100% is available within scroll container)
		  			$(document).on("orientationchange", function () {
			  			$("section")
			  				.css("min-height", $(window).height())
			  				.parent(".scrollmagic-pin-spacer").css("min-height", $(window).height());
		  			});
		  			$(document).trigger("orientationchange"); // trigger to init
	  			});
				// init the controller
	  			controller = new ScrollMagic({
		  			container: "#content-wrapper",
		  			globalSceneOptions: {
		  				triggerHook: "onLeave"
		  			}
		  		});
	  		} else {
	  			// init the controller
		  		controller = new ScrollMagic({
		  			globalSceneOptions: {
		  				triggerHook: "onLeave"
		  			}
		  		});
	  		}
//section Tweens
			
			var sceneOptions = {duration: 200, offset: -100};
				var elements = $("#tweens h3");


				// text properties
				$(elements[0]).wrapEach(/(.)/g, "<span>$1</span>");// wrap letters
				new ScrollScene(sceneOptions)
					.addTo(controller)
					.triggerHook("onCenter")
					.triggerElement(elements[0])
					.setTween(TweenMax.staggerTo($(elements[0]).children("span"), 0.0001, {color:"#B57640",textDecoration: "none", textTransform: "uppercase"}, 0.2));*/
					

					
				
});






