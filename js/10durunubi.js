// 두루누비
$(function(){
    function menuClick(){
        $(".mmenu").click(function(){
            $("nav").stop().slideToggle();
            $(this).text(function(e, text) {
                return text === 'close' ? 'menu_open' : 'close'
            });
        });
        $(".mgnb").click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        });
    }
    
    if($(window).width() < 641){
        menuClick()
    }
    $(window).resize(function(){
        $("nav").hide();
        if($(window).width() < 641){
            menuClick()
        }else if($(window).width() > 640){
            $("nav").show();
            $(".mmenu").text('menu_open')
        }
    });
});