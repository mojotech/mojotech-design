import "intersection-observer";
import scrollama from "scrollama";
import { tween, styler, stagger, transform, easing } from "popmotion";
const { smooth, transformMap } = transform;

export function scrollController() {
  const scroller = scrollama();

  function mixBackground({ element }) {
    document.querySelector("body").dataset.theme = element.dataset.themeset;
  }

  scroller
    .setup({
      step: "[data-themeset]",
      threshhold: 2,
      offset: 0.8
    })
    .onStepEnter(mixBackground);
}

export function fadeController() {
  const fadeInScroller = scrollama();

  function handleFadeIn({ element }) {
    element.classList.add("in-view");
  }

  fadeInScroller
    .setup({
      step: ".fade-in",
      offset: 0.9,
      once: true
    })
    .onStepEnter(handleFadeIn);
}
