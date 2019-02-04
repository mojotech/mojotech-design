import { queryArray } from "./_helpers.js";
import {
  styler,
  decay,
  listen,
  pointer,
  value,
  transform,
  calc
} from "popmotion";

// TODO: Make these components more more resilient and not blow up the page if
// they dont find elements. Ideally move this into a seperate module thatll only
// be inlcuded on necesary pages.

const slider = document.querySelector(".items");
const { clamp, pipe } = transform;

let upperRange = -3000;
if (window.innerWidth <= 700) {
  upperRange = -1800;
}

export function carouselController() {
  // We will check to see if slider elements exist on the page, if not return
  if (!slider) {
    return;
  }

  const divStyler = styler(slider);
  const sliderX = value(0, divStyler.set("x"));
  const clampRange = () => clamp(upperRange, 0);

  listen(slider, "mousedown touchstart").start(() => {
    pointer({ x: sliderX.get() })
      .pipe(
        ({ x }) => x,
        clampRange()
      )
      .start(sliderX);
  });

  listen(document, "mouseup touchend").start(() => {
    decay({
      from: sliderX.get(),
      velocity: sliderX.getVelocity()
    })
      .pipe(clampRange())
      .start(sliderX);
  });
}

export function carouselProgress() {
  if (!slider) {
    return;
  }

  const bar = document.querySelector(".progress-bar");
  const position = calc.getProgressFromValue(0, upperRange, sliderX.get());
  bar.style.setProperty("--scale", position);

  requestAnimationFrame(carouselProgress);
}
