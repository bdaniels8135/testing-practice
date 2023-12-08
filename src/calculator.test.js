const calculator = require("./calculator");

// Sum Tests
it("sums two pos numbers correctly", () => {
  expect(calculator().sum(5, 7)).toBe(12);
});

it("sums two neg numbers correctly", () => {
  expect(calculator().sum(-5, -8)).toBe(-13);
});

it("sums a pos and neg number correctly", () => {
  expect(calculator().sum(-5, 7)).toBe(2);
});

it("sums two floats correctly", () => {
  expect(calculator().sum(0.7, 0.333)).toBeCloseTo(1.033);
});

it("throws an error with too few or too many arguments in sum", () => {
  function noSumArguments() {
    calculator().sum();
  }
  function oneSumArgument() {
    calculator().sum(1);
  }

  function threeSumArguments() {
    calculator().sum(1, 2, 3);
  }
  expect(noSumArguments).toThrow("sum takes two numeric arguments");
  expect(oneSumArgument).toThrow("sum takes two numeric arguments");
  expect(threeSumArguments).toThrow("sum takes two numeric arguments");
});

// Subtract Tests
it("subtracts two pos numbers correctly", () => {
  expect(calculator().subtract(5, 7)).toBe(-2);
});

it("subtracts two neg numbers correctly", () => {
  expect(calculator().subtract(-5, -8)).toBe(3);
});

it("subtracts a pos and neg number correctly", () => {
  expect(calculator().subtract(-5, 7)).toBe(-12);
});

it("subtracts two floats correctly", () => {
  expect(calculator().subtract(0.7, 0.333)).toBeCloseTo(0.367);
});

it("throws an error with too few or too many arguments in subtract", () => {
  function noSubtractArguments() {
    calculator().subtract();
  }
  function oneSubtractArgument() {
    calculator().subtract(1);
  }

  function threeSubtractArguments() {
    calculator().subtract(1, 2, 3);
  }
  expect(noSubtractArguments).toThrow("subtract takes two numeric arguments");
  expect(oneSubtractArgument).toThrow("subtract takes two numeric arguments");
  expect(threeSubtractArguments).toThrow(
    "subtract takes two numeric arguments"
  );
});

// Divide Tests
it("divides two pos numbers correctly", () => {
  expect(calculator().divide(5, 7)).toBe(5 / 7);
});

it("divides two neg numbers correctly", () => {
  expect(calculator().divide(-5, -8)).toBe(-5 / -8);
});

it("divides a pos and neg number correctly", () => {
  expect(calculator().divide(-5, 7)).toBe(-5 / 7);
});

it("throws an error when dividing by zero", () => {
  function divideByZero() {
    calculator().divide(5, 0);
  }
  expect(divideByZero).toThrow("cannot divide by zero");
});

it("throws an error with too few or too many arguments in divide", () => {
  function noDivideArguments() {
    calculator().divide();
  }
  function oneDivideArgument() {
    calculator().divide(1);
  }

  function threeDivideArguments() {
    calculator().divide(1, 2, 3);
  }
  expect(noDivideArguments).toThrow("divide takes two numeric arguments");
  expect(oneDivideArgument).toThrow("divide takes two numeric arguments");
  expect(threeDivideArguments).toThrow("divide takes two numeric arguments");
});

// Multiply Tests
it("multiplies two pos numbers correctly", () => {
  expect(calculator().multiply(5, 7)).toBe(35);
});

it("multiplies two neg numbers correctly", () => {
  expect(calculator().multiply(-5, -8)).toBe(40);
});

it("multiplies a pos and neg number correctly", () => {
  expect(calculator().multiply(-5, 7)).toBe(-35);
});

it("multiplies two floats correctly", () => {
  expect(calculator().multiply(0.7, 0.333)).toBeCloseTo(0.2331);
});

it("throws an error with too few or too many arguments in multiply", () => {
  function noMultiplyArguments() {
    calculator().multiply();
  }
  function oneMultiplyArgument() {
    calculator().multiply(1);
  }

  function threeMultiplyArguments() {
    calculator().multiply(1, 2, 3);
  }
  expect(noMultiplyArguments).toThrow("multiply takes two numeric arguments");
  expect(oneMultiplyArgument).toThrow("multiply takes two numeric arguments");
  expect(threeMultiplyArguments).toThrow(
    "multiply takes two numeric arguments"
  );
});
