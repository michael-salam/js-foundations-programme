const tabBtns = document.querySelectorAll(".tab-container button");
const tabContents = document.querySelectorAll(".content");

tabBtns.forEach((tabBtn, tabIndex) => {
  tabBtn.addEventListener("click", () => {
    tabContents.forEach((content, contentIndex) => {
      if (contentIndex === tabIndex) {
        tabBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        tabBtn.classList.add("active");
        content.classList.add("active");
      } else if (contentIndex !== tabIndex) {
        content.classList.remove("active");
      }
    });
  });
});
