const input = 2;
let hasFactor = false; 
for (let factor = 2; factor < input; factor++) {
    if (input % factor === 0 ) {
         hasFactor = true;
    } 
}

const suffix = hasFactor ? "is composite" : "is prime";
console.log(input, suffix);
