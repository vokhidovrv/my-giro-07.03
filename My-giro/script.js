$(document).ready(function(){
    $('.list__catalog>li').click(function(){
        $('.list__catalog>li').css('color','black')
        $(this).css( "color", "red" );
    })
    $('.nextslide').click(function(){
        var activeslide=$('.list.active');
        var activeslideIndex=activeslide.index();
        var nextslide=activeslide.next();
        var nextslideIndex=activeslideIndex+1;
        activeslide.hide().removeClass('active');
        if(nextslideIndex===($('.list').length)){
            $('.list:first').fadeIn(2000).addClass('active');
        }else{
            nextslide.fadeIn(2000).addClass('active');
        }

    })
    $('.prevslide').click(function(){
        var activeslide=$('.list.active');
        var activeslideIndex=activeslide.index();
        var prevslide=activeslide.prev();
        var prevslideIndex=activeslideIndex-1;
        activeslide.hide().removeClass('active');
        if(prevslideIndex===($('.list:first').index()-1)){
            $('.list:last').fadeIn(2000).addClass('active');
        }else{
            prevslide.fadeIn(2000).addClass('active');
        }

    })
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('#scrolltop').fadeIn();
        }
        else{
            $('#scrolltop').fadeOut(1000);
        }
    })
    $('#scrolltop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },800)
    })
})
function catalog(type){

    if(type=='all'){
        $('.all>*').show();

    }
    else if(type=='giroscooters'){
        $('.giroscooters').show();
        $('.electric_scooters').hide();
        $('.segways').hide();

    }
    else if(type=='segways'){
        $('.segways').show();
        $('.electric_scooters').hide();
        $('.giroscooters').hide();
    }
    else if(type=='electric_scooters'){
        $('.electric_scooters').show();
        $('.segways').hide();
        $('.giroscooters').hide();
    }
}