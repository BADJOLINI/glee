$(function () {
  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__items');

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('filter-price__from').text(data, from);
      $('filter-price__to').text(data, to);
    },
    onChange: function (data) {
      $('filter-price__from').text(data, from);
      $('filter-price__to').text(data, to);
    },
  })

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "10px"
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 5000
  })
});