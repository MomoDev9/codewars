function spinningRings(innerMax, outerMax) {
  // your code here
  a = 0;

  for (o = 1; o <= outerMax; ) {
    for (i = innerMax; i >= 0; i--) {
      a++;
      //   o++;
      console.log(i + " " + o);
      if (i == o) {
        return a;
      } else if (o == outerMax) {
        o = 0;
      } else if (i == 0) {
        i = innerMax;
      } else {
        o++;
      }
    }
  }
}

console.log(spinningRings(2, 7));
