function nextBigger(n) {
  a = n.toString().split("");
  if (a.length < 2) return -1;
  for (i = a.length - 1; i >= 0; i--) {
    if (a[i] > a[i - 1]) {
      b = a.slice(i - 1, a.length).sort();

      console.log(b);
      a.splice(i - 1, a.length, a[i], b.join(""));
      break;
    }
  }
  console.log(a);
  if (+a.join("") === n) return -1;
  else return +a.join("");
}
console.log(nextBigger(537289843));
console.log(nextBigger(559641));
