// 수학
// 자바 : math.random() == 자바스크립트

console.log(Math.PI);
console.log(Math.floor(3.14159)); // 버림
console.log(Math.ceil(3.14159)); // 올림
console.log(Math.abs(-3)); // 절대값
console.log(Math.max(5, 6, 7, 12, 1, 3));
console.log(Math.min(5, 6, 7, 12, 1, 3));
console.log(Math.random()); // 0 <= x <1 의 x값
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 31));

// 120 ~ 150 사이의 난수
console.log(Math.floor(Math.random() * 31) + 120);

// 주사위 2개를 굴려서 눈의 합이 5가 나올 떄까지
// const dice = () => {
//   while (true) {
//     const num1 = Math.floor(Math.random() * 6) + 1;
//     const num2 = Math.floor(Math.random() * 6) + 1;
//     console.log(num1, num2);
//     if (num1 + num2 == 5) {
//       break;
//     }
//   }
// };
// dice();

// 로또 번호 6개 추출 후 배열에 담은 후 출력
// 1~45

const lottoArr = [];
while (true) {
  let num = Math.floor(Math.random() * 46) + 1;

  if (!lottoArr.includes(num)) {
    lottoArr.push(num);
  }

  if (lottoArr.length > 5) break;
}
console.log(lottoArr);
