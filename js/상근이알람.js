// 시간 정보 (시간과 분)를 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력 하기 `${}`
// parseInt()함수 필요 : 결과값을 정수로 변환
// 1. 



let hour = prompt("시간을 입력 :" ,"시간을 입력해보쇼 거");
let min = prompt("분을 입력 :" ,"분을 입력해보쇼 거");

hour = parseInt(hour);
min = parseInt(min);
cal = (hour * 60) + min;

// document.write(cal);
console.log(cal);

if(cal < 45)  cal = (24 * 60) + min;


cal -= 45;

console.log(cal);

hour = Math.floor(cal / 60);
min = cal % 60;

document.write(`${hour}시 ${min}분 `);