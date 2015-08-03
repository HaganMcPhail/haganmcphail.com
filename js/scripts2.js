$(document).ready(function(){
    var fout = 0;
    var fin = 1;
    var timer;

    var timer = setInterval(timeout, 12000);
    function start(){
        timer = setInterval(timeout, 12000);
    }
    function pause(){
        clearInterval(timer);
    }
    function timeout(){
        $('.bg-img'+fout).css('z-index','-2');
        $('.bg-img'+fin).css('z-index','-1');
        // $('.bg-img'+fin).slideDown(1000, function(){
        //     $('.bg-img'+(fout)).hide();
        // });
        $('.bg-img'+fin).fadeIn(1000);
        setTimeout(function() {
            $('.bg-img'+fout).hide();
            fout++;
            fin++;
            if(fout===3){fout = 0;}
            if(fin===3){fin = 0;}
        }, 1100);
        
    }

    $('img.pause').click(function(){
        pause();
        $('img.play').show();
        $('img.pause').hide();
    });
    $('img.play').click(function(){
        start();
        $('img.play').hide();
        $('img.pause').show();
    });
});