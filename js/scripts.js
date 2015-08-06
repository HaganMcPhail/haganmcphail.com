$(document).ready(function(){
    var page, section, active, z = 6, zslide = 10, beenCLicked;

    getSize();

    $(window).resize(function(){
        getSize();
    });

    function getSize(){
        var sectionHighest = $('section#home').height() - 125;
        var mainHighest = $('div.howard').height();
        var bodyWidth= $('body').width();
        $('section').css('width',bodyWidth);
        $('.main-content').css('max-height', sectionHighest+'px');
        $('#experience .main-content').css('height', mainHighest+'px');
    }
    
    $('.navbar li').hover(function(){
        $(this).css('color','#f5f5f5');
    },function(){
        $(this).css('color','#fbaa7b');
    });

    function toggleMenu(){
        if ($('body').width() < 768){
            $('.navbar-toggle').click();
        }
    }

    function checkCurrentPage(){
        if (active == 'true'){
            return true;
        }
    }

    $('img.arrow-right').click(function(){
        var currentSlideClass = $(this).parent().parent().parent().attr('class');
        currentSlide = $('div.'+currentSlideClass);
        var nextSlideClass = $(currentSlide).next().attr('class');
        nextSlide = $('div.'+nextSlideClass);
        currentSlide.toggle('slide',{ direction: "left" }, 400, function(){
            currentSlide.hide();
            nextSlide.toggle('slide',{ direction: "right" }, 400);
        });
        
        zslide++;
    });

    $('img.arrow-left').click(function(){
        var currentSlideClass = $(this).parent().parent().parent().attr('class');
        currentSlide = $('div.'+currentSlideClass);
        var nextSlideClass = $(currentSlide).prev().attr('class');
        nextSlide = $('div.'+nextSlideClass);
        currentSlide.toggle('slide',{ direction: "right" }, 400, function(){
            currentSlide.hide();
            nextSlide.toggle('slide',{ direction: "left" }, 400);
        });
        zslide++;
    });

    $('.nav li').click(function(){
        page = $(this).attr('class');
        active = $(this).attr('active');
        toggleMenu();
        if(!checkCurrentPage(active)){
            $('.nav li').attr('active', '""');
            $(this).attr('active','true');
            section = $('section#'+page);
            section.css('z-index', z);
            section.hide();
            section.toggle('slide',{ direction: "left" }, 600);
            z++;
        }
    });

    $("#submit").on("click", function(e) {
        e.preventDefault();
        $('#message').val('Thank you for your email!  I will respond shortly!    - Hagan');
        // the rest of your code ...
    });
});