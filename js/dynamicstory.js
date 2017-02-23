

$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("https://koivist9.firebaseio.com/.json", function(result){
            console.log(result);
        });
    });
});

