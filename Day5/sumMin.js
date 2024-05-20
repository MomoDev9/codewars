function sumOfMinimums(arr) {
  // your code here
  a = arr
    .slice("")
    .map((a) => Math.min(...a))
    .reduce((a, b) => a + b);
  return a;
}
console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
