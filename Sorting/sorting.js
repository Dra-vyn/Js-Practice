const underline = function (content) {
  return content + "\n" + "-".repeat(content.length);
}

const sort = function (data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (isLessThan(data[i], data[j])) {
        const max = data[j];
        data[j] = data[i];
        data[i] = max;
      }
    }
  }
  return data;
}

const isStringLengthLessThan = function (a,b) {
  return a.length < b.length;
}

const isGreaterOrEqual = function (a, b) {
  return !isLessThan(a,b);
}

const isLessThan = function (a, b) {
  return a < b;
}

const mean = function (sortedData) {
  let sum = 0;

  for (let index = 0; index < sortedData.length; index++) {
    sum += sortedData[index];
  }
  return sum / sortedData.length;
}

const middleElement = function (data){
  console.log(data);
  const index = (data.length - 1) / 2;
  return (data[Math.ceil(index)] + data[Math.floor(index)]) / 2;
}

const median = function (data) {
  return middleElement(sort(data));
}

const deviation = function (data) {
  const array = [];
  const meanVal = mean(data);
  display("mean", meanVal);

  for (let index = 0; index < data.length; index++) {
    array.push(data[index] - meanVal);
  }

  return array;
}

const standardDeviation = function (data) {
  return calculate(deviation(data));
}

const calculate = function (array) {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    const sqVal = Math.pow(array[index], 2);
    sum += sqVal;
  }

  return Math.sqrt(sum / array.length);
}

const validate = function (input) {
  return !isNaN(input);
}

const userInput = function () {
  const input = parseInt(prompt("enter the number of elements : "));

  if (validate(input)) {
    return input;
  }
  console.log ("invalid value");

  return userInput();
}

const user = function () {
  const input = prompt("enter the number of elements : ");

  if (validate(input)) {
    return input;
  }
  console.log ("invalid value");

  return userInput();
}

const statistics = function () {
  const heading = prompt("Statistics of :");
  const data = generateDataArray(userInput());

  console.log(underline(`Statistics of ${heading}`));
  display("median", median(data));
  display("standard Deviation", standardDeviation(data));
}

const generateDataArray = function (numberOfElements) {
  const data = [];

  for (let index = 1; index <= numberOfElements; index++) {
    const element = parseInt(prompt(`enter data ${index} :`));
    data.push(element);
    console.log(`☑️ ${element} added successfully`);
  }

  console.clear();
  return data;
}


const display = function (string, data) {
  console.log("🟣", string, "  :  ", data);
}

statistics();
