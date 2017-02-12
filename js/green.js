window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(document).ready(function() {



	var logo = $("#logo-container");
	var typed = $(".typed-holder");
	var cartoon = $("#cartoon-cover");
	var bgImage = $("#full-image-style");
	var tl = new TimelineLite();
	var swan = $(".swan");


	/* SWAN ANIMATION */
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
.setTween(".typed-holder", 0.5, {y:"-=100", autoAlpha:0})
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
.setTween("#first-text-holder", 0.5, {y:"-=250", autoAlpha:1})
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

/* WATER GROUND RISING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 400})
.offset(370)
.setTween(".water-ground", 0.5, {y:"-=115"})
.addIndicators({name: "water-rising"}) 
.addTo(controller);

/* LEFT ROCK PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".left-rock-holder")
.addTo(controller);	

/* LEFT ROCK APPEARING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 150})
.offset(700)
.setTween(".left-rock-holder", 2, {width:"14%", ease: Elastic.easeOut.config(1, 0.3)})
.addIndicators({name: "water-text"}) 
.addTo(controller);


/* RIGHT ROCK PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".right-rock-holder")
.addTo(controller);	

/* RIGHT ROCK APPEARING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 150})
.offset(750)
.setTween(".right-rock-holder", 2, {width:"10%", ease: Elastic.easeOut.config(1, 0.3)})
.addIndicators({name: "water-text"}) 
.addTo(controller);

/* LEFT PLANT PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".left-plant")
.addTo(controller);	


/* MIDDLE PLANT PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".middle-plant")
.addTo(controller);	

/* RIGHT PLANT PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".right-plant")
.addTo(controller);	

/* LEFT PLANT GROW */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(800)
.setTween(".svg-left", 1, {strokeDashoffset:"0px"})
.addIndicators({name: "stroke"}) 
.addTo(controller);


/* MIDDLE PLANT GROW */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section",  duration: 200})
.offset(840)
.setTween(".svg-middle", 1.3, {strokeDashoffset:"0px"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/* RIGHT PLANT GROW */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section",  duration: 200})
.offset(820)
.setTween(".svg-right", 1.2, {strokeDashoffset:"0px"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/* TURVE CREATION HOLDER PIN */
var scene = new ScrollMagic.Scene()				
.setPin("#turve-creation-holder")
.addTo(controller);	

/* TURVE CREATION APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 100})
.offset(1150)
.setTween("#turve-creation-holder", 0.5, {y:"-=100", autoAlpha:1})
.addIndicators({name: "creation text"}) 
.addTo(controller);


/* PLANTS INTO PEAT */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(1100)
.setTween("path", {stroke:"#453B31"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

TweenMax.staggerTo("svg", 2, {y: "+=5", yoyo:true, repeat:-1, delay: "0.2"}, 0.4)

/* WATER AREA DISAPEAR */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(1500)
.setTween("path, .left-rock-holder, .right-rock-holder, .moving-water, #first-text-holder, #turve-creation-holder", {y: "-=200",autoAlpha:0})
.addIndicators({name: "stroke"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(1500)
.setTween(".water-ground", {y: "-=200"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section"})
.offset(1700)
.setTween(".water-ground", {autoAlpha: 0})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/* KASA PIN */
var scene = new ScrollMagic.Scene()				
.setPin(".kasa-holder")
.addTo(controller);	

/* KASA APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(1750)
.setTween(".kasa-holder", 0.5, {autoAlpha:1,width:"80%"})
.addIndicators({name: "kasa"}) 
.addTo(controller);

/* KASA TEXT PIN */
var scene = new ScrollMagic.Scene()				
.setPin("#kasa-text-holder")
.addTo(controller);	


/* KASA TEXT APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(1800)
.setTween("#kasa-text-holder", 0.2, {y: "=-80", autoAlpha:1})
.addIndicators({name: "kasa"}) 
.addTo(controller);

/* KASA TEXT PIN 
var scene = new ScrollMagic.Scene()				
.setPin("#kasa-info-holder")
.addTo(controller);	*/

/* KASA INFO APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section"})
.offset(2400)
.setTween("#kasa-info-holder", 0.2, {y: "=-80", autoAlpha:1})
.addIndicators({name: "kasa"}) 
.addTo(controller);

/* KASA INFO PIN */
var scene = new ScrollMagic.Scene()				
.setPin("#kasa-info-holder")
.addTo(controller);	


/* MURU HOLDER PIN */
var scene = new ScrollMagic.Scene()				
.setPin(".muru-holder")
.addTo(controller);	


/* MURU APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration:1})
.offset(2000)
.setTween(".muru-holder", 0.1, {autoAlpha:1})
.addIndicators({name: "muru"}) 
.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(2100)
.setTween(".muru-holder", 5, {rotation: 100 ,y: "+=280", x: "-=75" ,autoAlpha:1})
.addIndicators({name: "muru"}) 
.addTo(controller);

/* MURU HOVER */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section"})
.offset(2351)
.setTween(".muru-holder", 5, {rotation: "+=600", yoyo:true, repeat:-1, delay: "0.1", ease: Back.easeInOut})
.addIndicators({name: "kasaup"}) 
.addTo(controller);














});


