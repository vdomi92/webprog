import { numbers, matrix, searchResults } from "./data.js";

const a = numbers.map((e) => Math.pow(e, 2));
console.log("A: ");
console.log(a);

numbers.sort((a, b) => a - b);
console.log("B: ");
console.log(numbers[0]);

let cres = [];
for (let i = 0; i < matrix.length; i++) {
  let isOnlyZero = true;
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] !== 0) isOnlyZero = false;
  }
  if (isOnlyZero) cres.push(i);
}

console.log("C: ");
cres.length == 0 ? console.log(-1) : cres.map((e) => console.log(e));

console.log("D: ");
let dres = searchResults.Search.filter(
  (Search) => Search.Year > 2010 && Search.Type === "movie"
).map((elem) => console.log(elem.imdbID));
