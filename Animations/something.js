const MAX = 10e7; // 10**8 ->times to almost 16ms
const FAST_DELAY = 4;//delays by 14ms
let init = 0;

function colorize(text) {
  // const color = Math.floor(Math.random() * (231 - 1 + 1)) + 1;
  const color = init;
  init++;
  return `\x1B[38;5;${color % 231}m${text} \x1B[0m`;
}

function delay(multiplier = 2) {
  for (let _ = 0; _ < MAX * multiplier; _++);
}

function animateThis(sequence) {
  console.log(colorize(sequence));
  delay(FAST_DELAY);
  console.clear();
}

function delays() {
  for (let index = 0; index < 50000000; index++) {
  }
  return;
}

function animate() {

  for (let iIndex = 0; iIndex < 100; iIndex++) {
    let array = [];
  
    for (let index = 0; index < 20; index++) {
      array.push(" ".repeat(9) + "*");
      animateThis(array.join("\t"));
      array.unshift(" ".repeat(19) + "*")
      animateThis(array.join(" "));
      array.push(" ".repeat(9) + "*");
      animateThis(array.join("\t"));
      array.unshift(" ".repeat(19) + "*")
      animateThis(array.join(" "));
      array.push(" ".repeat(9) + "*");
      animateThis(array.join("\t"));
      array.unshift(" ".repeat(19) + "*")
      animateThis(array.join(" "));
      delays();
    }
  }
}

animate();
