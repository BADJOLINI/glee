$(function () {

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