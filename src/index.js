module.exports = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err.message);
    });
  };
};
