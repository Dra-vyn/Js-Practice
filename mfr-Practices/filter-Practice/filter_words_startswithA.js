const sentences = [
  "just a phrase",
  "also another phrase",
  "arbitrary phrase",
  "An interesting phrase",
];

console.log(sentences.flatMap(x => x.split(" ")).filter(x => x[0].toLowerCase() === "a"));
