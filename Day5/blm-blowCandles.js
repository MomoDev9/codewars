function blowCandles(str) {
  a = str.split("").map((a) => Number(a));
  b = [];
  c = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      c++;
      if (a[j] >= 1) {
        a = a.slice(j, j + 3).map((b) => b - 1) + str.slice(j + 3, str.length);
      } else {
      }
    }

    console.log(a);
  }
  return c;
}

console.log(blowCandles("0323456"));
