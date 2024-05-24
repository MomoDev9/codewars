function hofstadterQ(n) {
  a = { 1: 1, 2: 1 };
  function b(n) {
    if (a[n] !== undefined) {
      return a[n];
    } else {
      a[n] = b(n - b(n - 1)) + b(n - b(n - 2));
      return a[n];
    }
  }

  return n < 1 ? 0 : b(n);
}

console.log(hofstadterQ(100));
