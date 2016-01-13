$(window).scroll(function() {
  $('#pic').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideRight");
      }
  });
});

$(window).scroll(function() {
  $('#text').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideLeft");
      }
  });
});

var divs = $('.title');
$(window).scroll(function(){
if($(window).scrollTop()<250){
divs.stop(true,true).fadeIn(1800);
} else {
divs.stop(true,true).fadeOut(2000);
}
$(".title").css("opacity", 1 - $(window).scrollTop() / 350);
}); 



