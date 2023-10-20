const candidate = Number(prompt("응모자 수를 입력해 주세요." , ""));

const chosen = Math.floor(Math.random() * candidate + 1);


console.log(chosen);
document.write(`${candidate}명이 지원.<br>`);

document.write(`${chosen}명이 당첨되었다.`);