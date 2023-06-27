//-----------------------------Tab과 Swiper(터치적용캐러셀)조합
//같은 옵션값을 선언하는 경우 swiper 객체생성자 함수 1회 선언후 사용
//옵션 일부가 1개라도 다르면 따로 선언하는것이 관리하기 쉬움
new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper1 .swiper-button-next',
        prevEl: '.swiper1 .swiper-button-prev',
    },
});
let tabSwiper01 = new Swiper('.swiper3', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.swiper3 .swiper-button-next',
        prevEl: '.swiper3 .swiper-button-prev',
    },
    loop: true,
    loopFillGroupWithBlank: false,
    keyboard:true,
    observer: true,
    observeParents: true,
    //탭안의 스와이퍼 갱신, ie11부터 가능,
});
function ieSwiper() {
    // ie10이하, 함수로 만들어 콜링하기
    new Swiper('.ie10 .swiper3', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper3 .swiper-button-next',
            prevEl: '.swiper3 .swiper-button-prev',
        },
        loop: true,
    });
}
let tabSwiper02 = new Swiper('.swiper4', {
    slidesPerView: 2,
    // 루프랑 같이 사용할 때 숨겨져 있는 화면이 현재 보고자하는 장수 셋트를 온전히 넘어야 함, 총 장수가 4장인데 2장씩 보는거 가능, 3장씩 보는건 duplicate가 동작하지 않음.
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    keyboard:true,
    navigation: {
        nextEl: '.swiper4 .swiper-button-next',
        prevEl: '.swiper4 .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    //탭 안의 스와이퍼 갱신
});

new Swiper('.swiper5', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper5 .swiper-button-next',
        prevEl: '.swiper5 .swiper-button-prev',
    },
});
new Swiper('.swiper6', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next.btn',
        prevEl: '.swiper-button-prev.btp',
    },
});


// input탭 설정과 Swiper 강제갱신
let tabInputs = document.querySelectorAll('.tabInput');

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.value;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });

});

// id=data-id 스타일의 탭에서 스와이퍼 갱신
$(document).ready(function() {
    $(".tab ul li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        // $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
        // 강제갱신하는 실행문 이었으나, L.39에서 옵션이 추가되면서 사용하지 않아도 됨.
        //ie에서는 swiper의 버전을 4.x로 내리고, 함수로 선언하여 콜링하는 방식을 사용한다.(update라는 메서드를 ie는 모른다)
    });
});