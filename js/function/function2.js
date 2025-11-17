// 함수 표현식

const showMsg = function () {
  console.log("안녕하세요");
};

showMsg();

const multiply = function (a, b) {
  return a * b;
};
const result = multiply(5, 3);
console.log(result);

const showDialog = function a(greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
a();
showDialog("hello", "kim");

// function() vs 함수 표현식

// 함수 선언하기 전 호출 : hoisting
console.log(multifly2(6, 8));

function multifly2(x, y) {
  return x * y;
}

// var 변수 : hoisting
console.log(z);
var z = 5;

// let, 함수표현식은 hoisting 안됨
console.log(k);
let k = 6;
