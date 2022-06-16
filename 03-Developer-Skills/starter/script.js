// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// test data 1: [17,21,23]
// test data 2: [12,5,-5,0,4]

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  // arr.forEach((element, index) => {
  //   console.log(`... ${element} C in day ${index + 1})}`);
  // });
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(`...${arr[i]} C in day ${i + 1}`);
  // }
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ,,,, `;
  }
  console.log("..." + str);
};

console.log(printForecast(test1));
console.log(printForecast(test2));
