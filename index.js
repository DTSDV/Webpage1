$(document).ready(function() {
    $('.circle').mouseover(function() {
       $(this).animate({top:'+=100px'},1000);     
    });
    
    $('.circle').mouseleave(function() {
       $(this).animate({top:'-=100px'},1000);     
    });
    
// Parallax and Fade Words 
    $(window).scroll(function(){
        parallax();
        wordFade();
    });
      
    function parallax() {
        var wScroll = $(window).scrollTop();
        
        $('.parallax_bg').css('background-position','center '+(wScroll*0.55)+'px');
    }
    
    function wordFade() {
        var wScroll = $(window).scrollTop(),
            elementOffset = $('#thirdcenter').offset().top,
            distance = (elementOffset-wScroll);

        if (distance < 130 && distance > -600) {
           $('#fadedwords1').css('opacity',1); 
        }
        if (distance >=130 || distance <= -600) {
           $('#fadedwords1').css('opacity',0);  
        }
    }

// Scroll down when clicked
    $('.slide').click(function(e) {
        var linkHref=$(this).attr('href');
        /*console.log(linkHref).offset().top;*/
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        },1000);
        e.preventDefault();
    });
});