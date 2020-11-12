$(function () {
    $('.slider').slick({
        arrows: false,
        infinite: true,  
        slidesToShow: 1,  
        slidesToScroll: 1,        
        autoplay: true,
        autoplaySpeed: 3000,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 576,  //small
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
              }
            },
        ]
        
    })
})
