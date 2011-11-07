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
	
	
	$("li.main_nav").each(function(){
	
		if( $(this).is('.menu-item-994') && $(this).hasClass('current-menu-item') )
		{
			
			$(this).prepend("<ul class='subnav'></ul>");
			
			$('.subnav').append('<li class="background4 cap"></li>');
			
			for(var i = 0; i<subcats.length; i++)
			{
				$('.subnav').append('<li class="background'+(i%5)+' '+subcats[i]+'" >'+subcats[i]+'</li>');
			}
			
			$('.subnav').append('<li class="background4 all">all</li>');
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
		$(this).stop().animate({'margin-top':'160px'},'slow');
		}, function () {
		$(this).stop().animate({'margin-top':'-15px'}, 'slow');
	});
	
	var detachedArticles = null;
	$('ul.subnav li').click(function(){
		function fixGrid(){
			$('article.resource').removeClass('last');
			var articles = $('article.resource:visible');
			var i = 0;
			var j = 0;
			while(i < articles.length){
				j++;
				if(j%3 == 0)
				{
					$(articles).eq(i).addClass('last');
				}
				i++;
			}
		}
		$('ul.subnav').append($(this));
		$('ul.subnav').css('margin-top','-15px');
		
		if(detachedArticles)
		{
			$('section#feature_spots').prepend(detachedArticles);
			detachedArticles = null;
		}
		
		if(!$(this).hasClass('all')){
			detachedArticles = $("article.resource").not('.category-'+$(this).text()).detach();
		}
		
		fixGrid();
		

	
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
	
//	this shortens the news feed to fit in the banner
	$('a.kbrsswidget').each(function(){
	 $(this).text($(this).html().substring(0,86 )+"..."); 
	});
	
//	this shortens the slider caption
	$('.anythingSlider .wrapper ul li div.slider_caption p').each(function(){
	 $(this).text($(this).html().substring(0,200 )); 
	});
//	end news section
	
// responsive layout

		
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
