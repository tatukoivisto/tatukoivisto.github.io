

$(document).ready(function() {

	$("#logo-style").click(hideCover);

	$("#real-typed").typed({
		strings: ["on kotimaista", "uusiutuu hitaasti", "tuo verotuloja", "luo työpaikkoja suomeen", "aiheuttaa ongelmia vesistöille", "vähentää suomen energiariippuvuutta", "toimii hyvin puun kanssa", "on bioenergiaa"],
		typeSpeed: 140,
		showCursor: false,
		loop: true,
		backspace: function(curString, curStrPos){
			if (self.arrayPos == 0){
				self.stopNum = 3;
			}
            //every other time, delete the whole typed string
            else{
            	self.stopNum = 0;
            }

        }
    });



});

function hideCover() {

	$("#full-image-style").fadeIn(800);
	$(".typed-text").hide();
	$("#cartoon-cover").fadeOut(800);
	//$("#cover-div-left").fadeOut(1000);
	$("#logo-container").delay(800).animate({top: "20%"},1000);

	$(".content-div-1").delay(2000).fadeIn();
	$(".content-div-2").delay(2300).fadeIn();
	$(".content-div-3").delay(2800).fadeIn();
}


























