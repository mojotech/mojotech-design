import { queryArray } from './_helpers.js';
import {
  styler,
  decay,
  listen,
  pointer,
  value,
  transform,
  calc
} from 'popmotion';

const slider = document.querySelector('.items');
const divStyler = styler(slider);
const sliderX = value(0, divStyler.set('x'));
const { clamp, pipe } = transform;

let upperRange = -3000;
if (window.innerWidth <= 700) {
  upperRange = -1800;
}

export function carouselController() {
  const clampRange = () => clamp(upperRange, 0);

  listen(slider, 'mousedown touchstart').start(() => {
    pointer({ x: sliderX.get() })
      .pipe(
        ({ x }) => x,
        clampRange()
      )
      .start(sliderX);
  });

  listen(document, 'mouseup touchend').start(() => {
    decay({
      from: sliderX.get(),
      velocity: sliderX.getVelocity()
    })
      .pipe(clampRange())
      .start(sliderX);
  });
}

export function carouselProgress() {
  const bar = document.querySelector('.progress-bar');
  const position = calc.getProgressFromValue(0, upperRange, sliderX.get());
  bar.style.setProperty('--scale', position);

  requestAnimationFrame(carouselProgress);
}
