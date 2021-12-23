$(function(){
    $('.menu-btn').click(function(e) {
    $(this).toggleClass("click");
    })
    $('.menu-btn').click(function(e) {
    $(".body-inner, .body-inner-back, .menu, .batus").toggleClass("click");
    })
    $('.batus').click(function(e) {
      $(".body-inner, .menu-btn, .menu, .body-inner-back").toggleClass("click");
      })
      $('.batus').click(function(e) {
        $(this).toggleClass("click");
        })
        $('.sp-menu').click(function(e) {
          $(".body-inner, .body-inner-back, .menu, .batus, .menu-btn").toggleClass("click");
          })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
});
$(".ac-menu").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("click");
    });
    jQuery('a[href^="#"]').on('click', function() {
        var header = jQuery('.header').innerHeight();
        var id = jQuery(this).attr('href');
        var position = 0;
        if ( id != '#') {
          position = jQuery(id).offset().top - header;
        }
        jQuery('html,body').animate({
          scrollTop: position
        },
        300);
      });
      jQuery(window).on('scroll', function() {
        if ( 100 < jQuery(this).scrollTop()) {
          jQuery('.to-top').addClass('is-show');
        } else {
          jQuery('.to-top').removeClass('is-show');
        }
      });
      $('.ac-menu').click(function(e) {
        $(this).children('img').toggleClass("minus");
        if ($(this).children('img').hasClass("minus")) {
          $(this).children('img').attr("src", "img/pc-img/minus.svg");
        } else {
          $(this).children('img').attr("src", "img/pc-img/plus.svg");
        }
        });
  });


