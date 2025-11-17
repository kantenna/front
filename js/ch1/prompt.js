// 함수
// alert("사용자에게 메세지 전달");

// 입력
// let input = prompt("숫자 입력", 100);
// console.log("사용자 입력값 ", input);

// let isBoss = confirm("당신이 주인입니까?");
// console.log(isBoss ? "주인" : "주인아님");

// 게임의사 물어보기
// if (confirm("게임 한 판 하실래요?")) {
//   document.writeln("좋습니다. 게임 한 판 하시죠");
// } else {
//   document.writeln("나중에 한 판 하시죠");
// }

// 사용자에게 숫자를 입력받아 양수, 음수, 0인지 판별
// prompt()
// let input = prompt("숫자 입력");
// if (Number(input) > 0) {
//   document.writeln("양수");
// } else if (Number(input) < 0) {
//   document.writeln("음수");
// } else if (Number(input) == 0) {
//   document.writeln("0");
// } else if (isNaN(input)) {
//   document.writeln("숫자가 아님");
// }

// 숫자를 입력받아 짝, 홀 구분
// let input = Number(prompt("숫자 입력"));
// if (input % 2 == 0) {
//   document.writeln("짝수");
// } else if (input % 2 == 1) {
//   document.writeln("홀수");
// } else {
//   document.writeln("숫자를 확인해주세요");
// }

// 숫자 3개를 입력받아 평균이 90이상이면 A, 80 B, 70 C, 60 D, 나머지 F
let input1 = Number(prompt("숫자1 입력"));
let input2 = Number(prompt("숫자2 입력"));
let input3 = Number(prompt("숫자3 입력"));
let avg = (input1 + input2 + input3) / 3;
// if (avg >= 90) {
//   document.writeln("A");
// } else if (avg >= 80) {
//   document.writeln("B");
// } else if (avg >= 70) {
//   document.writeln("C");
// } else if (avg >= 60) {
//   document.writeln("D");
// } else {
//   document.writeln("F");
// }

switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    document.writeln("A");
    break;
  case 8:
    document.writeln("B");
    break;
  case 7:
    document.writeln("C");
    break;
  case 6:
    document.writeln("D");
    break;
  default:
    document.writeln("F");
    break;
}
