$(function () {
  //  fixed header
  let header = $("#header");
  let intro = $("#intro");
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if(scrollPos > introH){
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }
    });

//Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 110
        }, 700);
    });

//    nav Toggle

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

//    reviews https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});