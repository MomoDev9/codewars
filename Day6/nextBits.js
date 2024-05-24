function nextHigher(n) {
  let a,
    b,
    c,
    next = 0;
  if (n > 0) {
    a = n & -n;
    b = n + a;
    c = (n ^ b) / a;
    c >>= 2;
    next = b | c;
  }
  return next;
}
console.log(nextHigher(48857656));
console.log((48857667).toString(2));
