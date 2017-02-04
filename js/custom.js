$(document).ready(function() {

$("#logo-style").click(hideCover);



});


function hideCover() {
	document.getElementById("full-image-style").style.display = 'block';
	//document.getElementById("main-navigation").style.display = 'block';


	$("#cover-div-right").hide(1000);
    $("#cover-div-left").hide(1000);
    $("#logo-container").delay(1200).animate({top: "20%"},2000);
}

