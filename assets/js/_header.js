export function headerController() {
  const header = document.querySelector("header");

  const scrollCheck = () => {
    const top = document.scrollingElement.scrollTop == 0;
    if (!top) {
      header.classList.add("js-scrolled");
    } else if (top) {
      header.classList.remove("js-scrolled");
    }
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(scrollCheck);
  });
}
