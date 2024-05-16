var sumAndMultiply = function (sum, multiply) {
  for (a = 0; a < sum; a++) {
    var b = sum - a;
    if (a * b == multiply && a + b == sum) {
      return [a, b];
    }
  }
  {
    return null;
  }
};

console.log(sumAndMultiply(6, 9));
