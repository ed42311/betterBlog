$(window).scroll(function() {
  $('#pic').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow+600) {
        $(this).addClass("slideRight");
      }
  });
});

$(window).scroll(function() {
  $('#text').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow+600) {
        $(this).addClass("slideLeft");
      }
  });
});

$(window).scroll(function(){
  var divs = $('.title');
  if($(window).scrollTop()<250){
    divs.stop(true,true).fadeIn(1800);
  } else {
    divs.stop(true,true).fadeOut(2000);
  }
  $(".title").css("opacity", 1 - $(window).scrollTop() / 350);
}); 



