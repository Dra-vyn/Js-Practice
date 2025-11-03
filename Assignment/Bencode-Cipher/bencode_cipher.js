function encode(input) {
  switch (typeof input) {
    case "number":
      return `"i${input}e"`;
    case "string":
      return `"${input.length}:${input}"`;
  }
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
  test("Number", 123, `"i123e"`);
  test("number", -42, `"i-42e"`);
  test("number", 0, `"i0e"`);
  test("string", "", `"0:"`);
  test("string", "hello world", `"11:hello world"`);
  test("string", "special!@#$chars", `"16:special!@#$chars"`);
}

testAll();
