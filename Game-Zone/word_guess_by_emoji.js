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

function randomQuery(round, score, player) {
  const emojiQuery = ["🌧️ + 🏹", "🔥 + 🐶", "☀️ + 🌺", "🐮 + 👦", "🌲 + 🍎", "🥛 + 🤝", "☕️ + 🪑",
    "💖 + 🦜🦜", "❄️ + 👨", "🔥 + 🚚", "🧈 + 🪰", "🔥 + 🍫", "🍔 + 👑", "🥧 + 🐀", "🍳 + 🎂", "🗑️ + ⚽️",
    "☾ + 💡", "❄️ + 🍺", "🔴 + 🐂", "🚪 + 🔔", "💡 + 🏠", "⭐️ + 🐠", "☀️ + 👓", "💦 + 🍂", "🧅 + 💍",
    "👂 + 💍", "🌊 + 🐴", "⭐️ + 💸", "👂 + 📱", "🥩 + ⚽️", "🌮 + 🔔", "🛠️ + 📦", "📸 + 📈", "🐜 + 👨",
    "🍕 + 🛖", "🍬 + 🥔", "✉️ + 📦", "🌝 + 🔑", "🏆 + 🎂", "🌳 + 🏠", "🥜 + 🧈", "🗡️ + 🐟"]
  const index = Math.floor(Math.random() * emojiQuery.length);
  const emojiAnswer = ["rainbow", "hotdog", "sunflower", "cowboy", "pineapple", "milkshake",
    "teacher", "lovebirds", "snowman", "firetruck", "butterfly", "hotchocolate", "burgerking", "pirate",
    "pancake", "basketball", "moonlight", "polarbear", "redbull", "doorbell", "lighthouse", "starfish",
    "sunglasses", "waterfall", "onionrings", "earring", "seahorse", "starbucks", "earphone", "meatball",
    "tacobell", "toolbox", "photograph", "antman", "pizzahut", "sweetpotato", "mailbox", "monkey", "cupcake",
    "treehouse", "peanutbutter", "swordfish"];

  return generateQuery(emojiQuery[index], emojiAnswer[index], round + 1, score, player);
}

function guess() {
  const input = prompt("Enter Your Guess : ").toLowerCase();

  if (isNumber(input)) {
    console.log(cyan("only Proper Names is allowed"));
    return guess();
  }

  return input;
}

function delay() {
  for (let index = 0; index < 5000000000; index++) {
  }
  return;
}

function generateQuery(emojiQuery, emojiAnswer, round, score, player) {
  console.clear();
  console.log("Round ", round, ":");
  console.log("Guess This....");
  console.log(emojiQuery);

  const input = guess();

  if (input === emojiAnswer) {
    console.log(magenta(emojiAnswer), green("You Got It Right ..!!,\n Keep Moving..."));
    score++;
    console.log(bold(`${player}'s Score is :`), yellow(score));
    delay();
    return randomQuery(round, score, player);
  }

  console.log(red("OOPs...Better Luck Next Time."));
  console.log(blue(bold(emojiAnswer)));
  console.log(bold(`${player}'s final Score is : `), yellow(score), "🏆");
  return playAgain();

}

function playersName() {
  const player = prompt("Enter your name : ");


  const round = 0;
  const score = 0;

  console.log(player, "Your a Game Starts Here.");
  return randomQuery(round, score, player);
}

function isNumber(inputNum) {
  return typeof inputNum === "number" && !isNaN(inputNum);
}

function instructions() {
  const rules = [cyan(italic("» 1. Present the Emoji Clue : ")),
  magenta("\tOne player (or the game host) shows a set of 3-4 emojis that represent a word, phrase, movie, or concept."),
    " ", cyan(italic("» 2. Guess the Word:")),
  magenta("\tThe guessing player or team tries to interpret the emojis and say the correct answer."), " ",
  cyan(italic("» 3. Use Hints (Optional):")), " ",
  magenta("\tA hint can be provided if the player is stuck (limit to 1 hint per round)."),
  cyan(italic("» 4. Scoring:")),
  green("\t✵ Correct answer on first try: ✅ 2 points"),
  yellow("\t✵ Correct answer after a hint: ✅ 1 point"),
  red("\t✵ Incorrect answer: ❌ 0 points"), " ",
  cyan(italic("» 5. Next Turn:")),
  magenta("\tMove to the next player or team and repeat."), " ",
  cyan(italic("» 6. Winning:")),
  magenta("\tThe player or team with the most points at the end of all rounds wins!")];

  console.log(rules.join("\n"));
  console.log(red("-".repeat(125)));

  return playersName();
}

function startGame() {
  console.log("\t\t\t", underline(yellow(bold("EMOJI WORD GUESSING GAME"))));
  console.log("");
  return instructions();
}

startGame();
