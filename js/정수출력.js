// n개의 정수를 입력 받아 n * n 출력
// CSS 적용할 것
// 3 
// 1 2 3 
// 4 5 6
// 7 8 9

let n = prompt("정수 입력 : ");
   n = Number(n);
   for(let i = 1; i <= n * n; i++) {
        document.write("<span class=nbyn>" + i + " " + "</span>");
        if(i % n == 0) document.write("<br>");
   }