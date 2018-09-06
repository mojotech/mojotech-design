import "intersection-observer";
import scrollama from "scrollama";
import { tween, styler, stagger, transform, easing } from "popmotion";
import { debounce } from "./_helpers";
const basicScroll = require("basicScroll");
const { smooth, transformMap } = transform;

export function scrollController() {
  const scroller = scrollama();
  const bodyStyler = styler(document.querySelector("body"));
  let theme = "light";
  function mixBackground({ element }) {
    if (element.dataset.themeset == "light" && theme == "dark") {
      tween({
        from: { background: "#171c1f", color: "#e9edef" },
        to: { background: "#e9edef", color: "#171c1f" },
        duration: 200,
        ease: easing.linear
      }).start(bodyStyler.set);
      theme = "light";
    } else if (element.dataset.themeset == "dark" && theme == "light") {
      tween({
        from: { background: "#e9edef", color: "#171c1f" },
        to: { background: "#171c1f", color: "#e9edef" },
        duration: 200,
        ease: easing.linear
      }).start(bodyStyler.set);
      theme = "dark";
    } else {
      console.log("");
    }
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
  const fadeOutScroller = scrollama();

  function handleFadeIn({ element }) {
    const elStyler = styler(element);
    const fadeInAnimation = tween({
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      duration: 500
    }).pipe(
      transformMap({
        y: smooth(200)
      })
    );

    fadeInAnimation.start(elStyler.set);
  }
  fadeInScroller
    .setup({
      step: ".fade-in",
      offset: 0.9,
      once: true
    })
    .onStepEnter(handleFadeIn);
}

export function shapeScroll() {
  const circleShape = basicScroll.create({
    elem: document.querySelector(".circle"),
    from: "top-bottom",
    to: "middle-middle",
    props: {
      "--tY": {
        from: "10%",
        to: "160%"
      },
      "--tX": {
        from: "30%",
        to: "110%"
      },
      "--scale": {
        from: "1",
        to: "2.3"
      }
    }
  });

  const triangleShape = basicScroll.create({
    elem: document.querySelector(".triangle"),
    from: "top-middle",
    to: "top-top",
    props: {
      "--rotate": {
        from: "0",
        to: "2turn"
      },
      "--circle-tY": {
        from: "100%",
        to: "-110%"
      }
    }
  });

  triangleShape.start();
  circleShape.start();
}
