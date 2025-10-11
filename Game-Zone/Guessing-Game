function guess() {
  const input = prompt("enter your Number :");
  const inputNum = parseInt(input);

  return !isNumber(inputNum) ? guess() : inputNum;
}

function isNumber(inputNum) {
  return typeof inputNum === "number" && !isNaN(inputNum);
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function blue(text) {
  return "\x1B[34m" + text + "\x1B[0m";
}

function playAgain() {
  if (confirm("Do you Wanna Play Again : ")) {
    console.clear();
    return secretNumber();
  }
  return;
}

function guessingGame(secretNum, noOfGuesses) {
  if (noOfGuesses === 0) {
    console.log(red("OOPs!! No More Chances Available"));
    console.log("The Secret Number : ", secretNum);
    return playAgain();
  }

  const inputNum = guess();
  return gotIt(secretNum, inputNum, noOfGuesses);
}

function gotIt(secretNum, inputNum, noOfGuesses) {
  if (inputNum === secretNum) {
    console.log(green("Hoorayy You Got it.....!!!"));
    return playAgain();
  }

  position(secretNum, inputNum);
  return guessingGame(secretNum, noOfGuesses - 1);
}

function position(secretNum, inputNum) {
  if (Math.abs(secretNum - inputNum) < 5) {
    console.log(blue("TOO CLOSE"));
    return;
  }

  const HighOrLow = secretNum > inputNum ? "LOW" : "HIGH";
  return console.log(blue(HighOrLow));;
}

function secretNumber() {
  const secretNum = Math.round(Math.random() * 100)
  return guessingGame(secretNum, 5);
}

secretNumber();
