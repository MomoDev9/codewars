function blowCandles(str) {
  a = str.split("").map(Number);
  b = 0;
  i = 0;

  while (i < a.length) {
    if (a[i] > 0) {
      b++;
      for (j = i; j < i + 3; j++) {
        if (a[j] > 0) {
          a[j] -= 1;
        }
      }
    } else {
      i++;
    }
  }

  return b;
}

console.log(blowCandles("121"));
