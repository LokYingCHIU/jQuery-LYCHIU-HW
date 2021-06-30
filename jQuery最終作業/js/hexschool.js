$(document).ready(function () {

    $('.topbutton').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    $('.dropdown').click(function (e) { 
      e.preventDefault();
      $(this).find('ul').stop().slideToggle();
    });
});