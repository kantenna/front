// 테이블 요소 찾기
const table = document.querySelector("table");
console.log(table);

// 일반 버튼 : 버튼 모양제공
// submit 버튼 : 폼 안 내용 전송(action이 가리키는 것으로)
// action 값이 없다면 : 현재 브라우저 주소 그대로 사용
// method : 기본값 get
// submit 중지

// reset 버튼 : 폼 안 내용 clear

// 폼 안의 버튼이 submut 이라면 form의 subfmit 이벤트 감지하도록한다.
const form = document.querySelector("form");
console.log(form);
// 폼 안의 요소 찾기
// 1) form.querySelector("");
// 2) 이름 form.name 값

// Search 버튼 클릭 시 검색어 가져오기
form.addEventListener("submit", (e) => {
  // 이벤트 중지 => submit 기능 중지
  e.preventDefault();
  const search = form.search;
  console.log(search.value);
});

// Link li 찾기
const li = document.querySelector(".navbar-nav li:nth-child(2)");
console.log(li);
// text 출력
console.log(li.textContent);
