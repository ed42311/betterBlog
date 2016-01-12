var divs = $('.title');
$(window).scroll(function(){
   if($(window).scrollTop()<250){
         divs.stop(true,true).fadeIn(1800);
   } else {
         divs.stop(true,true).fadeOut(2000);
   }
});