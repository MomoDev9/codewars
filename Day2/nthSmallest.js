function nthSmallest(arr, pos) {
  //your code here
  a = arr.sort((a, b) => a - b);
  b = a[pos - 1];
  return b;
}

console.log(nthSmallest([-5, -1, -6, -18], 4));
