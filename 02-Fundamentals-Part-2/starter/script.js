"use strict";
/*
// Activate Strict Mode
// mode that strict our abillity to introduce bugs to our code and give us more informations about the errors
// and should come at the first of the script file

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 545634;
*/

// Functions

// function logger() {
//   console.log(`My Name is Jonas`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} Apples And ${oranges} Oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(3, 4));

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 1100, 86, 52];

let tips = [],
  total = [];

const calcTip = (arr) => {
  arr.forEach((element) => {
    let tip;
    if (element >= 50 && element <= 300) {
      tip = element * 0.15;
      tips.push(tip);
      total.push(element + tip);
    } else {
      tip = element * 0.2;
      tips.push(tip);
      total.push(element + tip);
    }
  });
};

const calcAverage = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
};
calcTip(bills);
console.log(calcAverage(tips));
console.log(calcAverage(total));
