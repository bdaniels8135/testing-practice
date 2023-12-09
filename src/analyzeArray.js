function analyzeArray(arr) {
  if (arguments.length !== 1)
    throw new Error("function requires an array of numbers to be passed");
  if (!Array.isArray(arr))
    throw new Error("function requires an array of numbers to be passed");
  if (arr.length === 0)
    throw new Error("function requires an array of numbers to be passed");
  const length = arr.length;
  const sum = arr.reduce((acc, curr) => {
    if (!Number.isFinite(curr))
      throw new Error("function requires an array of numbers to be passed");
    return acc + curr;
  }, 0);
  const average = sum / length;
  const min = arr.reduce((acc, curr) => (curr < acc ? curr : acc));
  const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc));
  return { length, min, max, average };
}

module.exports = analyzeArray;
