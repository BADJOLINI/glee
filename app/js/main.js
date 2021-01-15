$(function () {

  

  $('.productshop-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.productshop-tabs__top-item').removeClass('productshop-tabs__top-item--active');
    $(this).addClass('productshop-tabs__top-item--active');

    $('.productshop-tabs__content-item').removeClass('productshop-tabs__content-item--active');
    $($(this).attr('href')).addClass('productshop-tabs__content-item--active');
  })

  $('.productshop-item__num').styler();

  $('.productshop-slide__thumb').slick({
    asNavFor: '.productshop-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.productshop-slide__big').slick({
    asNavFor: '.productshop-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  if ($('.product__items').length) {
    var mixer = mixitup('.product__items');
  }
  if ($('.design__items').length) {
    var mixer = mixitup('.design__items');
  }

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $(".star").rateYo({
    starWidth: "12px",
    numStars: 5,
    minValue: 0,
    maxValue: 5,
    spacing: "2px",
    readOnly: true,
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00'
  });
  $(".starr").rateYo({
    starWidth: "20px",
    numStars: 5,
    minValue: 0,
    maxValue: 5,
    spacing: "10px",
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00'
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 5000
  })
});