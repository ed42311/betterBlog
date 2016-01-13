$(window).scroll(function(){
  $(".title").css("opacity", 1 - $(window).scrollTop() / 350);
});