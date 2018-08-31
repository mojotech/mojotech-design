import {
  styler,
  decay,
  listen,
  pointer,
  value,
  transform,
  calc
} from "popmotion";

const slider = document.querySelector(".carousel");
const divStyler = styler(slider);
const sliderX = value(0, divStyler.set("x"));
const { clamp, pipe } = transform;

export function carouselController() {
  const clampRange = () => clamp(-1000, 0);

  listen(slider, "mousedown touchstart").start(() => {
    pointer({ x: sliderX.get() })
      .pipe(({ x }) => x, clampRange())
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
  const bar = document.querySelector(".progress-bar");
  const position = calc.getProgressFromValue(0, -1000, sliderX.get());
  bar.style.setProperty("--scale", position);

  requestAnimationFrame(carouselProgress);
}
