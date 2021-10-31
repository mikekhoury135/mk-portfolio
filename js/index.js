if ($(window).width() < 576) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 400) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},100);
            return false;        
        });
        $('.scroll-arrow').hover(function() {
            $(this).animate({ margin: -10, width: "+=10", height: "+=10" });
        }, function() {
            $(this).animate({ margin: 0, width: "-=10", height: "-=10" });
        });
    });
} else if ($(window).width() < 992) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 350) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},100);
            return false;        
        });
        $('.scroll-arrow').hover(function() {
            $(this).animate({ margin: -10, width: "+=10", height: "+=10" });
        }, function() {
            $(this).animate({ margin: 0, width: "-=10", height: "-=10" });
        });
    });
} else if ($(window).width() >= 992) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},100);
            return false;        
        });
        $('.scroll-arrow').hover(function() {
            $(this).animate({ margin: -10, width: "+=10", height: "+=10" });
        }, function() {
            $(this).animate({ margin: 0, width: "-=10", height: "-=10" });
        });
    });
};
