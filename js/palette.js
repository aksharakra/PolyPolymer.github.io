$(document).ready(function(){
    $(".blue, .red").click(function(){
        $(".abc").css("background-color", $(".blue, .red").css("background-color"));
    });
});