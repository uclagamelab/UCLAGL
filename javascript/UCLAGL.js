document.createElement('header');
document.createElement('footer');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('nav');

var testVar = null;

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

function addSubnav(v) 
{
	v.add('<nav></nav>');
}

$(document).ready(function() {
	
//  nav stuff
	
	$("nav#header_nav>div>ul>li").each(function(index, element){$(element).attr("id", index);});
	$("nav#header_nav>ul>li").each(function(i) {
	    $(this).attr('id',"nav" + i);
		$(this).addClass('main_nav');
	});
	
	//this is to get the category names from all the articles on the page
	$('article[class*="category"]').each(function(index){
		//need to filter these results for the class names that contain category in them
		console.log(index + ': ' + $(this).attr('class'));
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
		
		if( $(this).parent('li').is('.menu-item-994') && $(this).parent('li').hasClass('current-menu-item') )
		{
			
			testVar = $(this);
			$(this).append("<ul class='subnav'></ul>");
			console.log($(this).children('.subnav').append(navItems));

			
		}
	});
	
	
	

	$('#menu-custom-main-nav-1 li a span.separator:first').remove();
	
//	end nav stuff

//  slider stuff

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
	

// end slider stuff


// social media stuff

	
	$(".subscribe").each(function(){
		$(this).hover(function(){
			$(this).stop().animate({'top':'-30px'}, 'slow', 'easeOutBounce');
		}, function(){
			$(this).stop().animate({'top':'-69px'}, 'fast')
		});
	});

		
// random stuff

// random stuff
	
	$('div.tocopy').remove();
	
// end random stuff

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
	
// responsive layout
	if(screen.width < 1290){
		$('section#main_section').css('background', 'none');
		$('section#main_section').css('padding', '110px 0 44px 0');
		
	}
		
//end responsive layout

//image gallery
	$("span.gallery-icon a").attr('class', 'fancybox');
	
	$("a.fancybox").fancybox({
		'titleShow'		: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
	});
	

});

//end image gallery
