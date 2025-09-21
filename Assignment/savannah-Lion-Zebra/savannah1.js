const testcase1 = "LZ";
const testcase2 = "L Z";
const testcase3 = "L  Z";
const testcase4 = "ZL";
const testcase5 = "Z     L";
const testcase6 = "Z   L";
const testcase7 = "Z  Z";
const testcase8 = "L     L";
const testcase9 = "Z  LZ   L";
const testcase10 = "L  L  L";
const testcase11 = "ZZ  Z";
const testcase12 = "  LL    ZZ";

const testcaseToUse = testcase1;

let range = 0;
let output = testcaseToUse.length;
let count = 1;
let distance = 0;
let result = 0;

while ((range + 1) < testcaseToUse.length) {
    if (testcaseToUse[range] === "L") {
        if (testcaseToUse[range + 1] === "L") {
            range = range + 1;
            if (result <= 0) {
                result = -1;    
            }
        } else if (testcaseToUse[range + 1] === "Z"){
            distance = 0;
            result = distance;
            break;
        } else {
            count = range + 1;
            while (count < testcaseToUse.length) {
                if (testcaseToUse[count] === "L") {
                    range = count;
                    count = count + 1;
                    if (result <= 0) {
                        distance = -1;    
                        result = distance;
                    }
                    break;
                } else if (testcaseToUse[count] === "Z"){
                    distance = count - range;
                    if (distance < output){
                        output = distance;
                        result = output - 1;
                        range = count;
                        break;
                    } else {
                        range = count;
                        break;
                    }
                }else {
                    count = count + 1;
                }
            }
        }
    } else if (testcaseToUse[range] === "Z") {
        if (testcaseToUse[range + 1] === "Z") {
            range = range + 1;
            if (result <= 0) {
                result = -1;     
            }
        } else if (testcaseToUse[range + 1] === "L"){
            distance = 0;
            result = distance;
            break;
        } else
            count = range + 1;
            while (count < testcaseToUse.length) {
                if (testcaseToUse[count] === "Z") {
                    range = count;
                    count = count + 1;
                    if (result <= 0) {
                        distance = -1;           
                        result = distance;
                    }
                    break;
                } else if (testcaseToUse[count] === "L"){
                    distance = count - range;
                    if (distance < output){
                        output = distance;
                        result = output - 1;
                        range = count;
                        break;
                    } else {
                        range = count;
                        break;
                    }
                } else {
                    count = count + 1;
                }
            }
    } else {
        range = range + 1;
        result = -1;
    }   
}

console.log("Input :", testcaseToUse, "Output :", result)
