$(document).ready(function(){

    // sticky menu
    $(".js-services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        }

        else {
            $("nav").removeClass("sticky");
        }
    });
    // end sticky menu


    // active link 
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    // end active link 


    // mixitup (portfilio sec)
    var mixer = mixitup('.container');
});




// mobile menu
function openNav (){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav (){
    document.getElementById("myNav").style.width = "0%";
}















