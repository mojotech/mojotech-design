export const debounce = (callback, delay) => {
  let timeout;

  return function() {
    let call = () => {
      return callback.apply(this, arguments);
    };

    clearTimeout(timeout);
    timeout = setTimeout(call, delay);
  };
};

export const lerp = (min, max, t) => min * (1 - t) + max * t;

export const onReady = fn => {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
};

export const queryArray = (selector, node) => {
  if (!node) node = document.body;
  return Array.prototype.slice.call(node.querySelectorAll(selector));
};
