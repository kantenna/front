// h1 태그 요소 삭제
const h1 = document.querySelector("h1");
// h1.remove();

// h1 글자 클릭 시 제거
// e.target : 이벤트 대상 가져오기
// h1.addEventListener("click", (e) => h1.remove());
// h1.addEventListener("mouseover", (e) => e.target.remove());

// 버튼 클릭시 제거
// document.querySelector("button").addEventListener("click", (e) => h1.remove());

// h1 요소의 class 제거(button 클릭)
// 1) removeAttribute("제거할 속성명") : 모든 속성용
// 2) classList.remove() : class 전용

// h1.removeAttribute("class");
console.log(h1.classList);
console.log(h1.classList[0]);
console.log(h1.classList[1]);
h1.classList.remove("two");

// img 요소 찾기
const img = document.querySelector("img");
// img alt 속성값 제거
img.removeAttribute("alt");
