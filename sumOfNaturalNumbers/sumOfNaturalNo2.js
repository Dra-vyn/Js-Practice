const startVal = 2;
const endVal = 6;
let count = startVal + 1;        // incrementing the start value
let result = startVal;

while (count <= endVal) {
    result = result + count;
    count ++;                    //  incrementing the value of count 
}

if (endVal < startVal) {
    console.log("start Value is greater than End value");
} else if (startVal === endVal){
    console.log("start Value is equal to End Value");
} else{
    console.log(result);
}
