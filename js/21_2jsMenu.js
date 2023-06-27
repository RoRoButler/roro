$(function () {
    function snbMove() {
        let iw = $(window).width();
        if (iw > 768) {
            $(".gnb > ul > li").hover(function () {
                $(this).children('.snb').stop().slideToggle(300);
            });
        } else if(iw <= 768)  {
            $(".gnb > ul > li > a").click(function (e) {
                $(this).addClass('on').next().stop().slideToggle(300);
                $(".gnb > ul > li > a").not(this).removeClass('on').next().slideUp(300);
                e.preventDefault();
                e.stopPropagation();
            });
            $(".material-icons").click(function () {
                $(this).text(function (e, text) {
                    return text === 'close' ? 'menu_open' : 'close';
                });
                $(".gnb > ul").toggleClass('on');
            });
        }
    }
    snbMove();
    $(window).resize(function () {
        snbMove();
    });
});
// .slideDown({
//     duration: 300,
//     start: function () {
//       $(this).css({ display: "flex" })
//     }
// });
// .slideToggle(300, function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
// });