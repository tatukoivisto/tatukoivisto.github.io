


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
		triggerHook: 'onCenter'
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


/* TYPED TEXTS PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".typed-holder")
.addTo(controller);	


/* TYPED TEXT DISAPEAR */
var scene = new ScrollMagic.Scene({triggerElement: "#cartoon-cover", duration: 350})
.offset(500)
.setTween(".typed-holder", 0.5, {y:"-=80", autoAlpha:0})
.addIndicators({name: "magic"}) 
.addTo(controller);


/* TYPED TEXTS */
$("#big-typed").typed({
	strings: ["Suomalainen turve"],
	typeSpeed: 130,
	showCursor: false
});
$("#small-typed").typed({
	strings: ["Hyödyt, haitat ja harhaluulot"],
	typeSpeed: 130,
	showCursor: false,
	startDelay: 3500
});


/* FIRST TEXT-HOLDER PINNED */
var scene = new ScrollMagic.Scene()				
.setPin("#first-text-holder")
.addTo(controller);	

/* FIRST TEXT-HOLDER APPEARING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(200)
.setTween("#first-text-holder", 0.5, {y:"-=200", autoAlpha:1})
.addIndicators({name: "water-text"}) 
.addTo(controller);

/* WATER PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".moving-water")
.addTo(controller);	

/* WATER RISING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 400})
.offset(370)
.setTween(".moving-water", 0.5, {y:"-=500"})
.addIndicators({name: "water-rising"}) 
.addTo(controller);

/* GROUND PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".water-ground")
.addTo(controller);	









});


