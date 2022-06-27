'use strict';

/////////////////////////
// Default Parameters
/////////////////////////
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 Way
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   // ES6 Way
//   // write it after the parameter in the function
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

/////////////////////////
// Passing Arguments
// Values Vs Reference
/////////////////////////

// const flight = 'LH234'; //value
// const ahmed = {
//   // reference
//   name: 'Ahmed ',
//   passport: 28708011612057,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; // didnot change cause it is value
//   passenger.name = 'Mr. ' + passenger.name; // got changed cause it is reference

//   if (passenger.passport === 28708011612057) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, ahmed);
// // console.log(flight);
// // console.log(ahmed);

// // // Is the same as doing
// // const flightNum = flight;
// // const passenger = ahmed;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(ahmed);
// checkIn(flight, ahmed);

///////////////////////////////////////////
// Higher Order Functions
// Functions Accepting Callback Functions
///////////////////////////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, ''.toLowerCase());
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed By: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);
// // JS uses callbacks all the time

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
// Functions Returning Functions
///////////////////////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Ahmed');
// greeterHey('Walaa');

// greet('Hello')('Zake');

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// greet2('how are you')('Mahmoud');

////////////////////////////////
// The Call And Apply Methods
////////////////////////////////

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

////////////////////////////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');
///////////////////////////////////////////////

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// ///////////////////////////////////////
// // Immediately Invoked Function Expressions (IIFE)
// ///////////////////////////////////////

// const runOnce = function () {
//   console.log('This Will Never Run AGain NORMAL');
// };

// runOnce();

// // IIFE
// (function () {
//   console.log('this with never run again EXPRESSION');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log(`THIS WILL NEVER RUN AGAIN ARROW`))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// // console.log(isPrivate);
// console.log(notPrivate);

// ///////////////////////////////////////
// // Closures
// ///////////////////////////////////////

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} Passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// ///////////////////////////////////////
// // More Closure Examples
// ///////////////////////////////////////

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// // Reassigning f function
// h();
// f();
// g();
// f();

// console.dir(f);

// // Example 2

// const boardPassengers = function (n, wait) {
//   const preGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We Are Now Boarding ${n} Passengers`);
//     console.log(`There Are 3 Groups, Each With ${preGroup} Passengers`);
//   }, wait * 1000);

//   console.log(`We Will Start Boarding In ${wait} Seconds`);
// };

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

// boardPassengers(180, 3);

