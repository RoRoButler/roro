$(function() {
    // 메뉴클릭시 하위메뉴 슬라이드 다운
    // 하위메뉴가 열린상태에서 다른메뉴 클릭시 변경, 자기메뉴 클릭시 슬라이드 업
    $(".header3link").click(function() {
        $('.content').children().removeClass('on');
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $("nav").removeClass('on').children().removeClass('on');
        } else {
            $("nav").addClass('on');
            $(this).addClass('on').siblings().removeClass('on');
            $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        }
    });
    // 2차메뉴 클릭때마다 3차메뉴 출력
    $('li.more').each(function() {
        let $2menuindex = $(this).index();
        let $3menu = $(this).parent().next().children('.contentlist');
        $(this).click(function() {
            $(this).addClass('on').siblings().removeClass('on');
            $($3menu).eq($2menuindex).addClass('on').siblings().removeClass('on');
        });
    });
});