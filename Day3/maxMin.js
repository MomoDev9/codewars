function highAndLow(numbers) {
  a = numbers.split(" ").map(Number);
  ma = Math.max(...a);
  mi = Math.min(...a);
  return ma + ", " + mi;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
