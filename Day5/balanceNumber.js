function balancedNum(number) {
  a = number.toString().length == 1 ? 0 : number.toString().length / 2;
  b =
    number.toString().length <= 2
      ? 0
      : number
          .toString()
          .split("")
          .slice(0, a % 1 === 0 ? a - 1 : a)
          .map((a) => Number(a))
          .reduce((a, b) => a + b);
  c =
    number.toString().length <= 2
      ? 0
      : number
          .toString()
          .split("")
          .slice(a % 1 === 0 ? a + 1 : a + 1, number.toString().length)
          .map((a) => Number(a))
          .reduce((a, b) => a + b);
  console.log(b);
  console.log(c);
  console.log(a);
  return b == c ? "Balanced" : "Not Balanced";
}
console.log(balancedNum(959));
