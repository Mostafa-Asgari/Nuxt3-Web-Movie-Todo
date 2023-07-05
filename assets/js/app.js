// alert('سلااااااام');
$(document).ready(function(){

    $('.bars').click(function(){
        $('.navbar').toggleClass('active')
        $(this).toggleClass('close')
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 48){
            // console.log('salam');
            $('header').css({'position':'fixed', 'top': 0})
        } else {
            $('header').css({'position':'sticky'})
        }
    });

    // $(window).resize(function(){
    //     $('.header li ul').css('display','none')
    // });

    $('.bars2').click(function(){
        // console.log('asd');
        $(this).toggleClass('close2');
        $('.navbar2').toggleClass('active');
    });

});
