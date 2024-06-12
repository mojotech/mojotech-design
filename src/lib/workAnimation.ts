import { animate, inView } from "motion";

export default (container: string, image: string, logo: string) => {
  const containerNode = document.querySelector(container)!;
  const imageNode = containerNode.querySelector(image)!;
  const logoNode = containerNode.querySelector(logo)!;

  containerNode.addEventListener("mouseenter", () => {
    animate(
      logoNode,
      {
        opacity: 0,
        y: 10,
      },
      {
        duration: 0.2,
        easing: "ease-in-out",
      },
    );
    animate(
      imageNode,
      {
        opacity: 1,
      },
      {
        delay: 0.1,
        duration: 0.3,
        easing: "ease-in-out",
      },
    );
  });

  containerNode.addEventListener("mouseleave", () => {
    animate(
      logoNode,
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: 0.3,
        delay: 0.1,
        easing: "ease-in-out",
      },
    );
    animate(
      imageNode,
      {
        opacity: 0,
      },
      {
        duration: 0.2,
        easing: "ease-in-out",
      },
    );
  });
};
