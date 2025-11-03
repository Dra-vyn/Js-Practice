function encode(input) {
  return `"i${input}e"`;
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

function test(desc, input, expected) {
  const actual = encode(input);
  return displayOutput(actual, desc, input, expected);
}

function testAll() {
  test("Number", `123`, `"i123e"`);
}

testAll();
