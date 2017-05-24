// JavaScript Document
$(window).load(function(){
    init();
    init_sub()
    initIndex();
})

$(window).resize(function(){

})



function layout(){

}
function initIndex() {
    TweenMax.from($('.visualBg img'),1,{transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(1.5)', ease:Sine.easeInOut,delay:0, opacity:0})
    TweenMax.from($('.indexVisual .slogan'),1,{transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(.5)', ease:Back.easeOut.config(3),delay:2.5, opacity:0})
    TweenMax.from($('.indexVisual .img_visual'),2,{marginTop:'300px',transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(2.5)', ease:Back.easeOut.config(3),delay:1, opacity:0})
    TweenMax.from($('.indexVisual .txt_top'),2,{marginLeft:'-100px',transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(1)', ease:Back.easeOut.config(3),delay:3, opacity:0})
    TweenMax.from($('.indexVisual .txt_bottom'),1,{marginTop:'50px', transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(1)', ease:Power0.easeNone,delay:4, opacity:0})
    TweenMax.from($('.indexVisual .btn'),1,{transform:'perspective(1000px) translateX(-400px) rotateX(0deg) scale(1)', ease:Back.easeOut.config(2),delay:5, opacity:0})
//    TweenMax.to($('.visualBg img'),10,{transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(1.1)', ease:Sine.easeInOut,delay:1, opacity:1,repeat:-1, yoyo:true,})
    TweenMax.from($('#business dd img').eq(0),0.5,{transform:'perspective(1000px) translateX(-100px) rotateY(180deg) scale(1)', ease:Sine.easeInOut,delay:0, opacity:0})
    TweenMax.from($('#business dd img').eq(1),0.5,{transform:'perspective(1000px) translateX(-100px) rotateY(180deg) scale(1)', ease:Sine.easeInOut,delay:0.3, opacity:0})
    TweenMax.from($('#business dd img').eq(2),0.5,{transform:'perspective(1000px) translateX(-100px) rotateY(180deg) scale(1)', ease:Sine.easeInOut,delay:0.6, opacity:0})
    TweenMax.from($('#business dd img').eq(3),0.5,{transform:'perspective(1000px) translateX(-100px) rotateY(180deg) scale(1)', ease:Sine.easeInOut,delay:0.9, opacity:0})
    TweenMax.from($('#business dd img').eq(4),0.5,{transform:'perspective(1000px) translateX(-100px) rotateY(180deg) scale(1)', ease:Sine.easeInOut,delay:1.2, opacity:0})

    var e1 = $('.indexVisual .txt_bottom li').eq(0)
    var e2 = $('.indexVisual .txt_bottom li').eq(1)
    var e3 = $('.indexVisual .txt_bottom li').eq(2)
    var e4 = $('.indexVisual .txt_bottom li').eq(3)
    var e5 = $('.indexVisual .txt_bottom li').eq(4)
    var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0});
    tl.staggerTo([e1, e2, e3, e4, e5], 1, {marginTop:'10px',color:'#fff', transform:'perspective(1000px) translateX(0px) rotateX(0deg) scale(1)', ease: Power3.easeIn,delay:0, opacity:0},0.1);
}


function init() {
    $('.gnb li a').on('mouseover',function(){
        $('.subGnbArea').slideDown(200);
        $('.gnb li').removeClass('active')
        $(this).removeClass('active')
        return false;
    })
    $('#header').on('mouseleave',function(){
        $('.subGnbArea').slideUp(200);
        $('.gnb li').removeClass('active')
        return false;
    })
    $('.subGnbArea ul').on('mouseover',function(){
        var indexNum = $('.subGnbArea ul').index(this)
        $('.gnb li').removeClass('active')
        $('.gnb li').eq(indexNum).addClass('active')
        return false;
    })
    $('.bbsList').eq(0).show();

    $('.bbsArea .tabLine li a').on('click',function(){
        var indexNum = $('.bbsArea .tabLine li a').index(this);
        $('.bbsArea .tabLine li').removeClass('active');
        $('.bbsArea .tabLine li').eq(indexNum).addClass('active');
        $('.bbsList').hide();
        $('.bbsList').eq(indexNum).show();
        return false;
    })
    $("#directLink .directArea>ul>li>a").on('mouseover',function(){
        if($(this).parent().hasClass('active')){
            return false;
        } else {
            TweenMax.to($(this).find('img'),0.2,{left:-75})
        }
    })
    $("#directLink .directArea>ul>li>a").on('mouseleave',function(){
        if($(this).parent().hasClass('active')){
            return false;
        } else {
            TweenMax.to($(this).find('img'),0.2,{left:0})
        }
    })
    $("#directLink .directArea>ul>li>a").on('click',function(){
        if($(this).parent().hasClass('active')){
            return false;
        } else {

            TweenMax.to($("#directLink .directArea>ul>li>a"),0.2,{width:75})
            TweenMax.to($("#directLink .directArea>ul>li>a img"),0.2,{left:0})
            TweenMax.to($(this),0.2,{width:150})
            TweenMax.to($(this).find('img'),0.2,{left:-75})
            $("#directLink .directArea>ul>li").removeClass('active')
            $(this).parent().addClass('active')
            return false;
        }
    })
    $("#directLink .directArea>ul>li>a").eq(0).click();
    $("#favorite .favoMenu a").each(function(){
        var image = $(this).find("img");
        var imgsrc = image.attr("src");
        $(this).mouseover(function(){
            var on = imgsrc.replace(/.png/,"_on.png");   //앞에 문자열을 뒤에 문자열로 변환
            $(image).attr("src",on);
        })
        $(this).mouseout(function(){
           var off = imgsrc.replace(/_on.png/,".png");
           $(image).attr("src",off);
          });

    })
}
function init_sub() {
    $('.subNav>li').each(function(){
        if($(this).find('ul').size()==1){
            $(this).addClass('hasSub')
        }
    })
    $('.subNav>li.hasSub>a').on('click',function(){
        $('.subNav>li>ul').hide();
        $(this).next().show()
        return false;
    })

    $('.subNav>li>ul>li.active').parent().show()
//    $('.subNav>li>ul>li>a').on('click',function(){
//        $(this).parent().addClass('active')
//    })

}

function layer_init(name){
    var pop_height = $('.popup-layer.'+name).height()/2;
    $('.overay-layer').show().addClass('fadeIn')
//    $('.popup-layer').show().css({marginTop:-pop_height}).addClass('bounceInUp')
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
