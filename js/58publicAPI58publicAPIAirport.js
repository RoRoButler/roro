//한국공항공사_항공기 운항정보
// cors 이슈가 해결 안된 API들이 있음, 우회하는 프록시 서버를 거쳐야 함
// raravelVisit Website님이 만드신 서비스, axios 라이브러리 설치가 필요
// const publicAPIurl1 = `http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList?serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D&&numOfRows=30`;



// axios({
//     url: 'https://cors-proxy.org/api/',
//     method: 'get',
//     headers: {
//         'cors-proxy-url':  publicAPIurl1 // 이 부분을 이용하는 서버 URL로 변경
//     },
// }).then((response) => {
//     let content = response.data.data.response.body.items
    
//     console.log(content);
//     // console.log(content.item[1].cityKor);
//     let cityKor = content.item[1].cityKor
//     console.log(cityKor);
// })




// 한국공항공사_국제선 항공기스케줄
// https://api.odcloud.kr/api/15003087/v1/uddi:89fab983-66d8-40ad-901a-d535f8699d29?page=1&perPage=10&serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D
const publicAPIurl2= `https://api.odcloud.kr/api/15003087/v1/uddi:89fab983-66d8-40ad-901a-d535f8699d29?page=1&perPage=10&serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D`;

fetch(publicAPIurl2)
.then((response) => response.json() )
.then(function (data) {
    console.log(data.data[0])
})