function cyan(text) {
  return "\x1B[36m" + text + "\x1B[0m";
}

function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function blue(text) {
  return "\x1B[34m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function yellow(text) {
  return "\x1B[33m" + text + "\x1B[0m";
}

function italic(text) {
  return "\x1B[3m" + text + "\x1B[0m";
}

function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}

function magenta(text) {
  return "\x1B[35m" + text + "\x1B[0m";
}

function playAgain() {
  if (confirm("Do you Wanna Play Again : ")) {
    console.clear();
    return startGame();
  }
  return;
}

function checkWord(secretWord, inputWord, noOfGuesses) {
  let bulls = 0;
  let cows = 0;
  const result = [];

  for (let index = 0; index < secretWord.length; index++) {
    if (inputWord[index] === secretWord[index]) {
      bulls++;
    } else if (inputWord.includes(secretWord[index])) {
      cows++;
    }
  }

  result.push(bulls, "🐂 bulls");
  result.push(cows, "🐮 cows");

  console.log(result.join(" "));

  return guessWord(secretWord, noOfGuesses - 1);
}

function gotIt(secretWord, input, noOfGuesses) {
  if (input === secretWord) {
    console.log(green("Hoorayy You Got it.....!!!"));
    return playAgain();
  }
  return checkWord(secretWord, input, noOfGuesses);
}

function isValid(input) {
  return input.length === 6;
}

function guess() {
  const input = prompt("enter your 6 letter Word :");

  if (!isValid(input)) {
    console.log(blue("Obey Rules 😑"));
    console.log(cyan("only 6 letter Word is valid"));
    return guess();
  }
  return input;
}

function guessWord(secretWord, noOfGuesses) {
  console.log("No Of chances left : ", noOfGuesses);
  if (noOfGuesses === 0) {
    console.log(red("OOPs!! No More Chances Available"));
    console.log("The Secret Word : ", secretWord);
    return playAgain();
  }

  const input = guess();
  return gotIt(secretWord, input, noOfGuesses);
}

function findWord() {
  const words = ["accept", "admire", "borrow", "budget", "cancel", "damage",
    "define", "escape", "export", "fabric", "finish", "flight",
    "future", "gather", "global", "hidden", "impact", "income",
    "island", "invite", "jacket", "junior", "leader", "legend",
    "manage", "master", "method", "native", "object", "online",
    "option", "parent", "police", "profit", "random", "recent",
    "regret", "remote", "remove", "repair", "repeat", "result",
    "rocket", "safety", "screen", "secure", "senior", "signal",
    "silver", "smooth"];

  const secretWord = words[Math.floor(Math.random() * 50)];
  const noOfGuesses = 10;

  return guessWord(secretWord, noOfGuesses);
}

function instructions() {
  console.log(underline(magenta(italic("RULES"))));
  console.log(cyan("One player sets a secret 6-letter word."));
  console.log(cyan("The guesser enters a 6-letter word on each turn."));
  console.log(cyan("\t ➡️ 🐂 Bull = Correct letter in the correct position"));
  console.log(cyan("\t ➡️ 🐮 Cow = Correct letter but in the wrong position"));
  console.log(cyan("Repeat guesses until the word is guessed (6 Bulls = win)"));

  console.log(red("-".repeat(125)));
  return findWord();
}

function startGame() {
  console.log(underline(yellow(bold("COWS AND BULLS"))));
  return instructions();
}

startGame();
