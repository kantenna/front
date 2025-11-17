// 최대값과 최소값 출력
const numArr = [52, 273, 586, 32, 57, 103, 321, 2];
const Arr = numArr.sort((a, b) => b - a);
console.log(`최대값 : ${Arr[0]}, 최소값 : ${Arr[Arr.length - 1]}`);

let max = numArr[0];
let min = numArr[0];

for (let index = 0; index < numArr.length; index++) {
  if (max < numArr[index]) max = numArr[index];
  if (min < numArr[index]) min = numArr[index];
}

// 사용자에게 한글로 행성 이름을 입력받은 후 영어로 된 행성 이름 출력
const planetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성"];
const planetEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus"];

let input = prompt("행성 입력");
document.writeln("입력한 한글 행성 이름 : ", input);
document.writeln("<br>");
document.writeln("영어행성 이름 : ", planetEng[planetKor.indexOf(input)]);
