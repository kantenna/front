const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 배열
const fruits = ["1", "2", "3", "4"];
console.log(fruits[0]);
fruits.forEach((item) => {
  console.log(item);
});
// 객체
const person1 = {
  name: "a",
  job: "b",
};
const person2 = {
  name: "c",
  job: "d",
};
console.log(person1.name);

// 객체 배열
const persons = [
  {
    name: "a",
    job: "b",
  },
  {
    name: "c",
    job: "d",
  },
];
console.log(persons[0].name);
persons.forEach((p) => {
  console.log(`${p.name} : ${p.job}`);
});

products.forEach((item) => {
  console.log(`${item.id}, ${item.title}, ${item.price}`);
});

// card title : 제품 title
// card-text : 가격

// 영역 찾기
const cards = document.querySelectorAll(".card");

cards.forEach((card, idx) => {
  // .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  // .card-text 요소 찾기
  const price = title.nextElementSibling;

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
});
