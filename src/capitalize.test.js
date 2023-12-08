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

it("changes only the first character if needed", () => {
  expect(capitalize("aBc def")).toBe("ABc def");
});

it("returns an empty string when passed one", () => {
  expect(capitalize("")).toBe("");
});
