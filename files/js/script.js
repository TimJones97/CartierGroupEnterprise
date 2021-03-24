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
//Need to add these into their own classes later
function addLightNav(){
  $(".navbar-default").removeClass('light');
  $(".navbar-default").addClass('light_mobile');
  $(".navbar-default").css("height", "57px");
  $(".navbar-brand img").css('height', '50px');
  $(".navbar-brand img").css('width', '50px');
  $(".navbar-default").css("opacity", "1");
  $(".navbar-nav li a").css("color", "#fff");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").removeClass('light_mobile');
  $(".navbar-default").removeClass('light');
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "40px");
  $(".navbar-default").css("height", "100px");
  // if($(window).width() < 991){
  //   $(".navbar-nav li:nth-of-type(2)").css("padding-left", "20px");
  // }
  // else {
  //   $(".navbar-nav li:nth-of-type(2)").css("padding-left", "40px");
  // }
  $(".navbar-nav li a:hover").css("color", "#fff");
  $(".navbar-nav li .navbar-brand").css("margin-top", "25px");
}
function addLightNavDesktop(){
  $(".navbar-default").addClass('light');
  $(".navbar-default").css("border-top", "none");
  $(".navbar-default").css("display", "block");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "15px");
  $(".navbar-default").css("height", "75px");
  // $(".navbar-nav li:nth-of-type(2)").css("padding-left", "10px");
  $(".navbar-nav li .navbar-brand").css("margin-top", "5px");
  $(".navbar-brand img").css('height', '50px');
  $(".navbar-brand img").css('width', '50px');
}
function animateNavbar(){
  //If on mobile
  var scrollCounter = $(document).scrollTop();
  if($(window).width() < 767){
    addLightNav();
  }
  //If on desktop
  else {
    //Scroll position is in About section
    if(scrollCounter > 1) {
      addLightNavDesktop();
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
    }
  }
}
//Reset the elements that require resizing
function setMainElements(){
  $(".navbar-nav li a").removeAttr("style"); 

  //Reset all styles on navbar if on desktop width
  if($(window).width() > 767) {
    $(".navbar-default").removeAttr("style");
    // $(".navbar-nav li a").removeAttr("style");   
    $(".navbar-collapse").removeAttr("style");
    $(".navbar-collapse .navbar-nav").removeClass("transparent");
  }
  else {
    $( ".navbar-nav li a" ).each(function( index ) {
      $(this).css('width', '100%');
    });
  }
}
$(document).ready(function(){
	// Scroll to top so that WebGL ripple effect loads properly
	$(document).scrollTop(0);
  	setMainElements();
  	animateNavbar();
	smallNavOnScroll();
	setCopyrightYear();
	createCanvas();
	new universalParallax().init({
	    speed: 2.0
  	});
});