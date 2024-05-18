function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  c = marks.reduce((a, b) => a + b, 0) / marks.length;
  return Math.floor(c);
}
console.log(getAverage([1, 2, 3, 4, 5]));
