function alphabetPosition(text) {
  return text
    .split("")
    .map((x) => x.toLowerCase().charCodeAt(0) - 96)
    .filter((x) => x > 0 && x < 27)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
