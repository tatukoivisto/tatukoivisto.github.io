$(document).ready(function() {





$("#logo-style").click(hideCover);



});


function hideCover() {


	$("#full-image-style").show();
	$("#cover-div-right").hide(1000);
    $("#cover-div-left").hide(1000);
    $("#logo-container").delay(500).animate({top: "20%"},1500);
    $(".content-div-1").delay(1500).show(500);
    $(".content-div-2").delay(1750).show(500);
    $(".content-div-3").delay(2000).show(500);
}

