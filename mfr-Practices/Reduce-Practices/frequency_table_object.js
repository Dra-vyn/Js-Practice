const sentence =
  "Betty bought bought bitter butter but the butter Betty bought was better butter";

const words = sentence.split(" ");

const frequency = (frequencyTable, element) => {
  if (!(element in frequencyTable)) {
    frequencyTable[element] = 0;
  }

  frequencyTable[element]++;
  return frequencyTable;
};

console.log(words.reduce(frequency, {}));
