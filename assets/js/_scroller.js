import "intersection-observer";
import scrollama from "scrollama";
import { debounce } from "./_helpers";

export function scrollController() {
  const scroller = scrollama();
  const scrollConfig = {
    step: ".step",
    threshhold: 2,
    // debug: true,
    offset: 0.8
  };

  const handleEnter = ({ element, direction }) =>
    (document.body.dataset.theme = element.dataset.themeset);

  const handleExit = ({ element, direction }) => {
    console.log(`exiting: ${element} direction: ${direction}`);
  };

  const _handleEnter = debounce(handleEnter, 200);

  window.addEventListener("resize", () => {
    scroller.resize();
  });

  scroller
    .setup(scrollConfig)
    .onStepEnter(_handleEnter)
    .onStepExit(handleExit);
}
