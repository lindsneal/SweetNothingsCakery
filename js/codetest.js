
//ajax
function pageAjax(url) {
	$('#content >')
		.fadeOut(800)
		.queue(function(){ 
			$('#content').load(url + ' #content > *', function(){
				$('#content >').hide().fadeIn(800,function(){$('#form1').validate();}).dequeue();		
		
			if ($('#imageboxhome').length > 0){
		$('#imageboxhome').append('<div id="pager"></div>').cycle();
	}			
			if ($('#imagebox1').length > 0){
		$('#imagebox1').cycle();
	}
		if ($('#fancybox a').length > 0){
			$('#fancybox a').fancybox();
	}
	if ($('#accordion').length > 0){
			$('#accordion li ul').hide();
	}
	if ($('#accordion2').length > 0){
			$('#accordion2 li ul').hide();
	}
	
			});
		});	
		
		}
		

$(document).ready(function(){

//ajax--click 
 $('body').on('click', '#bigBox li a', function(e){
		var url = $(this).attr('href');
		//var id = '#' + $(this).parents().attr('id');
		pageAjax(url);
		e.preventDefault();
	});	
	
	
//navMenu bar
	$('.navMenu li ul').css({
    display: "none",
    left: "auto"
  });
  $('.navMenu li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
  
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
			timeout: 1000,
			overlayTemplate:'{{desc}}',
			captionPlugin : 'caption2',
			overlayFxOut: 'slideUp',
			overlayFxIn: 'slideDown',
	});
	
	$('#fancybox a').fancybox();


});






