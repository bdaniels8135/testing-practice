function capitalize(string) {
  if (string == null) throw new Error("Capitalize requires a string argument");
  if (string === "") return "";
  const firstLetter = string[0];
  const restOfString = string.slice(1);
  return firstLetter.toUpperCase() + restOfString.toLowerCase();
}

module.exports = capitalize;
