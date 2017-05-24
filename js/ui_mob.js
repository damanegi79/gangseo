// JavaScript Document
$(document).ready(function(){
    init();

})

$(window).load(function(){

})

function init() {
   
    $(".btn_menu a").on("click",function(){
        TweenMax.to($('#nav'),0.5,{transform:'perspective(1000px) translateX(0px)'})
        return false;
    })
    $("#nav .btn_close a").on("click",function(){
        TweenMax.to($('#nav'),0.5,{transform:'perspective(1000px) translateX(-100vw)'})
        return false;
    })
    $('.bbsTitle li a').on('click',function(){
        var indexNum = $('.bbsTitle li a').index(this);
        $('.bbsTitle li').removeClass('active')
        $('.bbsTitle li').eq(indexNum).addClass('active')
        $('.bbsListArea .list').hide()
        $('.bbsListArea .list').eq(indexNum).show();
        return false;
    })
    $('.gnb>li.hasSubMenu>a').on('click',function(){
        var indexNum = $('.gnb>li>a').index(this);
        $('#nav .gnb>li').removeClass('active')
        $('#nav .gnb>li').eq(indexNum).addClass('active')
        return false;
    })
}


function layer_init(name){
    var pop_height = $('.popup-layer.'+name).height()/2;
    $('.overay-layer').show().addClass('fadeIn')
    $('.popup-layer.'+name).show().css({marginTop:-pop_height}).addClass('bounceInUp')
    return false;
}

function layer_close(){
    $('.overay-layer').removeClass('fadeIn').addClass('fadeOut')
    $('.popup-layer').removeClass('bounceInUp').addClass('bounceOutUp')
    setTimeout (function(){
        $('.overay-layer,.name_layer').hide()
        $('.overay-layer').removeClass('fadeOut')
        $('.popup-layer').removeClass('bounceOutUp').hide()
    },500)
    return false;
}

