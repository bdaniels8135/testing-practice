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
  expect(noSumArguments).toThrow();
  expect(oneSumArgument).toThrow();
  expect(threeSumArguments).toThrow();
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
  expect(noSubtractArguments).toThrow();
  expect(oneSubtractArgument).toThrow();
  expect(threeSubtractArguments).toThrow();
});

// Divide Tests
