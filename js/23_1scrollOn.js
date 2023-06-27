$(function() {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    //-----------------------------모바일메뉴
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function() {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function() {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });
    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function() {
            $(this).next().stop().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }
    //-----------------------------스크롤버튼
    $(".scroll span").each(function() {
        var thisOffset = $("." + $(this).data('id')).offset().top;
        // console.log(thisOffset)
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });



});
//----------------------------카운팅
function counting() {
    // 정수카운팅
    $('.counting').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        //시작 숫자와 종료숫자를 비교한다    
        $({
            countNum: $this.text()
        }).animate(
            { countNum: countTo },
            {
                duration: 3000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            }
        );
    });
}

function counting2() {
    // 소수점 카운팅
    $('.counting2').each(function() {
        var $this = $(this);
        // countTo = $this.text();
        // 속성값으로 소수점을 쓸 수 없어서 해당 태그에 텍스트로 원하는 수치 입력, 스크립트에서 변수로 받기
        // 초기값 0을 여기서 미리설정하기
        $({
            countNum: 0
        }).animate({
            countNum: 8.597 // 소수리셋이 어려워서 고정값 적용
            // countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                // 소수점아래 수 정리 메서드 .toFixed(n) 사용하기
                $this.text(this.countNum.toFixed(3));
            },
            complete: function() {
                $this.text(this.countNum.toFixed(3));
            }
        });
    });
}
// counting();
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 3자리마다 ,콤마찍는 함수


//----------------------------섹션이동 시 리모콘에 하이라이트
$(document).scroll(function() {
    var scrolltop = $(window).scrollTop();
    $("header, section, footer").each(function() {
        if (scrolltop >= $(this).offset().top) {
            $("span[data-id=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on');

        } else if (scrolltop >= $(".section7").offset().top + 130) {
            $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
        }
    });
    //-----------------------------카운팅 트리거
    if ($(".section1").hasClass("on")) {
        counting();
    } else {
        $(".counting").text('0');
    }
});
//이페이지에 적용된 스크롤리모콘은 각영역의 top = $(window).scrollTop()일때를 구현, 미리 켜지는 경우는 따로따로 값을 입력해야한다.


//---------------------------- 원하는 섹션 위치에 오면 한번만 카운팅 실행, 바닐라

window.addEventListener('scroll', () => {
    var scrolltopBanila = window.scrollY || document.documentElement.scrollTop; //ie인식포함
    var section3Top = document.querySelector('.section3').offsetTop;
    var section4Top = document.querySelector('.section4').offsetTop;
    if (scrolltopBanila > section3Top + 100 && scrolltopBanila < section3Top + 150) {
        document.addEventListener('scroll', counting2, { once: true });
    } else if ((scrolltopBanila > section4Top + 100) && (scrolltopBanila < section4Top + 150)) {
        document.addEventListener('scroll', counting2, { once: true });
    } else {
        return false
    }
});
