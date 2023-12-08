const caesarCipher = require("./caesarCipher");

it("returns an empty string when passed one", () => {
  expect(caesarCipher("")).toBe("");
});

it("throws an error if too many or few arguments are passed", () => {
  function noArguments() {
    caesarCipher();
  }
  function twoArguments() {
    caesarCipher("a", "b");
  }
  expect(noArguments).toThrow("function takes only one argument");
  expect(twoArguments).toThrow("function takes only one argument");
});

it("throws an error if a non-string argument is passed", () => {
  function nonStringArgument() {
    caesarCipher(1);
  }
  expect(nonStringArgument).toThrow("function take only string arguments");
});
