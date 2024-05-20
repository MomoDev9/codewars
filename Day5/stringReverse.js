function reverseSlice(str) {
  a = str.split("").reverse();
  b = [a.join("")];
  for (i = 0; i <= str.length; i++) {
    a.shift();
    b.push(a.join(""));
    if (a.length === 1) break;
  }
  return b;
}
console.log(reverseSlice("321"));
