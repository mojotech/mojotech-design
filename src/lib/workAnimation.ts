import { animate } from "motion";

export default (container: string, image: string) => {
  const containerNode = document.querySelector(container)!;
  const imageNode = containerNode.querySelector(image)!;

  containerNode.addEventListener("mouseenter", () => {
    animate(
      imageNode,
      {
        opacity: 1,
      },
      {
        duration: 0.4,
        easing: "ease-in-out",
      },
    );
  });

  containerNode.addEventListener("mouseleave", () => {
    animate(
      imageNode,
      {
        opacity: 0,
      },
      {
        duration: 0.4,
        easing: "ease-in-out",
      },
    );
  });
};
