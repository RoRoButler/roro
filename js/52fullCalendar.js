// 한달 row형 달력 커스터마이징
window.onload = () => {
    let calendarRow = document.querySelector('#calendarRow');
    let calmodal = $("#calendarModal");
    let modalTitle = $('#modalTitle');
    let modalCon = $('#modalBody');
    modalCon.prepend('<img><span></span><span></span>');
    let modalPoster = $('#modalBody img');
    let modalContent1 = $('#modalBody span').eq(0);
    let modalContent2 = $('#modalBody span').eq(1);
    let ebackgroundColor = 'rgba(255,255,255,0.5)';
    let eborderColor = 'rgba(0,0,0,0.05)';
    let calendar = new FullCalendar.Calendar(calendarRow, {
        // 이벤트 json 입력방식
        events: '/js/52fullCalendarEvent.json',
        // 이벤트 개별입력방식
        // events: [{
        //         title: '공연제목1',
        //         // 종일설정시
        //         start: '2022-06-13',
        //         end: '2022-06-17',
        //         // 시간설정시
        //         // start: '2022-06-13T00:00:00',
        //         // end: '2022-06-17T00:00:00',
        //         startStr: this.start,
        //         endStr: this.end,
        //         extendedProps: {
        //             // 비지정 옵션 선언법
        //             posterUrl: '/images/apple.png',
        //             posterAlt: this.title + '포스터',
        //             description: '공연1내용 블라블라'
        //         },
        //         allDay: true
        //     },
        //     {
        //         title: '공연제목2',
        //         start: '2022-06-19',
        //         end: '2022-06-21',
        //         extendedProps: {
        //             // 비지정 옵션 선언법
        //             posterUrl: '/images/apple.png',
        //             posterAlt: this.title + '포스터',
        //             description: '공연2내용 블라블라'
        //         },
        //         allDay: true
        //     },
        // ],
        eventClick: function(target) {
            // 이벤트 클릭시 부트스트랩모달출력
            let extend = target.event.extendedProps; // 비지정 옵션 변수선언
            let posterurl = Object.values(extend)[0]; // 포스터
            let posteralt = Object.values(extend)[1]; // 포스터 대체텍스트
            let posterdes = Object.values(extend)[2]; // 공연설명
            modalTitle.text(`${target.event.title}`); // 공연제목
            // modalCon.prepend(`<img src="${posterurl}" alt="${posteralt}">`);
            modalPoster.attr('src', `${posterurl}`);
            modalPoster.attr('alt', `${posteralt}`);
            modalContent1.text(`${target.event.startStr} ~ ${target.event.endStr}`); // 공연기간
            modalContent2.text(`${posterdes}`); // 공연설명
            calmodal.modal('show');
        },
        eventColor: ebackgroundColor,
        eventBorderColor: eborderColor,
        locale: 'ko',
        contentHeight: 180,
        initialView: 'timeGridFourDay',
        headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'viewGridButton,viewRowButton' // custom 버튼 호출
            // end: 'dayGridMonth,timeGridFourDay' // 기본형 버튼 호출
        },
        customButtons: {
            viewGridButton: {
                text: 'Grid',
                click: viewGrid
            },
            viewRowButton: {
                text: 'Row',
                click: viewRow
            },
        },
        views: {
            timeGridFourDay: {
                type: 'timeGrid',
                dayCount: 30,
                buttonText: 'Row',
                dayHeaderFormat: {
                    day: '2-digit'
                },
                dateAlignment: 'month',
                allDayContent: '일정',
                scrollTime: '09:00:00',
            }
        },
        navLinks: true,
        themeSystem: 'Darkly', // bootswatch themes
    });
    calendar.render();
    window.addEventListener('resize', () => {
        let iw = window.innerWidth;
        if (iw < 961) {
            viewGrid()
        } else {
            viewRow()
        }
    })

    function viewGrid() {
        calendar.changeView('dayGridMonth');
        calendar.setOption('contentHeight', 'auto');
        calendarRow.style.height = 'unset';
        calendarRow.style.overflow = 'visible';
    }
    function viewRow() {
        calendar.changeView('timeGridFourDay');
        calendarRow.style.height = '169px';
        calendarRow.style.overflow = 'hidden';
    }
}