
// pc版のエレベーターメニュー
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({ scrollTop: position }, 600, 'swing');
        return false;
    });
    var sectionArr = new Array(),
        elIndex = $('#elevator a');
    for (i = 0; i < elIndex.length; i++) {
        var elLink = elIndex.eq(i).attr('href');
        sectionArr[i] = elLink;
    }
    $(window).on('load resize scroll', function () {
        var top = $(window).scrollTop() + ($(window).height() / 2);
        $('#myPosition').html(top);
        for (i = 0; i < sectionArr.length; i++) {
            var target = sectionArr[i],
                secTop = $(target).offset().top,
                secBottom = secTop + $(target).outerHeight(true);
            $(target).find('.offset_value01').html(secTop);
            $(target).find('.offset_value02').html(secBottom);
            if (secTop <= top && secBottom >= top) {
                elIndex.removeClass('current');
                elIndex.eq(i).addClass('current');
            }
        }
    });
});

// よくあるご質問のアコーディオンの制御
$(function () {
    $('.question').click(function () {
        $(this).next('div').slideToggle();
        $(this).find(".icon").toggleClass('open');
    });
});

// スクロール ヘッダーのフェードイン
var headNav = $(".header-inner");
$(window).on('load scroll', function () {
    if ($(this).scrollTop() > 400 && headNav.hasClass('is-fixed') == false) {
        headNav.css("display", "block");
        headNav.css({ "top": '-72px' });
        headNav.addClass('is-fixed');
        headNav.animate({ "top": 0 }, 600);
    }
    else if ($(this).scrollTop() < 400 && headNav.hasClass('is-fixed') == true) {
        headNav.removeClass('is-fixed');
        headNav.animate({ "top": "-72px" }, 600);
        headNav.css("display", "none");
    }
});

// バーガーメニューの制御
$('.menu-trigger').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('nav .inner').slideUp();
        $('ul').removeClass('show');
    } else {
        $(this).addClass('active');
        $('nav .inner').slideDown();
        $('ul').addClass('show');
    }
});

$('.nav-vcontent a').on('click', function () {
    $('ul').removeClass('show');
    $('nav .inner').slideUp();
    $('.menu-trigger').removeClass('active');
});


// slick シーン別のおすすめフレーバー
$(".flavor-slide").slick({
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow: '<img src="./img/flavor-prev.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./img/flavor-next.svg" class="slide-arrow next-arrow">',
});

//slickお客様の声
$(".voice-slide").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<img src="./img/voice-prev.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./img/voice-next.svg" class="slide-arrow next-arrow">',
});

// slick ,トライアルセット
$(function () {
    $(".trial-set-minimg").slick({
        autoplay: false,
        arrows: false,
        fade: true,
        asNavFor: ".thumbnail",
    });
    $(".thumbnail").slick({
        slidesToShow: 4,
        asNavFor: ".trial-set-minimg",
        focusOnSelect: true,

    });
});

new WOW().init();

// トップへ戻るボタン
$(function () {
    var pageTop = $('.page_top');
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500, 'swing');
        return false;
    });
});

// アンカースクロール
jQuery(function () {
    var windowWidth = $(window).width();
    var headerHight = 50;
    jQuery('a[href^=#]').click(function () {
        var speed = 500;
        var href = jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
