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

  tabFunc = function() {
    var tabBtn = $('.section-tab').find('.tab');
    var tabContainer = $('.content').find('.container-tab');

    tabBtn.each(function(i, n){
      tabBtn.eq(i).click(function(e){
        e.preventDefault();
        tabBtn.removeClass('on').eq(i).addClass('on'); 
        tabContainer.removeClass('on').eq(i).addClass('on');
      })
    })
  }

  faqFunc = function() {
    var question = $('.tbl-type').find('.question'); 
    var answer = $('.tbl-type').find('.answer');
  
    question.each(function(i, n){
      question.eq(i).click(function(e){
        e.preventDefault();
        question.removeClass('on').eq(i).addClass('on'); 
        answer.removeClass('on').eq(i).addClass('on');
        var inp = question.eq(i).find('.tbl-admin > input')
        if(inp.is(":checked")){
          inp.attr("checked", false);
        }else{
          inp.attr("checked", true);
        }
      })
    })
  }

  $(document).ready(function() {
    headerScroll();
    layerPopup();
    tabFunc();
    faqFunc();
  });
})(jQuery);