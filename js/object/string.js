const { use } = require("react");

// const msg = new String("hello javascript");
const msg = "hello javascript";

// console.log("특정 문자 위치 반환 ", msg.charAt(4));
// console.log("특정 문자 위치 찾기 ", msg.indexOf("j"));
// console.log("찾을 문자 ", msg.match("ja"));
// console.log("찾을 문자 ", msg.match("boy"));
// console.log("특정 문자 변경 ", msg.replace("hello", "hi"));
// console.log("특정 문자 찾기(위치) ", msg.search("ja"));
// console.log("문자 자르기 ", msg.slice(6, 10));
// console.log("문자 자르기 ", msg.substring(6, 10));
// console.log("문자 공백 제거 ", "     hello    ".trim());
// console.log("대문자 변경 ", msg.toUpperCase());
// console.log("소문자 변경 ", "ABCDEFG".toLowerCase());

// 함수 작성
// 사용자로부터 영문이름 소문자로 받음, 전화번호 입력(000-0000-0000)
// 이름은 대문자로 출력, 전화번호는 010-1234-1234 => 010-####-1234

// function info() {
//   const userName = prompt("이름을 입력");
//   const useTel = prompt("전화번호를 입력");

//   document.writeln("이름 :", userName.toUpperCase());
//   document.writeln("<br>");
//   document.writeln("전화번호 : ", useTel.replace(useTel.substring(4, 8), "####"));
// }

// info();

// 이메일 입력받기
// 이메일 형식이 맞는지 확인 : @
// 없는 경우 : alert(입력값 확인)
// 있는 경우 : 이메일 출력

const email = () => {
  const userEmail = prompt("이메일을 입력");
  //   userEmail.includes("@")
  if (userEmail.indexOf("@") == -1) {
    alert("입력값 확인");
    info();
  } else {
    document.writeln("이메일 주소 : ", userEmail);
  }
};

email();
