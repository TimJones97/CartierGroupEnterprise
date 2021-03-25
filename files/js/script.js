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
	    $('.cge_loader').addClass('anim_zoom');
	    $('.preloader-white').addClass('anim_zoom');
	    $('.pace').addClass('anim_zoom');
  	}, 1000);
  }
});
$(document).ready(function(){
	// Scroll to top so that WebGL ripple effect loads properly
	$(document).scrollTop(0);
	smallNavOnScroll();
	setCopyrightYear();
	hideNavOnTap();
	createCanvas();
	// setTimeout(function(){
	  $('.parallax-wrapper').paroller({
	    factor: '0.2',
	    type: 'foreground',
	    direction: 'vertical'
	  }); 
	// }, 2000);
});