$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

// when media query portrait mode is detected accordion functions will enable
function checkSize(){
    if ($(".header-box").css("position") == "relative" ){
        
    }
}