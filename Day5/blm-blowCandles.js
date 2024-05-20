function blowCandles(str) {
  a = str.split("");
  c = 0;
  for (let i = 0; i < str.length; i++) {
    c++;
    if (str != 0) {
      a = a - 111;
    }
    console.log(a);
  }
  return c;
}

console.log(blowCandles("0323456"));
