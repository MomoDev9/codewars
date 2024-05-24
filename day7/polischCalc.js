function calc(expr) {
  if (!expr || expr.trim() === "") return 0;

  const a = expr.trim().split(" ");
  const b = [];

  for (const an of a) {
    if (!isNaN(an)) {
      b.push(parseFloat(an));
    } else {
      const op2 = b.pop();
      const op1 = b.pop();

      switch (an) {
        case "+":
          b.push(op1 + op2);
          break;
        case "-":
          b.push(op1 - op2);
          break;
        case "*":
          b.push(op1 * op2);
          break;
        case "/":
          b.push(op1 / op2);
          break;
        default:
          throw new Error("Invalid operator: " + an);
      }
    }
  }

  return b.pop();
}
console.log(calc("12 3 * 3 +"));
