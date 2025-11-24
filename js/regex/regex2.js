const regEx = /d(b+)d/g;
const origin = "cdbbdbsdz";

// 정규식 객체 메서드 이용
console.log(regEx.exec(origin));
// 문자열 메서드 이용
console.log(origin.match(regEx));

// 캡쳐링 : 패턴이 적용된 결과값을 가리키는데 사용 / 패넡을 여러번 적용하는데 사용
// 비캡쳐링 : (?:ko)+
const regEx1 = /(ko)+/;
const origin1 = "kokokokoko";

console.log("캡쳐링");
console.log(origin1.match(regEx1));

console.log("비캡쳐링");
console.log(origin1.match(/(?:ko)+/));

const name = "John Smith";
const regEx2 = /(\w+)\s(\w+)/;
console.log(name.match(regEx2));
const newName = name.replace(regEx2, "$2, $1");
console.log(newName);

// 폼이 전송 시 submit 기능 중지
document.querySelector("form").addEventListener("sunmit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  // 이름 입력값 확인 : 한글, 2~5자 허용
  const regName = /^[가-힣]{2,5}$/;
  const tel = form.tel.value;
  // 전화번호 입력값 확인 : 000-1234-5678
  const regTel = /^\d{3}-\d{4}-\d{4}&/;

  if (!regName.test(name)) {
    alert("이름을 확인해주세요(한글, 2~5자리 이내여야 합니다)");
    form.name.fucus();
    return;
  } else if (!regTel.test(tel)) {
    alert("전화번호를 확인해주세요(000-1234-5678 형식)");
    form.tel.focus();
  }
});
