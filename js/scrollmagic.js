
$(document).ready(function(){
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
			
			// draw ani
				var drawAni = new TimelineMax({delay: 0.2});
				var distancePerSecond = 500;
				$("svg#draw path").each(function () {
					var lineLength = $(this)[0].getTotalLength();
					$(this).css("stroke-dasharray", lineLength);
					$(this).css("stroke-dashoffset", lineLength);
					drawAni.add(TweenMax.to(this, lineLength / distancePerSecond, {strokeDashoffset: 0}));
				});
				
				//section Tweens
			
			var sceneOptions = {duration: 200, offset: -100};
				var elements = $("#tweens h3");


				// text properties
				$(elements[0]).wrapEach(/(.)/g, "<span>$1</span>");// wrap letters
				new ScrollScene(sceneOptions)
					.addTo(controller)
					.triggerHook("onCenter")
					.triggerElement(elements[0])
					.setTween(TweenMax.staggerTo($(elements[0]).children("span"), 0.0001, {color:"#ffffff",textDecoration: "none", textTransform: "uppercase"}, 0.2));
			// ani
				var pinani = new TimelineMax()
					// pin move down
					.add(TweenMax.from("#pin>img:first-child", 0.5, {top: "0%", marginTop: 0}))
					// draw
					.add([
						drawAni,
						TweenMax.to("#pin>img:first-child", 0.3, {autoAlpha: 0})
					])
					// wipe
					.add(TweenMax.to("#wipe", 1, {width: "100%", delay: 0.2}))
					// slide
					.add(TweenMax.to("#slide", 1, {top: "0%", ease: Bounce.easeOut, delay: 0.2}))
					// color
					.add([
						TweenMax.to("#slide h3:first-child", 0.2, {autoAlpha: 0}),
						TweenMax.from("#slide h3:last-child", 0.2, {autoAlpha: 0})
					])
					.add([
						TweenMax.to("#slide", 0.3, {backgroundColor: "yellow"}),
						TweenMax.to("#slide h3:last-child", 0.3, {color: "blue"})
					])
					.add([
						TweenMax.to("#slide", 0.3, {backgroundColor: "green"}),
						TweenMax.to("#slide h3:last-child", 0.3, {color: "red"})
					])
					.add([
						TweenMax.to("#slide", 0.3, {backgroundColor: "red"}),
						TweenMax.to("#slide h3:last-child", 0.3, {color: "white"})
					])
					.add([
						TweenMax.to("#slide", 0.3, {backgroundColor: "#c7e1ff"}),
						TweenMax.to("#slide h3:last-child", 0.3, {color: "orange"})
					])
					// unpin
					.add(TweenMax.from("#unpin", .5, {top: "100%"}));
				// pin
				new ScrollScene({
						triggerElement: "section#pin",
						duration: 1700
					})
					.on("progress", function () {
						// keep centered even though width changes
						$("#wipe h3").width($("#pin>h3").width());
					})
					.setTween(pinani)
					.setPin("section#pin")
					.addTo(controller);
			
});
			

	  	