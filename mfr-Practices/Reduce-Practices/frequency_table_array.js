const sentence =
  "Betty bought bought bitter butter but the butter Betty bought was better butter";

const words = sentence.split(" ");

const frequency = (initialValue, element) => {
  const result = initialValue.find((x) => x[0] === element);

  if (!result) {
    initialValue.push([element, 1]);
    return initialValue;
  }

  result[1] += 1;
  return initialValue;
};

console.log(words.reduce(frequency, []));
