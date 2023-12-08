const capitalize = require("./capitalize");

it("capitalizes a single letter", () => {
  expect(capitalize("f")).toBe("F");
});

it("capitalizes only the first letter", () => {
  expect(capitalize("abc")).toBe("Abc");
});

it("capitalizes multi word strings", () => {
  expect(capitalize("hello there!")).toBe("Hello there!");
});

it("returns an error with empty argument", () => {
  function capitalizeEmpty() {
    capitalize();
  }
  expect(capitalizeEmpty).toThrow("Capitalize requires a string argument");
});

it("returns only the first letter capitalized", () => {
  expect(capitalize("ABC")).toBe("Abc");
});
