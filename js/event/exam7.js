// tab-button 클릭시 짝꿍 tab-content 보여주기
// tab-button 찾기 + 클릭 이벤트 리스너 부착
// tab-content 찾기 + show 클래스명 이동
// classList.

const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

tabBtn.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    tabBtn.forEach((btn) => {
      btn.classList.remove("orange");
    });
    tabContent.forEach((content) => {
      content.classList.remove("show");
    });

    tabBtn[idx].classList.add("orange");
    tabContent[idx].classList.add("show");
  });
});
