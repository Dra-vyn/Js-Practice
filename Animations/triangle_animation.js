const MAX = 10e7; // 10**8 ->times to almost 16ms
const FAST_DELAY = 4;//delays by 14ms
const TRIANGLE = "triangle";
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

function isDimensionZero(columns, rows) {
  return columns === 0 || rows === 0;
}

function generatePatterns(style, dimensions) {
  // implement this
  const columns = dimensions[0];
  const rows = dimensions[1];

  if (isDimensionZero(columns, rows)) {
    return "";
  }

  return choosePattern(style, columns, rows);
}

function choosePattern(style, columns, rows) {
  switch (style) {
    case TRIANGLE:
      return triangle(columns);
  }
}

function triangle(size) {

  for (let index = 0; index < 50; index++) {
    const lines = [];
    let count = 0;

    for (let row = 1; row <= size; row = row + 2) {
      lines.push("*".repeat(row).padStart(Math.floor(size + count)));
      count++;
      animateThis(lines.join("\n"));
      delays();
    }
    lines.slice(0, size).join("\n");

    animateThis(lines.join("\n"));
  }

  return;
}

function test(style, dimensions) {
  return generatePatterns(style, dimensions);
}

function testTriangle() {
  test(TRIANGLE, [60]);
}

function testAll() {
  testTriangle();
}

testAll();
