$(document).ready(function(){
    $('.container-flexslider').flexslider({
        prevText: "",
        nextText: "",
        pauseOnAction: false,
        slideshowSpeed: 4000,
        touch: true
    });
});

function barraNavegacion() {
    var x = document.getElementById('miTopnav');
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

