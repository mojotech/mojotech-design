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
