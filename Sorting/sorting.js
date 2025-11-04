let numberOfIteration = 0;

function sortData(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfIteration++;
      if (data[i] > data[j]) {
        const max = data[j];
        data[j] = data[i];
        data[i] = max;
      }
    } 
  }
  return data;
}

function randomData(lower, upper){
  return lower + Math.round(Math.random() * (upper - lower));
}

function benchmark(size) {
  return`size : ${size} \nnumber of iteration : ${numberOfIteration}`;
}

function generateRandomData(numberOfElements, lower, upper) {
  const dataArray = [];

  for (let index = 0; index < numberOfElements; index++) {
    dataArray.push(randomData(lower, upper));
  }

  return dataArray;
}

function displayOutput(numberOfElements, lower, upper) {
  const data = generateRandomData(numberOfElements, lower, upper);
  const sortedData = sortData(data);
  console.log(sortedData);
  const size = sortedData.length;
  console.log(benchmark(size))
}

displayOutput(6, 50, 100);
