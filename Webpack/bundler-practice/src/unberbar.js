const _ = {
  once(func) {
    let result;
    let alreadyCalled = false;

    return function (...args) {
      if (!alreadyCalled) {
        alreadyCalled = true;
        result = func(...args);
      }
      return result;
    };
  },
};

module.exports = _; // 다른 파일에서 사용할 수 있게 export