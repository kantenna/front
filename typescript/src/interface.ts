export {};

// object
let user1: object;
user1 = { name: "Alice", age: 25 };
console.log(user1);
// console.log(user1.name) //Property 'name' does not exist on type 'object'.
interface User {
  name: string;
  age: number;
  gender?: string;
}
let user2: User = {
  name: "Alice",
  age: 25,
};
let user3: User = {
  name: "Teddy",
  age: 40,
  gender: "male",
};
console.log(user2.name);
console.log(user3.gender);
user3.gender = "female";
console.log(user3.gender);

interface Car {
  readonly model: string;
  year: number;
}
let myCar: Car = {
  model: "Toyota",
  year: 2020,
};

// myCar.model = "Honda"; // Cannot assign to 'model' because it is a read-only property.

// A~D 점수 부여를 해야한다면
let student: Student = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  4: "C",
};

type Score = "A+" | "A" | "B" | "C" | "D";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

let student2: Student2 = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  //   4: "F",
};

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Truck implements Car {
  color: string;
  wheels: number;

  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }

  start(): void {
    console.log("Truck start");
  }
}
