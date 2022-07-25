// Exporting Module
console.log('Exporting Module');

// Blocking Code
// it will block import to the other module code until it waited & finished fetching
// so we need to use with good care take this into consideration
// use it for promises waiting for return from promises
// console.log('Start Fetching Users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish Fetching Users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} Was Added To Cart`);
};

const totalPrice = 257;
const totalQuantity = 27;

export { totalPrice, totalQuantity as tq };

// we only use default export when we want to export only one thing per module
// the value it self not the variable

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} Was Added To Cart`);
}
