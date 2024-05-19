String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
    .join(" ")
    .replace("'", "'");
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
