(function() {
  headerScroll = function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();    
        if (scroll >= 40) {
          $("#header").addClass("change");
        } else {
          $("#header").removeClass("change");
        }
    });
  };

  $(document).ready(function() {
    headerScroll();
  });
})(jQuery);