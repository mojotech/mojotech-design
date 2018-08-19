import "intersection-observer";
import scrollama from "scrollama";

import { debounce } from "./_helpers";

const scroller = scrollama();

const scrollConfig = {
  step: ".step",
  debug: true,
  threshhold: 2,
  offset: 0.75
};

const handleEnter = ({ element, direction }) => {
  document.body.dataset.theme = element.dataset.themeset;
  console.log(`entering: ${element} direction: ${direction}`);
};

const handleExit = ({ element, direction }) => {
  console.log(`exiting: ${element} direction: ${direction}`);
};

const _handleEnter = debounce(handleEnter, 300);

scroller
  .setup(scrollConfig)
  .onStepEnter(_handleEnter)
  .onStepExit(handleExit);
