function calculator() {
  function sum(a, b) {
    if (arguments.length !== 2 || [a, b].some((arg) => typeof arg !== "number"))
      throw new Error("sum takes two numeric arguments");
    return a + b;
  }

  function subtract(a, b) {
    if (arguments.length !== 2 || [a, b].some((arg) => typeof arg !== "number"))
      throw new Error("subtract takes two numeric arguments");
    return a - b;
  }

  function divide(a, b) {
    if (arguments.length !== 2 || [a, b].some((arg) => typeof arg !== "number"))
      throw new Error("divide takes two numeric arguments");
    if (b === 0) throw new Error("cannot divide by zero");
    return a / b;
  }

  function multiply(a, b) {
    if (arguments.length !== 2 || [a, b].some((arg) => typeof arg !== "number"))
      throw new Error("multiply takes two numeric arguments");
    return a * b;
  }

  return { sum, subtract, divide, multiply };
}

module.exports = calculator;
