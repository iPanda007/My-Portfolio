let result = $('.icon').hasClass('feather-x-square')
let count = 0;
   $('.menu-icon').click(function () {
         if (count==0){
             count=1;
             $('.dashboard').animate({opacity:1},0.1)
             $('.icon').removeClass('feather-menu').addClass('feather-x-square')
         }else{
             count=0;
             $('.dashboard').animate({opacity: 0},0.1);
             $('.icon').removeClass('feather-x-square').addClass('feather-menu')
         }
   })
