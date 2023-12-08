const reverseString = require("./reverseString");

it("returns an empty string when passed one", () => {
  expect(reverseString("")).toBe("");
});

it("throws an error with empty argument", () => {
  function emptyString() {
    reverseString();
  }
  expect(emptyString).toThrow("requires a string argument");
});

it("returns a single character string unchanged", () => {
  expect(reverseString("a")).toBe("a");
});

it("reverses a string with multiple characters", () => {
  expect(reverseString("abc")).toBe("cba");
});

it("throws an error if argument is not a string", () => {
  function nonStringArgument() {
    reverseString(5);
  }
  expect(nonStringArgument).toThrow("requires a string argument");
});
