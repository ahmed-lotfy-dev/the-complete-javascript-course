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
console.log(firstName);

// Variable name conventions
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
*/

// Taking Decisions: if / else statements
const age = 19;

if (age >= 19) {
  console.log(`he is old enough to issue adriver license 🎉🥳part`);
} else {
  console.log(`unfortunatly he is not old enough to issue a driver license 😢`);
}
