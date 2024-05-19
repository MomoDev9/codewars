var isSquare = function (n) {
  a = Math.sqrt(n) % 1 === 0 ? true : false;
  return a;
};
console.log(isSquare(-1));
