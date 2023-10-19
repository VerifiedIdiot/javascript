// 1. 성적을 입력 받아 학점 출력하기
//  - 0 ~ 100 점 사이가 아니면 입력 오류 출력
//  - 90 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리

let input = Number(prompt("입력해", "ㅋㅋ"));
input = parseInt(input);
let span = document.createElement('span');

if (input > 100 || input < 0) {
    // 잘못된 값의 처리
} else if (input >= 90) {
    span.textContent = "A";
    span.classList.add('fail-text');
    document.body.appendChild(span);
} else if (input >= 80) {
    span.textContent = "B";
    span.classList.add('fail-text');
    document.body.appendChild(span);
} else if (input >= 70) {
    span.textContent = "C";
    span.classList.add('fail-text');
    document.body.appendChild(span);
} else if (input >= 60) {
    span.textContent = "D";
    span.classList.add('fail-text');
    document.body.appendChild(span);
} else {
    
    
    span.textContent = "죽어그냥";
    span.classList.add('fail-text');
    document.body.appendChild(span);
}
