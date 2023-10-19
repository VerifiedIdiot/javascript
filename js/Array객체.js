// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메서드가 정의 되어 있음

const arr = [10, 20, 30, 40, 50, 60];

// 배열의 요소를 자동순회하는 비파괴 메서드

arr.forEach(e => {
    console.log(e*e);
})

//toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의문자열로 반환

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// join() : 배열안의 모든 문자를 지정한 문자를 이용해서 연결

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * "); // Banana * Orange * Apple * Mango

// pop() : 스택 자료 구조의 특성, 배열의 맨마지막 데이터를 제거하고 결과를 반환

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits3.pop(); // x = "Mango"

//push() : 스택 자료 구조의 특성, 배열의 맨마지막에 데이터 추가

fruits3.push("kiwi");
console.log(fruits.toString());
fruits3.shift(); //배열에서 첫 번째 요소를 제거하고, 첫 번째 요소를 반환
fruits3.unshift(); // 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환