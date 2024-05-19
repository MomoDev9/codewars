function accum(s) {
  // your code
  return s
    .split("")
    .map((a, i) => a.toUpperCase() + a.toLowerCase().repeat(i))
    .join("-");
}
console.log(accum("abcd"));
