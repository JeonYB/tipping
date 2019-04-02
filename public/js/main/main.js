(function() {
  loginSwiper = function() {
    var swiper = new Swiper('.login-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  $(document).ready(function() {
    loginSwiper();
  });
})(jQuery);