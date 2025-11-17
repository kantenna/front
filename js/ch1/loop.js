// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// array.forEach(element => {

// });

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];

// }

// while (condition) {

// }

// 1 ~ 10 출력
// for (let index = 1; index < 11; index++) {
//   console.log(index);
// }

// let index = 1;
// while (index < 11) {
//   console.log(index);
//   index++;
// }

// index = 1;
// do {
//   console.log(index);
//   index++;
// } while (index < 11);

// 객체 출력
// key:value
const myCar = { make: "BMW", model: "X5", year: 2013 };
console.log(myCar);
console.log("제조 연도 : ", myCar["year"]);
console.log("모델 : ", myCar.model);

for (const key in myCar) {
  //   console.log(myCar[key]);
  console.log(`${key}: ${myCar[key]}`);
}

// 1~100 출력 증가 +2
// 슷자가 48이 되면 반복문 중지
for (let index = 0; index < 100; index += 2) {
  if (index == 50) break;
  console.log(index);
}
