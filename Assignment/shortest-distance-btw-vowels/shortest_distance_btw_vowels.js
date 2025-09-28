function sliceString(string) {
  let prevIndex = -1;
  let prevDistance = string.length;
  
  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    const ischaracterVowel = isVowel(character);
    
    if (ischaracterVowel && prevIndex === -1) {
        prevIndex = index;
    } else if(ischaracterVowel) {
      const distance = index - prevIndex;
      prevDistance = distance < prevDistance ? distance : prevDistance;
    }
  }
  return prevDistance === string.length ? -1 : prevDistance;
}

function composeMessage(actual, expected) {
  const message = actual === expected
  const finalEmoji = message ? "✅" : "🚫";
  return finalEmoji;
}

function test(string, expected) {
  const actual = sliceString(string);
  const emoji = composeMessage(actual, expected);
  const received = "Received Distance : ";
  const anticipate = "Expected Distance : ";

  console.log(emoji, "|", string, "\n", received, actual, anticipate, expected);
}

function isVowel(character) {
  switch(character) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

function testAll() {
  test("hello", 3);
  test("hlls", -1);
  test("hells", -1);
  test("heyyy", -1);
  test("nothing", 3);
  test("beautiful", 1);
  test("take", 2);
  test("pleasant", 1);
  test("scenery", 2);
}

testAll();
