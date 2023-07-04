// 청주에 있는 스타벅스매장 마커로 표시하기

// 이지디자인컴퓨터학원 기준
const 학원위도 = 36.634997;
const 학원경도 = 127.4577953;

let 지도상자 = document.getElementById('map'), // 지도를 표시할 div 
    지도옵션 = {
        center: new kakao.maps.LatLng(학원위도, 학원경도), // 지도의 중심좌표 - 이지스퍼블리싱
        level: 6 // 지도의 확대 레벨
    };
// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션)
let 기준지도 = new kakao.maps.Map(지도상자, 지도옵션);

// 각 매장 정보를 객체로 정리
var 스타벅스매장리스트 = [
    {
        이름: `스타벅스 충북대점`,
        위치: new kakao.maps.LatLng(36.6340038,127.4597014 )
    },
    {
        이름: `스타벅스 청주봉명DT점`,
        위치: new kakao.maps.LatLng(36.6467291,127.4646927 )
    },
    {
        이름: `스타벅스 청주사직DT점`,
        위치: new kakao.maps.LatLng(36.6359282,127.4811478 )
    },
    {
        이름: `스타벅스 청주성화점`,
        위치: new kakao.maps.LatLng(36.6176114,127.4460855 )
    },
    {
        이름: `스타벅스 청주터미널점`,
        위치: new kakao.maps.LatLng(36.6263053,127.4323169 )
    },
    {
        이름: `스타벅스 청주지웰시티점`,
        위치: new kakao.maps.LatLng(36.6416187,127.4281864 )
    },
];

for (매장 of 스타벅스매장리스트) {
    // 마커를 생성합니다
    let 마커 = new kakao.maps.Marker({    
        map: 기준지도,
        position: 매장.위치
    });

    // 인포윈도우에 표시할 내용
    let 정보창 = new kakao.maps.InfoWindow({
        content: `<div class="iw">${매장.이름}</div>`
    });

    // 마커에 이벤트를 등록
    // 마커에 마우스오버하면 makeOverListener() 실행
    kakao.maps.event.addListener(마커, 'mouseover', makeOverListener(기준지도, 마커, 정보창));
    // 마커에서 마우스아웃하면 makeOutListener() 실행
    kakao.maps.event.addListener(마커, 'mouseout', makeOutListener(정보창));
}

// 클로저: 함수의 리턴값이 익명함수인경우, 함수참조값을 익명함수가 땡겨쓰려할 때 사용한다.
// 이벤트 리스너로는 클로저를 만들어 등록, 클로저를 만들어 주지 않으면 마지막 마커에만 등록됨.

// 정보창을 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(기준지도, 마커, 정보창) {
    return function () {
        정보창.open(기준지도, 마커);
    };
}
// 정보창을 닫는 클로저를 만드는 함수입니다 
function makeOutListener(정보창) {
    return function () {
        정보창.close();
    };
}