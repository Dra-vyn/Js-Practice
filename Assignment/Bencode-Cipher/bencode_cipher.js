function encode(input) {
  switch (typeof input) {
    case "number":
      return 'i' + input + 'e';
    case "string":
      return input.length + ":" + input;
    case "object":
      return "l" + checkLength(input) + "e";
  }
}

function checkLength(input) {
  let concatString = "";

  if (input.length !== 0) {
    
    for (let index = 0; index < input.length; index++) {
      concatString += encode(input[index]);
    }
  }

  return concatString;
}

function emoji(actual, expected) {
  return actual === expected ? "✅" : "🚫";
}

function displayFailingCase(input, actual, expected) {
  if (actual !== expected) {
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

function testAll() {
  testNumber();
  testString();
  testArray();
  testNestedArray();
}

function testNestedArray() {
  testEncode("nested array", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testEncode("nested array", [0, "", ["test"]], "li0e0:l4:testee");
  testEncode("nested array", ["", 0, []], "l0:i0elee");
  testEncode("nested array", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function testArray() {
  testEncode("array", [], "le");
  testEncode("array", [1], "li1ee");
}

function testString() {
  testEncode("string", "", "0:");
  testEncode("string", "hello world", "11:hello world");
  testEncode("string", "special!@#$chars", "16:special!@#$chars");
}

function testNumber() {
  testEncode("Number", 123, "i123e");
  testEncode("number", -42, "i-42e");
  testEncode("number", 0, "i0e");
}

testAll();
