window.addEventListener("load", handleShowNav);
window.addEventListener("scroll", handleShowNav);

function handleShowNav() {
  let scrollDistance = window.scrollY;
  if (scrollDistance > 200) {
    document.querySelector("nav").classList.add("visible");
  } else {
    document.querySelector("nav").classList.remove("visible");
  }
}
