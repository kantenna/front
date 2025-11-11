let a, b, c, d, e, f, g;
// 선언만 한 경우 : undifined
// console.log("a 타입 ?", typeof a);

// 값 할당
a = true;
b = "hello";
c = 3.14;
d = 5;
e = new Date();
f = null;
g = {};

console.log("a 타입 ?", typeof a);
console.log("b 타입 ?", typeof b);
console.log("c 타입 ?", typeof c);
console.log("d 타입 ?", typeof d);
console.log("e 타입 ?", typeof e);
console.log("f 타입 ?", typeof f);
console.log("g 타입 ?", typeof g);
// a 타입 ? boolean
// b 타입 ? string('', "" 구분하지않음)
// c 타입 ? number(숫자로 된 자료형)
// d 타입 ? number
// e 타입 ? object
// f 타입 ? object
// g 타입 ? object
