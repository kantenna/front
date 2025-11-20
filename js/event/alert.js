const box = document.querySelector(".alert-box");

const notification = (state) => {
  box.style.display = state;
};

document.querySelector("button").addEventListener("click", () => {
  notification("block");
});

// X 클릭시 창 닫기
document.querySelector(".close").addEventListener("click", () => {
  notification("none");
});
