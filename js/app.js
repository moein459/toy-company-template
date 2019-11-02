$(document).ready(function () {
    const scrolledDown = 100;
    window.onscroll = function () {
        navbarCheck();
    };

    const navbarCheck = function () {
        if (window.scrollY > scrolledDown)
            $('nav.navbar').addClass('scrolled-down');
        else
            $('nav.navbar').removeClass('scrolled-down');
    };

    $('.viewpoint-owl-carousel').owlCarousel({
        Number: 3,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        margin: 40,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        },
    });

    $('.product-owl-carousel').owlCarousel({
        Number: 4,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
    });

    $('.clients-owl-carousel').owlCarousel({
        Number: 8,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 4,
            },
            800: {
                items: 6,
            },
            1200: {
                items: 8,
            }
        },
    });
});
