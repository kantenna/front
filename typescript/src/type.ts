export {};

// javascript type : number, string, boolean, [], undefined, null
// let car = "BMW"; // string 유추
let car: string = "BMW"; // string 명시
// car = 3;

let age: number = 30;
// age = "45"
// age = true;

let isAdult: boolean;
isAdult = true;
// isAdult = "true";

let n: null = null;
// n = undefined;

let u: undefined;
u = undefined;
// u = "123";

let fruits: string[] = ["apple", "banana", "cherry"];
// fruits = "melon";
let fruits2: Array<string> = ["apple", "banana", "cherry"];

// fruits.push(1)

let score1: number[] = [90, 85, 88];
let score2: Array<number> = [90, 85, 88];

// string + number
let mixed: (string | number)[] = ["apple", 45, "banana", 46];

// 읽기 전용 배열
const vegetables: readonly string[] = ["carrot", "broccoli", "spinach"];
// vegetables.push()

const newArray = [...vegetables, "potato"];
console.log(newArray);

// typescript 제공 type : tuple, any, unknown, void, never, enum
// tuple : 순서, 길이 고정
let person: [string, number];
// person = [25, "Alice"];
person = ["Alice", 25];
console.log(person[0].toLowerCase());
// console.log(person[1].toLowerCase);

function getUserInfo(): [string, number, boolean] {
  // 이름, 나이, 성인여부 리턴
  return ["Bob", 30, true];
}

// console.log(getUserInfo());
const [name1, age1, adult] = getUserInfo();
console.log(`name : ${name1}, age : ${age1}, isAdult : ${adult}`);

console.log("배열과 튜플의 비교");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const; // read-only

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push(4);
console.log(inferredArray);

// inferredTuple[0] = 2;
const explicitTuple: [number, string] = [1, "two"];
explicitTuple[0] = 2;
explicitTuple[1] = "three";
console.log(explicitTuple);

// any == 기존 자바스크립트 변수 선언 개념과 동일(typescript에서는 잘 사용 안함)
let num; // 추론할 수 없음
num = 95;
num = "Five";

let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

// unknown : 모르는 것에 대해선 일단 금지 / type check 후 안전하게 사용
let unknownValue: unknown = 10;
unknownValue = "Hello";
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("문자길이 ", strLength);
}

if (typeof unknownValue === "string") {
  console.log(unknownValue.toLowerCase());
}
unknownValue = false;

// as : 타입단언 or <타입>변수명
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;

// void : 반환값에 사용
function logMsg(message: string): void {
  console.log(`${message}`);
}

logMsg("log messages");

// 전달인자가 string or null, 반환값 없음
function printLength(text: string | null): void {
  // text? : text는 null 일 수 있음
  //   console.log(`text length ${text?.length}`);

  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`text length ${text.length}`);
}

printLength("Hello! Typescript");
printLength(null);

// never : 에러를 반환하거나 무한 루프 함수의 타입으로 사용
function error(message: string): never {
  throw new Error(message);
}
// error("이것은 에러입니다.");
let doc: string = "문서"; // Unreachable code detected.
// let neverValue: never = 10;

let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
    console.log("srting value : " + x);
  } else if (typeof x === "number") {
    console.log("number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("boolean value : " + x);
  } else if (typeof x === "object") {
    console.log("object value : " + x);
  } else {
    const Unreachable: never = x;
    throw new Error("Ungandled type : " + Unreachable);
  }
}
handleValue("hello");
handleValue(12);
handleValue(true);

// enum == 상수 모임
enum Color {
  Red,
  Blue,
  Green,
}

console.log(Color.Blue); // 1
console.log(Color["Blue"]); // 1

let myColor: Color;
myColor = Color.Green;
// myColor = "Red";
// myColor = Color.Yellow;

// type
type Addr = string | number;
let userAddr: Addr;
userAddr = "서울시 34-5";

// type을 enum처럼 사용할 수도 있다
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

type PointTuple = [number, number];
let point: PointTuple = [10, 25];

type Name = {
  firstName: string;
  lastName: string;
};

type Employee = Name & {
  employeeId: number;
};

let employee: Employee;
employee = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
};

// Member의 property가 정해지지 않은 경우
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
  name: "홍길동",
};
member = {
  id: "user02",
  name: "홍길동",
};
