// Alphabet is from character code 32 (space) to 126 (tilde)

function encodeCharacter(char, key) {
  const hexCode = char.charCodeAt(0);
  const hexDiff = hexCode - 32;
  const shiftedHexDiff = (hexDiff + key) % 95;
  const shiftedHexCode = shiftedHexDiff + 32;
  return String.fromCharCode(shiftedHexCode);
}

function caesarCipher(string, key) {
  if (arguments.length !== 2) throw new Error("function takes two arguments");
  if (typeof string !== "string")
    throw new Error("first argument must be a string");
  if (!Number.isInteger(key))
    throw new Error("second argument must be an integer");
  if (string === "") return "";
  const encodedCharacters = string
    .split("")
    .map((char) => encodeCharacter(char, key));
  return encodedCharacters.join("");
}

module.exports = caesarCipher;
