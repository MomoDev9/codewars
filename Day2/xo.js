function XO(str) {
  //code here
  x = str.split("").filter((a) => "xX".includes(a)).length;
  o = str.split("").filter((a) => "oO".includes(a)).length;
  console.log(x);
  console.log(o);
  a = x == o ? true : false;
  return a;
}

console.log(XO("xxOo"));
