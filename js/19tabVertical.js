// 바닐라 탭(세로형) 구현

// ie에선 화살표함수 안됨
// window.onload = () => {
    let tabButtons = document.querySelectorAll('.tabButton'); // 탭버튼 선언
    console.log(tabButtons)
    // 해당 클래스명을 가지고 있는 모든 dom을 유사배열로 가져온다. 진짜 배열이 아니어서 .forEach()같은 함수를 쓸 수 없다.
    // for문은 사용가능하나(인터넷에 돌아다니는 탭 자료들은 for문으로 제작됨) 비추
    // .call()을 이용하여 .forEach()를 사용할 수 있다. Array.prototype.forEach.call()로 사용하거나,
    // 최신 Array.from(all변수).forEach()로 사용한다.
    Array.from(tabButtons).forEach((eachButton, index) => {
        eachButton.addEventListener('click', function() {
            let tabBoxs = document.querySelectorAll('.tabBox'); // 탭박스 선언
            for (var i = 0; i < tabBoxs.length; i++) {
                tabBoxs[i].classList.remove("on");
                tabButtons[i].classList.remove("on");
                // 모든 버튼과 박스에서 on제거
            }
            tabBoxs[index].classList.add("on");
            // // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
            this.classList.add("on");
        })
    });
    tabButtons[0].click();


    //ie용 es5
    // Array.prototype.forEach.call(tabButtons, function(eachButton, index) {
    //     eachButton.addEventListener('click', function() {
    //         let tabBoxs = document.querySelectorAll('.tabBox'); // 탭박스 선언
    //         for (var i = 0; i < tabBoxs.length; i++) {
    //             tabBoxs[i].classList.remove("on");
    //             tabButtons[i].classList.remove("on");
    //             // 모든 버튼과 박스에서 on제거
    //         }
    //         tabBoxs[index].classList.add("on");
    //         // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
    //         this.classList.add("on");
    //     })
    // });
// }