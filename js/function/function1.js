// 함수(단독) == 메소드(객체 내에 포함)
// function name(params) {}
// const func = function () {};
// const func1 = () => {};

function showMsg() {
  console.log("안녕하세요");
}
showMsg();

// 파라미터, return 있는 경우
function multiply(a, b) {
  return a * b;
}
const result = multiply(5, 3);
console.log(result);

function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
}

// 3. 매개변수 기본값 : 매개변수 값이 안 넘어오는 경우 기본값 사용
function multiply(a, b = 5) {
  return a * b;
}
console.log(multiply(3));

function multiply(a, b) {
  b = b || 5;
  return a * b;
}
console.log(multiply(3));

// 4. 함수 안에 함수 작성
function a() {
  function b() {
    console.log("b function");
  }
  if (true) {
    function c() {}
  }

  b();
  c();
}
a();
