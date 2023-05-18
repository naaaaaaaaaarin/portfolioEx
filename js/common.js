// header _ pc
$(window).on("scroll", function(){
  const trigger = $('.main').height() - 100;
  if($(window).scrollTop() > trigger){
    $('.toTop').css({"opacity":"1"});
    $('.pc').css({"background":"rgba(0, 0, 0, 0.3)"});
  }else {
    $('.toTop').css({"opacity":"0"});
    $('.pc').css({"background":"transparent"});
  }
})


// 맨위
$('.toTop').click(function(){
  window.scrollTo({top:0, left:0, behavior:'smooth'});
})