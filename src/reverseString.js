function reverseString(string) {
  if (typeof string != "string") throw new Error("requires a string argument");
  if (string == null) throw new Error("requires a string argument");
  const chars = string.split("");
  chars.reverse();
  return chars.join("");
}

module.exports = reverseString;
