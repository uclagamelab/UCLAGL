document.createElement('header');
document.createElement('footer');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('nav');

Array.prototype.unique = function() {
    var o = {},
    i,
    l = this.length,
    r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};

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
	var subcats = [];
	$('article[class*="category"]').each(function(index){
		var allClasses = $(this).attr('class').split(' ');
		
		for(var i = 0; i<allClasses.length; i++)
		{
			var matches = /^category\-(.+)/.exec(allClasses[i]);
			if(matches != null) subcats.push(matches[1]);
			
		}
	});
	subcats = subcats.unique();
	//console.log(subcats);
	

	
	$("li.main_nav").each(function(){
	
		if( $(this).is('.menu-item-994') && $(this).hasClass('current-menu-item') )
		{
			
			$(this).prepend("<ul class='subnav'></ul>");
			$('.subnav').append('<li class="background4 all">all</li>');
			for(var i = 0; i<subcats.length; i++)
			{
				$('.subnav').append('<li class="background'+(i%5)+' '+subcats[i]+'" >'+subcats[i]+'</li>');
			}
		}

		if( $(this).hasClass('current-menu-item') )
		{
			$(this).css('top', '0px');
		}

		else
		{
			$(this).hover(function() {

			    $(this).stop().animate({'top':'0px'},'slow','easeOutBounce');
			    }, function () {
			    $(this).stop().animate({'top':'-18px'}, 'fast');
			});
		}
		

	});
	
	$('ul.subnav').hover(function() {
		$(this).stop().animate({'margin-top':'170px'},'slow');
		}, function () {
		$(this).stop().animate({'margin-top':'-10px'}, 'slow');
	});
	
	$('ul.subnav li').click(function(){
		$('ul.subnav').append($(this));
		$('ul.subnav').css('margin-top','-10px');
		$("article.featured_article").show();
		if(!$(this).hasClass('all')){
			$("article.featured_article").not('.category-'+$(this).text()).hide();
		}
	});
	
	
	
	//do a function on click to hide all the featured items matching the class corresponding to the link
	
	
	

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
