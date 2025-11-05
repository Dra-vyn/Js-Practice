function isArrayEqual(array1, array2, index) {
  const isArrayLengthSame = isArrayLengthEqual(array1, array2);

  if (index === array1.length && index === array2.length) {
    return true;
  }

  return ((array1[index] === array2[index]) && isArrayLengthSame) ? isArrayEqual(array1, array2, index + 1) : false;
}

function isArrayLengthEqual(array1, array2) {
  return array1.length === array2.length;
}

function emoji(actual, expected) {
  return actual === expected ? "✅" : "🚫";
}

function displayFailingCase(array1, array2, actual, expected) {
  if (actual !== expected) {
    console.log("  ↠  Input : ", array1, array2);
    console.log("  ↠  Actual Output : ", actual);
    console.log("  ↠  Expected Output : ", expected);
  }
}

function displayOutput(actual, type, array1, array2, expected) {
  const finalEmoji = emoji(actual, expected);

  console.log(finalEmoji, type);

  return displayFailingCase(array1, array2, actual, expected);
}

function test(type, array1, array2, expected) {
  const actual = isArrayEqual(array1, array2, 0);
  return displayOutput(actual, type, array1, array2, expected);
}

function testAll() {
  test("simple array", [1,2,3], [1,2,3], true);
  test("simple array", [1,2,3, 4], [1,2,3], false);
  test("simple array", [1,2,], [1,2,3], false);
  test("simple array", [], [], true);
  test("simple array", [], [1], false);
}

testAll();
