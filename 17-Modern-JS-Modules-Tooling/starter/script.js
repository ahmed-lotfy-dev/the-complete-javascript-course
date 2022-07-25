// Imporiting Module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(shippingCost);
// addToCart('Beard Oil', 2);
// console.log(price,tq)

import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing Module');
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.price, ShoppingCart.tq);

// exporting default then importing the default
// however in practice we never mix named and default exports together in the same module
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

//impoorts is a live connection to the exported module thing
import add, { cart } from './shoppingCart.js';
add('pizza', 1);
add('bread', 5);
add('apples', 4);
//so that cart now has 3 objects with the values we added to cart
console.log(cart);

///////////////////////////////
// Top Level Await ES2022
///////////////////////////////

// await is now working outside of async function
// but it blocks the execution of the entire module now without async function
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not Very Clean So We'll Use Now Top Level Await Instead
// // lastPost.then(last=>console.log(last));

// const lastPost2 = await getLastPost()
// console.log(lastPost2)

/////////////////////////////////////////////////////////
// The Module Pattern
// the old module patern that was used before ES6
// how it was implemented to know old code when see it
/////////////////////////////////////////////////////////

// // encapsulate the data and return it just like modules private and exporting as return
// // IIFE Immediately Invocked Function Expression
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 239;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} Was Added To Cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} Ordered From Supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apples', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2)
// console.log(ShoppingCart2.shippingCost)

///////////////////////////////
// Common JS Modules
///////////////////////////////

// // CommonJS Modules are important for us because they've been used in nodejs
// // for almost all of its existence

// // Export
// // Not working in the browser but it would work in nodejs
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} Was Added To Cart`);
// };

// // Import
// const {addToCart} = require("./shoppingCart.js")

///////////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateCloneDeep)

if (module.hot) {
  module.hot.accept();
}


class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
