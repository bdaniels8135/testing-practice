const analyzeArray = require("./analyzeArray");

it("throws an error when too many or too few arguments are passed", () => {
  function noArguments() {
    analyzeArray();
  }
  function twoArguments() {
    analyzeArray("a", "b");
  }
  expect(noArguments).toThrow(
    "function requires an array of numbers to be passed"
  );
  expect(twoArguments).toThrow(
    "function requires an array of numbers to be passed"
  );
});

it("throws an error if argument is not an array", () => {
  function nonArrayArgument() {
    analyzeArray("a");
  }
  expect(nonArrayArgument).toThrow(
    "function requires an array of numbers to be passed"
  );
});

it("throw an error if array is empty", () => {
  function emptyArray() {
    analyzeArray([]);
  }
  expect(emptyArray).toThrow(
    "function requires an array of numbers to be passed"
  );
});

it("returns the correct length", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

it("returns the correct average for all positive numbers", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

it("returns the correct average for pos and neg numbers", () => {
  expect(analyzeArray([-100, 100, 0]).average).toBe(0);
});

it("returns the correct min for all positive numbers", () => {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
});

it("returns the correct min for pos and neg numbers", () => {
  expect(analyzeArray([-100, 100, 0]).min).toBe(-100);
});

it("returns the correct max for all positive numbers", () => {
  expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

it("returns the correct max for pos and neg numbers", () => {
  expect(analyzeArray([-100, 100, 0]).max).toBe(100);
});

it("throws an error if array has non-number elements", () => {
  function nonNumberElements() {
    analyzeArray([1, 2, "a", true, [1]]);
  }
  expect(nonNumberElements).toThrow(
    "function requires an array of numbers to be passed"
  );
});
