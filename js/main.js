$(function(){

    

    $('.slider-inner__box').slick({

        prevArrow: '<button type="button" class="slick-prev"><svg width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.8964 6.444V4.68H8.20442V0.864L0.104421 5.544L8.20442 10.26V6.444H27.8964Z" fill="#A5A5A5"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.103578 6.444V4.68H19.7956V0.864L27.8956 5.544L19.7956 10.26V6.444H0.103578Z" fill="#A5A5A5"/></svg></button>',
        infinite: false,
        dots: true,
    })

    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    })

});

