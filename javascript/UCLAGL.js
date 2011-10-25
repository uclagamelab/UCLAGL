document.createElement('header');
document.createElement('footer');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('nav');

function custommsg() 
{
	document.getElementById("form-message").style.display=""; 
	document.getElementById("form-message").innerHTML="Thanks for your interest!"; 
	document.getElementById("form-container").style.display="none";
} 
	
function isValidEmail(f) 
{
	var str = f.elements[1].value;
	   return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
}

$(document).ready(function() {
	

	
	$("nav#header_nav>div>ul>li").each(function(index, element){$(element).attr("id", index);});
	$("nav#header_nav>ul>li").each(function(i) {
	    $(this).attr('id',"nav" + i);
		$(this).addClass('main_nav');
	});
	
	
	




	 $('.anythingSlider').anythingSlider({
		easing: "easeInExpo",        // Anything other than "linear" or "swing" requires the easing plugin
		autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
		delay: 3800,                    // How long between slide transitions in AutoPlay mode
		startStopped: false,            // If autoPlay is on, this can force it to start stopped
		animationTime: 1200,             // How long the slide transition takes
		hashTags: true,                 // Should links change the hashtag in the URL?
		buildNavigation: true,          // If true, builds and list of anchor links to link to each slide
		pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
		startText: "Go",                // Start text
		stopText: "Stop",               // Stop text
	 });
	


	$("li.main_nav>a").each(function(){
		if( $(this).parent('li').hasClass('current-menu-item') )
		{
			$(this).css('top', '0px');
		}

		else
		{
			$(this).hover(function() {

			    $(this).stop().animate({'top':'0px'},'slow','easeOutBounce');
			    }, function () {
			    $(this).stop().animate({'top':'-18px'}, 'fast')
			});
		}
	});
	
	$(".subscribe").each(function(){
		$(this).hover(function(){
			$(this).stop().animate({'top':'-30px'}, 'slow', 'easeOutBounce');
		}, function(){
			$(this).stop().animate({'top':'-69px'}, 'fast')
		});
	});

	
	// $("#nav2>a").click(function (e) { 
	// 	$('#coming_soon').css('top', e.pageY);
	// 	$('#coming_soon').css('left', e.pageX);
	// 	$('#coming_soon').css('opacity', 100);
	// 	$('#coming_soon').animate({ 
	// 	    opacity: 0,
	// 		top:-300,
	// 	  }, 'slow', 'easeInQuart' );
	// 		
	// });
	
	

	
	$('div.tocopy').remove();
	
	$('#menu-custom-main-nav-1 li a span.separator:first').remove();

//	news section
	$('#news').innerfade({
		animationtype: 'slide',
		speed: 200,
		timeout: 4000,
		type: 'random',
		containerheight: '1em'
	});
	
	
	$('a.kbrsswidget').each(function(){
	 $(this).text($(this).html().substring(0,86 )+"..."); 
	});
//	end news section
	
	
	if(screen.width < 1290){
		$('section#main_section').css('background', 'none');
		$('section#main_section').css('padding', '110px 0 44px 0');
		
	}
	
	$("span.gallery-icon a").attr('class', 'fancybox');
	
	$("a.fancybox").fancybox({
		'titleShow'		: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
	});
	

});

