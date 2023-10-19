// 3개의 수에서 제일 큰수, 제일 작은 수 찾기
// 입력은 prompt() 
// prompt()로 입력 받은 값은 문자열로 반환 되므로 Number()로 형변환 필요
// 화면 출력은 document.write()를 사용하면 되고 , 출력문 내부에 html 사용 가능

let a,b,c,input;
let min,max;
input = prompt("첫번째 수");
a = input;
input = prompt("두번째 수");
b - input;
input = prompt("세번째 수");
c = input;

    if(a > b) {
        if(a > c) max = a;
        else max = c;
        } else {
        if(b > c) max = b;
        else max = c;
    }

    if(a > b) {
        if(b > c) min = c;
        else min = b;
        } else {
        if(a > c) min = c;
        else min = a;
    }

document.write("큰값은" + max);
document.write("작값은" + min);    

