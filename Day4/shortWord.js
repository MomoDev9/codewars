function findShort(s) {
  a = s.split(" ").map((a) => a.length);
  return Math.min(...a);
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
