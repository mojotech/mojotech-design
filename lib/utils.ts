import facepaint from "facepaint";

export const mq = facepaint([
  "@media(min-width: 600px)",
  "@media(min-width: 1600px)",
]);

export const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value));
};
