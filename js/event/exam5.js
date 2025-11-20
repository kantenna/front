document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();

  // href 값 가져오기
  console.log(e.target.href);
  // target 값 가져오기
  console.log(e.target.target);
  // data- 값 가져오기
  console.log(e.target.dataset.link);
  console.log(e.target.dataset.linkTest);

  // naver가 들어있다면 이동,
  // if (e.target.href.includes("naver")) {
  //   location.href = e.target.href;
  // } else {
  //   // 아니라면 구글로 이동
  //   location.href = "http://www.google.com";
  // }
});

// form submit 발생 시

document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();

  const form = e.target;

  // 검증
  // 내용이 잘 입력되어 있는지 확인
  // 입력안된 요소에 포커스 주고 메세지 alert 띄우기
  if (form.name.value === "") {
    form.name.focus();
    alert("이름을 입력하세요");
    return;
  } else if (form.password.value === "") {
    form.password.focus();
    alert("비밀번호를 입력하세요");
    return;
  } else if (form.age.value === "") {
    form.age.focus();
    alert("나이를 입력하세요");
    return;
  }
  // 내용이 전부 들어있다면 원래대로 submit 실행
  e.target.submit();
});
