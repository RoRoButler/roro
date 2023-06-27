// 공공데이터포털 금융위원회 주식시세정보

// 실시간8자리날짜구하기
function getToday() {
    let date = new Date();
    let year = date.getFullYear();
    let month = ('0' + (1 + date.getMonth())).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let onedaybefore = day - 1; // 하루전

    let today = year + month + day; // 8자리조합 오늘
    let yesterday = year + month + onedaybefore; // 8자리 조합 하루전
    let yesterdayKO = `${year}년 ${month}월 ${onedaybefore}일 기준`; // 8자리 조합 하이픈

    return [today, yesterday, yesterdayKO]; // 리턴값이 다수가 필요하면 배열로 반환
}
let [today, yesterday, yesterdayKO] = getToday(); // 분할 대입 이용
// console.log(today);
// console.log(yesterday);
// console.log(yesterdayKO);
yDay.innerText = yesterdayKO; // 기준일

// 세자리 콤마
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// 금액 단위에 한글 집어넣기
function numberWithKorean(num) {
    let result = '';
    for (i = 0; i < num.length; i++) {
        arr = [num.charAt(num.length - (i + 1))]; // for구문을 통해 반복하여 역순으로 배열채우기
        str = '';
        if (arr != '') str += arr;
        if (i == 8) str += '억 ';
        if (i == 11) str += ',';
        if (i == 12) str += '조 ';
        result = str + result;
    }
    if (num != 0) {
        let clip = result.lastIndexOf('억');
        result = result.substring(0, clip + 1) + '원'; // 억단위에서 절삭

        let zeroComma = result.search(/0,/gi); // 천억단위에서 0값 및 콤마찾기, 있으면 index 반환
        if (zeroComma > 0) result = result.replace('0,', '');
    }
    return result;
}

// 탭버튼 클릭시 주식 조회하기
$('.tab ul li').click(function () {
    loading.style.display = 'flex'; // 로딩중 보이기
    $(this).addClass('on').siblings().removeClass('on');
    let codeStock = $(this).data('id'); // 주식코드

    const serviceKey = 'gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D'; // API인증키
    // 개인계정의 인증키로 활성화된 API입력
    const publicAPIurl = `https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?numOfRows=3&resultType=json&likeSrtnCd=${codeStock}&serviceKey=${serviceKey}`;
    $.getJSON(publicAPIurl, function (result) {
        loading.style.display = 'none'; // 로딩중 감추기
        let yesterStock = result.response.body.items.item[0]; // 전날 주식정보

        itmsNm.innerText = yesterStock.itmsNm; // 종목명
        srtnCd.innerText = yesterStock.srtnCd; // 종목코드 6자리
        mrktCtg.innerText = yesterStock.mrktCtg; // 시장구분
        basDt.innerText = yesterdayKO; // 기준일
        clpr.innerText = `${numberWithCommas(yesterStock.clpr)}원`; // 전날 종가
        mrktTotAmt.innerText = numberWithKorean(yesterStock.mrktTotAmt); // 전날 시가총액
        yesterStock.vs = Number(yesterStock.vs); // 등락금액 숫자변환
        yesterStock.fltRt = Number(yesterStock.fltRt); // 등락비율 숫자변환
        // 등락금액
        if (yesterStock.vs > 0) {
            //상승
            vs.innerText = yesterStock.vs;
            vs.classList.remove('down');
            vs.classList.add('up');
        } else {
            //하락
            vs.innerText = yesterStock.vs;
            vs.classList.remove('up');
            vs.classList.add('down');
        }
        // 등락비율
        if (yesterStock.fltRt > 0) {
            //상승
            fltRt.innerText = yesterStock.fltRt + '%';
            fltRt.classList.remove('down');
            fltRt.classList.add('up');
        } else {
            //하락
            fltRt.innerText = yesterStock.fltRt + '%';
            fltRt.classList.remove('up');
            fltRt.classList.add('down');
        }
    });
}).eq(0).trigger('click');

// $('#closeBt').click(function () {
//     $('#pop').hide();
// });