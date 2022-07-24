'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getJSON = function (url, errMsg = 'Something Went Wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg}, ${response.status}`);
    }
    return response.json();
  });
};

const renderErorr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${Object.values(data.flags)[0]}" />
      <div class="country__data">
        <h3 class="country__name">${Object.values(data.name)[0]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} million</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
  // countriesContainer.style.opacity = 1;  // will be in the finally method in the chanining cause it will always happen no mater fullfiled or rejected fetch or request
};

// ///////////////////////////////
// // XMLHttpRequest AJAX Call
// //////////////////////////////

// const getCountryData = function (country) {
//   const apiURL = 'https://restcountries.com/v2';

//   const request = new XMLHttpRequest();

//   request.open('GET', `${apiURL}/name/${country}`);

//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('egypt');
// getCountryData('usa');

///////////////////////////////
// Welcome To Callback Hell
///////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${Object.values(data.flags)[0]}" />
//       <div class="country__data">
//         <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   const apiURL = 'https://restcountries.com/v2';

//   //Ajax Call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `${apiURL}/name/${country}`);
//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Get Country 1
//     renderCountry(data);

//     // Get Neighbour Country 2
//     const neighbour = data.borders?.[1];

//     if (!neighbour) return;
//     console.log(neighbour);
//     //Ajax Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `${apiURL}/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('egypt');

// // Callback Hell
// setTimeout(() => {
//   console.log('1 Second Passed');
//   setTimeout(() => {
//     console.log('2 Seconds Passed');
//     setTimeout(() => {
//       console.log('3 Seconds Passed');
//       setTimeout(() => {
//         console.log('4 Seconds Passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//////////////////////////////////
// Promises And The Fetch API
//////////////////////////////////

//   const apiURL = 'https://restcountries.com/v2';
//   const request = new XMLHttpRequest();
//   request.open('GET', `${apiURL}/name/${country}`);
//   request.send();

// const apiURL = 'https://restcountries.com/v2';
// const request = fetch(apiURL);
// console.log(request);

// const getCountryData = function (country) {
//   const apiURL = 'https://restcountries.com/v3.1';
//   fetch(`${apiURL}/name/${country}`)
//     //,err=>alert(err)) // the first callback function is for fullifilled , the second callback function executed on callback rejection

//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country Not Found! ${response.status}`);

//         // any throwing error manually in the code will stop it and propogate into the error object on the .catch method
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // let neighbour = data[0].borders[0];
//       let neighbour = 483902842390;

//       if (!neighbour) return;
//       if (neighbour === 'ISR') {
//         return fetch(`${apiURL}/name/palestine`);
//       } else {
//         return fetch(`${apiURL}/alpha/${neighbour}`);
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country Not Found! ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       // .catch() catching errors after all fetching finished if err existed

//       console.error(`${err} 🔥🔥🔥`);

//       renderErorr(`Something Went Wrong! 🔥🔥🔥 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       // finally will always be triggered in both cases fullfilled or rejected fetch or requests for something need to be happened no matter the result is

//       countriesContainer.style.opacity = 1;
//     });
// };

///////////////////////////////////////
// Manual Errors  Handlings Fetch
///////////////////////////////////////
// const getCountryData = function (country) {
//   const apiURL = 'https://restcountries.com/v3.1';
//   getJSON(`${apiURL}/name/${country}}`, 'Country Not Found!')
//     .then(data => {
//       renderCountry(data[0]);
//       let neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No Neighbour Found');

//       if (neighbour === 'ISR') {
//         return getJSON(`${apiURL}/name/palestine`, 'Country Not Found!');
//       } else {
//         return getJSON(`${apiURL}/alpha/${neighbour}`, 'Country Not Found!');
//       }
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       // .catch() catching errors after all fetching finished if err existed

//       console.error(`${err} 🔥🔥🔥`);

//       renderErorr(`Something Went Wrong! 🔥🔥🔥 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       // finally will always be triggered in both cases fullfilled or rejected fetch or requests for something need to be happened no matter the result is

//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', () => {
//   getCountryData('egypt');
// });

// // getCountryData('wanttobeseniorasfast');

///////////////////////////////////
//  The Event Loop In Practice
//////////////////////////////////

// console.log('Test Start'); // Top Level Code will be executed First
// setTimeout(() => console.log('0 Sec Timer'), 0); // Even If It is should immediately execute it's in callback quere not priotrized overy microtask queue

// Promise.resolve('Resolved Promise 1').then(res => console.log(res)); // microtask queue and it will resolved before the callback queue the settimeout before it

// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i <= 10000; i++) {
//     console.log(i);
//   }
//   console.log(res);
// });
// console.log('Test End');

// ///////////////////////////////////
// //  Building A Simple Promise
// //////////////////////////////////

// // Promise Constructor Takes Only Extactly One Argument So Called Executer function
// // As The Promise Constructor Runs It Will Automatically Execute the Executer Function That We Pass In
// // As It Executing The Execution Function It Pass 2 Arguments (Resolve) And (Reject)

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Draw Is Happening');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 💰️');
//     } else {
//       reject(new Error('You Lost Your Money 💩'));
//     }
//   }, 2000);
// });

// // Promise Object
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// wait(1)
//   .then(() => {
//     console.log(`I've Waited For 1 Seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I've Waited For 2 Seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I've Waited For 3 Seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I've Waited For 4 Seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I've Waited For 5 Seconds`);
//     return wait(1);
//   });

// // // Callback Hell
// // setTimeout(() => {
// //   console.log('1 Second Passed');
// //   setTimeout(() => {
// //     console.log('2 Seconds Passed');
// //     setTimeout(() => {
// //       console.log('3 Seconds Passed');
// //       setTimeout(() => {
// //         console.log('4 Seconds Passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // Resolve Immediately
// Promise.resolve('resolved').then(x => console.log(x));
// Promise.reject(new Error("Problem!")).catch(x => console.error(x));

//////////////////////////////////////
// Promisifying The Geolocation API
//////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Problem With Api  ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You Are In ${data?.city}, ${data?.region}, ${data?.prov}`);
//       return fetch(`https://restcountries.com/v3.1/alpha/${data.prov}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err} 💥💥💥`));
// };

// btn.addEventListener('click', whereAmI);

//////////////////////////////////////////
// Consuming Promises With Async_Await
//////////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//   //   console.log(res)
//   // );

//   try {
//     // GeoLocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error("Problem Getting Location")

//     const dataGeo = await resGeo.json();

//     // Country Data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/alpha/${dataGeo.prov}`
//     );
//     if (!res.ok) throw new Error("Problem No Country Found")

//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.erorr(err);
//     renderErorr(`Something Went Wrong 💥💥💥 ${error.message}`);
//   }
// };

// whereAmI();
// console.log('First');

// // Try And Catch Errors
// // try {
// //   let y = 1;
// //   const x = 2;
// //   x = 3;
// // } catch (err) {
// //   alert(err.message);
// // }

//////////////////////////////////////////
// Returning Values From Async Function
//////////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//   //   console.log(res)
//   // );

//   try {
//     // GeoLocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem Getting Location');

//     const dataGeo = await resGeo.json();

//     // Country Data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/alpha/${dataGeo.prov}`
//     );
//     if (!res.ok) throw new Error('Problem No Country Found');

//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You Are In ${dataGeo.city}, ${dataGeo.prov}`;
//   } catch (err) {
//     console.error(err);
//     renderErorr(`Something Went Wrong 💥💥💥 ${error.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.log(`2:${err.message} 💥`);
//   }
//   console.log('3: Finished Getting Location');
// })();

//////////////////////////////////////////
// Running Promises In Parallel
//////////////////////////////////////////

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('egypt', 'canada', 'portugal');

////////////////////////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
////////////////////////////////////////////////////////

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any [ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
