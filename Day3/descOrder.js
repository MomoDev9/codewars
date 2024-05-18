function descendingOrder(n) {
  //...
  a = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(a);
}
console.log(descendingOrder(123456789));
