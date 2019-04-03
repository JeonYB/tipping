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
  
  layerPopup = function() {
    var layerButton = $('.layerpopup-button');
    var layerSection = $('.wrap-layer')
    if($('a').hasClass('layerpopup-button')){
      layerButton.each(function(i, e){
        $(this).click(function(){
          layerSection.eq(i).addClass('on');
          layerSection.eq(i).append('<div class="dim-layer"/>')  
        });

        layerSection.eq(i).find('.close-button').click(function(){
          layerSection.eq(i).removeClass('on')  
        })
      });
    } else {
      return false;
    }
  };

  $(document).ready(function() {
    headerScroll();
    layerPopup()
  });
})(jQuery);