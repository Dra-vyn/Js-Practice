const input = 5;
let factorial = input;
let val = 1;
let result = input - 1;

while (result >= 1) {
if (input > 1 || input < -1) {
    factorial = factorial * result;
    result = result - 1;
    val = factorial;
} 
}

console.log(input, " has a factorial of", val);
