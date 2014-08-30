jQuery(document).ready(function() {

	var $container = jQuery('#portfolio-grid');

	jQuery("html, document, body").scrollTop(0)
	jQuery("#portfolio-grid").hide();
	jQuery("body").append('<div id="preloader"></div>');
	

jQuery('#close-post').live('click', function() { 
	jQuery('#portfolio-content').slideUp(300 , function() {
		jQuery('#portfolio-content').html('');
	});
});
	
jQuery('.portfolio-item a, #prev-post, #next-post').live('click', function() {
	jQuery('#portfolio-content').html('').fadeOut(200);
	jQuery('.loading-folio').fadeIn(200);
	
	var folioID = jQuery(this).attr('rel') ;
	
	jQuery.post(tie.ajaxurl, { action:'tie_get_folio' , id:folioID }, function(data) {
		var content = jQuery(data);
		content.fitVids();

		jQuery('body').animate({scrollTop: '0px'}, 1000 );
		jQuery('#portfolio-content').append( content )
		jQuery('.loading-folio').fadeOut(200 , function() {
			jQuery('#portfolio-content').fadeIn(500 )
		});
		

		}, 'html');
});



	jQuery(window).load(function(){
		setPostWidth();		
		$container.isotope({
			itemSelector : '.portfolio-item',
			resizable: false,
			animationOptions: {
				duration: 400,
				easing: 'swing',
				queue: false
			},
			masonry: {}
		});
		arrange();
		
		jQuery("#preloader").fadeOut("fast", function () {
			jQuery(this).remove(), jQuery("#portfolio-grid").fadeIn("slow");
			jQuery('#portfolio-grid').isotope();
		
		
			var flioID = window.location.hash.match(/\d+$/);
			flioID = parseInt( flioID );

			if( flioID ){
			
				jQuery('#portfolio-content').html('').fadeOut(200);
				jQuery('.loading-folio').fadeIn(200);
				
				jQuery.post(tie.ajaxurl, { action:'tie_get_folio' , id:flioID }, function(data) {
					var content = jQuery(data);
					content.fitVids();

					jQuery('body').animate({scrollTop: '0px'}, 1000 );
					jQuery('#portfolio-content').append( content )
					jQuery('.loading-folio').fadeOut(200 , function() {
						jQuery('#portfolio-content').fadeIn(500 )
					});
				

				}, 'html');
				
			}
		})
	});
	
	jQuery('#filters a').click(function(){
		var selector = jQuery(this).attr('data-filter');
		jQuery("#filters li").removeClass("current");
		jQuery(this).parent().addClass("current");
		setPostWidth();	
		$container.isotope({ filter: selector });
		return false;
	});

	var sidebarWidth = 238;	
	var leftOffset = sidebarWidth;
	function getNumColumns(){
		var winWidth = jQuery('#main-content').width();
		var column = 3;	
		if (winWidth<420) column = 1;
		else if(winWidth >=420 && winWidth<990) column = 2;			
		else if(winWidth>=990 && winWidth<1320) column = 3;
		else if(winWidth>=1320 && winWidth<2100) column = 4;
		else if(winWidth>= 2100) column = 5;		
		return column;
	}
	
	function setPostWidth(){
		var columns = getNumColumns();		
		if (jQuery(window).width() < 768) leftOffset = 0;
		else leftOffset = sidebarWidth;		
		var containerWidth = jQuery('#main-content').width();		
		var postWidth = containerWidth/columns;
		postWidth = Math.floor(postWidth);	
		jQuery(".portfolio-item").each(function(index){
				jQuery(this).css({"width":postWidth+"px"})				
		});
	}
	
	function arrange(){
		var winWidth = jQuery(window).width();
		setPostWidth();		
		$container.isotope('reLayout',function(){
			if(jQuery(window).width() != winWidth) 
				setTimeout(function(){ arrange();},10);
		});		
	}	
	
	jQuery(window).on("debouncedresize", function( event ) {
		arrange();
	});
 
});

jQuery(function() {
	jQuery('.da-thumbs > .portfolio-item').hoverdir();
});


// jquery.hoverdir.js
(function(e,t){e.HoverDir=function(t,n){this.$el=e(n);this._init(t)};e.HoverDir.defaults={hoverDelay:0,reverse:false};e.HoverDir.prototype={_init:function(t){this.options=e.extend(true,{},e.HoverDir.defaults,t);this._loadEvents()},_loadEvents:function(){var t=this;this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir",function(n){var r=e(this),i=n.type,s=r.find("div"),o=t._getDir(r,{x:n.pageX,y:n.pageY}),u=t._getClasses(o);s.removeClass();if(i==="mouseenter"){s.hide().addClass(u.from);clearTimeout(t.tmhover);t.tmhover=setTimeout(function(){s.show(0,function(){e(this).addClass("da-animate").addClass(u.to)})},t.options.hoverDelay)}else{s.addClass("da-animate");clearTimeout(t.tmhover);s.addClass(u.from)}})},_getDir:function(e,t){var n=e.width(),r=e.height(),i=(t.x-e.offset().left-n/2)*(n>r?r/n:1),s=(t.y-e.offset().top-r/2)*(r>n?n/r:1),o=Math.round((Math.atan2(s,i)*(180/Math.PI)+180)/90+3)%4;return o},_getClasses:function(e){var t,n;switch(e){case 0:!this.options.reverse?t="da-slideFromTop":t="da-slideFromBottom";n="da-slideTop";break;case 1:!this.options.reverse?t="da-slideFromRight":t="da-slideFromLeft";n="da-slideLeft";break;case 2:!this.options.reverse?t="da-slideFromBottom":t="da-slideFromTop";n="da-slideTop";break;case 3:!this.options.reverse?t="da-slideFromLeft":t="da-slideFromRight";n="da-slideLeft";break}return{from:t,to:n}}};var n=function(e){if(this.console){console.error(e)}};e.fn.hoverdir=function(t){if(typeof t==="string"){var r=Array.prototype.slice.call(arguments,1);this.each(function(){var i=e.data(this,"hoverdir");if(!i){n("cannot call methods on hoverdir prior to initialization; "+"attempted to call method '"+t+"'");return}if(!e.isFunction(i[t])||t.charAt(0)==="_"){n("no such method '"+t+"' for hoverdir instance");return}i[t].apply(i,r)})}else{this.each(function(){var n=e.data(this,"hoverdir");if(!n){e.data(this,"hoverdir",new e.HoverDir(t,this))}})}return this}})(jQuery)