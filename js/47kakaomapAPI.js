// 카카오 지도 API
// 카카오 제주 본사와 판교오피스 삽입
let kakaomap1 = document.querySelector('#jejuMap');
let kakaomap2 = document.querySelector('#pangyoMap');
// 좌표 상수선언
const markerPosition1 = new kakao.maps.LatLng(33.450701, 126.570667);
const markerPosition2 = new kakao.maps.LatLng(37.4017201, 127.1080387);
let options1 = {
    center: markerPosition1,
    level: 4
};
let options2 = {
    center: markerPosition2,
    level: 4
};
let map1 = new kakao.maps.Map(kakaomap1, options1);
let map2 = new kakao.maps.Map(kakaomap2, options2);

// 마커삽입 및 생성
let marker1 = new kakao.maps.Marker({
    position: markerPosition1
});
let marker2 = new kakao.maps.Marker({
    position: markerPosition2
});
marker1.setMap(map1);
marker2.setMap(map2);


// 청주시 백신예방접종센터 삽입
let vaccine = document.querySelector('#covid19Vaccine');

// 좌표 상수선언
// const markerVaccine1 = new kakao.maps.LatLng(36.6393602, 127.4726622); // 서원구
// const markerVaccine2 = new kakao.maps.LatLng(36.66971585876511, 127.47278317177735); // 흥덕구
// const markerVaccine3 = new kakao.maps.LatLng(36.68122350000001, 127.50797179999998); // 청원구
// const markerVaccine4 = new kakao.maps.LatLng(36.58985477731903, 127.50661475211864); // 청주시
// 좌표 배열로 변환
const markerVaccine = [
    new kakao.maps.LatLng(36.6393602, 127.4726622), // 서원구
    new kakao.maps.LatLng(36.66971585876511, 127.47278317177735), // 흥덕구
    new kakao.maps.LatLng(36.68122350000001, 127.50797179999998), // 청원구
    new kakao.maps.LatLng(36.58985477731903, 127.50661475211864) // 청주시
];

// 지도생성
let options3 = {
    center: markerVaccine[0],
    level: 8
};
let map3 = new kakao.maps.Map(vaccine, options3);

// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
let Vaccinebounds = new kakao.maps.LatLngBounds();
for (var i = 0; i < markerVaccine.length; i++) {
    let marker; 
    marker = new kakao.maps.Marker({ position : markerVaccine[i] });
    marker.setMap(map3);
    
    // LatLngBounds 객체에 좌표를 추가합니다
    Vaccinebounds.extend(markerVaccine[i]);
}

function setBounds() {
    const roadmap = document.querySelector('.sec02 .roadmap');
    roadmap.classList.toggle('on');
    map3.relayout();
    // 클릭이벤트 후에 지도를 다시 잡히게 하기
    map3.setBounds(Vaccinebounds);
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정
}