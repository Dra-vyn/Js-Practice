let numberOfIteration = 0; // global variable

// ....................................... sorting the input data .............................................

function sortData(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfIteration++;  // increment operation 
      if (data[i] > data[j]) {
        const max = data[j];
        data[j] = data[i];
        data[i] = max;
      }
    }
  }
  return data;   // returns the sorted data by modifiying the original array 
}

// .................................... generates random data ..................................................

function randomData(lower, upper) {
  return lower + Math.round(Math.random() * (upper - lower));
}

function generateRandomData(numberOfElements, lower, upper) {
  const dataArray = [];

  for (let index = 0; index < numberOfElements; index++) {
    dataArray.push(randomData(lower, upper));
  }

  return dataArray;
}

// ............................................. bench mark ....................................................

function benchmark(data) {
  return `size : ${data.length} \nnumber of iteration : ${numberOfIteration}`;
}

// ............................................ mean value ....................................................

function mean(sortedData) {
  let sum = 0;

  for (let index = 0; index < sortedData.length; index++) {
    sum += sortedData[index];
  }
  return sum / sortedData.length;
}

//  ...........................................median value .....................................................

function median(data) {
  const sortedData = sortData(data);
  console.log(sortedData);
  const index = (sortedData.length - 1) / 2;
  return (sortedData[Math.ceil(index)] + sortedData[Math.floor(index)]) / 2;
}

// ........................................... absolute value ..................................................

function absoluteVal(data) {
  const array = [];
  const meanVal = mean(data);
  console.log("mean :", meanVal);

  for (let index = 0; index < data.length; index++) {
    array.push(data[index] - meanVal);
  }
  return array;
}

// ....................................... standard deviation ..................................................

function standardDeviation(data) {
  const absVal = absoluteVal(data);
  return calculate(absVal);
}

// .................................. calculate standard deviation  .............................................

function calculate(absVal) {
  let sum = 0;

  for (let index = 0; index < absVal.length; index++) {
    const sqVal = Math.pow(absVal[index], 2);
    sum += sqVal;
  }

  return Math.sqrt(sum / absVal.length);
}

// ...............................................main function ................................................

function statistics(numberOfElements, lower, upper) {
  const data = generateRandomData(numberOfElements, lower, upper);
  console.log("median :", median(data));
  console.log(benchmark(data));
  console.log("standard Deviation : ", standardDeviation(data));
}

statistics(6, 50, 100);
