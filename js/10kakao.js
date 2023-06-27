// 바닐라 10kakao
window.onload = () => {
    const gnb = document.querySelector("ul.gnb");
    function addOn() {
        // this.classList.add("on");
        gnb.classList.add("on");
        // .classList는 IE9이하 버전에서는 작동하지 않는다.
    }
    let removeOn = () => {
        gnb.classList.remove("on");
    };
    const mMenuBt = document.querySelector(".mMenuBt");
    const closeBt = document.querySelector(".close");

    // 2차 메뉴 열기 제이쿼리
    $(".gnb > li > a").unbind("click").click(function () {
        $(this).next().stop(true).slideToggle(300);
        // this 다음 요소를 슬라이드토글
        $(".gnb > li > a").not(this).next().slideUp(300);
        // this가 아니라면 다음 요소는 슬라이드업
        return false;
        // a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
    });

    mMenuBt.addEventListener('click', addOn);
    closeBt.addEventListener('click', removeOn);

    // 리사이징 할때마다 새로고침, 바닐라
    // function changeWinRefresh() {
    //     if (window.innerWidth != lastWidth) {
    //         // location.reload(); // 파이어폭스에서 리프레시 안됨
    //         window.location = window.location; // 리프레시 파이어폭스 브라우저 이슈 해결
    //         lastWidth = window.innerWidth;
    //         return false;
    //     }
    // }
    // window.addEventListener('resize', changeWinRefresh);


    //카카오 복지제도 모바일일때만 스와이퍼 구현
    var benefit = undefined;
    function initBenefit() {
        if (wiw < 641 && benefit == undefined) {
            benefit = new Swiper('.swiper-container.swipe1', {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                observer: true,
                observeParents: true,
            });
        } else if (wiw >= 640 && benefit != undefined) {
            benefit.destroy();
            benefit = undefined;
        }
    }
    
    var wiw = window.innerWidth;
    // 리사이징에 따라 반응형 잡기
    window.addEventListener('resize', () => {
        wiw = window.innerWidth; //리사이징시 변경
        initBenefit();
        
        // 2차 메뉴 열기
        $(".gnb > li > a").unbind("click").click(function () {
            $(this).next().stop(true).slideToggle(300);
            $(".gnb > li > a").not(this).next().slideUp(300);
            return false;
        });
        
    });
    initBenefit();

    // 스크롤에 따라 헤더디자인 변경
    document.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        let top = document.querySelector('.top');
        if (scroll > 100) {
            top.classList.add('on');
        } else if (scroll < 99) {
            top.classList.remove('on');
        }
    });

    // 카카오 지도 API를 이용하여 제주본사와, 판교오피스 삽입
    // 20년 2월 4일 릴리즈된 구글 크롬(Google Chrome)80버전부터 새로운 쿠키 정책이 적용 되어 Cookie의 SameSite 속성의 기본값이 "None"에서 "Lax"로 변경.
    // Cookie의 SameSite 속성은 서로 다른 도메인간의 쿠키 전송에 대한 보안을 설정해야한다.

    // let kakaomap1 = document.querySelector('#jejuMap');
    // let kakaomap2 = document.querySelector('#pangyoMap');
    // // 좌표 상수선언
    // const markerPosition1 = new kakao.maps.LatLng(33.450701, 126.570667);
    // const markerPosition2 = new kakao.maps.LatLng(37.4017201, 127.1080387);
    // // 지도선언, 좌표 중앙
    // const options1 = {
    //     center: markerPosition1,
    //     level: 4
    // };
    // const options2 = {
    //     center: markerPosition2,
    //     level: 4
    // };
    // const map1 = new kakao.maps.Map(kakaomap1, options1);
    // const map2 = new kakao.maps.Map(kakaomap2, options2);

    // // 마커삽입 및 생성
    // const marker1 = new kakao.maps.Marker({
    //     position: markerPosition1
    // });
    // const marker2 = new kakao.maps.Marker({
    //     position: markerPosition2
    // });
    // marker1.setMap(map1);
    // marker2.setMap(map2);

    // 구글맵 API를 이용하여 제주본사와 판교오피스 삽입
    let jejuMap = document.querySelector('#jejuMap');
    let pangyoMap = document.querySelector('#pangyoMap');

    function initMap() {
        // 좌표 상수선언
        const markerPosition1 = {
            lat: 33.450,
            lng: 126.570
        };
        const markerPosition2 = {
            lat: 37.401,
            lng: 127.108
        };
        // 지도선언, 좌표 중앙
        const map1 = new google.maps.Map(jejuMap, {
            zoom: 14,
            center: markerPosition1,
        });
        const map2 = new google.maps.Map(pangyoMap, {
            zoom: 14,
            center: markerPosition2,
        });
        // 마커삽입 및 생성
        const marker1 = new google.maps.Marker({
            position: markerPosition1,
            map: map1,
        });
        const marker2 = new google.maps.Marker({
            position: markerPosition2,
            map: map2,
        });
    }
    initMap();
};