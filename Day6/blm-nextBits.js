function nextHigher(x) {
  // a = n.toString(2).split("");
  // console.log(a.join(""));
  // for (var i = a.length; i >= 0; i--) {
  //   if (a[a.length - 1] === "0" && !a.slice(0, a.length - 2).includes("0")) {
  //     a.push(1);
  //     a[1] = 0;
  //     a[2] = 0;
  //     a[a.length - 2] = 1;
  //     break;
  //   } else if (
  //     a[0] === "1" &&
  //     a[1] === "1" &&
  //     !a.slice(i + 2, a.length).includes("1")
  //   ) {
  //     a.push(1);
  //     a[1] = "0";
  //     a[a.length - 1] = "1";
  //     break;
  //   } else if (a[0] === "1" && !a.slice(1, a.length).includes("1")) {
  //     a.push(1);
  //     a[a.length - 1] = 0;
  //     break;
  //   } else if (!a.includes("0")) {
  //     a.push(1);
  //     a[1] = 0;
  //     break;
  //   } else if (a[i] === "0" && a[i + 1] === "1") {
  //     a[i + 1] = "0";
  //     a[i] = "1";
  //     break;
  //   }
  // }
  // console.log(a.join(""));
  // return parseInt(a.join(""), 2);
  let rightOne,
    nextHigherOneBit,
    rightOnesPattern,
    next = 0;
  if (x > 0) {
    // right most set bit
    rightOne = x & !x;

    // reset the pattern and set next higher bit
    // left part of x will be here
    nextHigherOneBit = x + rightOne;

    // nextHigherOneBit is now part [D] of the above explanation.

    // isolate the pattern
    rightOnesPattern = x ^ nextHigherOneBit;

    // right adjust pattern
    rightOnesPattern = rightOnesPattern / rightOne;

    // correction factor
    rightOnesPattern >>= 2;

    // rightOnesPattern is now part [A] of the above explanation.

    // integrate new pattern (Add [D] and [A])
    next = nextHigherOneBit | rightOnesPattern;
  }
  return next;
}
console.log(nextHigher(48857656));
console.log((48857667).toString(2));
