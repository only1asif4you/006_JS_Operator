// JavaScript Operators :

/*
 * Arithmetic Operator :
 */
let a = 50;
let b = 20;
let c = a % b;
console.log(c);

/*
let userInput = prompt("Enter your name : ");
let number = parseInt(userInput);

if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is odd number`);
}
*/

let x = 10;
x = x + 1;
x++; // Increment
console.log(x);

let y = 20;
y = y - 1;
y--; // Decrement
console.log(y);

/*
 * Comparison Operator :
 */
let p = 5;
let q = 10;
console.log(p == q); // Equal to
console.log(p === q); // Equal value and Equal type
console.log(p !== q); // Not Equal value ou Not
console.log(p > q); // Greater than
console.log(p < q); // Less than
console.log(p <= q); // Less than Equal to
console.log(p >= q); // Greater than Equal to

/*
 * Logical Operator :
 */
// && AND Operator
// || OR Operator
// !(p<q) NOT Operator

/*
 * Assignment Operator :
 */
let j = 10;
let k = 20;

j = j + k;
j += k;

j = j - k;
j -= k;

j = j * k;
j *= k;

j = j / k;
j /= k;

j = j % k;
j %= k;

j = j ** k;
j **= k;
console.log(j);

/*
 * Conditional (Ternary) Operator :
 */
let m = a > b ? "True" : "False";
let o = a < b ? true : false;
console.log(m);

let n = a < b ? "True" : "False";
console.log(n);

let firstName = "Hi";
