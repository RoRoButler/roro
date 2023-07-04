// 세종시청 위도, 경도
const 위도 = '36.4799919'
const 경도 = '127.2890511'
// 구글맵 검색을 통해 나온 url에서 3d와 4d다음에 나오는 수치를 추출하면 원하는 값 도출가능

// 지도를 삽입할 위치와 지도의 기본옵션설정  
let 지도상자 = document.getElementById('map'),
    지도옵션 = { 
        center: new kakao.maps.LatLng(위도, 경도), // 위도와 경도를 지도의 중심으로 잡는다.
        level: 3 // 지도의 확대 레벨, 숫자가 작아질수록 확대된 지도
    }
// 마커 생성 및 옵션설정 
let 세종시청마커위치  = new kakao.maps.LatLng(위도, 경도)
let 세종시청마커 = new kakao.maps.Marker({
    position: 세종시청마커위치
})

// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션) 
let 세종지도 = new kakao.maps.Map(지도상자, 지도옵션) 

// 마커 지도위에 얹기
세종시청마커.setMap(세종지도)


// 마커 클릭시 인포윈도우(iw) 출력
// 인포윈도우에 표출될 내용, 위치, 버튼 설정하기, 변수 3개 선언
let iw내용 = `<div class="iw">세종시청</div>`,
    iw위치 = 세종시청마커위치,
    iw삭제여부 = true;
    // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// .InfoWindow() 인포윈도우 생성하고 지도에 표시합니다
let 정보창 = new kakao.maps.InfoWindow({
    // map: 세종지도,
    // position : iw위치, 
    content : iw내용,
    removable : iw삭제여부
});

// 대상.addEventListener('이벤트', 콜백함수) // 대상에 이벤트걸기
// kakao.maps.event.addListener('대상', '이벤트', 콜백함수) // 카카오 맵 전체에 이벤트 걸기

// 정보창 설정부분에서 map과 position부분을 생성할때 표시하지 않고, 클릭 이벤트가 일어날때 표시하게끔 선언하기
kakao.maps.event.addListener(세종시청마커, 'click', function(){
    정보창.open(세종지도, 세종시청마커)
    
})