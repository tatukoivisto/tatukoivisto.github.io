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
	var traktori = $("#traktori-holder-cover");
	var savu = $("#savu-holder-cover");



	/* SWAN ANIMATION */
	var swanTween = tl.to(swan, 15, {y: "+=50", x: "+=500", scale: "1.4", ease: Power1.easeIn})
	.to(swan, 1, {rotationY:180})
	.to(swan, 6, {x: "-=350", ease: Power1.easeInOut}, "toLeft")
	.to(swan, 6, {y: "+=50", scale: "1.5", ease: Power1.easeInOut}, "toLeft")
	.to(swan, 2, {y: "+=10", yoyo:true, repeat:-1, delay: "0.2"});

TweenMax.to(traktori, 0.05, {scale:1.00, y:"+=0.3", yoyo:true, repeat:-1, delay: "2", ease: Back.easeInOut})
TweenMax.to(traktori, 35, {scale:1.00, x:"+=300", ease: Back.easeInOut})

TweenMax.to(savu, 3.5, {autoAlpha:0, y:"+=-20", repeat:-1, delay: "0.5"})


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

/* CARTOON COVER */
var scene = new ScrollMagic.Scene()				
.setPin("#cartoon-cover")
.addTo(controller);	
/* CARTOON COVER DISAPEAR */
var scene = new ScrollMagic.Scene({triggerElement: "#cartoon-cover", duration: 1000})
.offset(400)
.setTween("#cartoon-cover", 0.5, {y:"-=1000"})
.addIndicators({name: "magic"}) 
.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#cartoon-cover", duration: 1})
.offset(1400)
.setTween("#cartoon-cover", 0.5, {autoAlpha:"0"})
.addIndicators({name: "magic"}) 
.addTo(controller);


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
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 600})
.offset(370)
.setTween(".moving-water", 0.5, {y:"-=500"})
.addIndicators({name: "water-rising"}) 
.addTo(controller);

/* GROUND PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".water-ground")
.addTo(controller);	

/* WATER GROUND RISING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 600})
.offset(370)
.setTween(".water-ground", 0.5, {y:"-=115"})
.addIndicators({name: "water-rising"}) 
.addTo(controller);

/* LEFT ROCK PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".left-rock-holder")
.addTo(controller);	

/* LEFT ROCK APPEARING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 400})
.offset(850)
.setTween(".left-rock-holder", 2, {width:"14%", ease: Elastic.easeOut.config(1, 0.3)})
.addIndicators({name: "water-text"}) 
.addTo(controller);


/* RIGHT ROCK PINNED */
var scene = new ScrollMagic.Scene()				
.setPin(".right-rock-holder")
.addTo(controller);	

/* RIGHT ROCK APPEARING */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 400})
.offset(1050)
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
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 400})
.offset(1250)
.setTween(".svg-left", 1, {strokeDashoffset:"0px"})
.addIndicators({name: "stroke"}) 
.addTo(controller);


/* MIDDLE PLANT GROW */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section",  duration: 300})
.offset(1250)
.setTween(".svg-middle", 1.3, {strokeDashoffset:"0px"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/* RIGHT PLANT GROW */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section",  duration: 350})
.offset(1250)
.setTween(".svg-right", 1.2, {strokeDashoffset:"0px"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/* TURVE CREATION HOLDER PIN */
var scene = new ScrollMagic.Scene()				
.setPin("#turve-creation-holder")
.addTo(controller);	

/* TURVE CREATION APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 100})
.offset(1500)
.setTween("#turve-creation-holder", 0.5, {y:"-=100", autoAlpha:1})
.addIndicators({name: "creation text"}) 
.addTo(controller);


/* PLANTS INTO PEAT */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(1600)
.setTween("path", {stroke:"#453B31"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/*TweenMax.staggerTo("svg", 2, {y: "+=5", yoyo:true, repeat:-1, delay: "0.2"}, 0.4)

 WATER AREA DISAPEAR */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(2000)
.setTween("path, .left-rock-holder, .right-rock-holder, .moving-water, #first-text-holder, #turve-creation-holder", {y: "-=200",autoAlpha:0})
.addIndicators({name: "stroke"}) 
.addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(2000)
.setTween(".water-ground", {y: "-=200"})
.addIndicators({name: "stroke"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration:2})
.offset(2200)
.setTween(".water-ground", {autoAlpha: 0})
.addIndicators({name: "stroke"}) 
.addTo(controller);

/* KASA COVER */

var scene = new ScrollMagic.Scene()				
.setPin("#kasa-cover")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(2300)
.setTween("#kasa-cover", 0.2, {x:"-50%", y:"-50%"})
.addIndicators({name: "COVER!!"}) 
.addTo(controller);

/* KASA PIN */
var scene = new ScrollMagic.Scene()				
.setPin(".kasa-holder")
.addTo(controller);	

/* KASA APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(2350)
.setTween(".kasa-holder", 0.5, {autoAlpha:1,width:"50%"})
.addIndicators({name: "kasa"}) 
.addTo(controller);

/* KASA TEXT PIN */
var scene = new ScrollMagic.Scene()				
.setPin("#kasa-text-holder")
.addTo(controller);	


/* KASA TEXT APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(2400)
.setTween("#kasa-text-holder", 0.2, {y: "=-80", autoAlpha:1})
.addIndicators({name: "kasa"}) 
.addTo(controller);



/* KASA TEXT PIN 
var scene = new ScrollMagic.Scene()				
.setPin("#kasa-info-holder")
.addTo(controller);	*/

/* KASA INFO APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 100})
.offset(2650)
.setTween("#kasa-info-holder", 0.2, {y: "=-100", autoAlpha:1})
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
.offset(2500)
.setTween(".muru-holder", 0.1, {autoAlpha:1})
.addIndicators({name: "muru"}) 
.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(2500)
.setTween(".muru-holder", 5, {rotation: 100 ,y: "+=320", x: "-=175" ,autoAlpha:1})
.addIndicators({name: "muru"}) 
.addTo(controller);

/* MURU HOVER */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section"})
.offset(2701)
.setTween(".muru-holder", 0.3, { scale:"1.2", yoyo:true, repeat:-1, delay: "0.1", ease: Back.easeInOut})
.addIndicators({name: "kasaup"}) 
.addTo(controller);



/* KASA AREA DISAPEAR */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(3200)
.setTween(".kasa-holder, #kasa-text-holder, #kasa-info-holder, .muru-holder, #kasa-cover", {autoAlpha:0})
.addIndicators({name: "stroke"}) 
.addTo(controller);



/* TRAKTORI COVER */
var scene = new ScrollMagic.Scene()				
.setPin("#traktori-cover")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(3100)
.setTween("#traktori-cover", 0.2, {x:"-50%", y:"-50%"})
.addIndicators({name: "COVER!!"}) 
.addTo(controller);

/* TRAKTORI PIN */
var scene = new ScrollMagic.Scene()				
.setPin("#traktori-holder")
.addTo(controller);	
/* TRAKTORI MOVEMENT */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 2000})
.offset(3100)
.setTween("#traktori-holder", 0.2, {x:"350%", y:"-200%", ease: SlowMo.ease.config(0.1, 0.7, false)})
.addIndicators({name: "COVER!!"}) 
.addTo(controller);
/* TRAKTORI VIBRATION */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section"})
.offset(3200)
.setTween("#traktori-holder", 0.05, {scale:1.004, yoyo:true, repeat:-1, delay: "0.1", ease: Back.easeInOut})
.addIndicators({name: "COVER!!"}) 
.addTo(controller);


/* PRODUCTION TEXT */
var scene = new ScrollMagic.Scene()				
.setPin("#turve-production-holder-1")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(3200)
.setTween("#turve-production-holder-1", 0.5, {y:"-=100", autoAlpha:1})
.addIndicators({name: "PFORU"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(3400)
.setTween("#turve-production-holder-1", {y:"-=100", autoAlpha:0})
.addIndicators({name: "PRODUCTION"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene()				
.setPin("#turve-production-holder-2")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(3600)
.setTween("#turve-production-holder-2", 0.5, {y:"-=100", autoAlpha:1})
.addIndicators({name: "PFORU"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(3800)
.setTween("#turve-production-holder-2", {y:"-=100", autoAlpha:0})
.addIndicators({name: "PRODUCTION"}) 
.addTo(controller);


var scene = new ScrollMagic.Scene()				
.setPin("#turve-production-holder-3")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(4000)
.setTween("#turve-production-holder-3", 0.5, {y:"-=100", autoAlpha:1})
.addIndicators({name: "PFORU"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(4200)
.setTween("#turve-production-holder-3", {y:"-=100", autoAlpha:0})
.addIndicators({name: "PRODUCTION"}) 
.addTo(controller);


var scene = new ScrollMagic.Scene()				
.setPin("#turve-production-holder-4")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(4400)
.setTween("#turve-production-holder-4", 0.5, {y:"-=100", autoAlpha:1})
.addIndicators({name: "PFORU"}) 
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(4600)
.setTween("#turve-production-holder-4", {y:"-=100", autoAlpha:0})
.addIndicators({name: "PRODUCTION"}) 
.addTo(controller);

/* PRODUCTION TEXT END*/

/* SUOMI COVER */
var scene = new ScrollMagic.Scene()				
.setPin("#suomi-cover")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(4800)
.setTween("#suomi-cover", 0.2, {x:"-50%", y:"-50%"})
.addIndicators({name: "joku"}) 
.addTo(controller);

/* SUOMI APPEARANCE*/
var scene = new ScrollMagic.Scene()				
.setPin("#suomi-holder")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(5000)
.setTween("#suomi-holder", 0.2, {autoAlpha:1, scale:1})
.addIndicators({name: "suomi"}) 
.addTo(controller);

/* SUOMI TEXT HOLDER*/
var scene = new ScrollMagic.Scene()				
.setPin("#suomi-text-holder")
.addTo(controller);	
/* SUOMI TEXT APPEARANCE */
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(5100)
.setTween("#suomi-text-holder", 0.2, {y: "=-80", autoAlpha:1})
.addIndicators({name: "kasa"}) 
.addTo(controller);

/* SUOMI ROTATE*/
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(5300)
.setTween("#suomi-holder", 0.2, {rotationX:85, scale:1.5})
.addIndicators({name: "suomi"}) 
.addTo(controller);

/* MOKKI APPEARANCE*/
var scene = new ScrollMagic.Scene()				
.setPin("#mokki-holder")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 200})
.offset(5600)
.setTween("#mokki-holder", 0.2, {scale:1, ease: Elastic.easeOut.config(1, 0.3)})
.addIndicators({name: "suomi"}) 
.addTo(controller);



/* SUOMI ICON APPEARANCE*/
var scene = new ScrollMagic.Scene()				
.setPin("#suomi-icon-1")
.addTo(controller);	
var scene = new ScrollMagic.Scene()				
.setPin("#suomi-icon-2")
.addTo(controller);	
var scene = new ScrollMagic.Scene()				
.setPin("#suomi-icon-3")
.addTo(controller);	
/* SUOMI ICON TWEEN */
var staggerTween = TweenMax.staggerTo(".suomi-icon-holder", 1, {autoAlpha:1, scale:1, ease: Elastic.easeOut.config(1, 0.3)}, 1);
/* SUOMI ICON TWEEN SCROLL*/
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 450})
.offset(5850)
.setTween(staggerTween)
.addIndicators({name: "suomi"}) 
.addTo(controller);



/* YMPARISTO COVER */
var scene = new ScrollMagic.Scene()				
.setPin("#ymparisto-cover")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(6600)
.setTween("#ymparisto-cover", 0.2, {x:"-50%", y:"-50%"})
.addIndicators({name: "joku"}) 
.addTo(controller);


/* RUNKO APPEARANCE*/
var scene = new ScrollMagic.Scene()				
.setPin("#runko-holder")
.addTo(controller);	

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 250})
.offset(6800)
.setTween("#runko-holder", 0.2, {autoAlpha:1, scale:1})
.addIndicators({name: "suomi"}) 
.addTo(controller);

/* YMPÄRISTÖ COVER CHANGE*/
var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 1000})
.offset(7000)
.setTween("#ymparisto-cover", 0.2, {backgroundColor: "#B3D1EF"})
.addIndicators({name: "suomi"}) 
.addTo(controller);

/* LEHTI PINS*/
var scene = new ScrollMagic.Scene()				
.setPin("#lehti-1")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-2")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-3")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-4")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-5")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-6")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-7")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#lehti-8")
.addTo(controller);	

/* LEHTI ANIMATION*/

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 800})
.offset(7250)
.setTween(".lehti-holder", 1, {autoAlpha:1, scale:2, ease: SlowMo.ease.config(0.3, 0.7, false)})
.addIndicators({name: "suomi"}) 
.addTo(controller);

/* APPLE PIN */
/* LEHTI PINS*/
var scene = new ScrollMagic.Scene()				
.setPin("#apple-1")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-2")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-3")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-4")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-5")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-6")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-7")
.addTo(controller);	

var scene = new ScrollMagic.Scene()				
.setPin("#apple-8")
.addTo(controller);	
/* APPLE TWEEN*/
var appleTween = TweenMax.staggerTo(".apple-holder", 1, {autoAlpha:1, scale:1, ease: Elastic.easeOut.config(1, 0.3)}, 1);

var scene = new ScrollMagic.Scene({triggerElement: ".water-section", duration: 800})
.offset(8200)
.setTween(appleTween)
.addIndicators({name: "suomi"}) 
.addTo(controller);




});


