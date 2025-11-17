const dim = (text) => "\x1B[2m" + text + "\x1B[0m";

const createCal = () => {
  const operation = {
    "+": (a, b) => parseFloat(a) + parseFloat(b),
    "-": (a, b) => parseFloat(a) - parseFloat(b),
    "*": (a, b) => parseFloat(a) * parseFloat(b),
    "/": (a, b) => parseFloat(a) / parseFloat(b),
    "%": (a, b) => parseFloat(a) % parseFloat(b),
  };
  return (string) => {
    const [operand, operators] = string.split(" ")
      .reduce((iv, x) =>
        !("+-*/%".includes(x)) ? iv[0].push(x) && iv : iv[1].push(x) && iv,
      [[], []]);
    return operand
      .reduce((a, b) => operation[operators.shift()](a, b));
  };
};

const calc = createCal();

const userInput = () => {
  const input = prompt(dim("input format : 00 + 00 : "));
  const output = calc(input);
  console.log(`${input} = `,output);
}

userInput();
