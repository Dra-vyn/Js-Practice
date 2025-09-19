let total = ""; 
let currentTerm = "";
let limit = "..........";

while (currentTerm.length <= limit.length){
    total = total + currentTerm;
    currentTerm = currentTerm + ".";
} 
const result = total.length; 
console.log(total,result);
