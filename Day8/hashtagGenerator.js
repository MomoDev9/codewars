function generateHashtag(str) {
  s = str.includes("  ") ? (str = str.split("  ").join(" ")) : str;
  a = s.split(" ");
  b = a.join("").length;
  if (b === 0 || b > 140) {
    return false;
  } else {
    return `#${a
      .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
      .join("")
      .match(/[a-zA-Z0-9]+/g)
      .join("")}`;
  }
}
console.log(
  generateHashtag(
    "Hello, my name is Inigo Montoya. You killed my father. Prepare to die!"
  )
);
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
