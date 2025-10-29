$(document).ready(function() {
    $(window).on('scroll', function(event) {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 50) {
            $('.header').addClass('header-height');
            $('.top-header').addClass('topmb-sticky');
            $('.logo').addClass('logo-pding');
            $('.logo a img ').addClass('imgsticky');
        } else {
            $('.header').removeClass('header-height');
            $('.top-header').removeClass('topmb-sticky');
            $('.logo').removeClass('logo-pding');
            $('.logo a img ').removeClass('imgsticky');
        }
    });

    $(window).bind('scroll', function() {
        var navHeight = $( '.banner-inner' ).height();
        if ($(window).scrollTop() > navHeight) {
            $('.innerpage-links').addClass('inrlinkfixed');
        }
        else {
            $('.innerpage-links').removeClass('inrlinkfixed');
        }
    });

    $(".menubar").click(function() {
        $('.navigation').addClass('navshow');
        $('.warpper').addClass('bodyoverlay');
        $('body').css({
            "overflow": "hidden"
        });
    });
    $(".closenav").click(function() {
        $('.navigation').removeClass('navshow');
        $('.warpper').removeClass('bodyoverlay');
        $('body').css({
            "overflow": "auto"
        });
    });
    if ($(window).width() <= 991) {
        $(".navigation ul > li > a").click(function() {
            $(".navigation > ul ul").slideUp();
            $('.plusmobile', this).html('+');
            if (!$(this).nextAll().is(":visible")) {
                $(this).nextAll('*').slideDown();
                $('.plusmobile').html('+');
                $('.plusmobile', this).html('-');
            }
        });
    };
    var bnrslider = $('#owlhome');
    bnrslider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        auto: true,
        rewind: true,
        mouseDrag: false,
        dots: false,
        animateOut: 'fadeOutUp',
        animateIn: 'fadeInUp',
        autoplaySpeed: 10000,
        autoplayTimeout: 10000,
        smartSpeed: 450,
        autoplay: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
                touchDrag: false,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    bnrslider.on('change.owl.carousel', function(event) {
        $('.home-item-slide .text > *').removeClass('animated').fadeOut();
    });
    bnrslider.on('translated.owl.carousel', function(event) {
        $('.home-owl-slide .owl-item.active .text > *').removeClass('fadeOut').addClass('animated').fadeIn();
    });
    $(window).scroll(function() {
        $("#mainSlider").css("opacity", 1 - $(window).scrollTop() / 850);
    });
    $('#industryowl').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        autoplay: false,
        smartSpeed: 250,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dotsData: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });
    $('.solutions-tabs > ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.solutions-tabs > ul.tabs li').removeClass('current');
        $('.solutions-container-tabs > .tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        if( $(window).width() < 767 ){
            var target = '#'+$(this).attr('data-tab');
                $('html, body').animate({
                scrollTop: $(target).offset().top-100
            }, 1000);
        }
    });
    $('.gotoTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $(window).scroll(function(event) {
        if ($(window).scrollTop() > 100) {
            $('.gotoTopBtn').fadeIn();
        } else {
            $('.gotoTopBtn').fadeOut();
        }
    });
    $(function() {
        $('.imgsvg').each(function() {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            $.get(imgURL, function(data) {
                var $svg = $(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);
            }, 'xml');
        });
    });
    $('.counter').counterUp({
        delay: 20,
        time: 1200
    });
    $('.casetabs > ul li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.casetabs > ul li').removeClass('active');
        $('.casecontainer .case-content').removeClass('active');
        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

    $('.solutabs > ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.solutabs > ul.tabs li').removeClass('active');
        $('.solution-container .tab-content').removeClass('active');
        $(this).addClass('active');
        $("#" + tab_id).addClass('active');

    });


    setTimeout(function() {
        $('#loading').fadeOut();
    }, 3500);
    $('.navigation a[href^="#"]').click(function(e) {
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        return false;
        e.preventDefault();
    });
    $('#achive_owl').owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        autoplay: false,
        smartSpeed: 250,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dotsData: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    });
    
    // fancybox js
    $('.fancybox').fancybox({
        thumbs : {
            autoStart : false,
            axis      : 'x'
        }
    });
    $('.employeecornrowl').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:false,
        dots:false,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        autoplay:false,
        autoplaySpeed:450,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
});
