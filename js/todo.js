function newRegister() {
    let newItem = document.createElement("li"); // 요소 노드 추가
    let subject = document.querySelector("#subject"); // 폼의 텍스트 필드
    newItem.innerHTML = subject.value;

    let itemList = document.querySelector("#itemList"); // 웹 문서에서 부모 노드 가져오기
    itemList.appendChild(newItem, itemList.childNodes[0]); // 자식 노드 중 첫번째 노드 앞에 추가

    subject.value = "";
    let items = document.querySelectorAll("li");
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            if(this.parentNode) { 
                this.parentNode.removeChild(this); // 부모 노드에서 삭제
            }
        });       
    }
}