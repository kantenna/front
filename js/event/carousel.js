const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrap = document.querySelector(".wrap");

// next.addEventListener("click", (e) => {
//   wrap.style.transform = `translate(-${300 * 1}px)`;
// });
// prev.addEventListener("click", (e) => {
//   wrap.style.transform = `translate(-${300 * 0})`;
// });

// carousel2.html 스크립트
// 첫번째 슬라이드 => 다음 클릭
// translate(-${100}vw)

const carousel = document.querySelector(".carousel");
let idx = 0;
prev.addEventListener("click", (e) => {
  if (idx === 0) {
    return;
  }
  idx -= 1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});

next.addEventListener("click", (e) => {
  if (idx === 2) {
    return;
  }
  idx += 1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});
