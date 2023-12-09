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
