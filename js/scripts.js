$(function() {
$(".carousel").carousel( { interval: 2000, pause: "false" } );
$("#carouselButton").on("click",carousel);
$("#reserveButton").on("click", reserveModal);
$("#loginButton").on("click", loginModal);
});

// Carousel Modal Play / Pause Button
function carousel(){
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
    } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause"); 
    }
}

// Jumbotron Reserve Campsite Button
function reserveModal(){
    $("#reserveModal").modal('show');
}

// Login Modal Button
function loginModal(){
    $("#loginModal").modal('show');
}