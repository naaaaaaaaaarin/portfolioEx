$('#fullpage').fullpage({
  autoScrolling:true,
  anchors: ['section1'],
  afterLoad: function(anchorLink, index){
    if(index == 1){
      $('.toTop').css({"opacity":'0'});
      $('header').css({"background":"transparent"});
    } else {
      $('.toTop').css({"opacity":'1'});
      $('header').css({"background":"rgba(0, 0, 0, 0.3)"});
    }
  },
});
