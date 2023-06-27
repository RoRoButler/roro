// 10kakaoNew

var swiperC = new Swiper(".card", {
	slidesPerView: 1.5,
	spaceBetween: 30,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// 크루혜택 탭구조
let tabButtons = document.querySelectorAll('.tabButton > button'); // 탭버튼
Array.from(tabButtons).forEach((eachButton, index) => {
	eachButton.addEventListener('click', function () {
		let tabBoxs = document.querySelectorAll('.benefit'); // 탭박스
		for (var i = 0; i < tabBoxs.length; i++) {
			tabBoxs[i].classList.remove("on");
			tabButtons[i].classList.remove("on");
			// 모든 버튼과 박스에서 on제거
		}
		tabBoxs[index].classList.add("on");
		// 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
		this.classList.add("on");
	});
});
tabButtons[0].click(); // 첫번째 탭 켜기


//오피스 클릭시 주소 복사
let copyAddres = document.querySelectorAll('.office > p');
Array.from(copyAddres).forEach((p) => {
	p.addEventListener('click', function () {
		let addres = this.textContent;
		window.navigator.clipboard.writeText(addres).then(() => {
			// 복사가 완료되면 이 부분이 호출된다.
			console.log(addres);
		});

	});
});