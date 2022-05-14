/*
// Linking a JavaScript File
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Values and Variables
console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);

// Variable name conventions
console.log(firstName);
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1987;
console.log(typeof year);

console.log(typeof null);

// let , const and var

let age = 30;
age = 31;

const birthYear = 1987;
// birthYear = 1986;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Shouman';
console.log(lastName);

// Basic Operators
// Math Operators
const now = 2037;
const ageAhmed = now - 1986;
const ageJonas = now - 1991;

console.log(ageAhmed, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Ahmed';
const lastName = 'Lotfy';
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1

console.log(x);

// Comparison Operators
console.log(ageAhmed > ageJonas); // > , < , <= , >=
console.log(ageAhmed >= 35);

const isFullAge = ageAhmed >= 35;

console.log(now - 1987 > now - 2023);

// Operator Precedence

const now = 2037;
const ageAhmed = now - 1991;
const ageWalaa = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
console.log(5 - 10 - 25);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = ageAhmed + ageWalaa / 2;
console.log(ageAhmed, ageWalaa, averageAge);

// String And Template Literals
const firstName = 'Ahmed';
const job = 'Developer';
const birthYear = 1987;
const year = 2037;

const ahmed =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' Years Old ' + job + '!';
console.log(ahmed);

const ahmedNew = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
console.log(ahmedNew);

console.log('String with \n\
Hello Wold\n\
yea this is a new line');

console.log(`this is multi
line javascript
Code`);


// Taking Decisions: if / else statements
const age = 18;

if (age >= 19) {
  console.log(`he is old enough to issue adriver license 🎉🥳part`);
} else {
  const yearsLeft = 19 - age;
  console.log(
    `unfortunatly he is not old enough to issue a driver license 😢 wait another ${yearsLeft} years`
  );
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
/////////////////////////////

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


// Test Data 1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// Test Data 2
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / (johnHeight * johnHeight);

const markHigherBmi = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBmi);
const markLowerBmi = markBmi < johnBmi;
console.log(markBmi, johnBmi, markLowerBmi);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBmi = (markWeight / markHeight ** 2).toFixed(2);
const johnBmi = (johnWeight / (johnHeight * johnHeight)).toFixed(2);

const markHigherBmi = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBmi);
const markLowerBmi = markBmi < johnBmi;
console.log(markBmi, johnBmi, markLowerBmi);

if (markBmi > johnBmi) {
  console.log(
    `Mark BMI is ${markBmi} and its Higher Than John BMI which is ${johnBmi}`
  );
} else {
  console.log(
    `John Bmi is ${johnBmi} and its  Higher Than Mark BMI which is ${markBmi}`
  );
}

// Type Conversion And Coercion

const inputYear = '1991';
console.log(inputYear + 19);
console.log(Number(inputYear), inputYear);

console.log(Number('Ahmed'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// Truthy And Falthy Values
// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ahmed'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("don't spend it all ;");
} else {
  console.log('you should get a job!');
}

let height;
if (height) {
  console.log('yay height is defined');
} else {
  console.log('height is undefined');
}


// Equality Operators: == Vs. ===
// === strict equality operator
// == loose equality operator doesn't make type coercion

const age = '18';

if (age === 18) {
  console.log(`You just became and adult :D (strict)`);
}
if (age == 18) {
  console.log(`You just became and adult :D (loose)`);
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) {
  console.log('Why not 23?');
}

// The AND,  OR & NOT Operators

const age = 18;
const isGoodVision = true;

if (age >= 18 && isGoodVision) {
  console.log(
    `You Have A Good Vision And Meet The Age Requirement to Have Your Driver License 🎉🥳`
  );
}
// else if (age < 18 ) {
//   console.log(
//     `Unfortunatly You Dont Meet The Age Requirment For Having A Driver License driver license 😢 wait another ${
//       age - 18
//     } years`
//   );
// }
else if (!isGoodVision) {
  console.log(
    `Unfortunatly You Dont Meet The Good Vision Requirement For Having A Driver License 😢 Pls Go Make Lassek`
  );
}

console.log(!age < 18);
console.log(isGoodVision);

*/
