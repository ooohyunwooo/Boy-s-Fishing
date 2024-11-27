let remainingTime = 60; // 남은 시간을 60초로 설정

function startCountdown() {
    const timeDisplay = document.getElementById("time-display");
    
    const countdown = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime -= 1; // 남은 시간을 1초씩 줄임
            timeDisplay.textContent = `남은 시간: ${remainingTime}`; // 화면에 표시
        } else {
            clearInterval(countdown); // 시간이 0이 되면 카운트다운 종료
            timeDisplay.textContent = "시간 종료"; // 시간 종료 메시지 표시
            showPopup();
        }
    }, 1000); // 1초마다 실행
}

function showPopup() { window.open("08_2_popup.html", "a", "width=400, height=300, left=100, top=50"); }

      // 페이지 로드 시 카운트다운 시작
window.onload = startCountdown;