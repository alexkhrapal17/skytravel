$(function() {

    // header
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance) {
            $(".main-header").addClass("scroll-class");
            $(".back-top").addClass("show");
        } else {
            $(".main-header").removeClass("scroll-class");
            $(".back-top").removeClass("show");
        }
    }).scroll();

    $(function () {
        $('.nav-item, .footer-txt, .back-top').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length && $(window).width() > 767) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 500);
                    return false;
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 500);
                    return false;
                }
            }
        });
    });

    // gallery slider
    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });


    // testimonials slider
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '491px',
        dots: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    centerPadding: '400px'
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '300px'
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: '200px'
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 770,
                settings: {
                    centerPadding: '0px'
                }
            }
        ]
    });

    // mobile menu
    $('.mobile-toggle').on('click', function (e) {
        e.preventDefault();
        if ($('.mobile-toggle').hasClass('open')) {
            $('.mobile-toggle').removeClass('open')
        } else {
            $('.mobile-toggle').addClass('open');
        }

        if ($('.main-nav').hasClass('show')) {
            $('.main-nav').removeClass('show')
        } else {
            $('.main-nav').addClass('show');
        }
    });


    if ($(window).width() < 767) {
        // close mobile menu on click
        $('.main-nav, .nav-item').on('click', function (e) {
            e.preventDefault();
            $('.mobile-toggle').removeClass('open');
            $('.main-nav').removeClass('show');
        });

        // mobile gallery
        $('.gallery-slider.mobile .gallery-grid').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            dots: false
        });
    }
});
