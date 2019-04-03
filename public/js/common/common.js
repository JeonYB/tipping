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
    var layerSection = $('.section-layer')
    if($('a').hasClass('layerpopup-button')){
      layerButton.each(function(i, e){
        $(this).click(function(){
          layerSection.eq(i).addClass('on');
          layerSection.eq(i).parents('div').append('<div class="dim-layer"/>')  
        })
      })
    } else {
      return false;
    }
  }
  $(document).ready(function() {
    headerScroll();
    layerPopup()
  });
})(jQuery);