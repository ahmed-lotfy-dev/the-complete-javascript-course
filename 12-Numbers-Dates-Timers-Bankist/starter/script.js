'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2022-06-29T14:11:59.604Z',
    '2022-06-30T17:01:17.194Z',
    '2022-07-01T23:36:17.929Z',
    '2022-07-02T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2022-06-29T16:33:06.386Z',
    '2022-06-30T14:43:26.374Z',
    '2022-07-01T18:49:59.371Z',
    '2022-07-02T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovement = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDayPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `Last Week`;
  // if (daysPassed > 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? currentAccount.movements.slice().sort((a, b) => a - b)
    : currentAccount.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    //Format Date
    const displayDate = formatMovement(date, account.locale);
    // Formate Numbers Movement
    const formattedMovement = formatCur(mov, account.locale, account.currency);
    //

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMovement}</div>
  </div>
`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(
    account.balance,
    account.locale,
    account.currency
  );
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, account.locale, account.currency);

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, account.locale, account.currency);

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = formatCur(
    interest,
    account.locale,
    account.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(word => word[0])
        .join(''))
  );
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call , Print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When time 0 seconds, stop time and then log out user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    // Decrease 1second
    time--;
  };
  // Set time to 5 minutes
  let time = 300;
  // Call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};
// Event Handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

// Experimenting With API

//
btnLogin.addEventListener('click', function (e) {
  // Prevent From Submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI AND Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '1';

    // Create Current Date And Time

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // // Get The Locale From User Browser
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDay()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} , ${hour}:${minute}`;

    // Clear Input Fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // Start Logout Timer
    // Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    //Reset Timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
    inputLoanAmount.value = '';

    //Reset Timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

////////////////////////////////////////
// Converting And Checking Numbers
///////////////////////////////////////

// console.log(23 === 23.0);

// // Base 10 - 0 to 9  //  1/10 = 0.1 // 3/10 = 3.3333333333333333333333333333333333333333333
// // Binary base 2 - 0 and 1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// //conversion string to a number
// console.log(Number('23'));
// console.log(+'23');

// // parsing

// // extract the number from string
// console.log(Number.parseInt('30px', 10));

// // the string need to start with the number to extract it
// console.log(Number.parseInt('p30', 10));

// console.log(Number.parseFloat('2.5rem'));

// // isNaN  // checks if any value is not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// // isFinite // is the best way to checking if the value is number or not
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

// // isInteger  // Checking if the value is Integer
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

////////////////////////////////////////
// Math And Rounding
///////////////////////////////////////

// // sqrt square root
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// // max does type coercion and not parsing with strings
// console.log(Math.max(5, 17, 16, 24, 36));
// console.log(Math.max(5, 17, '16', 24, 36));
// console.log(Math.max(5, 17, '16px', 24, 36));

// // min does type coercion and not parsing with strings
// console.log(Math.min(5, 17, 16, 24, 36));

// // Calculate the are of circule with 10 px
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // Math.random to generate random number between 0 and 1
// console.log(Math.trunc(Math.random() * 5 + 1));

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// // 0...1 -> 0...(max-min)-> min...max

// console.log(randomInt(10, 20));

// // Rounding Integers // All Of Them Do Type Coercion
// console.log(Math.trunc(23.3));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// //Rounding Decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

////////////////////////////////////////
// The Remainder Operator
///////////////////////////////////////

// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2); // === 0  is even number
// console.log(6 / 2); // === 3

// console.log(7 % 2); // === 1 is odd number
// console.log(7 / 2); // === 3.5 not even number

// const isEven = n => n % 2 === 0;

// const isOdd = n => n % 2 === 1;

// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// console.log(isOdd(8));
// console.log(isOdd(23));
// console.log(isOdd(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     // 0 , 2 , 4 , 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     // 0 , 3, 6 , 9
//     if (i % 3 === 0) row.style.backgroundColor = 'lightblue';
//   });
// });

////////////////////////////////////////
// Numeric Seperators
///////////////////////////////////////

// // 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.14_15;
// console.log(PI);
// // canot place 2 __ PI = 3.14__15
// // cannot place it in the end or in the first of number PI = _3.1415_
// // cannot place it infront of the dot .  PI = 3_._1415
// // cannot convert strings contain a number
// console.log(Number('230_000')); // cannot use it with converting number seperator = NaN

// ////////////////////////////////////////
// // Working With BigInt
// ///////////////////////////////////////

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(4838430248342043823408394839483204n);
// console.log(BigInt(48384302));

// // Operations
// console.log(10000n + 10000n);
// console.log(36286372637263726376237263726372632n * 10000000n);
// // console.log(Math.sqrt(16n));

// const huge = 20289830237283728378237n;
// const num = 23;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(huge + ' is REALLY big!!!');

// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

// ////////////////////////////////////////
// // Creating Dates
// ///////////////////////////////////////
// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 02 2022 13:15:33'));
// console.log(new Date('December 24 2015'));
// console.log(new Date(account1.movementsDates.at(0)));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // Working With Dats
// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(future.toUTCString());
// console.log(future.toDateString());

// console.log(new Date(2142249785000));
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

///////////////////////////////////////
// Operations With Dates
///////////////////////////////////////

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const days1 = calcDayPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

///////////////////////////////////////
// Internationalizing Numbers (Intl)
///////////////////////////////////////

// const num = 3884764.23;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

///////////////////////////////////////
// Timers
///////////////////////////////////////

// setTimeout;
// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// // setInterval

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
