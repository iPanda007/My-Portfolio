let hamburger =document.querySelector(".hamburger");
let navLink = document.querySelector(".nav-link");
let links = document.querySelectorAll(".nav-link li");
let glassSection = $('.glass').offset().top

/*nav--bar--button---*/

hamburger.addEventListener('click',() =>{
    navLink.classList.toggle('open');   /*add-class-mobile-navBar--custom*/
hamburger.classList.toggle('change')
    links.forEach( link =>{
        link.classList.add('fade')
    })
})
/*close-----------nav------link*/
$('.nav-link a').on('click',function () {

    setTimeout(function () {
        $('.nav-link').removeClass('open')
        $('.hamburger').removeClass('change')
    },100)

})
/*scroll---animate*/
$('.mouse a').on("click",function (e) {
  e.preventDefault()

    if (this.hash !==''){
        let hash = this.hash
            $('.container .glass').animate({
                scrollTop: $(hash).offset().top-30
            },800)
    }
})
             // -------------------typing------------------//
const texts = ['Aung Kyaw Khaing','a UI,UX Designer','a Web Developer','a YouTuber','a Photographer']
let count = 0;
let index = 0;
let currentText ='';
let letter = '';

(function type() {
if (count === texts.length){
 count=0;
}

currentText =texts[count];
letter =currentText.slice(0,++index);
document.querySelector('.typing').textContent=letter;
if(letter.length === currentText.length){
    count++;
    index =0;
}
setTimeout(type,140)
 }());


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});

let serviceSection = $('.service-section').height()
let navHeight = $('nav').height();
let screenHeight =$('.glass').height();
let aboutSection = $('.about-section').offset().top
let portfolio=$('.portfolio-section')
let HtmlOne =      $('#number');
let CssOne =  $('#numberOne');
let jsOne  = $('#numberTwo');
let jQueryOne =$('#numberThree');
let BootStrapOne =$('#numberFour')
let vueJsOne =$('#numberFive')
let ChartJsOne =$('#numberSix')
let git = $('#numberSeven')
let counter =0;
let counterOne=0;
let counterTwo=0;
let counterThree=0;
let counterFour =0;
let counterFive=0;
let counterSix=0;
let counterSeven=0;
let navLogoHeight =$('nav h4').height()


/*scroll--method---in--glass--In--container*/
$('.glass').scroll(function () {

    let currentSection = this.scrollTop;
    console.log(currentSection)
   if(currentSection> navHeight){
       $('nav').addClass('fadeOut');
   }else {
       $('nav').removeClass('fadeOut');
   }
   if (currentSection >= screenHeight*0.9){
     $('nav').removeClass('fadeOut');
       $('nav').addClass('show');
   }
   else {
       $('nav').removeClass('show');
   }
   if (currentSection>=aboutSection+450){
       setTimeout(function () {
           $('.circleOne').css('animation','animateOne 2s linear forwards');
           $('.circleTwo').css('animation','animateTwo 2s linear forwards');
           $('.circleThree').css('animation','animateThree 2s linear forwards');
           $('.circleFour').css('animation','animateFour 2s linear forwards');
           $('.circleFive').css('animation','animateFive 2s linear forwards');
           $('.circleSix').css('animation','animateSix 2s linear forwards');
           $('.circleSeven').css('animation','animateSeven 2s linear forwards');
           $('.circleEight').css('animation','animateEight 2s linear forwards');
           setInterval(() => {
               if(counter== 90){
                   clearInterval();
               }else{
                   counter += 1;
                   HtmlOne.html(counter+'%')
               }
               if(counterOne==80){
                   clearInterval()
               }
               else {
                   counterOne+=1;
                   CssOne.html(counterOne+"%")
               }
               if (counterTwo ==70){
                   clearInterval()
               }else {
                   counterTwo+=1;
                   jsOne.html(counterTwo+"%")
               }
               if (counterThree==75){
                   clearInterval()
               }else{
                   counterThree+=1;
                   jQueryOne.html(counterThree+'%')
               }
           if (counterFour==80){
               clearInterval()
           }else {
               counterFour+=1;
               BootStrapOne.html(counterFour+"%")
           }
           if (counterFive==65) {
               clearInterval()
           }else {
               counterFive+=1;
               vueJsOne.html(counterFive+"%")
           }
           if(counterSix == 60){
               clearInterval()
           }else {
               counterSix+=1;
               ChartJsOne.html(counterSix+"%")
           }
           if (counterSeven==70){
               clearInterval()
           }else {
               counterSeven+=1;
               git.html(counterSeven+'%')
           }
           },100);
       },2500)
   }else {

   }
    $('#about').waypoint(function (direction) {
      if (direction=="down"){
          $(".nav-one").removeClass('active')
           $('.nav-two').addClass('active')

      }
      else {
          $(".nav-one").addClass('active')
          $('.nav-two').removeClass('active')
      }
        console.log("I am here")
    },{
      offset:"10%"
    });

     $('#service').waypoint(function (direction) {
         if (direction=="down"){
             $(".nav-two").removeClass('active')
             $('.nav-three').addClass('active')

         }
         else {
             $(".nav-two").addClass('active')
             $('.nav-three').removeClass('active')
         }
         console.log("I am here")
     },{
         offset:"25%"
     },1500);

    $('#portfolio').waypoint(function (direction) {
        if (direction=="down"){
            $(".nav-three").removeClass('active')
            $('.nav-four').addClass('active')
        }
        else {
            $(".nav-three").addClass('active')
            $('.nav-four').removeClass('active')
        }

    },{
        offset: "25%"
    })
    $('#contact').waypoint(function (direction) {
        if (direction=="down"){
            $(".nav-four").removeClass('active')
            $('.nav-five').addClass('active')
        }
        else {
            $(".nav-four").addClass('active')
            $('.nav-five').removeClass('active')
        }

    },{
        offset: "25%"
    })

});
/*-----------responsive--------------*/
$(window).on('load resize scroll',function (e) {
    let   width = $(window).width();
    if (width < 995){
        $('.glass').scroll(function () {
            let mobileSection = this.scrollTop;

            if (mobileSection >= screenHeight*0.9){
                $('nav').removeClass('show')
                $('nav').addClass('mobile-bg')

            }else {
                $('nav').removeClass('mobile-bg')
                $('nav').removeClass('show')
            }
            if (mobileSection > navLogoHeight){
                $('nav h4').addClass('close')
            }else {
                $('nav h4').removeClass('close')
            }

        })
        $('#about').waypoint(function (direction) {
            if (direction=="down"){
                $(".nav-one").removeClass('active')
                $('.nav-two').addClass('active')

            }
            else {
                $(".nav-one").addClass('active')
                $('.nav-two').removeClass('active')

            }
            console.log("I am here")
        },{
            offset:"25%"
        });
        $('#service').waypoint(function (direction) {
            if (direction=="down"){
                $(".nav-one").removeClass('active')
                $('.nav-two').addClass('active')
                $('nav').removeClass('show')
            }
            else {
                $(".nav-one").addClass('active')
                $('.nav-two').removeClass('active')

            }
            console.log("I am here")
        },{
            offset:"25%"
        });
        $('#portfolio').waypoint(function (direction) {
            if (direction=="down"){
                $(".nav-one").removeClass('active')
                $('.nav-two').addClass('active')
                $('nav').removeClass('show')
            }
            else {
                $(".nav-one").addClass('active')
                $('.nav-two').removeClass('active')

            }
            console.log("I am here")
        },{
            offset:"25%"
        });
        $('#contact').waypoint(function (direction) {
            if (direction=="down"){
                $(".nav-one").removeClass('active')
                $('.nav-two').addClass('active')
                $('nav').removeClass('show')
            }
            else {
                $(".nav-one").addClass('active')
                $('.nav-two').removeClass('active')

            }
            console.log("I am here")
        },{
            offset:"25%"
        });
    }
    else {

        $('.glass').scroll(function () {
            let mobileSection = this.scrollTop;

            if (mobileSection >= screenHeight*0.9){
                $('nav').addClass('show')
                $('nav h4').removeClass('close')

            }else {
           
            }

        })

    }
});
$(window).on('load',function () {
$('.website-loader').fadeOut(500,function () {
         $(this).remove()
})
})


