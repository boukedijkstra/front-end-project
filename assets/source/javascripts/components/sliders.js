import 'slick-carousel'

const sliders = () => {
  const init = () => {
    testimonialSlider();
    productPhotoSlider();
    heroSlider();
  };


  const testimonialSlider = () => {

    $('.testimonials__items').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" alt="Previous"">',
      nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" alt="Next">',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="15" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="15" alt="Next">',
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="15" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="15" alt="Next">',
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="15" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="15" alt="Next">',
          }
        }
      ]
    });

  };

  // for product photo's on product page, only activate on mobile
  const productPhotoSlider = () => {

    // slider
    let $slick_slider = $('.product-info__photos');
    let settings_slider = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // more settings
    };
    slick_on_mobile( $slick_slider, settings_slider);

    // slick on mobile
    function slick_on_mobile(slider, settings){
      $(window).on('load resize', function() {
        if ($(window).width() > 768) {
          if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
          }
          return
        }
        if (!slider.hasClass('slick-initialized')) {
          return slider.slick(settings);
        }
      });
    }

  };

  const heroSlider = () => {

    $('.hero-items').slick({
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="48" alt="Previous"">',
      nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="48" alt="Next">',
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            centerMode: true,
            centerPadding: '250px',
            slidesToShow: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="48" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="48" alt="Next">',
          }
        },
        {
          breakpoint: 1441,
          settings: {
            centerMode: true,
            centerPadding: '180px',
            slidesToShow: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="48" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="48" alt="Next">',
          }
        },
        {
          breakpoint: 1025,
          settings: {
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="38" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="38" alt="Next">',
          }
        },
        {
          breakpoint: 769,
          settings: {
            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="28" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="28" alt="Next">',
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="28" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="28" alt="Next">',
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            prevArrow: '<img src="/assets/icon-arrow-prev.svg" class="slick-prev" height="14" alt="Previous"">',
            nextArrow: '<img src="/assets/icon-arrow-next.svg" class="slick-next" height="14" alt="Next">',
          }
        }
      ]
    });

  };


  return {
    init,
  }
};

export default sliders()
