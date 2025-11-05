const HOLLOW_RECT = "hollow-rectangle";

const MAX = 10e7; // 10**8 ->times to almost 16ms
const SAFE_DELAY = 5;//delays by 16ms
const FAST_DELAY = 4;//delays by 14ms
const SLOW_DELAY = 10;//delays by 30ms
const ULT_FAST_DELAY = 2;//delays by 10ms
let init = 0;

function isDimensionZero(columns, rows) {
  return columns === 0 || rows === 0;
}

function generatePattern(style, dimensions) {
  // implement this
  const columns = dimensions[0];
  const rows = dimensions[1];

  if (isDimensionZero(columns, rows)) {
    return "";
  }

  return choosePattern(style, columns, rows);
}

function choosePattern(style, columns, rows) {
  return hollowRectangle(columns, rows);
}

function pad(line, length) {
  return line.padStart(length);
}

function hollowRectangle(columns, rows) {

  for (let index = 0; index < 50; index++) {
    const filledLine = generateLine(columns);
    const lines = [filledLine];
    const edge = "*";
    const center = " ";
  
    for (let row = 1; row < rows - 1; row++) {
      lines.push(generateLine(columns, edge, center));
      animateThis(lines.join("\n"));
      delays();
    }
    
    lines.push(filledLine);
    console.log(animateThis(lines.slice(0, rows).join("\n")));
  }

  return;
}

function generateLine(length, edge = "*", center = "*") {
  if (length < 3) {
    return (edge + edge).slice(0, length);
  }

  return edge + center.repeat(length - 2) + edge;
}

function test(style, dimensions) {
  return generatePattern(style, dimensions);
}

function testHollowRectangle() {
  test(HOLLOW_RECT, [30, 30]);
}

function testAll() {
  testHollowRectangle();
}

testAll();

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
