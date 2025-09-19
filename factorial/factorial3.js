const input = 5;
let count = 1;
let factorial = 1;

while (count <= input) {
    factorial = factorial * count;
    count++;
}
console.log(input, "has a factorial of", factorial);
