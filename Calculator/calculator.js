const dim = function (text) {
  return "\x1B[2m" + text + "\x1B[0m";
}

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

const calculator = function (operand1, operation, operand2) {
  return operation(operand1, operand2);
}

// console.log(calculator(add, 2, 3));

function findOperation(element) {
  switch (element) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    case "%":
      return modulus;
    default :
    console.log("invalid Operation");
      return userInput();
  }
}

const validate = function (array) {
  const dataArray = [];
  let element = 0;

  for (let index = 0; index < 3; index++) {
    if (index === 1) {
      element = findOperation(array[index]);
    } else {
      element = parseInt(array[index]);
      isValid(element);
    }
    dataArray.push(element)
  }
  return dataArray;
}

const isValid = function (element) {
  return !isNaN(element);
}

const calculate = function (data) {
  return calculator(data[0], data[1], data[2])
}

const userInput = function () {
  const input = prompt(dim("00 + 00"));
  const inputData = input.split(" ")
  const data = validate(inputData);
  console.clear();
  return console.log(`${input} = ${calculate(data)}`) 
}

userInput();
