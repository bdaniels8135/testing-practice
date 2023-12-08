function calculator() {
  function sum(a, b) {
    if (arguments.length !== 2)
      throw new Error("sum takes two numeric arguments");
    return a + b;
  }

  function subtract(a, b) {
    if (arguments.length !== 2)
      throw new Error("subtract takes two numeric arguments");
    return a - b;
  }
  return { sum, subtract };
}

module.exports = calculator;
