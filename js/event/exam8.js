// tab-button 클릭시 짝꿍 tab-content 보여주기
// tab-button 찾기 + 클릭 이벤트 리스너 부착
// tab-content 찾기 + show 클래스명 이동
// classList.

// 이벤트 버블링
// li 클릭시 부모한테 전달되는 부분 이용
const parent = document.querySelector(".container");
const Contents = document.querySelectorAll(".tab-content");
const btns = document.querySelectorAll(".tab-button");

parent.addEventListener("click", (e) => {
  // 어느 tab-button 클릭이 되었는가? e.target
  btns.forEach((element) => {
    element.classList.remove("orange");
  });
  // e.target oragne 7+
  e.target.classList.add("orange");
  // 모든 tab-content show 제거
  contents.forEach((content) => {
    content.classList.remove("show");
  });
  // show 클래스명
  contents[e.target.dataset.idx].classList.add("show");
});
