$(function () {
    // main slider
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="images/banner/left-arrow.svg" alt="left arrow"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="images/banner/right-arrow.svg" alt="right arrow"></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            },
        ]
    });
    // tabs
    $('.tab').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tab-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tab-content--active');

        $('.product-slider').slick('setPosition');
    });
    // favorite icon
    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
    });
    // product slider
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--prev"><img src="images/banner/left-arrow-black.svg" alt="left arrow"></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--next"><img src="images/banner/right-arrow-white.svg" alt="right arrow"></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]
    });
    // input catalog
    $('.filter-style').styler();
    // filter dropdown 
    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(500);
    });
    // range input    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000
    });
    // btn grid/line
    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });
    // rate
    $('.rate-yo').rateYo({
        ratedFill: '#1c62cd',
        normalFill: '#c4c4c4',
        spacing: '7px'
    });
    // mobile menu show/hide
    $('.menu__btn').on('click', function (event) {
        $('.mobile-menu__list').toggleClass('mobile-menu__list--active');
    });
    // Add class "active" to menu
    $('.mobile-menu__link').on('click', function (event) {
        event.preventDefault();
        $('.mobile-menu__link').removeClass('mobile-menu__link--active');
        $(this).addClass('mobile-menu__link--active');
        $('.mobile-menu__list').removeClass('mobile-menu__list--active');
    });

    // footer dropdown for mobile
    $('.footer__top-drop').on('click', function () {
        $(this).next().slideToggle(500);
        $(this).toggleClass('footer__top-drop--active');
    });
    // aside btn
    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle(500);
    });
});
