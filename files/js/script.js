function smallNavOnScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 5){
		$('.navbar').addClass('small');
	}
	else {
		$('.navbar').removeClass('small');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5){
			$('.navbar').addClass('small');
		}
		else {
			$('.navbar').removeClass('small');
		}
	});
}
function setElementHeight(){
	$('.cge_loader').css('height', $(window).innerHeight() + 'px');
	$('.pattern_overlay').css('height', $(window).height() + 'px');
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
function hideNavOnTap(){
	$('.nav a').click(function() {
	    $('.navbar-collapse').collapse('hide');
	});
}

// Pause the video before everything is loaded
$('video').trigger('pause');
Pace.on("done", function(){
  if ($('.pace-progress').attr('data-progress-text') == '100%'){
  	setTimeout(function(){
  		// Start playing the video
		$('video').trigger('play');
	    $('.cge_loader').addClass('anim_slidedown');
	    $('.preloader-white').addClass('anim_slidedown');
	    $('.pace').addClass('anim_slidedown');
  	}, 1000);
  }
});
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
function checkIfElementsVisible(){
	var firstTime = true,
		ticketInfoVisible = false,
		photosVisible = false;
	$(window).scroll(function(){
		photosVisible = $('.image-container').visible(true);
		// if(ticketInfoVisible){
		// 	setTimeout(function(){
		// 		$('.package_info').addClass('show');
		// 	}, 500);
		// }
		if(photosVisible && firstTime){
			firstTime = false;
			$('figure').addClass('add_anim');
			setTimeout(function(){
			  $('figure').removeClass('add_anim');
			  $('figure').addClass('no_anim');
			}, 2000);
		}
	});
}
function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
	var target = $(this).attr('href');
	// If the target is not empty
    if(target != '#'){
		e.preventDefault();
		e.stopPropagation();
		// set target to anchor's "href" attribute
		if(target == "#contact-vip") {
		  	$("#message").val("Hello, I'd like to enquire about the availability of VIP access. ");    
		  	target = "#contact";  
		  	setTimeout(function(){
		    	$( "#message" ).focus();
		  	}, 1200);  
		}
		if(target == "#contact-yacht") {
		  	$("#message").val("Hello, I'd like to enquire about the yacht deposit and fees. ");    
		  	target = "#contact";  
		  	setTimeout(function(){
		    	$( "#message" ).focus();
		  	}, 1200);  
		}
		if(target == "#contact-private") {
		  	$("#message").val("Hello, I'd like to enquire about booking a private event. ");    
		  	target = "#contact";  
		  	setTimeout(function(){
		    	$( "#message" ).focus();
		  	}, 1200);  
		}
		if(target == "#contact-depart") {
		  	$("#message").val("Hello, I'd like to enquire about docking elsewhere. ");    
		  	target = "#contact";  
		  	setTimeout(function(){
		    	$( "#message" ).focus();
		  	}, 1200);  
		}
		if(target == "#contact-video") {
		  	$("#message").val("Hello, I'd like to enquire about the pricing for a videographer. ");    
		  	target = "#contact";  
		  	setTimeout(function(){
		    	$( "#message" ).focus();
		  	}, 1200);  
		}
		if(target == "#sign-up") {
			setTimeout(function(){
		    	$( "#first-name" ).focus();
		  	}, 1200);  
		}
		// scroll to each target
	    $(target).velocity("scroll", { 
	      duration: 1000,
	      offset: -125
	    });
    }
	else {
		e.preventDefault();
		e.stopPropagation();
	}
  });
}
function hoverEffects(){
	var privateClicked = false,
		ticketsClicked = false;

	$('.left_tickets').hover(
		function() {
		    $(this).addClass('expand');
		    $('.right_private').addClass('compress');
	  	}, function() {
		    $(this).removeClass('expand');
		    $('.right_private').removeClass('compress');
  	});
	$('.left_tickets').click(function(){
		if(!ticketsClicked){
			$(this).addClass('full_width');
			$('.right_private').addClass('zero_width');
			$('.left_tickets .tickets_overlay').addClass('disappear');
			ticketsClicked = true;
		}
	});
	$('.right_private').click(function(){
		if(!privateClicked){
			$(this).addClass('full_width');
			$('.left_tickets').addClass('zero_width');
			$('.right_private .private_overlay').addClass('disappear');
			privateClicked = true;
		}
	});
	$('.go_back').click(function(e){
		e.preventDefault();
		if(privateClicked || ticketsClicked){
			$('.left_tickets').removeClass('full_width').removeClass('zero_width');
			$('.right_private').removeClass('full_width').removeClass('zero_width');
			$('.right_private .private_overlay').removeClass('disappear');
			$('.left_tickets .tickets_overlay').removeClass('disappear');
			setTimeout(function(){
				privateClicked = false,
				ticketsClicked = false;
			}, 500);
		}
	});
	$('.right_private').hover(
		function() {
		    $(this).addClass('expand');
		    $('.left_tickets').addClass('compress');
	  	}, function() {
		    $(this).removeClass('expand');
		    $('.left_tickets').removeClass('compress');
	});
}
function createCarousel(){
	$('#owl-carousel').owlCarousel({
	    loop: true,
	    margin: 30,
	    dots: true,
	    autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        animateOut: 'fadeOut',
        margin: 100,
        smartSpeed: 700,
        nav: true,
	    items: 1,
	    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    mouseDrag: false
	});
}
function openGalleryFromCarousel(){
	var current_elem;
	var window_width = $(window).width()
	$('.owl-carousel .item').click(
		function(){
			var $this = $(this).children().first()
	    	var current_id = $this.attr('id');
			$('.gallery-container').addClass('show');
			// id five is the video, always
			$('.gallery div').each(function(){
				if($(this).attr('class') == current_id){
					current_elem = $(this);
					current_elem.addClass('display');
				}
			})
			$('body').addClass('gallery_open');
		}
	);
	$('.gallery div picture').hover(
	    function() {
	      $("picture").not(this).addClass("small");
	    },
	     function() {
	      $("picture").not(this).removeClass("small");
	    },
	  );
	//Close gallery on click
	$('.gallery-container').click(function(event){
	    if(event.target == $('.gallery-container')[0]){
			current_elem.removeClass('display');
			$(this).removeClass('show');
			$('body').removeClass('gallery_open');
		}
	})
}
function writeLiveReload(){
	if(location.host == 'localhost:8000'){
		document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
	}
}
function isMobile(){
	const width = $("window").innerWidth();
	if(width > 991){
		return false;
	}
	else {
		return true;
	}
}
function resizeHero(){
  	const height = window.innerHeight;
	if(isMobile()){
	   $(".main-banner").css("height",  height + "px");
	   console.log(height + "px");
  	}
	else {
		$(".main-banner").css("height", "100vh");
  }
}
$(window).resize(function(){
	$(document).scrollTop($(document).scrollTop() + 1);
	setElementHeight();
});
$(document).ready(function(){
	// Scroll 1 pixel to properly calibrate the parallax elements
	$(document).scrollTop($(document).scrollTop() + 1);
	var pathname = window.location.pathname.split('/');
	pathname = pathname[pathname.length-2] + '/' + pathname[pathname.length-1]

	if(pathname == 'CartierGroupEnterprise/' || pathname == 'CartierGroupEnterprise/index.html' || pathname == '/'){
		checkIfElementsVisible();
		createCarousel();
		hoverEffects();
	}
	setElementHeight();
	openGalleryFromCarousel();
	smallNavOnScroll();
	setCopyrightYear();
	hideNavOnTap();
	bindVelocity();
	resizeHero();
	setTimeout(function(){
		$('.parallax-wrapper').paroller({
			factor: '0.2',
			type: 'foreground',
			direction: 'vertical'
		}); 
	}, 200);
});