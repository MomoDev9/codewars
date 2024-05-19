function getMiddle(s) {
  //Code goes here!
  a = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  b = s.slice(s.length / 2, s.length / 2 + 1);
  c = s.length % 2 === 0 ? a : b;
  return c;
}

console.log(getMiddle("test"));
