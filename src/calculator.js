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

  function divide(a, b) {
    if (arguments.length !== 2)
      throw new Error("divide takes two numeric arguments");
    if (b === 0) throw new Error("cannot divide by zero");
    return a / b;
  }
  return { sum, subtract, divide };
}

module.exports = calculator;
