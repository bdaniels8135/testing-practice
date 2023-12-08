const caesarCipher = require("./caesarCipher");

it("returns an empty string when passed one", () => {
  expect(caesarCipher("", 1)).toBe("");
});

it("throws an error if too many or few arguments are passed", () => {
  function noArguments() {
    caesarCipher();
  }
  function threeArguments() {
    caesarCipher("a", "b", "c");
  }
  expect(noArguments).toThrow("function takes two arguments");
  expect(threeArguments).toThrow("function takes two arguments");
});

it("throws an error if first argument is not a string", () => {
  function nonStringArgument() {
    caesarCipher(1, 2);
  }
  expect(nonStringArgument).toThrow("first argument must be a string");
});

it("throws an error if second argument is not an integer", () => {
  function nonIntegerArgument() {
    caesarCipher("a", "b");
  }
  expect(nonIntegerArgument).toThrow("second argument must be an integer");
});

it("encodes a single character with a positive key", () => {
  expect(caesarCipher("a", 2)).toBe("c");
});

it("wraps back to start of alphabet from the end", () => {
  expect(caesarCipher("~", 1)).toBe(" ");
});

it("encodes a multi character string with a positive key", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

it("encodes a single character with a negative key", () => {
  expect(caesarCipher("c", -2)).toBe("a");
});

it("wraps from start to end of alphabet with a negative key", () => {
  expect(caesarCipher(" ", -1)).toBe("~");
});

it("decodes itself with negative of the key", () => {
  expect(caesarCipher(caesarCipher("Hello, World!", 10), -10)).toBe(
    "Hello, World!"
  );
});

it("can handle keys above 200", () => {
  expect(caesarCipher("a", 285)).toBe("a");
});

it("can handle keys below -200", () => {
  expect(caesarCipher("f", -285)).toBe("f");
});
