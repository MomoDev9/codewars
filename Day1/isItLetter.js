function isItLetter(character) {
  ch = character.toLowerCase();
  a = ch.split("").map((a) => {
    if (a >= "a" && a <= "z") {
      return "true";
    } else {
      return "false";
    }
  });

  b = a.includes("false") ? false : true;
  return b;
}

console.log(isItLetter("abcAZ123"));
