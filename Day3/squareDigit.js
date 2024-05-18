function squareDigits(num) {
  a = num
    .toString()
    .split("")
    .map((b) => b * b)
    .join("");

  return Number(a);
}

console.log(squareDigits(3212));
