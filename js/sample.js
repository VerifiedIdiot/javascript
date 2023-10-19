const head = document.querySelector("#head-line");
        let isRed = false;  // 초기값 설정
        head.onclick = function() {
            if(!isRed) {
                head.style.color = "red";  // 변수 이름 수정
            } else {
                head.style.color = "blue";  // 변수 이름 수정
            }
            isRed = !isRed;
        }