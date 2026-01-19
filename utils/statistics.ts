export const average = (arr: number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

export const standardDeviation = (arr: number[]) => {
  const m = average(arr);
  return Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);
};
