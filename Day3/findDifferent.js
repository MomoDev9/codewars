function findMissing(arr1, arr2) {
  a = arr1.sort((a, b) => a - b);
  b = arr2.sort((a, b) => a - b);

  for (i = 0; i <= b.length; i++) {
    c = a[i] != b[i] ? a[i - 1] : null;
  }
  return +c;
}

console.log(findMissing([1, 2, 3], [1, 3]));
