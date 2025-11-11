const array1 = [1, 2, 5, 3, 4, 7, 6, 5];
const array2 = [8, 4];
const num = 10;

const topTwo = (array, element) => {
  if (element > array[0]) {
    return [element, array[0]];
  }
  if (element > array[1]) {
    return [array[0], element];
  }

  return array;
};

console.log(topTwo(array2, num));

console.log(array1.reduce(topTwo, [-Infinity, -Infinity]));
