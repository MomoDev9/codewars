function isPangram(string) {
  a = string.toLowerCase();
  b = new Array(26).fill(false);

  for (let i = 0; i < a.length; i++) {
    if ("a" <= a[i] && a[i] <= "z") c = a.charCodeAt(i) - "a".charCodeAt(0);
    b[c] = true;
  }
  for (let i = 0; i <= 26; i++) if (b[i] == false) return false;
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram."));
