// add(a,b) : 더한 결과 리턴 (함수 선언 방식)
function add(a, b) {
  return a + b;
}

console.log(add(5, 7));

// add => add2 함수 표현식으로 변경
const add2 = function (a, b) {
  return a + b;
};

console.log(add2(5, 8));

// 1~10까지 더한 결과를 리턴하는 함수 작성(함수 표현식)
const sum = function () {
  let hap = 0;
  for (let index = 0; index < 11; index++) {
    hap += index;
  }
  return hap;
};
console.log(sum());

// 3의 배수 찾기
// multiple(num) : num이 3의 배수라면 "박수" 출력 / 아닌경우 "통과"
function multiple(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
multiple(3);
multiple(7);

// multiple2(num)
// 3의 배수인 경우 박수, 9의 배수인 경우 박수x2 / 아닌 경우 "통과"

// 두 과목의 점수를 입력하면 합격 여부를 알려주는 함수
// pass(outline, law)
// 두 과목 합해서 120점 이상이면 합격 출력 / 한 과목이 40점 미만이면 불합격 출력
function pass(outline, law) {
  const j = outline + law;
  if (outline >= 40 && law >= 40 && j >= 120) console.log("합격");
  else console.log("블합격");
}
