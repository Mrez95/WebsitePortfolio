(function($) {
	
jQuery(document).ready(function() {

jQuery(".container").fitVids();

//Slide-out Sidebar
	$open = false ;
	jQuery("#slide-out-open").click(function() {
		if( $open ){
			jQuery(this).parent().animate({left: '-238px'}, 300);
			jQuery("#slide-out-open div span").html('+');
			$open = false ;
		}else{
			jQuery(this).parent().animate({left: '0'}, 500);
			jQuery("#slide-out-open div span").html('-');
			$open = true ;
		}
	});
		
		
//prettyPhoto Setup
    jQuery("a[rel^='prettyPhoto'] , .gallery-images .gallery-icon a").prettyPhoto({animation_speed:'normal',theme: tie.prettyPhoto });

	jQuery.fn.prettyPhoto({'theme': tie.prettyPhoto });
	jQuery("a[rel^='prettyPhoto']").live("click",function() {
		jQuery.prettyPhoto.open(jQuery(this).attr("href"),"","");
		return false;
	});

//Scroll To top
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});
		
//Like Button	
	jQuery('a.tie-likes').live('click',
		function() {
			var post_id = jQuery(this).attr('rel');
			var like = jQuery(this);
			
			if( like.hasClass('liked') ){
				//alert( 'You have already loved this item.' )
				return false;
			}
			jQuery.post(tie.ajaxurl, { action:'tie_like_post' , post:post_id }, function(data) {
				like.html( data ).addClass('liked').attr('title','You already like this');
			}, 'html');
			return false;
	});
	

//Mobiles Menus
	jQuery('#main-menu-mob, #top-menu-mob').bind('change', function () {
          var url = jQuery(this).val();
          if (url) {
              window.location = url;
          }
          return false;
	});
	
//tooltip();
    jQuery('.ttip , .tooltip-n').tipsy({fade: true, gravity: 's'});
    jQuery('.tooldown, .tooltip-s').tipsy({fade: true, gravity: 'n'});
	
    jQuery('.tooltip-nw').tipsy({fade: true, gravity: 'nw'});
    jQuery('.tooltip-ne').tipsy({fade: true, gravity: 'ne'});	
    jQuery('.tooltip-w').tipsy({fade: true, gravity: 'w'});
    jQuery('.tooltip-e').tipsy({fade: true, gravity: 'e'});
    jQuery('.tooltip-sw').tipsy({fade: true, gravity: 'w'});
    jQuery('.tooltip-se').tipsy({fade: true, gravity: 'e'});
	
// Toggle Shortcode
	jQuery(".toggle-head-open").click(function () {
		jQuery(this).parent().find(".toggle-content").slideToggle("slow");
		jQuery(this).hide();
		jQuery(this).parent().find(".toggle-head-close").show();
    });
	jQuery(".toggle-head-close").click(function () {
		jQuery(this).parent().find(".toggle-content").slideToggle("slow");
		jQuery(this).hide();
		jQuery(this).parent().find(".toggle-head-open").show();
    });
	
		
// Menus
	jQuery('#main-nav ul > li > ul, #main-nav ul > li > ul > li > ul, #main-nav ul > li > ul > li > ul> li > ul').parent('li').addClass('parent-list');
	jQuery('.parent-list').find("a:first").append(' <span class="sub-indicator">&raquo;</span>')
	
	jQuery("#main-nav li , .top-menu li").each(function(){	
		var $sublist = jQuery(this).find('ul:first');		
		jQuery(this).hover(function(){	
			$sublist.stop().css({overflow:"hidden", height:"auto", display:"none"}).fadeIn(400, function(){
				jQuery(this).css({overflow:"visible", height:"auto"});
			});	
		},
		function(){	
			$sublist.stop().fadeOut(200, function()	{	
				jQuery(this).css({overflow:"hidden", display:"none"});
			});
		});	
	});


});



//----------------------------------------------
var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);

//----------------------------------------------
(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.youtube-nocookie.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );