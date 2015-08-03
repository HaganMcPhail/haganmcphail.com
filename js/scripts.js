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
        // $('#skills .main-content').css('height', mainHighest+'px');
        // $('.skills-container').css('min-height', mainHighest+'px');
        // $('.skills-list').css('min-height', mainHighest+'px');
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

    // function showClicked(toShow){
    //     $('.'+toShow).show(function(){
    //         $('.skills-container').toggle('slide',{ direction: "left" }, 600);
    //     });
    // }

    // function hideDivs(toShow){
    //     $('.certs').hide();
    //     $('.databases').hide();
    //     $('.techs').hide();
    //     showClicked(toShow);
    // }

    // function slideRight(toShow){
    //     $('.skills-container').toggle('slide',{ direction: "left" }, 600, function(){
    //         hideDivs(toShow)
    //     });
    // }

    // $('.skills-list h3').click(function(){
    //     var toShow = $(this).attr('skills');
    //     console.log(beenCLicked);
    //     if(beenCLicked == true){
    //         slideRight(toShow);
    //     } else {
    //         $('.'+toShow).show(function(){
    //             $('.skills-container').toggle('slide',{ direction: "left" }, 600);
    //         });
    //     }
    //     beenCLicked = true;
    // });

    //$('section#skills').css({'z-index':'100','display':'inline-block'});
});