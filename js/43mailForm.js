$(function() {
    $('.btn_close').click(function() {

        var chkd = $("#pop_day").is(":checked");
        if (chkd) {
            $.cookie('popup', 'hidden', {
                expires: 1
            });
            // jquery.cookie에서 $기호를 변수이름처럼 사용하였다. expires는 jquery.cookie에서 선언되었다.
            // 스크립트의 이름이 jquery. (혹은 $.)으로 시작하는 것은 이 스크립트가 jQuery에 의존적이다라는 점을 명시하는것이다.
        }
        $('.popup').css('display', 'none');
        // 1일동안 닫기라는 버튼을 눌렀을때 (체크박스)쿠키 적용 여부 판단하여 출력여부 판단
    });

    if ($.cookie('popup') == 'hidden') {
        $('.popup').css('display', 'none');
    } else {
        $('.popup').css('display', 'flex');
    }
    // 팝업의 출력형태를 분석해서, 이게 쿠키때문인지, 그냥 x눌러서 안보이게 한건지 구분해서 재처리


    //닫기버튼  
    $('.ic_close').click(function() {
        // $('.popup').hide();
        $('.popup').css('display', 'none');
    });

    // jQueryUI draggable
    $("#dragPop").draggable();

    // emailjs
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // submit이벤트 막기
        const fromName = document.querySelector('input[name="from_name"]').value; // 전송자 이름 추출

        emailjs.init("user_stJBqz5kKC5LyQt7X5M88"); // API keys
        emailjs.sendForm('runauxlabsEmail', 'runauxlabsTemplate', this)
            .then(function() {
                alert(`${fromName}님, 메일 전송 완료 되었습니다 :)`)
            }, function(error) {
                alert(`${fromName}님, 메일 전송이 실패했습니다 :(`)
                console.log('전송실패', error);
            });
    });
});