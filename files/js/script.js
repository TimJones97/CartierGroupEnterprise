var webGLCurtain;

// let timeline = new TimelineMax({
//     repeat: -1,
//     yoyo: true
//   }),
//   feTurb = document.querySelector('#feturbulence');

// timeline.add(
//   TweenMax.to(feTurb, 15, {
//     onUpdate: function() {
//       let bfX = this.progress() * 0.005 + 0.015, //base frequency x
//         bfY = this.progress() * 0.05 + 0.1; //base frequency y
//       feTurb.setAttribute('baseFrequency', `${bfX} ${bfY}`);
//     }
//   }), 0
// );
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
function createCanvas() {
  // set up our WebGL context and append the canvas to our wrapper
  var webGLCurtain = new Curtains({
    container: "canvas"
  });
  // if there's any error during init, we're going to catch it here
  webGLCurtain.onError(function() {
    // we will add a class to the document body to display original images
    // document.body.classList.add("no-curtains");
  });
  // get our plane element
  var planeElement = document.getElementsByClassName("plane")[0];
  // set our initial parameters (basic uniforms)
  var params = {
    vertexShaderID: "plane-vs", // our vertex shader ID
    fragmentShaderID: "plane-fs", // our framgent shader ID
    //crossOrigin: "", // codepen specific
    uniforms: {
      time: {
        name: "uTime", // uniform name that will be passed to our shaders
        type: "1f", // this means our uniform is a float
        value: 0,
      },
    }
  }
  // create our plane mesh
  var plane = webGLCurtain.addPlane(planeElement, params);
  // if our plane has been successfully created
  // we use the onRender method of our plane fired at each requestAnimationFrame call
  plane && plane.onRender(function() {
    plane.uniforms.time.value++; // update our time uniform value
  });
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
Pace.on("done", function(){
  if ($('.pace-progress').attr('data-progress-text') == '100%'){
  	setTimeout(function(){
  		// $('.pace').removeClass('pace-inactive');
	   //  $('.cge_loader').fadeOut(1000);
	   //  $('.preloader-white').fadeOut(1000);
	   //  $('.pace').fadeOut(1000);
	    // $('.anim_container').addClass('scale_back');
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
		ticketInfoVisible = $('.package_info').visible(true);
		photosVisible = $('.image-container').visible(true);
		if(ticketInfoVisible){
			setTimeout(function(){
				$('.package_info').addClass('show');
			}, 500);
		}
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
		  $("#message").val("Hello, I'd like to enquire about the VIP extras. ");    
		  target = "#contact";  
		  setTimeout(function(){
		    $( "#message" ).focus();
		  }, 1200);  
		}
		if(target == "#contact-private") {
		  $("#message").val("Hello, I'd like to enquire about a private event. ");    
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
		// if(target == "#package-two-contact") {
		//   $("#message").val("Hello, I'd like to book the Destination package. ");    
		//   target = "#contact";    
		//   setTimeout(function(){
		//     $( "#message" ).focus();
		//   }, 1200);  
		// }
		// if(target == "#package-three-contact") {
		//   $("#message").val("Hello, I'd like to book the Sydney/Melbourne package. ");    
		//   target = "#contact";    
		//   setTimeout(function(){
		//     $( "#message" ).focus();
		//   }, 1200);  
		// }  
		// scroll to each target
	    $(target).velocity("scroll", { 
	      duration: 1000,
	      offset: -125
	    });
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
        autoplaySpeed: 1500,
        animateOut: 'fadeOut',
	    items: 1
	})
}
$(window).resize(function(){
	$(document).scrollTop($(document).scrollTop() + 1);
});
$(document).ready(function(){
	// Scroll 1 pixel to properly calibrate the parallax elements
	$(document).scrollTop($(document).scrollTop() + 1);
	smallNavOnScroll();
	setCopyrightYear();
	hideNavOnTap();
	createCanvas();
	checkIfElementsVisible();
	bindVelocity();
	hoverEffects();
	createCarousel();
	$('.parallax-wrapper').paroller({
	  factor: '0.2',
	  type: 'foreground',
	  direction: 'vertical'
	}); 
});