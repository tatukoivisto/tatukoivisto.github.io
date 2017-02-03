$(document).ready(function() {
$("#logo-style").click(hideCover);
});


function hideCover() {
    document.getElementById("cover-div-right").style.display = 'none';
    document.getElementById("cover-div-left").style.display = 'none';
	document.getElementById("full-image-style").style.display = 'block';
	document.getElementById("main-navigation").style.display = 'block';
}


/*$(document).ready(hideCover)
document.getElementById("logo-style").addEventListener("click", hideCover);*/