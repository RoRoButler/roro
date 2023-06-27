//-----------------------------탭메뉴
$(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    // 탭메뉴 가로형-인덱스번호
    $(".indexBox ul li").click(function(){
        var tabindex = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".indexBox .conBox").eq(tabindex).addClass('on').siblings().removeClass('on');
    });

    // 탭메뉴 세로형
    $(".tabV ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });


    // 탭메뉴 페이드박스 가로형
    $(".fadeTab .conBox").hide().eq(0).show();
    $(".fadeTab li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).stop(true).fadeIn(1000)
                                .siblings('.conBox').fadeOut(300);
    });
});