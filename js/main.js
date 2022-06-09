/* Sticky Navigation - JQUERY*/

let navbar = $(".navbar");

$(window).scroll(function () {
    let oTop = $(".services .card:last-child").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        if ($("#menu-btn").hasClass("toggle-off")) {
            navbar.removeClass("bigger-sticky");
        }
        
        navbar.removeClass("sticky");
    }
});

 /*Unblur img */
var windowsize = $(window).width();
let img = $(".showcase-img img");

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
    if (windowsize < 1024) {

        if (scroll >= 375 && scroll <= 800) {
            img.css({filter: "blur(0px)"});
        }
        else if (scroll > 800) {
            img.css({filter: "blur(3px)"});
        }
        else if (scroll < 375) {
            img.css({filter: "blur(3px)"});
        }
    }
});

/** remove mobile menu on smaller screens */
if(windowsize <= 425) {
    $(".mobile-navbar").css({display: "none"});
    navbar.removeClass("sticky");
}

/** For mobile responsive numbers section */
if(windowsize < 1024) {
    $(".numbers").removeClass("d-flex");
    $(".numbers").removeClass("flex-md-row");
    $(".numbers").removeClass("flex-wrap");
    $(".numbers").removeClass("justify-content-center");
}

if(windowsize >= 1024) {
    $(".numbers").addClass("d-flex");
    $(".numbers").addClass("flex-md-row");
    $(".numbers").addClass("flex-wrap");
    $(".numbers").addClass("justify-content-center");
}

/* Counter Animation */

let nCount = function (selector) {
    $(selector).each(function () {

        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        });

    });
};


let a = 0;
$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".number-card > h2");
    }
});


/** TESTIMONIALS */

$(document).ready(function(){
    var owl = $('.owl-carousel');

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin: 20,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


});

/** CONTACT FORM  */
$('.contact-form').submit(function(e){ 
    e.preventDefault();
});

/** TOGGLE MOBILE MENU */
$("#menu-btn").click(function(){
    if ($(this).hasClass("toggle-off")) {
        $("#menu-btn").removeClass("toggle-off");
        $("#menu-btn").addClass("toggle-on");
        $("#menu-icon").removeClass("fa-bars");
        $("#menu-icon").addClass("fa-times");
        $(".mobile-links-container").css({ display: "block" });
        navbar.addClass("bigger-sticky");
    }
    else {
        $("#menu-btn").removeClass("toggle-on");
        $("#menu-btn").addClass("toggle-off");
        $("#menu-icon").removeClass("fa-times");
        $("#menu-icon").addClass("fa-bars");
        $(".mobile-links-container").css({ display: "none" });
        navbar.removeClass("bigger-sticky");
    }
});