const add = function (operand1, operand2) {
  return operand1 + operand2;
}

const subtract = function (operand1, operand2) {
  return operand1 - operand2;
}

const multiply = function (operand1, operand2) {
  return operand1 * operand2;
}

const divide = function (operand1, operand2) {
  return operand1 / operand2;
}

const modulus = function (operand1, operand2) {
  return operand1 % operand2;
}

const exponent = function (operand1, operand2) {
  return operand1 ** operand2;
}

const calculator = function (operation, operand1, operand2) {
  return operation(operand1, operand2);
}

console.log(calculator(add, 2, 3));
