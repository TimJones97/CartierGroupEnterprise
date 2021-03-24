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
function createCanvas(element){
	var container = "canvas";
	if(element == "plane_two"){
		container = "canvas_two";
	}
	// set up our WebGL context and append the canvas to our wrapper
	var webGLCurtain = new Curtains({
		container: container
	});
	// if there's any error during init, we're going to catch it here
	webGLCurtain.onError(function() {
	// we will add a class to the document body to display original images
	// document.body.classList.add("no-curtains");
	});
	// get our plane element
	var planeElement = document.getElementsByClassName(element)[0];
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
$(document).ready(function(){
	smallNavOnScroll();

	createCanvas('.plane_one');
	createCanvas('.plane_two');
	createCanvas(element);
	new universalParallax().init({
	    speed: 2.0
  	});
});