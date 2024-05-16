function getCount(str) {
  b = str.split("");
  c = 0;
  b.forEach((a) => {
    if (
      a == "a" ||
      a == "e" ||
      a == "i" ||
      a == "o" ||
      a == "u" ||
      a == "A" ||
      a == "E" ||
      a == "I" ||
      a == "O" ||
      a == "U"
    ) {
      c++;
    }
  });
  return c;
}

console.log(getCount("abracadabra"));
