


$(document).ready(function() {

	var logo = $("#logo-container");
	var typed = $(".typed-holder");
	var cartoon = $("#cartoon-cover");
	var bgImage = $("#full-image-style");
	var tl = new TimelineLite();
	var swan = $(".swan");



	
	var swanTween = tl.to(swan, 15, {y: "100", x: "700", scale: "1.4", ease: Power1.easeIn})
	.to(swan, 1, {rotationY:180})
	.to(swan, 6, {x: "350", ease: Power1.easeInOut}, "toLeft")
	.to(swan, 6, {y: "150", scale: "1.5", ease: Power1.easeInOut}, "toLeft")
	.to(swan, 2, {y: "+=10", yoyo:true, repeat:-1, delay: "0.2"});


/*
	tl.to(typed, 0, {autoAlpha: 0},2)
	.to(cartoon, 2, {autoAlpha: 0},"image")
	.to(bgImage, 2, {display: "block"},"image")
	.to(logo, 5, {ease: Expo.easeOut, top: "20%"});
	*/

	/* SCROLL MAGIC */

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});


	/* SLIDES 
	var slides = document.querySelectorAll("section.panel");
		for (var i=0; i<2; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}



		var cartoonPn = new ScrollMagic.Scene({triggerElement: "#cartoon-cover", duration: 450})
		.setPin("#cartoon-cover")
		.offset(100)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
		*/



				var scene = new ScrollMagic.Scene()				
				.setPin("#big-typed-holder")
				.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
				.addTo(controller);	

				var scene = new ScrollMagic.Scene()				
				.setPin("#small-typed-holder")
				.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
				.addTo(controller);	


					var scene = new ScrollMagic.Scene({triggerElement: "#cartoon-cover", duration: 400})
					// trigger a velocity opaticy animation
					.offset(50)
					.setTween(".typed-holder", 0.5, {y:-100, autoAlpha:0})
					.addIndicators({name: "magic"}) // add indicators (requires plugin)
					.addTo(controller);



					$("#real-typed").typed({
						strings: ["Suomalainen turve."],
						typeSpeed: 180,
						showCursor: false
					});
					$("#small-typed").typed({
						strings: ["Hyödyt, haitat ja harhaluulot."],
						typeSpeed: 180,
						showCursor: false,
						startDelay: 5000
					});


				});
