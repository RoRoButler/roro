// 응용 탭메뉴
$(function() {
    $(".tabV ul li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        // 탭과 짝이 맞는 conBox가 열린다
        $(this).parent().siblings().addClass('off');
        // 열린탭과 상관없는 객체는 width를 0으로 만들어 밀어버린다.
        $("#" + $(this).data('id')).parent().removeClass('off').find('.close').addClass('on');
        // 상관있는 객체는 다시 width를 복구하고, 닫기버튼을 활성화시킨다.
    });

    $(".close").click(function() {
        $(".close").removeClass('on');
        $(".tabV, ul, .content").children().removeClass('on off');
    });
});