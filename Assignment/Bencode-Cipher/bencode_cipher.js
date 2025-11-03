function encode(input) {
  switch (typeof input) {
    case "number":
      return 'i' + input + 'e';
    case "string":
      return input.length + ":" + input;
    case "object":
      return "l" + addString(input) + "e";
  }
}

function decode(input) {
  if (input[0] === "i") {
    return parseInt(input.slice(1,input.length - 1));
  }

  if (input[0] === "l") {
    return decodeArray(input.slice(1,input.length - 1));
  }

  if (typeof parseInt(input[0]) === "number") {
    return input.slice(input.indexOf(":") + 1, input.length);
  }
  
}

function decodeArray(input) {
  const array = [];

  if (input.length !== 0) {
    const slicedValue = decode(input);
    array.push(slicedValue);
  }

  return array;
}

function pushElements(input, array) {
  return array.push(input);
}

function addString(input) {
  let concatString = "";

  if (input.length !== 0) {
    
    for (let index = 0; index < input.length; index++) {
      concatString += encode(input[index]);
    }
  }

  return concatString;
}

function underline(content) {
  return content + "\n" + "-".repeat(content.length);
}

function emoji(actual, expected) {
  return areEqual(actual, expected) ? "✅" : "🚫";
}

function isElementsEqual(actual, expected) {
  for (let index = 0; index < actual.length; index++) {
    if (actual[index] !== expected[index]) {
      return false;
    }
  }

  return true;
}

function areEqual(actual, expected) {
  const isLengthEqual = actual.length === expected.length;
  return isLengthEqual && isElementsEqual(actual, expected);
}

function displayFailingCase(input, actual, expected) {
  if (!areEqual(actual, expected)) {
    console.log("  ↠  Input : ", input);
    console.log("  ↠  Actual Output : ", actual);
    console.log("  ↠  Expected Output : ", expected);
  }
}

function displayOutput(actual, desc, input, expected) {
  const finalEmoji = emoji(actual, expected);

  console.log(finalEmoji, desc);

  return displayFailingCase(input, actual, expected);
}

function testEncode(desc, input, expected) {
  const actual = encode(input);
  return displayOutput(actual, desc, input, expected);
}

function testDecode(desc, input, expected) {
  const actual = decode(input);
  return displayOutput(actual, desc, input, expected);
}

function testAll() {
  console.log(underline("Bencode Cipher Encode"));
  testEncodeNumber();
  testEncodeString();
  testEncodeArray();
  testEncodeNestedArray();

  console.log("\n");
  console.log(underline("Bencode Cipher Encode"));
  testDecodeNumber();
  testDecodeString();
  testDecodeArray();
  // // testDecodeNestedArray();
}

function testEncodeNestedArray() {
  testEncode("nested array", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testEncode("nested array", [0, "", ["test"]], "li0e0:l4:testee");
  testEncode("nested array", ["", 0, []], "l0:i0elee");
  testEncode("nested array", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function testEncodeArray() {
  testEncode("array", [], "le");
  testEncode("array", [1], "li1ee");
}

function testEncodeString() {
  testEncode("string", "", "0:");
  testEncode("string", "hello world", "11:hello world");
  testEncode("string", "special!@#$chars", "16:special!@#$chars");
}

function testEncodeNumber() {
  testEncode("Number", 123, "i123e");
  testEncode("number", -42, "i-42e");
  testEncode("number", 0, "i0e");
}

// function testDecodeNestedArray() {
//   testDecode("nested array", "l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]]);
//   testDecode("nested array", "li0e0:l4:testee", [0, "", ["test"]]);
//   testDecode("nested array", "l0:i0elee", ["", 0, []]);
//   testDecode("nested array", "l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]]);
// }

function testDecodeArray() {
  testDecode("array", "le", []);
  testDecode("array", "li1ee", [1]);
}

function testDecodeString() {
  testDecode("string", "0:", "");
  testDecode("string", "11:hello world", "hello world");
  testDecode("string", "16:special!@#$chars", "special!@#$chars");
}

function testDecodeNumber() {
  testDecode("Number", "i123e", 123);
  testDecode("number", "i-42e", -42);
  testDecode("number", "i0e", 0);
}

testAll();
