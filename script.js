
$(document).ready(function () {
    // Hide the animation container after the animation ends
    setTimeout(function () {
        $('.animation-container').fadeOut(500);
    }, 3000); // This should match the duration of the CSS animation (3 seconds)
    
    // Make the navbar background appear when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('nav.navbar').addClass('scrolled');
        } else {
            $('nav.navbar').removeClass('scrolled');
        }
    });
});
