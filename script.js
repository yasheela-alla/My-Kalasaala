$(document).ready(function () {
    // Smooth scrolling
    $('a.nav-link').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Navbar background change on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('nav.navbar').addClass('scrolled');
        } else {
            $('nav.navbar').removeClass('scrolled');
        }
    });
});
