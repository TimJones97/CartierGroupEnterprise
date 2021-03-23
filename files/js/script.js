let timeline = new TimelineMax({
    repeat: -1,
    yoyo: true
  }),
  feTurb = document.querySelector('#feturbulence');

timeline.add(
  TweenMax.to(feTurb, 15, {
    onUpdate: function() {
      let bfX = this.progress() * 0.005 + 0.015, //base frequency x
        bfY = this.progress() * 0.05 + 0.1; //base frequency y
      feTurb.setAttribute('baseFrequency', `${bfX} ${bfY}`);
    }
  }), 0
);
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
$(document).ready(function(){
	smallNavOnScroll();
	new universalParallax().init({
	    speed: 2.0
  	});
});