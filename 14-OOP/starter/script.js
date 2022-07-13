'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
///////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never to this!
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
// };

// const ahmed = new Person('Ahmed', 1987);

// console.log(ahmed);

// // 1- New Empty Object Is Created
// // 2- Function Is Created, this = {}  //the empty object
// // 3- {} Linked To The Prototype
// // 4- The Function Automatically Return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(ahmed instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();

///////////////////////////////////////
// Prototypes
///////////////////////////////////////

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
///////////////////////////////////////

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// // /////////////////////////////////////
// // ES6 Classes
// // /////////////////////////////////////

// // Class Expression
// // const PersonCl = class {};

// // Class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Method will be added to the .prtototype property
//   // Instance Methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property is allready exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     // we put _ in front of the property name then make a setter function with it again full name
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //Static Methods
//   static hey() {
//     console.log('Hey There 👋');
//     console.log(this);
//   }
// }

// const ahmed = new PersonCl('Ahmed Lotfy', 1987);
// console.log(ahmed);
// ahmed.calcAge();
// console.log(ahmed.age);

// console.log(ahmed.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hello And Welcome ${this.firstName}`);
// // };

// ahmed.greet();

// // 1- Classes are not hoisted even if theyre declaration not work to use them before declared
// // 2- Classes are first class citizens can pass them into functions or return them from functions
// // 3- Classes are executed in strict mode even if we didnt declare it strict mode

// const zaki = new PersonCl('Ahmed Zaki', 1991);

// // not available on the instances of the object it self created with PersonCl
// PersonCl.hey();

// // /////////////////////////////////////
// // Setters and Getters
// // /////////////////////////////////////

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// /////////////////////////////////////
// // Object.create
// /////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// ///////////////////////////////////////
// // Inheritance Between "Classes": Constructor Functions
// ///////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
///////////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// ///////////////////////////////////////
// // Inheritance Between "Classes": Object.create
// ///////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   // BUG in video:
//   // console.log(`My name is ${this.fullName} and I study ${this.course}`);

//   // FIX:
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

///////////////////////////////////////
// Another Class Example
///////////////////////////////////////

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }

//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Has Been Approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-150);
// acc1.deposit(250);
// acc1.withdrawal(150);
// acc1.requestLoan(1000);
// console.log(acc1);
// console.log(acc1.pin);

/////////////////////////////////////////////////////
// Encapsulation: Protected Properties and Methods
/////////////////////////////////////////////////////

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     this._movements = [];
//     this._pin = pin;
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }

//   // Public Interface
//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Has Been Approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-150);
// acc1.deposit(250);
// acc1.withdrawal(150);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// console.log(acc1.pin);

// /////////////////////////////////////////////////////
// // Encapsulation: Private Class Fields and Methods
// /////////////////////////////////////////////////////

// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // (there is also the static version)

// class Account {
//   // 1- Public Fields (instances) will be on all the instances of the class not on the prototype
//   locale = navigator.language;

//   // 2- Private Fields (instances) will be on all the instances of the class not on the prototype
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     // this._movements = [];
//     this.#pin = pin;
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }

//   // 3- Public Methods

//   // Public Interface

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Has Been Approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log(`Helper`);
//   }

//   // Private Methods
//   // #approveLoan(val) {

//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-150);
// acc1.deposit(250);
// acc1.withdrawal(150);
// acc1.requestLoan(1000);

// console.log(acc1.getMovements());
// console.log(acc1);

// // console.log(acc1.#movements);
// // console.log(acc1.#pin );
// // console.log(acc1.#approveLoan)
// Account.helper();

// acc1
//   .deposit(300)
//   .deposit(500)
//   .withdrawal(35)
//   .requestLoan(25000)
//   .withdrawal(4000);
// console.log(acc1.getMovements());
