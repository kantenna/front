export {};

// add 함수 정의 : 2개의 숫자 타입 전달인자, 덧셈 결과 출력

// function add(num1: number, num2: number):void {
//   console.log(num1 + num2);
// }

const add = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

add(5, 6);

// add2 정의 : 리턴값 num1 + num2
const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add2(5, 6));

// age 값을 받아서 19보다 크면 true
const isAdult = (age: number): boolean => {
  return age > 19;
};
console.log(isAdult(18));
console.log(isAdult(20));

// name(없을 수도 있음) => Hello or Guest

const hello = (name?: string): void => {
  console.log(`Hello ${name || "Guest"}`);
};

hello("홍길동");
hello();

const hello2 = (name = "Guest"): void => {
  console.log(`Hello ${name}`);
};

hello2("홍길동");
hello2();

// 선택적 매개변수가 필수 매개변수보다 앞에 올 수 없음
// const hello3 = (name?: string, age: number): void => {
//   console.log(`Hello ${name || "Guest"}`);
// };

const hello3 = (name: string | undefined, age: number): void => {
  console.log(`Hello ${name}, age ${age}`);
};
hello3(undefined, 15);
hello3("Tom", 25);

// 나머지 매개변수 : ... => 배열 형태로 전달
// 매개변수의 개수가 정해져 있지 않을 때 유용
const sum = (...nums: number[]): number => {
  let total = 0;
  nums.forEach((i) => {
    total += i;
  });
  return total;
};

let total = sum(1, 2, 3);
console.log(total);
total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(total);

interface User {
  name: string;
  age: number;
}

const join = (name: string, age: number | string): User | string => {
  if (typeof age == "number") {
    return { name, age };
  } else {
    return "나이는 숫자로 입력해 주세요";
  }
};

const sam = join("Sam", 30);
const jane = join("Jane", "30");
console.log(sam, jane);

// 변수 선언
let userName = "Bob";
// userName = 3;
let userName2: string | number = "Jane";
userName2 = 45;

// type & interface
type Job = "developer" | "designer" | "manager";

interface Person {
  name: string;
  job: Job;
}

// person
let person: Person = {
  name: "Jane",
  job: "developer",
};
console.log(person);

// |: UNION, &: 교차타입
// || : 기본값

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}

let student: HighSchoolStudent = {
  name: "홍",
  grade: 2,
};

interface Developer {
  name: string;
  skills: string[];
}

interface Manager {
  name: string;
  age: number;
  manage(): void;
}

let person2: Developer;
let person3: Manager;
let person4: Developer & Manager;
person4 = {
  name: "Eve",
  skills: ["javascript", "java", "typescript"],
  age: 35,
  manage() {
    console.log("Managing team");
  },
};
