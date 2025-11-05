function display() {

  for (let iIndex = 0; iIndex < 50; iIndex++) {
    const array = [];
    const lines = [];
    array.push("\n".repeat(10) + "\t".repeat(20))
    for (let index = 0; index < 5; index++) {
      console.clear();
      array.push("\t".repeat(3) + h[index] + "\t\t" + a[index] + "\t\t" + p[index] + "\t\t" + p[index] + "\t\t" + y[index])

      animateThis(array.join("\n"));
      console.log("\n".repeat(6 - index))

      lines.push("\t".repeat(3) + d[index] + "\t\t" + i[index] + "\t\t" + w[index] + "\t\t" + a[index] + "\t\t" + l[index] + "\t\t" + i[index])
      animateThis(lines.join("\n"));
      delays();
      delays();

    }
  }
}

function word() {
  const happy = "\t".repeat(3) + h[index] + "\t\t" + a[index] + "\t\t" + p[index] + "\t\t" + p[index] + "\t\t" + y[index]
  const diwali = "\t".repeat(3) + d[index] + "\t\t" + i[index] + "\t\t" + w[index] + "\t\t" + a[index] + "\t\t" + l[index] + "\t\t" + i[index]
}

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
  // delay(FAST_DELAY);

}

function delays() {
  for (let index = 0; index < 500000000; index++) {
  }
  return;
}

const h = ["*     *", "*     *", "*******", "*     *", "*     *"];
const a = ["  ***  ", " *   * ", "*******", "*     *", "*     *"];
const p = ["*****", "*   *", "*****", "*    ", "*    "];
const y = ["*   *", " * * ", "  *  ", "  *  ", "  *  "];
const d = ["****  ", "*   * ", "*    *", "*   * ", "****"]
const i = ["*****", "  *  ", "  *  ", "  *  ", "*****"]
const w = ["*     *", "*     *", "*  *  *", "* * * *", "**   **"]
const l = ["*", "*", "*", "*", "*****"];

display();
