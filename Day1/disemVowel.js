function disemvowel(str) {
  v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  dis = str
    .split("")
    .filter((a) => !v.includes(a))
    .join("");
  return dis;
}

console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
