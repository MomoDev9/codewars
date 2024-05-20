function divisors(integer) {
  a = [];
  for (i = 1; i <= integer; i++) {
    if (integer % i == 0) {
      a.push(i);
    }
  }
  if (a.length <= 2) {
    return integer + " is prime";
  } else {
    a.pop();
    a.shift();
  }
  return a;
}
console.log(divisors(15));
